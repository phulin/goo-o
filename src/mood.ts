import { myBasestat, myClass, myPrimestat, myThrall, useSkill } from "kolmafia";
import { $class, $item, $location, $skill, $stat, $thrall, AsdonMartin, have, Mood } from "libram";
import { remainingTurns } from "./lib";
import options from "./options";
import { LabStrategy } from "./strategy";

export function mood(labStrategy?: LabStrategy): Mood {
  const mood = new Mood();

  mood.skill($skill`Elemental Saucesphere`);
  mood.skill($skill`Astral Shell`);
  mood.skill($skill`Scarysauce`);

  mood.skill($skill`Empathy of the Newt`);
  mood.skill($skill`Leash of Linguini`);
  mood.skill($skill`Blood Bond`);

  // eslint-disable-next-line libram/verify-constants
  if (options.location === $location`Site Alpha Primary Lab`) {
    const needSpellEqualizer = labStrategy === "spell" && myBasestat($stat`Mysticality`) < 10000;
    const needDelevelEqualizer = labStrategy === "delevel" && myBasestat($stat`Muscle`) < 5000;
    if (myPrimestat() === $stat`Muscle` && needSpellEqualizer) {
      mood.potion($item`oil of stability`, 2000);
    } else if (
      myClass() === $class`Pastamancer` &&
      have($skill`Bind Undead Elbow Macaroni`) &&
      needDelevelEqualizer
    ) {
      if (myThrall() !== $thrall`Elbow Macaroni`) {
        useSkill($skill`Bind Undead Elbow Macaroni`);
      }
    } else if (myPrimestat() === $stat`Mysticality` && needDelevelEqualizer) {
      mood.potion($item`oil of expertise`, 2000);
    } else if (myPrimestat() === $stat`Moxie` && (needSpellEqualizer || needDelevelEqualizer)) {
      mood.potion($item`oil of slipperiness`, 2000);
    }

    mood.skill($skill`Get Big`);

    if (labStrategy === "spell") {
      mood.skill($skill`Carol of the Hells`);
      mood.skill($skill`Song of Sauce`);
    } else if (labStrategy === "delevel") {
      if (myBasestat($stat`Muscle`) < 5000) mood.skill($skill`Song of Starch`);
      mood.skill($skill`Ruthless Efficiency`);
    }
  } else {
    mood.skill($skill`Fat Leon's Phat Loot Lyric`);
    mood.skill($skill`Singer's Faithful Ocelot`);
    mood.skill($skill`The Spirit of Taking`);
  }

  if (options.location === $location`Site Alpha Primary Lab`) {
    mood.drive(
      remainingTurns() >= 30 ? AsdonMartin.Driving.Intimidatingly : AsdonMartin.Driving.Safely
    );
  } else {
    mood.drive(AsdonMartin.Driving.Observantly);
  }

  return mood;
}
