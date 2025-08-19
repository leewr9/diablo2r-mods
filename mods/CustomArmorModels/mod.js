if (D2RMM.getVersion == null || D2RMM.getVersion() < 1.6) {
  D2RMM.error("Requires D2RMM version 1.6 or higher.");
  return;
}

const ITEM_ARMORS = [
  "armor\\ancient_armor",
  "armor\\breast_plate",
  "armor\\chain_mail",
  "armor\\corpsemourn",
  "armor\\field_plate",
  "armor\\full_plate_mail",
  "armor\\goldskin",
  "armor\\gothic_plate",
  "armor\\haemosus_adament",
  "armor\\hard_leather_armor",
  "armor\\ironpelt",
  "armor\\leather_armor",
  "armor\\light_plate",
  "armor\\plate_mail",
  "armor\\quilted_armor",
  "armor\\ring_mail",
  "armor\\scale_mail",
  "armor\\splint_mail",
  "armor\\studded_leather",
  "armor\\victors_silk",
];

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

const ARMOR_CODES = [
  "qui",
  "lea",
  "hla",
  "stu",
  "rng",
  "scl",
  "chn",
  "brs",
  "spl",
  "plt",
  "fld",
  "gth",
  "ful",
  "aar",
  "ltp",
  "xui",
  "xea",
  "xla",
  "xtu",
  "xng",
  "xcl",
  "xhn",
  "xrs",
  "xpl",
  "xlt",
  "xld",
  "xth",
  "xul",
  "xar",
  "xtp",
  "uui",
  "uea",
  "ula",
  "utu",
  "ung",
  "ucl",
  "uhn",
  "urs",
  "upl",
  "ult",
  "uld",
  "uth",
  "uul",
  "uar",
  "utp",
];

