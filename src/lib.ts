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
  let result = get("_crimbo21StartingTurnsSpent", currentTurnsSpent());
  if (
    Math.floor((currentTurnsSpentForColdRes() - result + 15) / 3) <
    get("_crimbo21ColdResistance", 0)
  ) {
    const oldResult = result;
    result = currentTurnsSpentForColdRes() - (get("_crimbo21ColdResistance", 0) * 3 - 15);
    print(`Inconsistent stored turns spent ${oldResult}. Adjusting down to ${result}.`, "red");
  }
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
  set("_crimbo21TurnsSpentAdjustment", current - 1);
}

export function turnsSpentAdjustment(): number {
  return get("_crimbo21TurnsSpentAdjustment", 0);
}
