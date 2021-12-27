import { print } from "kolmafia";
import { $locations, get, set, sum } from "libram";
import options from "./options";

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
