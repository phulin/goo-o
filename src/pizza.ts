import {
  availableAmount,
  eat,
  fullnessLimit,
  getWorkshed,
  myFullness,
  myInebriety,
  print,
  toInt,
  use,
  visitUrl,
} from "kolmafia";
import { $effect, $item, arrayToCountedMap, get, have } from "libram";
import { acquire } from "./acquire";

function makePizza(...items: [Item, Item, Item, Item]) {
  const counts = arrayToCountedMap(items);
  if (have($item`diabolic pizza`)) {
    throw "Already have a pizza.";
  }
  if ([...counts].some(([item, count]) => availableAmount(item) < count)) {
    throw "Missing items for pizza.";
  }
  visitUrl(`campground.php?action=makepizza&pizza=${items.map((item) => toInt(item)).join(",")}`);
  if (!have($item`diabolic pizza`)) {
    throw "Failed to make pizza for some reason.";
  }
}

function pizzaHasEffect(effect: Effect) {
  return visitUrl(`desc_item.php?whichitem=${$item`diabolic pizza`.descid}`).includes(effect.name);
}

export function fillUpOnPizza(): void {
  if (getWorkshed() !== $item`diabolic pizza cube`) {
    throw "Pizza cube not in workshed.";
  }

  let pizzasMade = 0;
  if (have($item`diabolic pizza`)) {
    if (pizzaHasEffect($effect`Entauntauned`)) {
      pizzasMade++;
    } else {
      throw "Pizza already made with wrong effect.";
    }
  }

  const fullnessAvailable = () =>
    fullnessLimit() -
    myFullness() +
    (get("spiceMelangeUsed") ? 0 : 3) +
    (get("_distentionPillUsed") || !have($item`distention pill`) ? 0 : 1) +
    (get("_voraciTeaUsed") ? 0 : 1);
  const ingredients = Math.floor(Math.max(fullnessAvailable(), 0) / 3) - pizzasMade;
  acquire(ingredients, $item`Special Seasoning`, get("valueOfAdventure", 5000));
  acquire(ingredients, $item`extra-strength strongness elixir`, 2000);
  acquire(ingredients, $item`Notes from the Elfpocalypse, Chapter III`, 2000);
  acquire(ingredients, $item`Taco Dan's Taco Stand Chillacious Churro`, 2000);
  acquire(ingredients, $item`1952 Mickey Mantle card`, 22000);

  while (fullnessAvailable() >= 3) {
    print(`Fullness available: ${fullnessAvailable()}.`);
    if (!get("spiceMelangeUsed")) {
      if (myFullness() >= 3 && myInebriety() >= 3) {
        acquire(1, $item`spice melange`, 400000);
        if (have($item`spice melange`)) use($item`spice melange`);
      } else if (myInebriety() < 3) {
        throw "Drink before using so we can fit in melange.";
      }
    }

    if (myFullness() + 3 > fullnessLimit()) use($item`distention pill`);
    if (myFullness() + 3 > fullnessLimit()) {
      acquire(1, $item`cuppa Voraci tea`, 150000);
      use($item`cuppa Voraci tea`);
    }

    if (!have($item`diabolic pizza`)) {
      makePizza(
        $item`extra-strength strongness elixir`,
        $item`Notes from the Elfpocalypse, Chapter III`,
        $item`Taco Dan's Taco Stand Chillacious Churro`,
        $item`1952 Mickey Mantle card`
      );
    }

    if (
      !visitUrl(`desc_item.php?whichitem=${$item`diabolic pizza`.descid}`).includes("Entauntauned")
    ) {
      throw "Pizza has wrong effect, uh oh.";
    }
    use($item`milk of magnesium`);
    if (!eat($item`diabolic pizza`)) {
      throw "Failed to eat pizza!";
    }
  }
}
