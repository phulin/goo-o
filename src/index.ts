import {
  availableAmount,
  cliExecute,
  eat,
  equip,
  haveEquipped,
  lastChoice,
  myAdventures,
  myBuffedstat,
  myFamiliar,
  myHp,
  myMaxhp,
  myMp,
  print,
  restoreHp,
  restoreMp,
  retrieveItem,
  setAutoAttack,
  toSlot,
  useFamiliar,
} from "kolmafia";
import {
  $class,
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
  $slot,
  $slots,
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
  sumNumbers,
} from "libram";
import { boost } from "./boost";
import { Macro } from "./combat";
import { dailies } from "./dailies";
import {
  currentTurnsSpent,
  incrementTurnsSpentAdjustment,
  remainingTurns,
  startingTurnsSpent,
  todayTurnsSpent,
  todayTurnsSpentForColdRes,
  totalTurnsToday,
} from "./lib";
import { mood } from "./mood";
import options from "./options";
import { propertyManager } from "./properties";

const stasisFamiliars = $familiars`Stocking Mimic, Ninja Pirate Zombie Robot, Cocoabo`;
const highDamageSkills = $skills`Fearful Fettucini, Saucegeyser, Weapon of the Pastalord`;

function expectedHp(weight: number): number {
  // This is the maximum possible HP we'd expect.
  return 1.1 * (3 * (weight - (weight > 50 ? 6 : weight > 40 ? 8 : 10)) ** 3 + 100);
}

function lanternMultiplier(skill: Skill) {
  let element: "hot" | "cold" | "stench" | "spooky" | "sleaze";
  if (skill === $skill`Saucegeyser`) {
    element = getModifier("Hot Spell Damage") > getModifier("Cold Spell Damage") ? "hot" : "cold";
  } else if (skill === $skill`Fearful Fettucini`) {
    element = "spooky";
  } else if (skill.class === $class`Pastamancer` && have($effect`Spirit of Cayenne`)) {
    element = "hot";
  } else if (skill.class === $class`Pastamancer` && have($effect`Spirit of Peppermint`)) {
    element = "cold";
  } else if (skill.class === $class`Pastamancer` && have($effect`Spirit of Garlic`)) {
    element = "stench";
  } else if (skill.class === $class`Pastamancer` && have($effect`Spirit of Wormwood`)) {
    element = "spooky";
  } else if (skill.class === $class`Pastamancer` && have($effect`Spirit of Bacon Grease`)) {
    element = "sleaze";
  } else {
    throw `Unrecognized skill ${skill}.`;
  }

  const damageMultipliers = {
    physical: 0,
    hot: 0,
    cold: 0,
    stench: 0,
    spooky: 0,
    sleaze: 0,
  };
  damageMultipliers[element] = 1;
  if (skill === $skill`Weapon of the Pastalord`) {
    damageMultipliers.physical = 1;
  }

  if (haveEquipped($item`Rain-Doh green lantern`)) {
    damageMultipliers.stench += damageMultipliers[element];
  }
  if (haveEquipped($item`snow mobile`)) {
    damageMultipliers.cold += damageMultipliers[element];
  }
  if (haveEquipped($item`meteorb`)) {
    damageMultipliers.hot += damageMultipliers[element];
  }
  if (
    haveEquipped($item`unwrapped knock-off retro superhero cape`) &&
    get("retroCapeSuperhero") === "heck" &&
    get("retroCapeWashingInstructions") === "kill"
  ) {
    damageMultipliers.spooky += damageMultipliers[element];
  }
  if (haveEquipped($item`porcelain porkpie`) && skill.class === $class`Pastamancer`) {
    damageMultipliers.sleaze += damageMultipliers[element];
  }

  if (get("_crimbo21LabSnowing")) {
    damageMultipliers.cold *= 1.5;
  }

  return sumNumbers(Object.values(damageMultipliers));
}

