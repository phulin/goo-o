import { choiceFollowsFight, inMultiFight, runCombat, visitUrl } from "kolmafia";
import { $monster, $skill, Macro as LibramMacro } from "libram";

export class Macro extends LibramMacro {
  kill(): Macro {
    return this.if_(
      // eslint-disable-next-line libram/verify-constants
      $monster`gooified dog-thing`,
      Macro.while_("hasskill Saucestorm", Macro.skill($skill`Saucestorm`))
    )
      .trySkill($skill`Stuffed Mortar Shell`)
      .while_("hasskill Saucegeyser", Macro.skill($skill`Saucegeyser`))
      .while_("hasskill Weapon of the Pastalord", Macro.skill($skill`Weapon of the Pastalord`))
      .while_("hasskill Cannelloni Cannon", Macro.skill($skill`Cannelloni Cannon`))
      .while_("hasskill Wave of Sauce", Macro.skill($skill`Wave of Sauce`))
      .while_("hasskill Saucestorm", Macro.skill($skill`Saucestorm`))
      .while_("hasskill Lunging Thrust-Smack", Macro.skill($skill`Lunging Thrust-Smack`))
      .attack()
      .repeat();
  }

  static kill(): Macro {
    return new Macro().kill();
  }
}

export function main(): void {
  while (inMultiFight()) runCombat();
  if (choiceFollowsFight()) visitUrl("choice.php");
}
