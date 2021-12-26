import { $locations, get, set, sum } from "libram";

export function currentTurnsSpent(): number {
  return sum(
    // eslint-disable-next-line libram/verify-constants
    $locations`Site Alpha Dormitory, Site Alpha Greenhouse, Site Alpha Quarry, Site Alpha Primary Lab`,
    (loc) => loc.turnsSpent
  );
}

export function startingTurnsSpent(): number {
  let result = get("_crimbo21StartingTurnsSpent", currentTurnsSpent());
  if (Math.floor((currentTurnsSpent() - result + 15) / 3) < get("_crimbo21ColdResistance", 0)) {
    result = currentTurnsSpent() - (get("_crimbo21ColdResistance", 0) * 3 - 15);
    set("_crimbo21StartingTurnsSpent", result);
  }
  return result;
}

export function todayTurnsSpent(): number {
  return currentTurnsSpent() - startingTurnsSpent();
}

export function decrementStartingTurnsSpent(): void {
  const current = get("_crimbo21StartingTurnsSpent", currentTurnsSpent());
  set("_crimbo21StartingTurnsSpent", current - 1);
}
