import {
  eat,
  equip,
  handlingChoice,
  haveEquipped,
  mpCost,
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
  runChoice,
  setAutoAttack,
  toUrl,
  use,
  useFamiliar,
  visitUrl,
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
  clamp,
  get,
  getBanishedMonsters,
  getModifier,
  have,
  Requirement,
  set,
  sinceKolmafiaRevision,
} from "libram";
import { acquire } from "./acquire";
import { boost } from "./boost";
import { Macro } from "./combat";
import { dailies } from "./dailies";
import { currentTurnsSpent, startingTurnsSpent, todayTurnsSpent } from "./lib";
import { mood } from "./mood";
import options from "./options";
import { propertyManager } from "./properties";

const stasisFamiliars = $familiars`Stocking Mimic, Ninja Pirate Zombie Robot, Cocoabo`;

function expectedHp(weight: number): number {
  // This is the maximum possible HP we'd expect.
  return 1.1 * (3 * (weight - 10) ** 3 + 100);
}

export function main(argString = ""): void {
  sinceKolmafiaRevision(26043);

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
      // eslint-disable-next-line libram/verify-constants
      options.location = $location`Site Alpha Primary Lab`;
    } else if (arg.match(/^\d+$/)) {
      options.stopTurnsSpent = startingTurnsSpent() + parseInt(arg);
    } else if (maxMatch) {
      maxWeight = parseInt(maxMatch[1]);
    } else {
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

    if (currentTurnsSpent() === 0) {
      // New ascension. Reset goo weight.
      set("crimbo21GooWeight", 10);
    }

    print(
      `Starting with ${currentTurnsSpent()} turns spent, going to ${options.stopTurnsSpent}.`,
      "blue"
    );

    while (currentTurnsSpent() < options.stopTurnsSpent && myAdventures() > 0) {
      const remaining = clamp(options.stopTurnsSpent - currentTurnsSpent(), 0, myAdventures());

      mood().execute(remaining);
      if (have($item`velour viscometer`) && !have($effect`Scariersauce`)) {
        equip($item`velour viscometer`);
        mood().execute(remaining);
      }

      if (!have($effect`Bubble Vision`) && remaining >= 50) {
        acquire(1, $item`bottle of bubbles`, 50000);
        if (have($item`bottle of bubbles`)) use($item`bottle of bubbles`);
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

      // eslint-disable-next-line libram/verify-constants
      if ($locations`Site Alpha Quarry, Site Alpha Primary Lab`.includes(options.location)) {
        useFamiliar(
          $familiars`Stocking Mimic, Ninja Pirate Zombie Robot`.find((fam) => have(fam)) ??
            $familiar`Cocoabo`
        );
      } else {
        useFamiliar(
          $familiars`Jumpsuited Hound Dog, Cat Burglar`.find((fam) => have(fam)) ??
            $familiar`Baby Gravy Fairy`
        );
      }

      // eslint-disable-next-line libram/verify-constants
      const itemDropWeight = $locations`Site Alpha Quarry, Site Alpha Primary Lab`.includes(
        options.location
      )
        ? 0
        : 1;

      const coldResTarget = Math.floor((16 + todayTurnsSpent()) / 3);
      do {
        const forceEquip = [];
        if (have($item`Lil' Doctor™ bag`) && get("_chestXRayUsed") < 3) {
          forceEquip.push($item`Lil' Doctor™ bag`);
        }
        // Force goo magnet for all but the last 30 turns.
        // eslint-disable-next-line libram/verify-constants
        if (have($item`goo magnet`) && options.stopTurnsSpent - currentTurnsSpent() >= 30) {
          // eslint-disable-next-line libram/verify-constants
          forceEquip.push($item`goo magnet`);
        }
        // eslint-disable-next-line libram/verify-constants
        if (options.location === $location`Site Alpha Primary Lab`) {
          // eslint-disable-next-line libram/verify-constants
          forceEquip.push(...$items`ert grey goo ring, ert grey goo ring`);
        }

        new Requirement(
          [
            `${itemDropWeight} Item Drop`,
            `${(5 * coldResWeightMultiplier).toFixed(0)} Cold Resistance`,
            // eslint-disable-next-line libram/verify-constants
            ...(options.location === $location`Site Alpha Primary Lab`
              ? ["0.1 Spell Damage Percent, 0.1 Mysticality Percent"]
              : []),
          ],
          {
            forceEquip,
            preventEquip: $items`broken champagne bottle`,
          }
        ).maximize();

        if (
          getModifier("Cold Resistance") < coldResTarget &&
          Math.round(coldResWeightMultiplier) < 32
        ) {
          coldResWeightMultiplier *= Math.sqrt(2);
          print(
            `Missed target. Updated resistance weight multiplier to ${coldResWeightMultiplier.toFixed(
              1
            )}.`,
            "blue"
          );
        }
      } while (
        getModifier("Cold Resistance") < coldResTarget &&
        Math.round(coldResWeightMultiplier) < 32
      );

      boost("Cold Resistance", coldResTarget, 500);
      if ($locations`Site Alpha Dormitory, Site Alpha Greenhouse`.includes(options.location)) {
        boost("Item Drop", options.location === $location`Site Alpha Greenhouse` ? 900 : 300, 50);
      }

      print(
        `Cold Res Required: ${coldResTarget}, Achieved: ${getModifier("Cold Resistance")}`,
        "blue"
      );

      let skill: Skill | undefined = undefined;
      // eslint-disable-next-line libram/verify-constants
      if (options.location === $location`Site Alpha Primary Lab`) {
        skill = $skills`Weapon of the Pastalord, Saucegeyser`
          .filter((skill) => have(skill))
          .sort((x, y) => mpCost(x) - mpCost(y))[0];
        if (skill === undefined) throw "Need Weapon or Saucegeyser for Lab.";

        const multiplier = skill === $skill`Weapon of the Pastalord` ? 0.5 : 0.4;
        const criticalMultiplier = () =>
          getModifier("Spell Critical Percent") >= 89
            ? haveEquipped($item`dark baconstone ring`)
              ? 3
              : 2
            : 1;
        const predictedDamage = () =>
          multiplier *
          myBuffedstat($stat`Mysticality`) *
          (1 + getModifier("Spell Damage Percent") / 100) *
          criticalMultiplier() *
          (1 - 0.004 * getModifier("Monster Level"));

        const weight = get("crimbo21GooWeight", 10);

        print(`Predicting ${predictedDamage()} damage against ${expectedHp(weight)} HP.`, "blue");

        if (predictedDamage() < expectedHp(weight)) {
          const factorNeeded = expectedHp(weight) / predictedDamage();
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
          if (predictedDamage() < expectedHp(weight)) {
            throw "Somehow our goos got too big - use stench jelly to scale them back down.";
          }
        }

        if (
          weight < maxWeight &&
          (predictedDamage() >= expectedHp(weight + 1) || Number.isFinite(maxWeight))
        ) {
          // Increase if we already have enough damage, or the user set a max weight and we're below it.
          // Turn the knob to the right (more ML).
          set("choiceAdventure1461", 1);
        } else if (weight > maxWeight) {
          // Turn the knob to the left (less ML).
          set("choiceAdventure1461", 3);
        } else {
          // Skip NC.
          set("choiceAdventure1461", 4);
        }
      }

      Macro.if_($monster`gooified elf-thing`, Macro.item($item`human musk`))
        .if_($monster`gooified flower`, Macro.item($item`human musk`))
        .externalIf(
          // eslint-disable-next-line libram/verify-constants
          options.location !== $location`Site Alpha Primary Lab` &&
            stasisFamiliars.includes(myFamiliar()),
          Macro.while_("!pastround 10 && !hpbelow 250", Macro.item($item`seal tooth`))
        )
        .kill(skill)
        .setAutoAttack();

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

      const result = visitUrl(toUrl(options.location));

      if (handlingChoice()) {
        runChoice(-1);
        continue;
      }

      const match = result.match(/(\d+) Cold Resistance Required/);
      if (match) {
        set("_crimbo21ColdResistance", parseInt(match[1]));
        throw `Couldn't get enough cold resistance (${parseInt(match[1])}) to continue.`;
      }

      const encounterMatch = get("lastEncounter").match(/^(\d+)-ton grey goo/);
      if (encounterMatch) {
        set("crimbo21GooWeight", parseInt(encounterMatch[1]));
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
