if (D2RMM.getVersion == null || D2RMM.getVersion() < 1.6) {
  D2RMM.error("Requires D2RMM version 1.6 or higher.");
  return;
}

const ITEM_ONEHAND = [
  "axe\\axe",
  "axe\\deathspade",
  "axe\\double_axe",
  "axe\\hand_axe",
  "axe\\military_pick",
  "axe\\mindrend",
  "axe\\the_gnasher",
  "axe\\war_axe",

  "sword\\blood_crescent",
  "sword\\broad_sword",
  "sword\\crystal_sword",
  "sword\\falchion",
  "sword\\ginthers_rift",
  "sword\\gleamscythe",
  "sword\\griswolds_edge",
  "sword\\hellplague",
  "sword\\hexfire",
  "sword\\krintizs_skewer",
  "sword\\lightsabre",
  "sword\\long_sword",
  "sword\\plague_bearer",
  "sword\\saber",
  "sword\\scimitar",
  "sword\\short_sword",
  "sword\\war_sword",

  "club\\club",
  "club\\felloak",
  "club\\spiked_club",
  "club\\stoutnail",
  "club\\wirts_leg",

  "h2h\\claws",
  "h2h\\hatchet_hands",
  "h2h\\katar",
  "h2h\\natalyas_mark",
  "h2h\\scissors_katar",

  "knife\\blade",
  "knife\\dagger",
  "knife\\decoy_dagger",
  "knife\\dirk",
  "knife\\gidbinn",
  "knife\\kriss",
  "knife\\stormspike",
  "knife\\the_jade_tan_do",

  "mace\\bloodrise",
  "mace\\dangoons_teaching",
  "mace\\flail",
  "mace\\khalim_flail",
  "mace\\mace",
  "mace\\morning_star",
  "mace\\super_khalim_flail",

  "orb\\clasped_orb",
  "orb\\dragon_stone",
  "orb\\eagle_orb",
  "orb\\sacred_globe",
  "orb\\smoked_sphere",

  "scepter\\grand_scepter",
  "scepter\\scepter",
  "scepter\\war_scepter",

  "hammer\\hellforge_hammer",
  "hammer\\horadric_malus",
  "hammer\\war_hammer",

  "wand\\blackhand_key",
  "wand\\bone_wand",
  "wand\\gravenspine",
  "wand\\grim_wand",
  "wand\\iros_torch",
  "wand\\wand",
  "wand\\yew_wand",

  "javelin\\glaive",
  "javelin\\javelin",
  "javelin\\maiden_javelin",
  "javelin\\pilum",
  "javelin\\short_spear",
  "javelin\\throwing_spear",

  "axe\\throwing_axe",
  "axe\\balanced_axe",
  "knife\\balanced_knife",
  "knife\\throwing_knife",
  "knife\\warshrike",
  "potion\\choking_gas_potion",
  "potion\\exploding_potion",
  "potion\\fulminating_potion",
  "potion\\oil_potion",
  "potion\\rancid_gas_potion",
  "potion\\strangling_gas_potion",
];

const ITEM_TWOHAND = [
  "axe\\broad_axe",
  "axe\\battle_axe",
  "axe\\giant_axe",
  "axe\\great_axe",
  "axe\\large_axe",
  "axe\\stormrider",
  "axe\\the_minataur",
  "axe\\brainhew",
  "axe\\the_chieftan",

  "sword\\blacktongue",
  "sword\\bastard_sword",
  "sword\\claymore",
  "sword\\flamberge",
  "sword\\giant_sword",
  "sword\\great_sword",
  "sword\\kinemils_awl",
  "sword\\shadowfang",
  "sword\\the_patriarch",
  "sword\\todesfaelle_flamme",
  "sword\\two_handed_sword",

  "hammer\\great_maul",
  "hammer\\maul",
  "hammer\\bonesob",
  "hammer\\the_gavel_of_pain",

  "polearm\\athenas_wrath",
  "polearm\\bardiche",
  "polearm\\halberd",
  "polearm\\poleaxe",
  "polearm\\scythe",
  "polearm\\soul_harvest",
  "polearm\\voulge",
  "polearm\\war_scythe",

  "spear\\brandistock",
  "spear\\maiden_pike",
  "spear\\maiden_spear",
  "spear\\pike",
  "spear\\razortine",
  "spear\\soulfeast_tine",
  "spear\\spear",
  "spear\\spetum",
  "spear\\trident",

  "staff\\battle_staff",
  "staff\\gnarled_staff",
  "staff\\horadric_staff",
  "staff\\lazarus_spire",
  "staff\\long_staff",
  "staff\\short_staff",
  "staff\\skullcollector",
  "staff\\staff_of_the_kings",
  "staff\\war_staff",

  "bow\\composite_bow",
  "bow\\crossbow",
  "bow\\doomspittle",
  "bow\\heavy_crossbow",
  "bow\\hellcast",
  "bow\\hellclap",
  "bow\\hunters_bow",
  "bow\\ichorsting",
  "bow\\kuko_shakaku",
  "bow\\langer_briser",
  "bow\\leadcrow",
  "bow\\light_crossbow",
  "bow\\long_battle_bow",
  "bow\\long_bow",
  "bow\\long_war_bow",
  "bow\\piercerib",
  "bow\\pullspite",
  "bow\\pus_spiter",
  "bow\\reflex_bow",
  "bow\\repeating_crossbow",
  "bow\\short_battle_bow",
  "bow\\short_bow",
  "bow\\short_war_bow",
  "bow\\stag_bow",
  "bow\\whichwild_string",
];

const weaponDirFilename = "hd\\items\\weapon\\";
if (config["OneHandStyle"] != "Default") {
  const selectOneHand = `hd\\items\\weapon\\${config["OneHandStyle"]}.json`;
  const selectOneHandData = D2RMM.readJson(selectOneHand);
  for (const i in ITEM_ONEHAND) {
    D2RMM.readJson(`${weaponDirFilename + ITEM_ONEHAND[i]}.json`);
    D2RMM.writeJson(
      `${weaponDirFilename + ITEM_ONEHAND[i]}.json`,
      selectOneHandData,
    );
  }
}
if (config["TwoHandStyle"] != "Default") {
  const selectTwoHand = `hd\\items\\weapon\\${config["TwoHandStyle"]}.json`;
  const selectTwoHandData = D2RMM.readJson(selectTwoHand);
  for (const i in ITEM_TWOHAND) {
    D2RMM.readJson(`${weaponDirFilename + ITEM_TWOHAND[i]}.json`);
    D2RMM.writeJson(
      `${weaponDirFilename + ITEM_TWOHAND[i]}.json`,
      selectTwoHandData,
    );
  }
}
