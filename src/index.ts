import {
  eat,
  equip,
  lastChoice,
  myAdventures,
  myBasestat,
  myFamiliar,
  myHp,
  myMaxhp,
  myMp,
  myPrimestat,
  print,
  restoreHp,
  restoreMp,
  retrieveItem,
  setAutoAttack,
  useFamiliar,
} from "kolmafia";
import {
  $effect,
  $familiar,
  $familiars,
  $item,
  $items,
  $location,
  $locations,
  $monster,
  $skill,
  $skills,
  $stat,
  adventureMacroAuto,
  clamp,
  ensureFreeRun,
  FreeRun,
  get,
  getBanishedMonsters,
  getModifier,
  have,
  Requirement,
  set,
  sinceKolmafiaRevision,
} from "libram";
import { boost } from "./boost";
import { Macro } from "./combat";
import {
  constructLabDelevelOutfit,
  constructLabSpellDamageOutfit,
  constructNonLabOutfit,
} from "./outfit";
import { dailies } from "./dailies";
import {
  coldRes,
  currentTurnsSpent,
  expectedHp,
  incrementTurnsSpentAdjustment,
  predictedDamage,
  remainingTurns,
  startingTurnsSpent,
  todayTurnsSpent,
  todayTurnsSpentForColdRes,
  totalTurnsToday,
} from "./lib";
import { mood } from "./mood";
import options from "./options";
import { fillUpOnPizza } from "./pizza";
import { propertyManager } from "./properties";
import { isLabStrategy, LabStrategy, pickLabStrategyAndSetup } from "./strategy";

const stasisFamiliars = $familiars`Stocking Mimic, Ninja Pirate Zombie Robot, Cocoabo`;
const highDamageSkills = $skills`Fearful Fettucini, Saucegeyser`;

if (have($skill`Flavour of Magic`)) highDamageSkills.push($skill`Weapon of the Pastalord`);

function chooseCombatSkill() {
  if (options.location !== $location`Site Alpha Primary Lab`) return undefined;

  if (have($item`velour veil`) && have($skill`Fearful Fettucini`)) {
    return $skill`Fearful Fettucini`;
  }

  const available = highDamageSkills.filter((skill) => have(skill))[0];

  if (available === undefined) {
    throw `Need ${highDamageSkills.slice(0, -1).join(", ")} or ${
      highDamageSkills.slice(-1)[0]
    } for Lab.`;
  }

  return available;
}