const HELMET_CODES = [
  "cap",
  "skp",
  "hlm",
  "fhl",
  "ghm",
  "crn",
  "msk",
  "bhm",
  "xap",
  "xkp",
  "xlm",
  "xhl",
  "xhm",
  "xrn",
  "xsk",
  "xh9",
  "ba1",
  "ba2",
  "ba3",
  "ba4",
  "ba5",
  "uap",
  "ukp",
  "ulm",
  "uhl",
  "uhm",
  "urn",
  "usk",
  "uh9",
  "ba6",
  "ba7",
  "ba8",
  "ba9",
  "baa",
  "bab",
  "bac",
  "bad",
  "bae",
  "baf",
  "cap",
  "skp",
  "hlm",
  "fhl",
  "ghm",
  "crn",
  "msk",
  "bhm",
  "xap",
  "xkp",
  "xlm",
  "xhl",
  "xhm",
  "xrn",
  "xsk",
  "xh9",
  "ba1",
  "ba2",
  "ba3",
  "ba4",
  "ba5",
  "uap",
  "ukp",
  "ulm",
  "uhl",
  "uhm",
  "urn",
  "usk",
  "uh9",
  "ba6",
  "ba7",
  "ba8",
  "ba9",
  "baa",
  "bab",
  "bac",
  "bad",
  "bae",
  "baf",
  "cap",
  "skp",
  "hlm",
  "fhl",
  "ghm",
  "crn",
  "msk",
  "bhm",
  "xap",
  "xkp",
  "xlm",
  "xhl",
  "xhm",
  "xrn",
  "xsk",
  "xh9",
  "ba1",
  "ba2",
  "ba3",
  "ba4",
  "ba5",
  "uap",
  "ukp",
  "ulm",
  "uhl",
  "uhm",
  "urn",
  "usk",
  "uh9",
  "ba6",
  "ba7",
  "ba8",
  "ba9",
  "baa",
  "bab",
  "bac",
  "bad",
  "bae",
  "baf",
  "cap",
  "skp",
  "hlm",
  "fhl",
  "ghm",
  "crn",
  "msk",
  "bhm",
  "xap",
  "xkp",
  "xlm",
  "xhl",
  "xhm",
  "xrn",
  "xsk",
  "xh9",
  "ba1",
  "ba2",
  "ba3",
  "ba4",
  "ba5",
  "uap",
  "ukp",
  "ulm",
  "uhl",
  "uhm",
  "urn",
  "usk",
  "uh9",
  "ba6",
  "ba7",
  "ba8",
  "ba9",
  "baa",
  "bab",
  "bac",
  "bad",
  "bae",
  "baf",
  "cap",
  "skp",
  "hlm",
  "fhl",
  "ghm",
  "crn",
  "msk",
  "bhm",
  "xap",
  "xkp",
  "xlm",
  "xhl",
  "xhm",
  "xrn",
  "xsk",
  "xh9",
  "ba1",
  "ba2",
  "ba3",
  "ba4",
  "ba5",
  "uap",
  "ukp",
  "ulm",
  "uhl",
  "uhm",
  "urn",
  "usk",
  "uh9",
  "ba6",
  "ba7",
  "ba8",
  "ba9",
  "baa",
  "bab",
  "bac",
  "bad",
  "bae",
  "baf",
  "cap",
  "skp",
  "hlm",
  "fhl",
  "ghm",
  "crn",
  "msk",
  "bhm",
  "xap",
  "xkp",
  "xlm",
  "xhl",
  "xhm",
  "xrn",
  "xsk",
  "xh9",
  "ba1",
  "ba2",
  "ba3",
  "ba4",
  "ba5",
  "uap",
  "ukp",
  "ulm",
  "uhl",
  "uhm",
  "urn",
  "usk",
  "uh9",
  "ba6",
  "ba7",
  "ba8",
  "ba9",
  "baa",
  "bab",
  "bac",
  "bad",
  "bae",
  "baf",
  "cap",
  "skp",
  "hlm",
  "fhl",
  "ghm",
  "crn",
  "msk",
  "bhm",
  "xap",
  "xkp",
  "xlm",
  "xhl",
  "xhm",
  "xrn",
  "xsk",
  "xh9",
  "ba1",
  "ba2",
  "ba3",
  "ba4",
  "ba5",
  "uap",
  "ukp",
  "ulm",
  "uhl",
  "uhm",
  "urn",
  "usk",
  "uh9",
  "ba6",
  "ba7",
  "ba8",
  "ba9",
  "baa",
  "bab",
  "bac",
  "bad",
  "bae",
  "baf",
  "cap",
  "skp",
  "hlm",
  "fhl",
  "ghm",
  "crn",
  "msk",
  "bhm",
  "xap",
  "xkp",
  "xlm",
  "xhl",
  "xhm",
  "xrn",
  "xsk",
  "xh9",
  "ba1",
  "ba2",
  "ba3",
  "ba4",
  "ba5",
  "uap",
  "ukp",
  "ulm",
  "uhl",
  "uhm",
  "urn",
  "usk",
  "uh9",
  "ba6",
  "ba7",
  "ba8",
  "ba9",
  "baa",
  "bab",
  "bac",
  "bad",
  "bae",
  "baf",
  "cap",
  "skp",
  "hlm",
  "fhl",
  "ghm",
  "crn",
  "msk",
  "bhm",
  "xap",
  "xkp",
  "xlm",
  "xhl",
  "xhm",
  "xrn",
  "xsk",
  "xh9",
  "ba1",
  "ba2",
  "ba3",
  "ba4",
  "ba5",
  "uap",
  "ukp",
  "ulm",
  "uhl",
  "uhm",
  "urn",
  "usk",
  "uh9",
  "ba6",
  "ba7",
  "ba8",
  "ba9",
  "baa",
  "bab",
  "bac",
  "bad",
  "bae",
  "baf",
  "cap",
  "skp",
  "hlm",
  "fhl",
  "ghm",
  "crn",
  "msk",
  "bhm",
  "xap",
  "xkp",
  "xlm",
  "xhl",
  "xhm",
  "xrn",
  "xsk",
  "xh9",
  "ba1",
  "ba2",
  "ba3",
  "ba4",
  "ba5",
  "uap",
  "ukp",
  "ulm",
  "uhl",
  "uhm",
  "urn",
  "usk",
  "uh9",
  "ba6",
  "ba7",
  "ba8",
  "ba9",
  "baa",
  "bab",
  "bac",
  "bad",
  "bae",
  "baf",
  "cap",
  "skp",
  "hlm",
  "fhl",
  "ghm",
  "crn",
  "msk",
  "bhm",
  "xap",
  "xkp",
  "xlm",
  "xhl",
  "xhm",
  "xrn",
  "xsk",
  "xh9",
  "ba1",
  "ba2",
  "ba3",
  "ba4",
  "ba5",
  "uap",
  "ukp",
  "ulm",
  "uhl",
  "uhm",
  "urn",
  "usk",
  "uh9",
  "ba6",
  "ba7",
  "ba8",
  "ba9",
  "baa",
  "bab",
  "bac",
  "bad",
  "bae",
  "baf",
  "cap",
  "skp",
  "hlm",
  "fhl",
  "ghm",
  "crn",
  "msk",
  "bhm",
  "xap",
  "xkp",
  "xlm",
  "xhl",
  "xhm",
  "xrn",
  "xsk",
  "xh9",
  "ba1",
  "ba2",
  "ba3",
  "ba4",
  "ba5",
  "uap",
  "ukp",
  "ulm",
  "uhl",
  "uhm",
  "urn",
  "usk",
  "uh9",
  "ba6",
  "ba7",
  "ba8",
  "ba9",
  "baa",
  "bab",
  "bac",
  "bad",
  "bae",
  "baf",
  "cap",
  "skp",
  "hlm",
  "fhl",
  "ghm",
  "crn",
  "msk",
  "bhm",
  "xap",
  "xkp",
  "xlm",
  "xhl",
  "xhm",
  "xrn",
  "xsk",
  "xh9",
  "ba1",
  "ba2",
  "ba3",
  "ba4",
  "ba5",
  "uap",
  "ukp",
  "ulm",
  "uhl",
  "uhm",
  "urn",
  "usk",
  "uh9",
  "ba6",
  "ba7",
  "ba8",
  "ba9",
  "baa",
  "bab",
  "bac",
  "bad",
  "bae",
  "baf",
  "cap",
  "skp",
  "hlm",
  "fhl",
  "ghm",
  "crn",
  "msk",
  "bhm",
  "xap",
  "xkp",
  "xlm",
  "xhl",
  "xhm",
  "xrn",
  "xsk",
  "xh9",
  "ba1",
  "ba2",
  "ba3",
  "ba4",
  "ba5",
  "uap",
  "ukp",
  "ulm",
  "uhl",
  "uhm",
  "urn",
  "usk",
  "uh9",
  "ba6",
  "ba7",
  "ba8",
  "ba9",
  "baa",
  "bab",
  "bac",
  "bad",
  "bae",
  "baf",
  "cap",
  "skp",
  "hlm",
  "fhl",
  "ghm",
  "crn",
  "msk",
  "bhm",
  "xap",
  "xkp",
  "xlm",
  "xhl",
  "xhm",
  "xrn",
  "xsk",
  "xh9",
  "ba1",
  "ba2",
  "ba3",
  "ba4",
  "ba5",
  "uap",
  "ukp",
  "ulm",
  "uhl",
  "uhm",
  "urn",
  "usk",
  "uh9",
  "ba6",
  "ba7",
  "ba8",
  "ba9",
  "baa",
  "bab",
  "bac",
  "bad",
  "bae",
  "baf",
  "dr1",
  "dr2",
  "dr3",
  "dr4",
  "dr5",
  "dr6",
  "dr7",
  "dr8",
  "dr9",
  "dra",
  "drb",
  "drc",
  "drd",
  "dre",
  "drf",
  "ci0",
  "ci1",
  "ci2",
  "ci3",
];

