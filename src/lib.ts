import { $locations, get, sum } from "libram";

export function currentTurnsSpent(): number {
  return sum(
    $locations`Site Alpha Dormitory, Site Alpha Greenhouse, Site Alpha Quarry`,
    (loc) => loc.turnsSpent
  );
}

export const startingTurnsSpent = get("_crimbo2021StartingTurnsSpent", 0) || currentTurnsSpent();

export function todayTurnsSpent(): number {
  return currentTurnsSpent() - startingTurnsSpent;
}
