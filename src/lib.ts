import { haveEquipped, myBuffedstat, print, visitUrl } from "kolmafia";
import {
  $class,
  $effect,
  $item,
  $locations,
  $skill,
  $stat,
  get,
  getModifier,
  have,
  set,
  sum,
  sumNumbers,
} from "libram";
import options from "./options";

export function coldRes(): number {
  if (have($effect`Entauntauned`) && get("entauntaunedColdRes", 0) === 0) {
    visitUrl(`desc_effect.php?whicheffect=${$effect`Entauntauned`.descid}`);
  }
  return getModifier("Cold Resistance");
}

export function currentTurnsSpent(): number {
  return sum(
    // eslint-disable-next-line libram/verify-constants
    $locations`Site Alpha Dormitory, Site Alpha Greenhouse, Site Alpha Quarry, Site Alpha Primary Lab`,
    (loc) => loc.turnsSpent
  );
}

export function currentTurnsSpentForColdRes(): number {
  return currentTurnsSpent() + turnsSpentAdjustment();
}

export function startingTurnsSpent(): number {
  const result = get("_crimbo21StartingTurnsSpent", currentTurnsSpent());
  set("_crimbo21StartingTurnsSpent", result);
  return result;
}

export function todayTurnsSpent(): number {
  return currentTurnsSpent() - startingTurnsSpent();
}

export function todayTurnsSpentForColdRes(): number {
  return currentTurnsSpentForColdRes() - startingTurnsSpent();
}

export function totalTurnsToday(): number {
  return options.stopTurnsSpent - startingTurnsSpent();
}

export function remainingTurns(): number {
  return options.stopTurnsSpent - currentTurnsSpent();
}

export function incrementTurnsSpentAdjustment(): void {
  const current = get("_crimbo21TurnsSpentAdjustment", 0);
  set("_crimbo21TurnsSpentAdjustment", current + 1);
}

export function turnsSpentAdjustment(): number {
  let result = get("_crimbo21TurnsSpentAdjustment", 0);
  if (Math.floor((todayTurnsSpent() + result + 15) / 3) < get("_crimbo21ColdResistance", 0)) {
    // Ground truth is the game's cold res requirement, so adjust if we're off.
    const oldResult = result;
    result = 3 * get("_crimbo21ColdResistance", 0) - 15 - todayTurnsSpent();
    print(
      `Inconsistent stored turns spent adjustment ${oldResult}. Adjusting to ${result}.`,
      "red"
    );
  }
  set("_crimbo21TurnsSpentAdjustment", result);
  return result;
}

export function expectedHp(weight: number): number {
  // This is the maximum possible HP we'd expect.
  return 1.1 * ((weight - 4) ** 4 / 20 + 100);
}

export function lanternMultiplier(skill: Skill): number {
  let element: "hot" | "cold" | "stench" | "spooky" | "sleaze";
  if (skill === $skill`Saucegeyser`) {
    element = getModifier("Hot Spell Damage") > getModifier("Cold Spell Damage") ? "hot" : "cold";
  } else if (skill === $skill`Fearful Fettucini`) {
    element = "spooky";
  } else if (skill.class === $class`Pastamancer` && have($effect`Spirit of Cayenne`)) {
    element = "hot";
  } else if (skill.class === $class`Pastamancer` && have($effect`Spirit of Peppermint`)) {
    element = "cold";
  } else if (skill.class === $class`Pastamancer` && have($effect`Spirit of Garlic`)) {
    element = "stench";
  } else if (skill.class === $class`Pastamancer` && have($effect`Spirit of Wormwood`)) {
    element = "spooky";
  } else if (skill.class === $class`Pastamancer` && have($effect`Spirit of Bacon Grease`)) {
    element = "sleaze";
  } else {
    throw `Unrecognized skill ${skill}.`;
  }

  const damageMultipliers = {
    physical: 0,
    hot: 0,
    cold: 0,
    stench: 0,
    spooky: 0,
    sleaze: 0,
  };
  damageMultipliers[element] = 1;
  if (skill === $skill`Weapon of the Pastalord`) {
    damageMultipliers.physical = 1;
  }

  if (haveEquipped($item`Rain-Doh green lantern`)) {
    damageMultipliers.stench += damageMultipliers[element];
  }
  if (haveEquipped($item`snow mobile`)) {
    damageMultipliers.cold += damageMultipliers[element];
  }
  if (haveEquipped($item`meteorb`)) {
    damageMultipliers.hot += damageMultipliers[element];
  }
  if (
    haveEquipped($item`unwrapped knock-off retro superhero cape`) &&
    get("retroCapeSuperhero") === "heck" &&
    get("retroCapeWashingInstructions") === "kill"
  ) {
    damageMultipliers.spooky += damageMultipliers[element];
  }
  if (haveEquipped($item`porcelain porkpie`) && skill.class === $class`Pastamancer`) {
    damageMultipliers.sleaze += damageMultipliers[element];
  }

  if (get("_crimbo21LabSnowing")) {
    damageMultipliers.cold *= 1.5;
  }

  return sumNumbers(Object.values(damageMultipliers));
}

export function predictedDamage(skill: Skill): number {
  const multiplier = () => {
    switch (skill) {
      case $skill`Saucegeyser`:
        return 0.4;
      case $skill`Weapon of the Pastalord`:
        return haveEquipped($item`aerogel apron`) ? 0.5 : 0.25;
      case $skill`Fearful Fettucini`:
        return haveEquipped($item`velour veil`) ? 1.5 : 0.5;
      default:
        return 0;
    }
  };
  const criticalMultiplier = () =>
    getModifier("Spell Critical Percent") >= 89
      ? haveEquipped($item`dark baconstone ring`)
        ? 3
        : 2
      : 1;

  return (
    multiplier() *
    myBuffedstat($stat`Mysticality`) *
    (1 + getModifier("Spell Damage Percent") / 100) *
    criticalMultiplier() *
    (1 - 0.004 * getModifier("Monster Level")) *
    lanternMultiplier(skill)
  );
}
