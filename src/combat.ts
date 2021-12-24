import { choiceFollowsFight, inMultiFight, runCombat, visitUrl } from "kolmafia";
import { $item, $location, $monster, $skill, get, Macro as LibramMacro } from "libram";
import options from "./options";

export class Macro extends LibramMacro {
  kill(skill?: Skill): Macro {
    return (
      this.if_(
        $monster`gooified dog-thing`,
        Macro.while_("hasskill Saucestorm", Macro.skill($skill`Saucestorm`))
      )
        .externalIf(
          // eslint-disable-next-line libram/verify-constants
          options.location !== $location`Site Alpha Primary Lab`,
          Macro.externalIf(get("_chestXRayUsed") < 3, Macro.trySkill($skill`Chest X-Ray`))
            .externalIf(get("_shatteringPunchUsed") < 3, Macro.trySkill($skill`Shattering Punch`))
            .externalIf(!get("_gingerbreadMobHitUsed"), Macro.trySkill($skill`Gingerbread Mob Hit`))
            .externalIf(
              get("_usedReplicaBatoomerang") < 3,
              Macro.tryItem($item`replica bat-oomerang`)
            )
        )
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        .externalIf(skill !== undefined, Macro.skill(skill!))
        .trySkill($skill`Stuffed Mortar Shell`)
        .while_("hasskill Saucegeyser", Macro.skill($skill`Saucegeyser`))
        .while_("hasskill Weapon of the Pastalord", Macro.skill($skill`Weapon of the Pastalord`))
        .while_("hasskill Cannelloni Cannon", Macro.skill($skill`Cannelloni Cannon`))
        .while_("hasskill Wave of Sauce", Macro.skill($skill`Wave of Sauce`))
        .while_("hasskill Saucestorm", Macro.skill($skill`Saucestorm`))
        .while_("hasskill Lunging Thrust-Smack", Macro.skill($skill`Lunging Thrust-Smack`))
        .attack()
        .repeat()
    );
  }

  static kill(): Macro {
    return new Macro().kill();
  }
}

export function main(): void {
  while (inMultiFight()) runCombat();
  if (choiceFollowsFight()) visitUrl("choice.php");
}
