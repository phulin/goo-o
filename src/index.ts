import { equip, myAdventures, setAutoAttack, toUrl, useFamiliar, visitUrl } from "kolmafia";
import {
  $effect,
  $familiar,
  $familiars,
  $item,
  $items,
  $location,
  clamp,
  get,
  have,
  Requirement,
  sinceKolmafiaRevision,
} from "libram";
import { Macro } from "./combat";
import { currentTurnsSpent, startingTurnsSpent } from "./lib";
import { mood } from "./mood";
import options from "./options";
import { propertyManager } from "./properties";

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
      options.stopTurnsSpent = startingTurnsSpent + parseInt(arg);
    }
  }

  try {
    propertyManager.set({
      logPreferenceChange: true,
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
      battleAction: "custom combat script",
      autoSatisfyWithMall: true,
      autoSatisfyWithNPCs: true,
      autoSatisfyWithCoinmasters: true,
      autoSatisfyWithStash: false,
      dontStopForCounters: true,
      maximizerFoldables: true,
      hpAutoRecovery: 0.6,
      hpAutoRecoveryTarget: 1.0,
      choiceAdventureScript: "",
      customCombatScript: "gooo",
      currentMood: "apathetic",
      autoTuxedo: true,
      autoPinkyRing: true,
      autoGarish: true,
    });

    Macro.kill().setAutoAttack();

    while (currentTurnsSpent() < options.stopTurnsSpent && myAdventures() > 0) {
      const remaining = clamp(options.stopTurnsSpent - currentTurnsSpent(), 0, myAdventures());

      mood().execute(remaining);
      if (have($item`velour viscometer`) && !have($effect`Scariersauce`)) {
        equip($item`velour viscometer`);
        mood().execute(remaining);
      }

      useFamiliar(
        $familiars`Jumpsuited Hound Dog, Cat Burglar`.find((fam) => have(fam)) ??
          $familiar`Baby Gravy Fairy`
      );

      const itemDropWeight =
        options.location === $location`Site Alpha Quarry`
          ? 0
          : (options.stopTurnsSpent - currentTurnsSpent()) /
            (options.stopTurnsSpent - startingTurnsSpent);

      new Requirement(
        [
          `${itemDropWeight.toFixed(1)} Item Drop`,
          `${(10 * (1 - itemDropWeight)).toFixed(0)} Cold Resistance`,
        ],
        { preventEquip: $items`broken champagne bottle` }
      );

      if (
        visitUrl(toUrl(options.location)).includes(
          "The extreme cold makes it impossible for you to continue"
        )
      ) {
        throw "Couldn't get enough cold resistance to continue.";
      }
    }
  } finally {
    setAutoAttack(0);
    propertyManager.resetAll();
  }
}
