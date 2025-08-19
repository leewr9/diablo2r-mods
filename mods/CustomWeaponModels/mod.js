if (D2RMM.getVersion == null || D2RMM.getVersion() < 1.6) {
  D2RMM.error("Requires D2RMM version 1.6 or higher.");
  return;
}

const ITEM_ONE_HANDS = [
  "knife\\dagger",
  "knife\\dirk",
  "knife\\kriss",
  "knife\\blade",
  "knife\\stormspike",
  "knife\\the_jade_tan_do",
  "knife\\gidbinn",
  "sword\\short_sword",
  "sword\\scimitar",
  "sword\\saber",
  "sword\\falchion",
  "sword\\crystal_sword",
  "sword\\broad_sword",
  "sword\\long_sword",
  "sword\\war_sword",
  "sword\\blood_crescent",
  "sword\\ginthers_rift",
  "sword\\gleamscythe",
  "sword\\griswolds_edge",
  "sword\\hellplague",
  "sword\\hexfire",
  "sword\\krintizs_skewer",
  "sword\\lightsabre",
  "sword\\plague_bearer",
  "axe\\hand_axe",
  "axe\\axe",
  "axe\\double_axe",
  "axe\\military_pick",
  "axe\\war_axe",
  "axe\\the_gnasher",
  "axe\\deathspade",
  "axe\\mindrend",
  "club\\club",
  "club\\spiked_club",
  "mace\\mace",
  "mace\\morning_star",
  "mace\\flail",
  "hammer\\war_hammer",
  "club\\felloak",
  "club\\stoutnail",
  "mace\\bloodrise",
  "mace\\dangoons_teaching",
  "club\\wirts_leg",
  "hammer\\horadric_malus",
  "mace\\khalim_flail",
  "mace\\super_khalim_flail",
  "hammer\\hellforge_hammer",
  "scepter\\scepter",
  "scepter\\grand_scepter",
  "scepter\\war_scepter",
  "wand\\wand",
  "wand\\yew_wand",
  "wand\\bone_wand",
  "wand\\grim_wand",
  "wand\\iros_torch",
  "wand\\gravenspine",
  "wand\\blackhand_key",
  "orb\\eagle_orb",
  "orb\\sacred_globe",
  "orb\\smoked_sphere",
  "orb\\clasped_orb",
  "orb\\dragon_stone",
  "knife\\throwing_knife",
  "axe\\throwing_axe",
  "knife\\balanced_knife",
  "axe\\balanced_axe",
  "knife\\warshrike",
  "javelin\\javelin",
  "javelin\\pilum",
  "javelin\\short_spear",
  "javelin\\glaive",
  "javelin\\throwing_spear",
  "javelin\\maiden_javelin",
  "potion\\fulminating_potion",
  "potion\\exploding_potion",
  "potion\\oil_potion",
  "potion\\strangling_gas_potion",
  "potion\\choking_gas_potion",
  "potion\\rancid_gas_potion",
];

const ITEM_TWO_HANDS = [
  "sword\\two_handed_sword",
  "sword\\claymore",
  "sword\\giant_sword",
  "sword\\bastard_sword",
  "sword\\flamberge",
  "sword\\great_sword",
  "sword\\blacktongue",
  "sword\\kinemils_awl",
  "sword\\shadowfang",
  "sword\\the_patriarch",
  "sword\\todesfaelle_flamme",
  "axe\\large_axe",
  "axe\\broad_axe",
  "axe\\battle_axe",
  "axe\\great_axe",
  "axe\\giant_axe",
  "axe\\stormrider",
  "axe\\the_minataur",
  "axe\\brainhew",
  "axe\\the_chieftan",
  "hammer\\maul",
  "hammer\\great_maul",
  "hammer\\bonesob",
  "hammer\\the_gavel_of_pain",
  "staff\\short_staff",
  "staff\\long_staff",
  "staff\\gnarled_staff",
  "staff\\battle_staff",
  "staff\\war_staff",
  "staff\\horadric_staff",
  "staff\\lazarus_spire",
  "staff\\skullcollector",
  "staff\\staff_of_the_kings",
  "spear\\spear",
  "spear\\trident",
  "spear\\brandistock",
  "spear\\spetum",
  "spear\\pike",
  "spear\\razortine",
  "spear\\soulfeast_tine",
  "spear\\maiden_spear",
  "spear\\maiden_pike",
  "polearm\\bardiche",
  "polearm\\voulge",
  "polearm\\scythe",
  "polearm\\poleaxe",
  "polearm\\halberd",
  "polearm\\war_scythe",
  "polearm\\athenas_wrath",
  "polearm\\soul_harvest",
];

