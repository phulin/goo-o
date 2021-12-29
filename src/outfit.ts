import { availableAmount, cliExecute, equip, myFamiliar, retrieveItem, toSlot } from "kolmafia";
import {
  $class,
  $familiar,
  $item,
  $items,
  $skill,
  $slot,
  $slots,
  get,
  have,
  Requirement,
} from "libram";
import { currentTurnsSpent } from "./lib";
import options from "./options";

const accessorySlots = $slots`acc1, acc2, acc3`;

function findSlotFor(accessoryPlan: Map<Slot, Item>, item: Item) {
  const emptySlot = accessorySlots.find((slot) => !accessoryPlan.has(slot));
  if (!emptySlot) return false;
  accessoryPlan.set(emptySlot, item);
  return true;
}

// Equip up to maxRings rings and place them in the plan.
function planRingSlots(accessoryPlan: Map<Slot, Item>, maxRings = 2): void {
  const rings = availableAmount($item`ert grey goo ring`);
  maxRings = Math.min(rings, maxRings);
  for (let i = 0; i < maxRings; i++) {
    findSlotFor(accessoryPlan, $item`ert grey goo ring`);
  }
}

export function constructLabSpellDamageOutfit(
  spellDamageLevel: number,
  skill: Skill | undefined,
  coldResWeightMultiplier: number
): Requirement {
  const forceEquip: Item[] = [];
  const preventSlot: Slot[] = [];

  const accessoryPlan = new Map<Slot, Item>();

  if (have($item`unwrapped knock-off retro superhero cape`)) {
    // If we don't manage equipping cape manually, it will reconfigure every maximizer call.
    preventSlot.push($slot`back`);
    if (get("retroCapeSuperhero") !== "heck" || get("retroCapeWashingInstructions") !== "kill") {
      cliExecute("retrocape heck kill");
    }
  }

  if (spellDamageLevel >= 1) {
    // Meteorb is better for geyser, snow mobile for everything else because:
    // * Crimbo Cheer snow multiplies snow mobile by 1.5.
    // * If equipping multiple lanterns, implemented-earlier lanterns are doubled by later ones.
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
      accessoryPlan.set($slot`acc3`, $item`aerogel apron`);
    } else if (skill === $skill`Fearful Fettucini` && have($item`velour veil`)) {
      accessoryPlan.set($slot`acc3`, $item`velour veil`);
    }
  }

  // Slot acc1 is for ring, acc2 is flex, acc3 is for flex/veil/apron
  const maxRings = coldResWeightMultiplier === 32 ? 1 : 2;
  planRingSlots(accessoryPlan, maxRings);

  if (spellDamageLevel >= 2 && have($item`Space Trip safety headphones`)) {
    findSlotFor(accessoryPlan, $item`Space Trip safety headphones`);
  }
  if (have($item`cozy scarf`)) {
    findSlotFor(accessoryPlan, $item`cozy scarf`);
  }

  for (const [slot, item] of accessoryPlan) {
    preventSlot.push(slot);
    equip(slot, item);
  }

  const offHandSlots = myFamiliar() === $familiar`Left-Hand Man` ? 2 : 1;
  const offHandForce = forceEquip.filter((item) => toSlot(item) === $slot`off-hand`).length;
  if (offHandForce < offHandSlots) {
    forceEquip.push($item`goo magnet`);
  }

  return new Requirement([], { forceEquip, preventSlot });
}

export function constructLabDelevelOutfit(coldResWeightMultiplier: number): Requirement {
  const forceEquip = $items`ebony epee`;
  const preventSlot = $slots`back`;

  const accessoryPlan = new Map<Slot, Item>([[$slot`acc1`, $item`dark porquoise ring`]]);

  // If we don't manage equipping cape manually, it will reconfigure every maximizer call.
  // This strategy is only chosen if we have a cape anyway.
  equip($item`unwrapped knock-off retro superhero cape`);
  if (get("retroCapeSuperhero") !== "robot" || get("retroCapeWashingInstructions") !== "kiss") {
    cliExecute("retrocape robot kiss");
  }

  const offHandSlots = myFamiliar() === $familiar`Left-Hand Man` ? 2 : 1;
  const offHandForce = forceEquip.filter((item) => toSlot(item) === $slot`off-hand`).length;
  if (offHandForce < offHandSlots) {
    forceEquip.push($item`goo magnet`);
  }

  const maxRings = coldResWeightMultiplier === 32 ? 1 : 2;
  planRingSlots(accessoryPlan, maxRings);

  for (const [slot, item] of accessoryPlan) {
    preventSlot.push(slot);
    equip(slot, item);
  }

  return new Requirement([], {
    forceEquip,
    preventSlot,
  });
}

export function constructNonLabOutfit(): Requirement {
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
