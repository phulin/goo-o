import {
  cliExecute,
  haveEffect,
  itemAmount,
  mallPrice,
  myClass,
  mySpleenUse,
  npcPrice,
  spleenLimit,
  use,
} from "kolmafia";
import { $class, $effect, $item, $items, $skill, get, getModifier, have, MayoClinic } from "libram";
import { NumericModifier } from "libram/dist/modifierTypes";
import { acquire } from "./acquire";
import { remainingTurns } from "./lib";

const modifierCandidatePotions = {
  "Item Drop": [
    ...$items`resolution: be luckier, jug of porquoise juice, blue-frosted astral cupcake`,
    ...$items`recording of The Ballad of Richie Thingfinder, unusual oil, Salsa Caliente™ candle`,
    ...$items`spidercow eye-cluster, blue snowcone, eagle feather, lavender candy heart`,
    ...$items`resolution: be happier, goblin water, tiny dancer, Polka Pop, pumpkin juice`,
    // Familiar Weight
    ...$items`green candy heart, Gene Tonic: Fish, Daily Affirmation: Work For Hours a Week`,
  ],
  "Cold Resistance": [
    ...$items`patch of extra-warm fur, murderbot shield unit`,
    ...$items`patent preventative tonic, Ancient Protector Soda, Tapioc berry, cold powder`,
    ...$items`recording of Rolando's Rondo of Resisto, rainbow glitter candle, can of black paint`,
    ...$items`lotion of hotness, lotion of spookiness, cyan seashell`,
    ...$items`sticky lava globs, pec oil`,
  ],
  "Muscle Percent": [
    ...$items`jug of hamethyst juice, Lobos Mints, flask of hamethyst juice, black facepaint`,
    ...$items`pirate brochure, seal-brain elixir, Bruno's blessing of Mars, swamp lolly`,
    ...$items`miniature power pill, potion of temporary gr8ness, candy brain, chicle de salchicha`,
    ...$items`Ferrigno's Elixir of Power, Mick's IcyVapoHotness Rub, Mer-kin strongjuice`,
    ...$items`fortifying hot cocoa, tomato juice of powerful power, blood of the Wereseal`,
    ...$items`virgin jello shot, Ben-Gal™ Balm, philter of phorce, votive of confidence`,
  ],
  "Mysticality Percent": [
    ...$items`power pill, vial of baconstone juice, future drug: Smartinex, seal-brain elixir`,
    ...$items`Snarf berry, Lobos Mints, pressurized potion of perspicacity, black sheepskin diploma`,
    ...$items`pirate tract, Dennis's blessing of Minerva, flask of baconstone juice`,
    ...$items`potion of temporary gr8ness, boiling hot cocoa, miniature power pill`,
    ...$items`Mer-kin smartjuice, funky dried mushroom, Hawking's Elixir of Brilliance`,
    ...$items`tomato juice of powerful power, glittery mascara, jug of baconstone juice`,
    ...$items`ointment of the occult, votive of confidence`,
  ],
  "Spell Damage Percent": [
    ...$items`battery (AAA), pixel star, Gene Tonic: Elf, fudge-shaped hole in space-time`,
    ...$items`37x37x37 puzzle cube, Yeg's Motel hand soap, Daily Affirmation: Be a Mind Master`,
    ...$items`LOV Elixir #6, cordial of concentration, black eye shadow, demonic cow's blood`,
    ...$items`tobiko marble soda, concentrated cordial of concentration, corrupted marrow`,
    ...$items`wind-up meatcar`,
  ],
};

