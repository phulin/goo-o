import {
  cliExecute,
  haveEffect,
  itemAmount,
  mallPrice,
  mySpleenUse,
  npcPrice,
  spleenLimit,
  use,
} from "kolmafia";
import { $effect, $item, $items, $skill, get, getModifier, have, MayoClinic } from "libram";
import { NumericModifier } from "libram/dist/modifierTypes";
import { acquire } from "./acquire";
import { currentTurnsSpent } from "./lib";
import options from "./options";

const modifierCandidatePotions = {
  "Item Drop": [
    ...$items`resolution: be luckier, jug of porquoise juice, blue-frosted astral cupcake`,
    ...$items`recording of The Ballad of Richie Thingfinder, unusual oil, Salsa Caliente™ candle`,
    ...$items`spidercow eye-cluster, blue snowcone, eagle feather, lavender candy heart`,
    ...$items`resolution: be happier`,
  ],
  "Cold Resistance": [
    ...$items`Gene Tonic: Elemental, programmable turtle, patch of extra-warm fur`,
    ...$items`patent preventative tonic, Ancient Protector Soda, Tapioc berry, cold powder`,
    ...$items`recording of Rolando's Rondo of Resisto, rainbow glitter candle, can of black paint`,
    ...$items`lotion of hotness, lotion of spookiness, cyan seashell`,
    ...$items`sticky lava globs, pec oil`,
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

  consume(turnsRemaining: number) {
    const count = Math.max(
      0,
      Math.ceil((turnsRemaining - haveEffect(this.effect())) / this.effectDuration())
    );
    acquire(count, this.item, 1000 * this.value() * this.effectDuration());
    use(Math.min(count, itemAmount(this.item)), this.item);
  }
}

export function boost(modifier: "Item Drop" | "Cold Resistance", target: number): void {
  const turnsRemaining = options.stopTurnsSpent - currentTurnsSpent();

  const dailyBuffs = modifierDailyBuffs[modifier] ?? [];
  for (const [effect, turnsAvailable, available] of dailyBuffs) {
    if (getModifier(modifier) >= target) break;
    // Only activate cold buffs when they'll cover our remaining time here.
    if (modifier === "Cold Resistance" && turnsAvailable() < turnsRemaining) continue;
    while (available() && turnsAvailable() > 0 && haveEffect(effect) < turnsRemaining) {
      cliExecute(effect.default);
    }
  }

  const candidates = [...(modifierCandidatePotions[modifier] ?? [])].map(
    (item) => new Potion(item, modifier)
  );

  const unitCost = (potion: Potion) => potion.unitCost();
  candidates.sort((x, y) => unitCost(x) - unitCost(y));

  for (const candidate of candidates) {
    if (getModifier(modifier) >= target) break;
    candidate.consume(turnsRemaining);
  }
}
