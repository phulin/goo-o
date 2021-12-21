import { $locations, get, set, sum } from "libram";

export function currentTurnsSpent(): number {
  return sum(
    $locations`Site Alpha Dormitory, Site Alpha Greenhouse, Site Alpha Quarry`,
    (loc) => loc.turnsSpent
  );
}

export function startingTurnsSpent(): number {
  let result = get("_crimbo21StartingTurnsSpent", currentTurnsSpent());
  if (Math.floor((currentTurnsSpent() - result) / 3) + 5 < get("_crimbo21ColdResistance", 0)) {
    result = currentTurnsSpent() - (get("_crimbo21ColdResistance", 0) - 5) * 3;
  }
  set("_crimbo21StartingTurnsSpent", result);
  return result;
}

export function todayTurnsSpent(): number {
  return currentTurnsSpent() - startingTurnsSpent();
}