export function main(argString = ""): void {
  sinceKolmafiaRevision(26078);

  const args = argString.split(/\s+/g);
  let maxWeight = Infinity;
  for (const arg of args) {
    const maxMatch = arg.match(/^max=(\d+)$/);
    if (arg === "pizza") {
      fillUpOnPizza();
      return;
    } else if (arg === "dorm") {
      options.location = $location`Site Alpha Dormitory`;
    } else if (arg === "greenhouse") {
      options.location = $location`Site Alpha Greenhouse`;
    } else if (arg === "quarry") {
      options.location = $location`Site Alpha Quarry`;
    } else if (arg === "lab") {
      options.location = $location`Site Alpha Primary Lab`;
    } else if (isLabStrategy(arg)) {
      options.forceStrategy = arg;
    } else if (arg.match(/^\d+$/)) {
      options.stopTurnsSpent = startingTurnsSpent() + parseInt(arg);
    } else if (maxMatch) {
      maxWeight = parseInt(maxMatch[1]);
    } else if (arg.length > 0) {
      throw `Unrecognized argument "${arg}".`;
    }
  }

  try {
    propertyManager.set({
      logPreferenceChangeFilter: [
        ...new Set([
          ...get("logPreferenceChangeFilter").split(","),
          "libram_savedMacro",
          "maximizerMRUList",
          "_lastCombatStarted",
          "_boomBoxFights",
          "testudinalTeachings",
        ]),
      ]
        .sort()
        .filter((a) => a)
        .join(","),
      logPreferenceChange: true,
      battleAction: "custom combat script",
      autoSatisfyWithMall: true,
      autoSatisfyWithNPCs: true,
      autoSatisfyWithCoinmasters: true,
      autoSatisfyWithStash: false,
      dontStopForCounters: true,
      maximizerFoldables: true,
      hpAutoRecovery: 0.65,
      hpAutoRecoveryTarget: 0.95,
      choiceAdventureScript: "",
      customCombatScript: "gooo",
      currentMood: "apathetic",
      autoTuxedo: true,
      autoPinkyRing: true,
      autoGarish: true,
    });

    dailies();

    let coldResWeightMultiplier = 1;
    let spellDamageLevel = 0;

    if (currentTurnsSpent() === 0) {
      // New ascension. Reset goo weight.
      set("crimbo21GooWeight", 10);
    }

    print(
      `Starting with ${currentTurnsSpent()} turns spent, going to ${options.stopTurnsSpent}.`,
      "blue"
    );

    let labStrategy: LabStrategy | undefined = undefined;
    if (options.location === $location`Site Alpha Primary Lab`) {
      labStrategy = pickLabStrategyAndSetup();
      print(`Using lab strategy ${labStrategy}.`, "blue");
      if (labStrategy === "delevel") {
        propertyManager.set({ hpAutoRecovery: 0.95, hpAutoRecoveryTarget: 1.0 });
      }
    }

    while (remainingTurns() > 0 && myAdventures() > 0) {
      const remaining = clamp(remainingTurns(), 0, myAdventures());

      mood(labStrategy).execute(remaining);
      if (have($item`velour viscometer`) && !have($effect`Scariersauce`)) {
        equip($item`velour viscometer`);
        mood(labStrategy).execute(remaining);
      }

      const banished = [...getBanishedMonsters().values()];
      if (
        (options.location === $location`Site Alpha Dormitory` &&
          !banished.includes($monster`gooified elf-thing`)) ||
        (options.location === $location`Site Alpha Greenhouse` &&
          !banished.includes($monster`gooified flower`))
      ) {
        retrieveItem($item`human musk`);
      }

      const settingUpLabSnow =
        labStrategy === "spell" &&
        have($familiar`Ghost of Crimbo Cheer`) &&
        !get("_crimbo21LabSnowing", false);

      if ($locations`Site Alpha Quarry`.includes(options.location)) {
        useFamiliar(
          $familiars`Stocking Mimic, Ninja Pirate Zombie Robot`.find((fam) => have(fam)) ??
            $familiar`Cocoabo`
        );
      } else if (options.location === $location`Site Alpha Primary Lab`) {
        if (settingUpLabSnow) {
          useFamiliar($familiar`Ghost of Crimbo Cheer`);
        } else {
          useFamiliar(
            $familiars`Left-Hand Man, Stocking Mimic, Ninja Pirate Zombie Robot`.find((fam) =>
              have(fam)
            ) ?? $familiar`Cocoabo`
          );
        }
      } else {
        useFamiliar(
          $familiars`Jumpsuited Hound Dog, Cat Burglar`.find((fam) => have(fam)) ??
            $familiar`Baby Gravy Fairy`
        );
      }

      const itemDropWeight = $locations`Site Alpha Quarry, Site Alpha Primary Lab`.includes(
        options.location
      )
        ? 0
        : 1;

      const weight = get("crimbo21GooWeight", 10);
      const skill = labStrategy === "spell" ? chooseCombatSkill() : undefined;
      const coldResTarget = Math.floor((15 + todayTurnsSpentForColdRes()) / 3);

      let madeProgress;
      let labSnowFreeRun: FreeRun | undefined = undefined;

      do {
        const strategySnippet =
          labStrategy === "spell"
            ? ["0.1 Spell Damage Percent, 0.1 Mysticality Percent"]
            : labStrategy === "delevel"
            ? ["0.001 HP"]
            : [];
        let requirement = new Requirement(
          [
            ...(itemDropWeight > 0 ? [`${itemDropWeight} Item Drop`] : []),
            `${(5 * coldResWeightMultiplier).toFixed(0)} Cold Resistance`,
            ...strategySnippet,
          ],
          {
            preventEquip: $items`broken champagne bottle`,
            bonusEquip: new Map([[$item`bag of many confections`, 1000]]),
          }
        );

        if (options.location === $location`Site Alpha Primary Lab`) {
          if (settingUpLabSnow) {
            // Find us a non-familiar free run.
            const freeRun = ensureFreeRun(false);
            if (freeRun.available()) {
              freeRun.options?.preparation?.();
              if (freeRun.options?.equipmentRequirements) {
                requirement = requirement.merge(freeRun.options.equipmentRequirements());
              }
              labSnowFreeRun = freeRun;
            } else {
              throw `Tried to use free run ${freeRun.name}, but it's not available.`;
            }
          } else if (labStrategy === "spell") {
            requirement = requirement.merge(
              constructLabSpellDamageOutfit(spellDamageLevel, skill, coldResWeightMultiplier)
            );
          } else if (labStrategy === "delevel") {
            requirement = requirement.merge(constructLabDelevelOutfit(coldResWeightMultiplier));
          } else {
            throw "Unrecognized strategy.";
          }
        } else {
          requirement = requirement.merge(constructNonLabOutfit());
        }

        if (!requirement.maximize()) {
          throw "Maximizer failed. This must be a bug.";
        }

        madeProgress = false;

        if (
          options.location === $location`Site Alpha Primary Lab` &&
          labStrategy === "spell" &&
          !settingUpLabSnow &&
          skill &&
          predictedDamage(skill) < expectedHp(weight) &&
          spellDamageLevel < 2
        ) {
          madeProgress = true;
          spellDamageLevel++;
          print(
            `Failed to get enough spell damage (${predictedDamage(skill).toFixed(0)} < ${expectedHp(
              weight
            ).toFixed(0)}). Moving to spell damage level ${spellDamageLevel}.`,
            "blue"
          );
        }

        if (coldRes() < coldResTarget && Math.round(coldResWeightMultiplier) < 32) {
          madeProgress = true;
          coldResWeightMultiplier *= 2;
          print(
            `Missed target. Updated resistance weight multiplier to ${coldResWeightMultiplier.toFixed(
              1
            )}.`,
            "blue"
          );
        }
      } while (madeProgress);

      print();
      print(`==== Turn ${todayTurnsSpent()} out of ${totalTurnsToday()}. ====`, "blue");
      boost("Cold Resistance", coldResTarget, 500);
      if ($locations`Site Alpha Dormitory, Site Alpha Greenhouse`.includes(options.location)) {
        boost("Item Drop", options.location === $location`Site Alpha Greenhouse` ? 900 : 300, 50);
      }

      print(`Cold Res Required: ${coldResTarget}, Achieved: ${coldRes()}`, "blue");

      if (options.location === $location`Site Alpha Primary Lab`) {
        if (labStrategy === "spell" && !settingUpLabSnow && skill) {
          print(
            `Predicting ${predictedDamage(skill).toFixed(0)} damage against ${expectedHp(
              weight
            ).toFixed(0)} HP.`,
            "blue"
          );

          if (predictedDamage(skill) < expectedHp(weight)) {
            const factorNeeded = expectedHp(weight) / predictedDamage(skill);
            print(`Not enough. Need to multiply by ${factorNeeded.toFixed(2)}.`);
            const mysticalityMultiplier = 1 + getModifier("Mysticality Percent") / 100;
            const mysticalityPercentTarget =
              100 * (Math.sqrt(factorNeeded) * mysticalityMultiplier - 1);
            const spellDamageMultiplier = 1 + getModifier("Spell Damage Percent") / 100;
            const spellDamagePercentTarget =
              100 * (Math.sqrt(factorNeeded) * spellDamageMultiplier - 1);
            print(
              `Targeting ${mysticalityPercentTarget.toFixed(
                0
              )}% myst and ${spellDamagePercentTarget.toFixed(0)}% SD.`
            );
            boost("Mysticality Percent", mysticalityPercentTarget, 10);
            boost("Spell Damage Percent", spellDamagePercentTarget, 10);
            if (predictedDamage(skill) < expectedHp(weight)) {
              throw `Somehow our goos got too big (${predictedDamage(skill).toFixed(
                0
              )} damage < ${expectedHp(weight).toFixed(
                0
              )} HP) - maybe use stench jelly to scale them back down.`;
            }
          }
        } else if (labStrategy === "delevel") {
          // Need roughly 15,000 HP.
          const hpTarget = 15000;
          if (myMaxhp() < hpTarget) {
            const hpMultiplier =
              1 +
              getModifier("Maximum HP Percent") / 100 +
              (myPrimestat() === $stat`Muscle` ? 0.5 : 0);
            const muscleTarget = hpTarget / hpMultiplier;
            const musclePercentTarget = 100 * (muscleTarget / myBasestat($stat`Muscle`) - 1);
            print(`Not enough HP. Trying to get to ${musclePercentTarget.toFixed(0)}% mus.`);
            boost("Muscle Percent", musclePercentTarget, 10);
          }
        }

        if (
          weight < maxWeight &&
          (labStrategy === "delevel" ||
            (skill && predictedDamage(skill) >= expectedHp(weight + 1)) ||
            Number.isFinite(maxWeight))
        ) {
          // Increase if we already have enough damage, or the user set a max weight and we're below it.
          // Turn the knob to the right (more ML).
          set("choiceAdventure1461", 1);
        } else if (weight > maxWeight) {
          // Turn the knob to the left (less ML).
          set("choiceAdventure1461", 2);
        } else {
          // Skip NC.
          set("choiceAdventure1461", 4);
        }
      }

      const macro =
        options.location === $location`Site Alpha Primary Lab`
          ? labStrategy === "spell" && skill
            ? Macro.externalIf(settingUpLabSnow, labSnowFreeRun?.macro ?? new Macro())
                .skill(skill)
                .repeat()
            : Macro.skill($skill`Disarming Thrust`)
                .trySkill($skill`Curse of Weaksauce`)
                .trySkill($skill`Summon Love Mosquito`)
                .skill($skill`Blow a Robo-Kiss`)
                .repeat()
          : Macro.if_($monster`gooified elf-thing`, Macro.item($item`human musk`))
              .if_($monster`gooified flower`, Macro.item($item`human musk`))
              .externalIf(
                stasisFamiliars.includes(myFamiliar()),
                Macro.while_("!pastround 10 && !hpbelow 250", Macro.item($item`seal tooth`))
              )
              .kill();

      if (myMp() < 200) {
        if (
          get("_sausagesEaten") < 23 &&
          (have($item`magical sausage`) || have($item`magical sausage casing`))
        ) {
          eat($item`magical sausage`);
        } else {
          restoreMp(200);
        }
      }

      if (myHp() < 0.8 * myMaxhp()) {
        restoreHp(0.95 * myMaxhp());
      }

      const achievedColdRes = coldRes();
      const lastColdRes = get("_crimbo21ColdResistance", 0);

      adventureMacroAuto(options.location, macro);

      const match = get("lastEncounter").match(/(\d+) Cold Resistance Required/);
      if (match) {
        set("_crimbo21ColdResistance", parseInt(match[1]));
      }

      const currentColdRes = get("_crimbo21ColdResistance", 0);
      if (currentColdRes > lastColdRes) {
        // Make sure adjustment is updated.
        todayTurnsSpentForColdRes();
      }

      const encounterMatch = get("lastEncounter").match(/^(\d+)-ton grey goo/);
      if (encounterMatch) {
        set("crimbo21GooWeight", parseInt(encounterMatch[1]));
        if (settingUpLabSnow) set("_crimbo21LabSnowing", true);
      }

      if (achievedColdRes < currentColdRes) {
        throw `Couldn't get enough cold resistance (${achievedColdRes} < ${currentColdRes}) to continue.`;
      }

      if (
        ["", "Hello Knob My Old Friend"].includes(get("lastEncounter").trim()) &&
        lastChoice() === 1461
      ) {
        // Just hit the NC. Decrement turns spent to adjust for the fact that Mafia doesn't count it.
        print("Hit the NC. Adjusting turns spent...", "blue");
        incrementTurnsSpentAdjustment();
        if (get("choiceAdventure1461", -1) === 1) {
          set("crimbo21GooWeight", get("crimbo21GooWeight", 10) + 1);
        }
      }

      if (have($effect`Beaten Up`)) {
        throw "You're beaten up! Fix it and try adventuring again.";
      }
    }
  } finally {
    setAutoAttack(0);
    propertyManager.resetAll();
  }

  if (currentTurnsSpent() >= options.stopTurnsSpent) {
    print(`Stopping, as we have now spent ${todayTurnsSpent()} turns today.`, "blue");
  } else if (myAdventures() === 0) {
    print(`Stopping as we are out of adventures. Spent ${todayTurnsSpent()} turns today.`, "blue");
  }
}
