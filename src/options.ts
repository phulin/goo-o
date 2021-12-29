import { $location } from "libram";
import { startingTurnsSpent } from "./lib";
import { LabStrategy } from "./strategy";

const options: {
  location: Location;
  stopTurnsSpent: number;
  forceStrategy?: LabStrategy;
} = {
  location: $location`Site Alpha Dormitory`,
  stopTurnsSpent: startingTurnsSpent() + 150,
};

export default options;
