if (D2RMM.getVersion == null || D2RMM.getVersion() < 1.6) {
  D2RMM.error("Requires D2RMM version 1.6 or higher.");
  return;
}

const ITEM_HELMETS = [
  "helmet\\assault_helmet",
  "helmet\\avenger_guard",
  "helmet\\bone_helm",
  "helmet\\cap_hat",
  "helmet\\coif_of_glory",
  "helmet\\crown",
  "helmet\\crown_of_thieves",
  "helmet\\duskdeep",
  "helmet\\fanged_helm",
  "helmet\\full_helm",
  "helmet\\great_helm",
  "helmet\\helm",
  "helmet\\horned_helm",
  "helmet\\jawbone_cap",
  "helmet\\mask",
  "helmet\\ondals_almighty",
  "helmet\\rockstopper",
  "helmet\\skull_cap",
  "helmet\\war_bonnet",
  "helmet\\wormskull",
  "pelt\\antlers",
  "pelt\\falcon_mask",
  "pelt\\hawk_helm",
  "pelt\\spirit_mask",
  "pelt\\wolf_head",
  "circlet\\circlet",
  "circlet\\coronet",
  "circlet\\diadem",
  "circlet\\tiara",
];

const ITEM_SHIELDS = [
  "shield\\aerin_shield",
  "shield\\bone_shield",
  "shield\\buckler",
  "shield\\bverrit_keep",
  "shield\\crown_shield",
  "shield\\gothic_shield",
  "shield\\heavens_taebaek",
  "shield\\heraldic_shield",
  "shield\\kite_shield",
  "shield\\lance_guard",
  "shield\\large_shield",
  "shield\\lidless_wall",
  "shield\\mosers_blessed_circle",
  "shield\\pelta_lunata",
  "shield\\rondache",
  "shield\\small_shield",
  "shield\\spiked_shield",
  "shield\\steelclash",
  "shield\\stormchaser",
  "shield\\stormguild",
  "shield\\swordback_hold",
  "shield\\targe",
  "shield\\the_ward",
  "shield\\tower_shield",
  "shield\\umbral_disk",
  "shield\\wall_of_the_eyeless",
  "voodoo_head\\demon_head",
  "voodoo_head\\gargoyle_head",
  "voodoo_head\\preserved_head",
  "voodoo_head\\unraveller_head",
  "voodoo_head\\zombie_head",
];

const armorDirFilename = "hd\\items\\armor\\";
if (config["HelmetStyle"] != "Default") {
  const selectHelmet = `hd\\items\\armor\\${config["HelmetStyle"]}.json`;
  const selectHelmetData = D2RMM.readJson(selectHelmet);
  for (const i in ITEM_HELMETS) {
    D2RMM.readJson(`${armorDirFilename + ITEM_HELMETS[i]}.json`);
    D2RMM.writeJson(
      `${armorDirFilename + ITEM_HELMETS[i]}.json`,
      selectHelmetData,
    );
  }
}
if (config["ShieldStyle"] != "Default") {
  const selectShield = `hd\\items\\armor\\${config["ShieldStyle"]}.json`;
  const selectShieldData = D2RMM.readJson(selectShield);
  for (const i in ITEM_SHIELDS) {
    D2RMM.readJson(`${armorDirFilename + ITEM_SHIELDS[i]}.json`);
    D2RMM.writeJson(
      `${armorDirFilename + ITEM_SHIELDS[i]}.json`,
      selectShieldData,
    );
  }
}

if (config["ArmorStyle"] != "Default") {
  let rArm = 0;
  let lArm = 0;
  let Torso = 0;
  let Legs = 0;
  let rSPad = 0;
  let lSPad = 0;

  const armorFilename = "global\\excel\\armor.txt";
  const armor = D2RMM.readTsv(armorFilename);

  for (const i in armor.rows) {
    if (armor.rows[i].name.trim() == config["ArmorStyle"]) {
      rArm = armor.rows[i].rArm;
      lArm = armor.rows[i].lArm;
      Torso = armor.rows[i].Torso;
      Legs = armor.rows[i].Legs;
      rSPad = armor.rows[i].rSPad;
      lSPad = armor.rows[i].lSPad;
      break;
    }
  }

  for (const i in armor.rows) {
    if (armor.rows[i].component == 1) {
      armor.rows[i].rArm = rArm;
      armor.rows[i].lArm = lArm;
      armor.rows[i].Torso = Torso;
      armor.rows[i].Legs = Legs;
      armor.rows[i].rSPad = rSPad;
      armor.rows[i].lSPad = lSPad;
    }
  }
  D2RMM.writeTsv(armorFilename, armor);
}