const ITEM_BOWS = [
  "bow\\short_bow",
  "bow\\hunters_bow",
  "bow\\long_bow",
  "bow\\composite_bow",
  "bow\\short_battle_bow",
  "bow\\long_battle_bow",
  "bow\\short_war_bow",
  "bow\\long_war_bow",
  "bow\\hellclap",
  "bow\\kuko_shakaku",
  "bow\\whichwild_string",
  "bow\\stag_bow",
  "bow\\reflex_bow",
  "bow\\light_crossbow",
  "bow\\crossbow",
  "bow\\heavy_crossbow",
  "bow\\repeating_crossbow",
  "bow\\doomspittle",
  "bow\\leadcrow",
  "bow\\ichorsting",
  "bow\\hellcast",
  "bow\\pus_spiter",
  "bow\\langer_briser",
];

const ITEM_CLAWS = [
  "h2h\\katar",
  "h2h\\hatchet_hands",
  "h2h\\claws",
  "h2h\\scissors_katar",
  "h2h\\natalyas_mark",
];

const ONE_HAND_CODES = [
  "hax",
  "axe",
  "2ax",
  "mpi",
  "wax",
  "wnd",
  "ywn",
  "bwn",
  "gwn",
  "clb",
  "scp",
  "gsc",
  "wsp",
  "spc",
  "mac",
  "mst",
  "fla",
  "whm",
  "ssd",
  "scm",
  "sbr",
  "flc",
  "crs",
  "bsd",
  "lsd",
  "wsd",
  "dgr",
  "dir",
  "kri",
  "bld",
  "tkf",
  "tax",
  "bkf",
  "bal",
  "jav",
  "pil",
  "ssp",
  "glv",
  "tsp",
  "sst",
  "lst",
  "cst",
  "bst",
  "wst",
  "gps",
  "ops",
  "gpm",
  "opm",
  "gpl",
  "opl",
  "d33",
  "g33",
  "leg",
  "hdm",
  "hfh",
  "hst",
  "msf",
  "9ha",
  "9ax",
  "92a",
  "9mp",
  "9wa",
  "9wn",
  "9yw",
  "9bw",
  "9gw",
  "9cl",
  "9sc",
  "9qs",
  "9ws",
  "9sp",
  "9ma",
  "9mt",
  "9fl",
  "9wh",
  "9ss",
  "9sm",
  "9sb",
  "9fc",
  "9cr",
  "9bs",
  "9ls",
  "9wd",
  "9dg",
  "9di",
  "9kr",
  "9bl",
  "9tk",
  "9ta",
  "9bk",
  "9b8",
  "9ja",
  "9pi",
  "9s9",
  "9gl",
  "9ts",
  "8ss",
  "8ls",
  "8cs",
  "8bs",
  "8ws",
  "qf1",
  "qf2",
  "7ha",
  "7ax",
  "72a",
  "7mp",
  "7wa",
  "7wn",
  "7yw",
  "7bw",
  "7gw",
  "7cl",
  "7sc",
  "7qs",
  "7ws",
  "7sp",
  "7ma",
  "7mt",
  "7fl",
  "7wh",
  "7ss",
  "7sm",
  "7sb",
  "7fc",
  "7cr",
  "7bs",
  "7ls",
  "7wd",
  "7dg",
  "7di",
  "7kr",
  "7bl",
  "7tk",
  "7ta",
  "7bk",
  "7b8",
  "7ja",
  "7pi",
  "7s7",
  "7gl",
  "7ts",
  "6ss",
  "6ls",
  "6cs",
  "6bs",
  "6ws",
  "ob1",
  "ob2",
  "ob3",
  "ob4",
  "ob5",
  "am5",
  "ob6",
  "ob7",
  "ob8",
  "ob9",
  "oba",
  "ama",
  "obd",
  "obe",
  "obf",
  "obb",
  "obc",
  "amf",
];

