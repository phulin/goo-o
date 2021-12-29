import { buy, retrieveItem, visitUrl } from "kolmafia";
import { $coinmaster, $effect, $item, $skill, get, have, uneffect } from "libram";
import options from "./options";

export const labStrategyTypes = ["delevel", "spell"] as const;
export type LabStrategy = typeof labStrategyTypes[number];

export function isLabStrategy(s: string): s is LabStrategy {
  return (labStrategyTypes as readonly string[]).includes(s);
}

export function pickLabStrategyAndSetup(): LabStrategy {
  if (
    have($item`SpinMaster™ lathe`) &&
    have($skill`Ruthless Efficiency`) &&
    have($skill`Curse of Weaksauce`) &&
    have($item`unwrapped knock-off retro superhero cape`) &&
    options.forceStrategy !== "spell"
  ) {
    if (!have($item`dark porquoise ring`)) retrieveItem($item`dark porquoise ring`);
    if (!have($item`ebony epee`)) {
      if (!get("_spinmasterLatheVisited")) visitUrl(`shop.php?whichshop=lathe`);
      retrieveItem($item`flimsy hardwood scraps`);
      if (!buy($coinmaster`Your SpinMaster™ lathe`, 1, $item`ebony epee`)) {
        throw "Failed to get ebony epee.";
      }
    }
    uneffect($effect`Cowrruption`);
    return "delevel";
  } else {
    return "spell";
  }
}
