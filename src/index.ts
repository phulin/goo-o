import {
  eat,
  equip,
  myAdventures,
  myFamiliar,
  myMp,
  print,
  restoreMp,
  retrieveItem,
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
  $monster,
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

export function main(argString = ""): void {
  sinceKolmafiaRevision(26043);

  const args = argString.split(/\s+/g);
  for (const arg of args) {
    if (arg === "dorm") {
      options.location = $location`Site Alpha Dormitory`;
    } else if (arg === "greenhouse") {
      options.location = $location`Site Alpha Greenhouse`;
    } else if (arg === "quarry") {
      options.location = $location`Site Alpha Quarry`;
    } else if (arg.match(/^\d+$/)) {
      options.stopTurnsSpent = startingTurnsSpent() + parseInt(arg);
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

    while (currentTurnsSpent() < options.stopTurnsSpent && myAdventures() > 0) {
      const remaining = clamp(options.stopTurnsSpent - currentTurnsSpent(), 0, myAdventures());

      mood().execute(remaining);
      if (have($item`velour viscometer`) && !have($effect`Scariersauce`)) {
        equip($item`velour viscometer`);
        mood().execute(remaining);
      }

      if (!have($effect`Bubble Vision`)) {
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

      if (options.location === $location`Site Alpha Quarry`) {
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

      const itemDropWeight =
        options.location === $location`Site Alpha Quarry`
          ? 0
          : (options.stopTurnsSpent - currentTurnsSpent()) /
            (options.stopTurnsSpent - startingTurnsSpent());

      const coldResTarget = Math.floor((16 + todayTurnsSpent()) / 3);
      do {
        const forceEquip = [];
        if (have($item`Lil' Doctor™ bag`) && get("_chestXRayUsed") < 3) {
          forceEquip.push($item`Lil' Doctor™ bag`);
        }
        new Requirement(
          [
            `${itemDropWeight.toFixed(1)} Item Drop`,
            `${(10 * (1 - itemDropWeight) * coldResWeightMultiplier).toFixed(0)} Cold Resistance`,
          ],
          { forceEquip, preventEquip: $items`broken champagne bottle` }
        ).maximize();

        if (getModifier("Cold Resistance") < coldResTarget) {
          coldResWeightMultiplier *= 2;
          print(
            `Missed target. Updated resistance weight multiplier to ${coldResWeightMultiplier}.`,
            "blue"
          );
        }
      } while (getModifier("Cold Resistance") < coldResTarget && coldResWeightMultiplier < 32);

      boost("Cold Resistance", coldResTarget);
      if (options.location !== $location`Site Alpha Quarry`) {
        boost("Item Drop", options.location === $location`Site Alpha Greenhouse` ? 900 : 300);
      }

      print(
        `Cold Res Required: ${coldResTarget}, Achieved: ${getModifier("Cold Resistance")}`,
        "blue"
      );

      Macro.if_($monster`gooified elf-thing`, Macro.item($item`human musk`))
        .if_($monster`gooified flower`, Macro.item($item`human musk`))
        .externalIf(
          stasisFamiliars.includes(myFamiliar()),
          Macro.while_("!pastround 10 && !hpbelow 250", Macro.item($item`seal tooth`))
        )
        .kill()
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

      const result = visitUrl(toUrl(options.location));
      const match = result.match(/(\d+) Cold Resistance Required/);
      if (match) {
        set("_crimbo21ColdResistance", parseInt(match[1]));
        throw `Couldn't get enough cold resistance (13) to continue.`;
      }

      if (have($effect`Beaten Up`)) {
        throw "You're beaten up! Fix it and try adventuring again.";
      }
    }
  } finally {
    if (currentTurnsSpent() >= options.stopTurnsSpent) {
      print(`Stopping, as we have now spent ${currentTurnsSpent()} today.`);
    } else if (myAdventures() === 0) {
      print("Stopping as we are out of adventures.");
    }
    setAutoAttack(0);
    propertyManager.resetAll();
  }
}