const TWO_HAND_CODES = [
  "lax",
  "bax",
  "btx",
  "gax",
  "gix",
  "mau",
  "gma",
  "2hs",
  "clm",
  "gis",
  "bsw",
  "flb",
  "gsd",
  "spr",
  "tri",
  "brn",
  "spt",
  "pik",
  "bar",
  "vou",
  "scy",
  "pax",
  "hal",
  "wsc",
  "9la",
  "9ba",
  "9bt",
  "9ga",
  "9gi",
  "9m9",
  "9gm",
  "92h",
  "9cm",
  "9gs",
  "9b9",
  "9fb",
  "9gd",
  "9sr",
  "9tr",
  "9br",
  "9st",
  "9p9",
  "9b7",
  "9vo",
  "9s8",
  "9pa",
  "9h9",
  "9wc",
  "7la",
  "7ba",
  "7bt",
  "7ga",
  "7gi",
  "7m7",
  "7gm",
  "72h",
  "7cm",
  "7gs",
  "7b7",
  "7fb",
  "7gd",
  "7sr",
  "7tr",
  "7br",
  "7st",
  "7p7",
  "7o7",
  "7vo",
  "7s8",
  "7pa",
  "7h7",
  "7wc",
  "am3",
  "am4",
  "am8",
  "am9",
  "amd",
  "ame",
];

const BOW_CODES = [
  "sbw",
  "hbw",
  "lbw",
  "cbw",
  "sbb",
  "lbb",
  "swb",
  "lwb",
  "lxb",
  "mxb",
  "hxb",
  "rxb",
  "8sb",
  "8hb",
  "8lb",
  "8cb",
  "8s8",
  "8l8",
  "8sw",
  "8lw",
  "8lx",
  "8mx",
  "8hx",
  "8rx",
  "6sb",
  "6hb",
  "6lb",
  "6cb",
  "6s7",
  "6l7",
  "6sw",
  "6lw",
  "6lx",
  "6mx",
  "6hx",
  "6rx",
  "am1",
  "am2",
  "am6",
  "am7",
  "amb",
  "amc",
];

const CLAW_CODES = [
  "ktr",
  "wrb",
  "axf",
  "ces",
  "clw",
  "btl",
  "skr",
  "9ar",
  "9wb",
  "9xf",
  "9cs",
  "9lw",
  "9tw",
  "9qr",
  "7ar",
  "7wb",
  "7xf",
  "7cs",
  "7lw",
  "7tw",
  "7qr",
];

const weaponDirFilename = "hd\\items\\weapon\\";

function findItemCode(select) {
  const item = select.split("\\")[1].replaceAll("_", " ");

  const weaponFilename = "global\\excel\\weapons.txt";
  const weapons = D2RMM.readTsv(weaponFilename);

  for (const i in weapons.rows) {
    const itemname = weapons.rows[i].name
      .replaceAll("'s", "s")
      .toLowerCase()
      .trim();
    if (itemname == item) {
      return weapons.rows[i].code;
    }
  }

  const uniqueitemsFilename = "global\\excel\\uniqueitems.txt";
  const uniqueitems = D2RMM.readTsv(uniqueitemsFilename);

  for (const i in uniqueitems.rows) {
    const itemindex = uniqueitems.rows[i].index
      .replaceAll("'s", "s")
      .toLowerCase()
      .trim();
    if (itemindex == item) {
      return uniqueitems.rows[i].code;
    }
  }

  const setitemsFilename = "global\\excel\\setitems.txt";
  const setitems = D2RMM.readTsv(setitemsFilename);

  for (const i in setitems.rows) {
    const itemindex = setitems.rows[i].index
      .replaceAll("'s", "s")
      .toLowerCase()
      .trim();
    if (itemindex == item) {
      return setitems.rows[i].item;
    }
  }

  return "";
}

function changeItemStyle(items, select) {
  const selectItemFilename = `hd\\items\\weapon\\${select}.json`;
  const selectItem = D2RMM.readJson(selectItemFilename);
  for (const i in items) {
    D2RMM.readJson(`${weaponDirFilename + items[i]}.json`);
    D2RMM.writeJson(`${weaponDirFilename + items[i]}.json`, selectItem);
  }
}