const modifierDailyBuffs: { [index: string]: [Effect, () => number, () => boolean][] } = {
  "Item Drop": [
    [$effect`Certainty`, () => 50 * (spleenLimit() - mySpleenUse()), () => true],
    [
      $effect`Synthesis: Collection`,
      () => 30 * (spleenLimit() - mySpleenUse()),
      () => have($skill`Sweet Synthesis`),
    ],
    [
      $effect`Pork Barrel`,
      () => 50,
      () =>
        get("barrelShrineUnlocked") && !get("_barrelPrayer") && myClass() === $class`Pastamancer`,
    ],
  ],
  "Cold Resistance": [
    [
      $effect`Synthesis: Cold`,
      () => 30 * (spleenLimit() - mySpleenUse()),
      () => have($skill`Sweet Synthesis`),
    ],
    [
      $effect`Cold as Nice`,
      () => 50,
      () => have($item`Beach Comb`) && !get("_beachHeadsUsed").toString().split(",").includes("2"),
    ],
    [
      $effect`Feeling Peaceful`,
      () => 20 * (3 - get("_feelPeacefulUsed")),
      () => have($skill`Feel Peaceful`),
    ],
    [
      $effect`Force of Mayo Be With You`,
      () => 20,
      () => MayoClinic.installed() && !get("_mayoTankSoaked"),
    ],
    [
      $effect`Cold Sweat`,
      () => 50,
      () => get("questS02Monkees") === "finished" && !get("_momFoodReceived"),
    ],
    [
      $effect`Video... Games?`,
      () => 5,
      () => have($item`defective Game Grid token`) && !get("_defectiveTokenUsed"),
    ],
    [
      $effect`Rainbow Vaccine`,
      () => 30,
      () => get("spacegateAlways") && get("spacegateVaccine1") && !get("_spacegateVaccine"),
    ],
  ],
  "Mysticality Percent": [
    [$effect`Uncucumbered`, () => 200, () => get("daycareOpen") && !get("_daycareSpa")],
    [
      $effect`We're All Made of Starfish`,
      () => 50,
      () =>
        have($item`Beach Comb`) &&
        get("beachHeadsUnlocked").toString().split(",").includes("7") &&
        !get("_beachHeadsUsed").toString().split(",").includes("7") &&
        get("_freeBeachWalksUsed") < 11,
    ],
    [$effect`Trivia Master`, () => Infinity, () => true],
  ],
};

class Potion {
  item: Item;
  modifier: NumericModifier;

  constructor(item: Item, modifier: NumericModifier) {
    this.item = item;
    this.modifier = modifier;
  }

  price() {
    return npcPrice(this.item) > 0 ? npcPrice(this.item) : mallPrice(this.item);
  }

  effect() {
    return getModifier("Effect", this.item);
  }

  effectDuration() {
    return getModifier("Effect Duration", this.item);
  }

  value() {
    if (this.modifier === "Item Drop") {
      return (
        getModifier("Item Drop", this.effect()) +
        1.4 * getModifier("Familiar Weight", this.effect())
      );
    }
    return getModifier(this.modifier, this.effect());
  }

  unitCost() {
    return this.price() / (this.value() * this.effectDuration());
  }

  consume(remainingTurnsSpent: number, maxUnitCost: number) {
    const count = Math.max(
      0,
      Math.ceil((remainingTurnsSpent - haveEffect(this.effect())) / this.effectDuration())
    );
    acquire(count, this.item, maxUnitCost * this.value() * this.effectDuration(), false);
    use(Math.min(count, itemAmount(this.item)), this.item);
  }
}

export function boost(
  modifier:
    | "Item Drop"
    | "Cold Resistance"
    | "Muscle Percent"
    | "Mysticality Percent"
    | "Spell Damage Percent",
  target: number,
  maxUnitCost: number
): void {
  const dailyBuffs = modifierDailyBuffs[modifier] ?? [];
  for (const [effect, turnsAvailable, available] of dailyBuffs) {
    if (getModifier(modifier) >= target) break;
    // Only activate cold buffs when they'll cover our remaining time here.
    if (modifier !== "Item Drop" && turnsAvailable() < remainingTurns()) continue;
    while (available() && turnsAvailable() > 0 && haveEffect(effect) < remainingTurns()) {
      cliExecute(effect.default);
      if (mySpleenUse() >= 3 - get("currentMojoFilters")) {
        use(3 - get("currentMojoFilters"), $item`mojo filter`);
      }
    }
  }

  const candidates = [...(modifierCandidatePotions[modifier] ?? [])].map(
    (item) => new Potion(item, modifier)
  );

  const unitCost = (potion: Potion) => potion.unitCost();
  candidates.sort((x, y) => unitCost(x) - unitCost(y));

  for (const candidate of candidates) {
    if (getModifier(modifier) >= target) break;
    if (candidate.unitCost() > maxUnitCost) break;
    candidate.consume(remainingTurns(), maxUnitCost);
  }
}