const SHIELD_CODES = [
  "buc",
  "sml",
  "lrg",
  "kit",
  "tow",
  "gts",
  "bsh",
  "spk",
  "xuc",
  "xml",
  "xrg",
  "xit",
  "xow",
  "xts",
  "xsh",
  "xpk",
  "pa1",
  "pa2",
  "pa3",
  "pa4",
  "pa5",
  "uuc",
  "uml",
  "urg",
  "uit",
  "uow",
  "uts",
  "ush",
  "upk",
  "pa6",
  "pa7",
  "pa8",
  "pa9",
  "paa",
  "pab",
  "pac",
  "pad",
  "pae",
  "paf",
  "ne1",
  "ne2",
  "ne3",
  "ne4",
  "ne5",
  "ne6",
  "ne7",
  "ne8",
  "ne9",
  "nea",
  "neb",
  "neg",
  "ned",
  "nee",
  "nef",
];

const armorDirFilename = "hd\\items\\armor\\";

function findItemCode(select) {
  const item = select.split("\\")[1].replaceAll("_", " ");
  if (item == "cap hat") {
    return "cap";
  }

  const armorFilename = "global\\excel\\armor.txt";
  const armor = D2RMM.readTsv(armorFilename);

  for (const i in armor.rows) {
    const itemname = armor.rows[i].name
      .replaceAll("'s", "s")
      .toLowerCase()
      .trim();
    if (itemname == item) {
      return armor.rows[i].code;
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
  const selectItemFilename = `hd\\items\\armor\\${select}.json`;
  const selectItem = D2RMM.readJson(selectItemFilename);
  for (const i in items) {
    D2RMM.readJson(`${armorDirFilename + items[i]}.json`);
    D2RMM.writeJson(`${armorDirFilename + items[i]}.json`, selectItem);
  }
}

function changeItemArmor(codes, select) {
  const code = findItemCode(select);

  let Transform = 0;
  let InvTrans = 0;
  let rArm = 0;
  let lArm = 0;
  let Torso = 0;
  let Legs = 0;
  let rSPad = 0;
  let lSPad = 0;

  const armorFilename = "global\\excel\\armor.txt";
  const armor = D2RMM.readTsv(armorFilename);

  for (const i in armor.rows) {
    const itemcode = armor.rows[i].code;
    if (itemcode == code && codes.includes(code)) {
      Transform = armor.rows[i].Transform;
      InvTrans = armor.rows[i].InvTrans;

      if (ARMOR_CODES.includes(code)) {
        rArm = armor.rows[i].rArm;
        lArm = armor.rows[i].lArm;
        Torso = armor.rows[i].Torso;
        Legs = armor.rows[i].Legs;
        rSPad = armor.rows[i].rSPad;
        lSPad = armor.rows[i].lSPad;
      }
      break;
    }
  }

  for (const i in armor.rows) {
    const itemcode = armor.rows[i].code;
    if (codes.includes(itemcode)) {
      armor.rows[i].Transform = Transform;
      armor.rows[i].InvTrans = InvTrans;

      if (ARMOR_CODES.includes(code)) {
        armor.rows[i].rArm = rArm;
        armor.rows[i].lArm = lArm;
        armor.rows[i].Torso = Torso;
        armor.rows[i].Legs = Legs;
        armor.rows[i].rSPad = rSPad;
        armor.rows[i].lSPad = lSPad;
      }
    }
  }
  D2RMM.writeTsv(armorFilename, armor);
}

function changeItemColor(codes, color) {
  const uniqueitemsFilename = "global\\excel\\uniqueitems.txt";
  const uniqueitems = D2RMM.readTsv(uniqueitemsFilename);

  for (const i in uniqueitems.rows) {
    const itemcode = uniqueitems.rows[i].code.trim();
    if (codes.includes(itemcode)) {
      uniqueitems.rows[i].chrtransform = color;
      uniqueitems.rows[i].invtransform = color;
    }
  }
  D2RMM.writeTsv(uniqueitemsFilename, uniqueitems);

  const setitemsFilename = "global\\excel\\setitems.txt";
  const setitems = D2RMM.readTsv(setitemsFilename);

  for (const i in setitems.rows) {
    const itemcode = setitems.rows[i].item.trim();
    if (codes.includes(itemcode)) {
      setitems.rows[i].chrtransform = color;
      setitems.rows[i].invtransform = color;
    }
  }
  D2RMM.writeTsv(setitemsFilename, setitems);
}

function changeInventoryAsset(type, asset) {
  if (
    config.armorStyle != "default" &&
    (ARMOR_CODES.includes(type) ||
      ITEM_ARMORS.includes(asset.replaceAll("/", "\\")))
  ) {
    return config.armorStyle;
  }
  if (
    config.helmetStyle != "default" &&
    (HELMET_CODES.includes(type) ||
      ITEM_HELMETS.includes(asset.replaceAll("/", "\\")))
  ) {
    return config.helmetStyle;
  }
  if (
    config.shieldStyle != "default" &&
    (SHIELD_CODES.includes(type) ||
      ITEM_SHIELDS.includes(asset.replaceAll("/", "\\")))
  ) {
    return config.shieldStyle;
  }
  return asset;
}

if (config.armorStyle != "default") {
  changeItemStyle(ITEM_ARMORS, config.armorStyle);
  changeItemArmor(ARMOR_CODES, config.armorStyle);
}
if (config.helmetStyle != "default") {
  changeItemStyle(ITEM_HELMETS, config.helmetStyle);
  changeItemArmor(HELMET_CODES, config.helmetStyle);
}
if (config.shieldStyle != "default") {
  changeItemStyle(ITEM_SHIELDS, config.shieldStyle);
  changeItemArmor(SHIELD_CODES, config.shieldStyle);
}

if (config.armorColor != "default") {
  changeItemColor(ARMOR_CODES, config.armorColor);
}
if (config.helmetColor != "default") {
  changeItemColor(HELMET_CODES, config.helmetColor);
}
if (config.shieldColor != "default") {
  changeItemColor(SHIELD_CODES, config.shieldColor);
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