function predictedDamage(skill: Skill): number {
  const multiplier = () => {
    switch (skill) {
      case $skill`Saucegeyser`:
        return 0.4;
      case $skill`Weapon of the Pastalord`:
        return haveEquipped($item`aerogel apron`) ? 0.5 : 0.25;
      case $skill`Fearful Fettucini`:
        return haveEquipped($item`velour veil`) ? 1.5 : 0.5;
      default:
        return 0;
    }
  };
  const criticalMultiplier = () =>
    getModifier("Spell Critical Percent") >= 89
      ? haveEquipped($item`dark baconstone ring`)
        ? 3
        : 2
      : 1;

  return (
    multiplier() *
    myBuffedstat($stat`Mysticality`) *
    (1 + getModifier("Spell Damage Percent") / 100) *
    criticalMultiplier() *
    (1 - 0.004 * getModifier("Monster Level")) *
    lanternMultiplier(skill)
  );
}

function constructLabOutfit(spellDamageLevel: number, skill: Skill | undefined) {
  const forceEquip = [];
  const preventSlot = [];
  const acc3 =
    have($item`Space Trip safety headphones`) && spellDamageLevel >= 2
      ? $item`Space Trip safety headphones`
      : $item`cozy scarf`;
  if (availableAmount($item`ert grey goo ring`) >= 2) {
    // Equip two ert grey goo rings.
    preventSlot.push(...$slots`acc1, acc2, acc3`);
    equip($slot`acc1`, $item`ert grey goo ring`);
    equip($slot`acc2`, $item`ert grey goo ring`);
    equip($slot`acc3`, acc3);
  }
  if (have($item`unwrapped knock-off retro superhero cape`)) {
    preventSlot.push($slot`back`);
    if (get("retroCapeSuperhero") !== "heck" || get("retroCapeWashingInstructions") !== "kill") {
      cliExecute("retrocape heck kill");
    }
  }

  if (spellDamageLevel >= 1) {
    // Meteorb is better for geyser, snow mobile for everything else.
    const lantern1 = skill === $skill`Saucegeyser` ? $item`meteorb` : $item`snow mobile`;
    if (!have(lantern1)) retrieveItem(lantern1);
    forceEquip.push(lantern1);
  }
  if (spellDamageLevel >= 2) {
    if (myFamiliar() === $familiar`Left-Hand Man`) {
      if (have($item`HOA regulation book`)) {
        forceEquip.push($item`HOA regulation book`);
      } else {
        // Pick the other lantern here.
        const lantern2 = skill === $skill`Saucegeyser` ? $item`snow mobile` : $item`meteorb`;
        if (!have(lantern2)) retrieveItem(lantern2);
        forceEquip.push(lantern2);
      }
    }
    if (skill === $skill`Saucegeyser` && have($item`gabardine garibaldi`)) {
      forceEquip.push($item`gabardine garibaldi`);
    } else if (skill && skill.class === $class`Pastamancer` && have($item`porcelain porkpie`)) {
      forceEquip.push($item`porcelain porkpie`);
    }
    if (skill === $skill`Weapon of the Pastalord` && have($item`aerogel apron`)) {
      forceEquip.push($item`aerogel apron`);
    } else if (skill === $skill`Fearful Fettucini` && have($item`velour veil`)) {
      forceEquip.push($item`velour veil`);
    }
  }

  const offHandSlots = myFamiliar() === $familiar`Left-Hand Man` ? 2 : 1;
  const offHandForce = forceEquip.filter((item) => toSlot(item) === $slot`off-hand`).length;
  if (offHandForce < offHandSlots) {
    forceEquip.push($item`goo magnet`);
  }

  return new Requirement([], { forceEquip, preventSlot });
}