function changeItemWeapon(codes, select) {
  const code = findItemCode(select);

  let component = 5;
  let wclass = "1hs";
  let twohandedwclass = "2hs";

  const weaponFilename = "global\\excel\\weapons.txt";
  const weapons = D2RMM.readTsv(weaponFilename);

  for (const i in weapons.rows) {
    const itemcode = weapons.rows[i].code;
    if (itemcode == code && codes.includes(code)) {
      component = weapons.rows[i].component;
      wclass = weapons.rows[i].wclass;
      twohandedwclass = weapons.rows[i]["2handedwclass"];
      break;
    }
  }

  for (const i in weapons.rows) {
    const itemcode = weapons.rows[i].code;
    if (codes.includes(itemcode)) {
      weapons.rows[i].component = component;

      if (ITEM_ONE_HANDS.includes(select)) {
        weapons.rows[i].wclass = wclass;
      } else if (ITEM_TWO_HANDS.includes(select)) {
        weapons.rows[i]["2handedwclass"] = twohandedwclass;
      } else {
        weapons.rows[i].wclass = wclass;
        weapons.rows[i]["2handedwclass"] = twohandedwclass;
      }
    }
  }
  D2RMM.writeTsv(weaponFilename, weapons);
}

function changeInventoryAsset(type, asset) {
  if (
    config.oneHandStyle != "default" &&
    (ONE_HAND_CODES.includes(type) ||
      ITEM_ONE_HANDS.includes(asset.replaceAll("/", "\\")))
  ) {
    return config.oneHandStyle;
  }
  if (
    config.twoHandStyle != "default" &&
    (TWO_HAND_CODES.includes(type) ||
      ITEM_TWO_HANDS.includes(asset.replaceAll("/", "\\")))
  ) {
    return config.twoHandStyle;
  }
  if (
    config.bowStyle != "default" &&
    (BOW_CODES.includes(type) ||
      ITEM_BOWS.includes(asset.replaceAll("/", "\\")))
  ) {
    return config.bowStyle;
  }
  if (
    config.clawStyle != "default" &&
    (CLAW_CODES.includes(type) ||
      ITEM_CLAWS.includes(asset.replaceAll("/", "\\")))
  ) {
    return config.clawStyle;
  }
  return asset;
}

if (config.oneHandStyle != "default") {
  changeItemStyle(ITEM_ONE_HANDS, config.oneHandStyle);
  changeItemWeapon(ONE_HAND_CODES, config.oneHandStyle);
}
if (config.twoHandStyle != "default") {
  changeItemStyle(ITEM_TWO_HANDS, config.twoHandStyle);
  changeItemWeapon(TWO_HAND_CODES, config.twoHandStyle);
}
if (config.bowStyle != "default") {
  changeItemStyle(ITEM_BOWS, config.bowStyle);
  changeItemWeapon(BOW_CODES, config.bowStyle);
}
if (config.clawStyle != "default") {
  changeItemStyle(ITEM_CLAWS, config.clawStyle);
  changeItemWeapon(CLAW_CODES, config.clawStyle);
}

if (config.inventoryStyleEnabled) {
  const itemsFilename = "hd\\items\\items.json";
  const items = D2RMM.readJson(itemsFilename);
  for (const index in items) {
    const item = items[index];
    for (const type in item) {
      item[type].asset = changeInventoryAsset(type, item[type].asset);
    }
  }
  D2RMM.writeJson(itemsFilename, items);
  const setsFilename = "hd\\items\\sets.json";
  const sets = D2RMM.readJson(setsFilename);
  for (const index in sets) {
    const set = sets[index];
    for (const type in set) {
      set[type].normal = changeInventoryAsset(type, set[type].normal);
      set[type].uber = changeInventoryAsset(type, set[type].uber);
      set[type].ultra = changeInventoryAsset(type, set[type].ultra);
    }
  }
  D2RMM.writeJson(setsFilename, sets);
  const uniquesFilename = "hd\\items\\uniques.json";
  const uniques = D2RMM.readJson(uniquesFilename);
  for (const index in uniques) {
    const unique = uniques[index];
    for (const type in unique) {
      unique[type].normal = changeInventoryAsset(type, unique[type].normal);
      unique[type].uber = changeInventoryAsset(type, unique[type].uber);
      unique[type].ultra = changeInventoryAsset(type, unique[type].ultra);
    }
  }
  D2RMM.writeJson(uniquesFilename, uniques);
}
