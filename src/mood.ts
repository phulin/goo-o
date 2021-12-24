import { myPrimestat } from "kolmafia";
import { $item, $location, $skill, $stat, AsdonMartin, Mood } from "libram";
import options from "./options";

export function mood(): Mood {
  const mood = new Mood();

  mood.skill($skill`Fat Leon's Phat Loot Lyric`);
  mood.skill($skill`Singer's Faithful Ocelot`);
  mood.skill($skill`The Spirit of Taking`);

  mood.skill($skill`Elemental Saucesphere`);
  mood.skill($skill`Astral Shell`);
  mood.skill($skill`Scarysauce`);

  mood.skill($skill`Empathy of the Newt`);
  mood.skill($skill`Leash of Linguini`);
  mood.skill($skill`Blood Bond`);

  // eslint-disable-next-line libram/verify-constants
  if (options.location === $location`Site Alpha Primary Lab`) {
    if (myPrimestat() === $stat`Muscle`) {
      mood.potion($item`oil of stability`, 2000);
    } else if (myPrimestat() === $stat`Moxie`) {
      mood.potion($item`oil of slipperiness`, 2000);
    }

    mood.skill($skill`Carol of the Hells`);
    mood.skill($skill`Song of Sauce`);
  }

  mood.drive(AsdonMartin.Driving.Observantly);

  return mood;
}
