import { $location } from "libram";
import { startingTurnsSpent } from "./lib";

export default {
  location: $location`Site Alpha Dormitory`,
  stopTurnsSpent: startingTurnsSpent() + 150,
};