function constructNonLabOutfit() {
  const forceEquip = [];
  if (have($item`Lil' Doctor™ bag`) && get("_chestXRayUsed") < 3) {
    forceEquip.push($item`Lil' Doctor™ bag`);
  }
  // Force goo magnet for all but the last 30 turns.
  if (have($item`goo magnet`) && options.stopTurnsSpent - currentTurnsSpent() >= 30) {
    forceEquip.push($item`goo magnet`);
  }
  return new Requirement([], { forceEquip });
}

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
  sinceKolmafiaRevision(26073);

  const args = argString.split(/\s+/g);
  let maxWeight = Infinity;
  for (const arg of args) {
    const maxMatch = arg.match(/^max=(\d+)$/);
    if (arg === "dorm") {
      options.location = $location`Site Alpha Dormitory`;
    } else if (arg === "greenhouse") {
      options.location = $location`Site Alpha Greenhouse`;
    } else if (arg === "quarry") {
      options.location = $location`Site Alpha Quarry`;
    } else if (arg === "lab") {
      options.location = $location`Site Alpha Primary Lab`;
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

    while (remainingTurns() > 0 && myAdventures() > 0) {
      const remaining = clamp(remainingTurns(), 0, myAdventures());

      mood().execute(remaining);
      if (have($item`velour viscometer`) && !have($effect`Scariersauce`)) {
        equip($item`velour viscometer`);
        mood().execute(remaining);
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
        have($familiar`Ghost of Crimbo Cheer`) && !get("_crimbo21LabSnowing", false);

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
      const skill = chooseCombatSkill();
      const coldResTarget = Math.floor((15 + todayTurnsSpentForColdRes()) / 3);

      let madeProgress;
      let labSnowFreeRun: FreeRun | undefined = undefined;

      do {
        let requirement = new Requirement(
          [
            ...(itemDropWeight > 0 ? [`${itemDropWeight} Item Drop`] : []),
            `${(5 * coldResWeightMultiplier).toFixed(0)} Cold Resistance`,
            ...(options.location === $location`Site Alpha Primary Lab`
              ? ["0.1 Spell Damage Percent, 0.1 Mysticality Percent"]
              : []),
          ],
          {
            preventEquip: $items`broken champagne bottle`,
            bonusEquip: new Map([[$item`bag of many confections`, 1000]]),
          }
        );

        if (options.location === $location`Site Alpha Primary Lab`) {
          if (have($familiar`Ghost of Crimbo Cheer`) && !get("_crimbo21LabSnowing")) {
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
          } else {
            requirement = requirement.merge(constructLabOutfit(spellDamageLevel, skill));
          }
        } else {
          requirement = requirement.merge(constructNonLabOutfit());
        }

        requirement.maximize();

        madeProgress = false;

        if (
          options.location === $location`Site Alpha Primary Lab` &&
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

        if (
          getModifier("Cold Resistance") < coldResTarget &&
          Math.round(coldResWeightMultiplier) < 32
        ) {
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

      boost("Cold Resistance", coldResTarget, 500);
      if ($locations`Site Alpha Dormitory, Site Alpha Greenhouse`.includes(options.location)) {
        boost("Item Drop", options.location === $location`Site Alpha Greenhouse` ? 900 : 300, 50);
      }

      print();
      print(`==== Turn ${todayTurnsSpent()} out of ${totalTurnsToday()}. ====`, "blue");
      print(
        `Cold Res Required: ${coldResTarget}, Achieved: ${getModifier("Cold Resistance")}`,
        "blue"
      );

      if (options.location === $location`Site Alpha Primary Lab` && skill) {
        if (!settingUpLabSnow) {
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
            const mysticalityPercentTarget = 100 * Math.sqrt(factorNeeded) * mysticalityMultiplier;
            const spellDamageMultiplier = 1 + getModifier("Spell Damage Percent") / 100;
            const spellDamagePercentTarget = 100 * Math.sqrt(factorNeeded) * spellDamageMultiplier;
            print(
              `Targeting ${mysticalityPercentTarget.toFixed(
                0
              )}% myst and ${spellDamagePercentTarget}% SD.`
            );
            boost("Mysticality Percent", mysticalityPercentTarget, 10);
            boost("Spell Damage Percent", spellDamagePercentTarget, 10);
            if (predictedDamage(skill) < expectedHp(weight)) {
              throw "Somehow our goos got too big - use stench jelly to scale them back down.";
            }
          }
        }

        if (
          weight < maxWeight &&
          weight < 58 &&
          (predictedDamage(skill) >= expectedHp(weight + 1) || Number.isFinite(maxWeight))
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
        options.location === $location`Site Alpha Primary Lab` && skill
          ? Macro.externalIf(settingUpLabSnow, labSnowFreeRun?.macro ?? new Macro())
              .skill(skill)
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

      const achievedColdRes = getModifier("Cold Resistance");
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
