import { $locations, get, set, sum } from "libram";

export function currentTurnsSpent(): number {
  return sum(
    $locations`Site Alpha Dormitory, Site Alpha Greenhouse, Site Alpha Quarry`,
    (loc) => loc.turnsSpent
  );
}

export const startingTurnsSpent = get("_crimbo2021StartingTurnsSpent", currentTurnsSpent());
set("_crimbo2021StartingTurnsSpent", startingTurnsSpent);

export function todayTurnsSpent(): number {
  return currentTurnsSpent() - startingTurnsSpent;
}
