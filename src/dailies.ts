import {
  cliExecute,
  myClass,
  myPrimestat,
  myThrall,
  retrieveItem,
  use,
  useFamiliar,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $class,
  $effects,
  $familiar,
  $item,
  $location,
  $locations,
  $monster,
  $skill,
  $thrall,
  get,
  getModifier,
  getSaleValue,
  have,
  SongBoom,
  uneffect,
} from "libram";
import options from "./options";

function voterSetup(): void {
  if (have($item`"I Voted!" sticker`) || !(get("voteAlways") || get("_voteToday"))) return;

  const voterValueTable = [
    {
      monster: $monster`terrible mutant`,
      value: getSaleValue($item`glob of undifferentiated tissue`) + 10,
    },
    {
      monster: $monster`angry ghost`,
      value: getSaleValue($item`ghostly ectoplasm`) * 1.11,
    },
    {
      monster: $monster`government bureaucrat`,
      value: getSaleValue($item`absentee voter ballot`) * 0.05 + 75 * 0.25 + 50,
    },
    {
      monster: $monster`annoyed snake`,
      value: 25 * 0.5 + 25,
    },
    {
      monster: $monster`slime blob`,
      value: 20 * 0.4 + 50 * 0.2 + 250 * 0.01,
    },
  ];

  visitUrl("place.php?whichplace=town_right&action=townright_vote");

  const votingMonsterPriority = voterValueTable
    .sort((a, b) => b.value - a.value)
    .map((element) => element.monster.name);

  const initPriority = new Map<string, number>([
    ["Cold Resistance: +3", 100],
    ["Meat Drop: +30", 10],
    ["Item Drop: +15", 9],
    ["Familiar Experience: +2", 8],
    ["Adventures: +1", 7],
    ["Monster Level: +10", 5],
    [`${myPrimestat()} Percent: +25`, 3],
    [`Experience (${myPrimestat()}): +4`, 2],
    ["Meat Drop: -30", -2],
    ["Item Drop: -15", -2],
    ["Familiar Experience: -2", -2],
  ]);

  const monsterVote =
    votingMonsterPriority.indexOf(get("_voteMonster1")) <
    votingMonsterPriority.indexOf(get("_voteMonster2"))
      ? 1
      : 2;

  const voteLocalPriorityArr = [
    [0, initPriority.get(get("_voteLocal1")) || (get("_voteLocal1").indexOf("-") === -1 ? 1 : -1)],
    [1, initPriority.get(get("_voteLocal2")) || (get("_voteLocal2").indexOf("-") === -1 ? 1 : -1)],
    [2, initPriority.get(get("_voteLocal3")) || (get("_voteLocal3").indexOf("-") === -1 ? 1 : -1)],
    [3, initPriority.get(get("_voteLocal4")) || (get("_voteLocal4").indexOf("-") === -1 ? 1 : -1)],
  ];

  const bestVotes = voteLocalPriorityArr.sort((a, b) => b[1] - a[1]);
  const firstInit = bestVotes[0][0];
  const secondInit = bestVotes[1][0];

  visitUrl(
    `choice.php?option=1&whichchoice=1331&g=${monsterVote}&local[]=${firstInit}&local[]=${secondInit}`
  );
}

export function dailies(): void {
  if (!$locations`Site Alpha Quarry, Site Alpha Primary Lab`.includes(options.location)) {
    if (have($familiar`Mu`) && !have($item`luck incense`)) {
      useFamiliar($familiar`Mu`);
      use($item`box of Familiar Jacks`);
    }
    if (
      myClass() === $class`Pastamancer` &&
      myThrall() !== $thrall`Spice Ghost` &&
      have($skill`Bind Spice Ghost`)
    ) {
      useSkill($skill`Bind Spice Ghost`);
    }
  }
  if (SongBoom.have()) SongBoom.setSong("Food Vibrations");
  if (get("horseryAvailable") && get("_horsery") !== "pale horse") cliExecute("horsery pale");
  retrieveItem($item`seal tooth`);
  if (
    have($item`Kremlin's Greatest Briefcase`) &&
    getModifier("Cold Resistance", $item`Kremlin's Greatest Briefcase`) < 5
  ) {
    cliExecute("briefcase enchantment cold");
  }
  if (have($skill`Spirit of Peppermint`)) useSkill($skill`Spirit of Peppermint`);

  // eslint-disable-next-line libram/verify-constants
  if (options.location === $location`Site Alpha Primary Lab`) {
    for (const effect of $effects`Ur-Kel's Aria of Annoyance, Pride of the Puffin, Drescher's Annoying Noise`) {
      uneffect(effect);
    }
  }

  voterSetup();
}
