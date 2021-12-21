import { $skill, Mood } from "libram";

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

  return mood;
}
