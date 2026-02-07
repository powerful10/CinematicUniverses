import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const OUTPUT_JSON_PATH = path.join(ROOT, "app/data/characters.generated.json");
const PUBLIC_MEDIA_ROOT = path.join(ROOT, "public/media");

const REQUEST_HEADERS = {
  "user-agent": "cinematicuniverses-site-builder/2.0",
};

const customImageById = {
  Echo: {
    url: "https://marvelcinematicuniverse.fandom.com/wiki/Special:FilePath/Echo_(2021).png",
    sourcePage: "https://marvelcinematicuniverse.fandom.com/wiki/Echo",
  },
  MonicaRambeau: {
    url: "https://marvelcinematicuniverse.fandom.com/wiki/Special:FilePath/Monica_Rambeau.png",
    sourcePage: "https://marvelcinematicuniverse.fandom.com/wiki/Monica_Rambeau",
  },
};

const stopWords = new Set([
  "the",
  "and",
  "of",
  "for",
  "with",
  "from",
  "man",
  "woman",
  "mr",
  "mrs",
  "ms",
  "dr",
  "captain",
  "agent",
  "new",
  "old",
  "ii",
  "iii",
  "iv",
]);

const wikiTitleById = {
  WandaMaximoff: "Wanda Maximoff (Marvel Cinematic Universe)",
  Kraglin: "Kraglin",
  Echo: "Echo (Marvel Comics)",
  YelenaBelova: "Yelena Belova (Marvel Cinematic Universe)",
  RedGuardian: "Red Guardian",
  MBaku: "M'Baku",
  Valkyrie: "Valkyrie (Marvel Comics)",
  Wong: "Wong (Marvel Cinematic Universe)",
  MonicaRambeau: "Monica Rambeau",
  Ironheart: "Ironheart (character)",
  Stature: "Cassie Lang (Marvel Cinematic Universe)",
  Ajak: "Ajak (character)",
  Sersi: "Sersi",
  Sprite: "Sprite (Eternal)",
  Kingo: "Kingo (character)",
  Thena: "Thena",
  Gilgamesh: "Gilgamesh (Marvel Comics)",
  Phastos: "Phastos",
  Druig: "Druig",
  Makkari: "Makkari (character)",
  PhilCoulson: "Phil Coulson",
  MariaHill: "Maria Hill",
  SharonCarter: "Sharon Carter (Marvel Cinematic Universe)",
  PeggyCarter: "Peggy Carter (Marvel Cinematic Universe)",
  JaneFosterThor: "Jane Foster (Marvel Cinematic Universe)",
  KateBishop: "Kate Bishop (Marvel Cinematic Universe)",
  Ghost: "Ghost (Marvel Comics)",
  Shuri: "Shuri (Marvel Cinematic Universe)",
  Wenwu: "Wenwu",
  JohnWalker: "John Walker (character)",
  AgathaHarkness: "Agatha Harkness (Marvel Cinematic Universe)",
  Bloodsport: "Bloodsport (character)",
  Wolverine: "Wolverine (character)",
  ProfessorX: "Professor X",
  Cyclops: "Cyclops (Marvel Comics)",
  Storm: "Storm (Marvel Comics)",
  JeanGrey: "Jean Grey",
  Beast: "Beast (Marvel Comics)",
  Nightcrawler: "Nightcrawler (character)",
  Rogue: "Rogue (Marvel Comics)",
  Gambit: "Gambit (Marvel Comics)",
  Colossus: "Colossus (character)",
  Iceman: "Iceman (Marvel Comics)",
  KittyPryde: "Kitty Pryde",
  MrFantastic: "Mister Fantastic",
  InvisibleWoman: "Invisible Woman",
  HumanTorch: "Human Torch",
  Thing: "Thing (Marvel Comics)",
  SilverSurfer: "Silver Surfer",
  Magneto: "Magneto (Marvel Comics)",
  DoctorDoom: "Doctor Doom",
  MisterSinister: "Mister Sinister",
  Sabretooth: "Sabretooth (character)",
  GhostRider: "Ghost Rider",
  Morbius: "Morbius",
  X23: "X-23",
  Cable: "Cable (character)",
  Domino: "Domino (character)",
  Mystique: "Mystique (comics)",
  Raven: "Raven (DC Comics)",
  BeastBoy: "Beast Boy",
  Starfire: "Starfire (character)",
  BoosterGold: "Booster Gold",
  Firestorm: "Firestorm (character)",
  Vixen: "Vixen (comics)",
  RedTornado: "Red Tornado",
  MrFreeze: "Mr. Freeze",
  PoisonIvy: "Poison Ivy (character)",
  GorillaGrodd: "Gorilla Grodd",
  Parallax: "Parallax (DC Comics)",
  Trigon: "Trigon (character)",
  Hush: "Hush (character)",
  BlackFire: "Blackfire",
};

const apiNameById = {
  AdamWarlock: "Warlock",
  Drax: "Drax the Destroyer",
  Rocket: "Rocket Raccoon",
  MsMarvel: "Ms Marvel II",
  RedSkull: "Red Skull",
  GreenGoblin: "Green Goblin",
  HighEvolutionary: "High Evolutionary",
  LexLuthor: "Lex Luthor",
  ReverseFlash: "Reverse Flash",
  JohnConstantine: "John Constantine",
  RasAlGhul: "Ra's al Ghul",
  CaptainBoomerang: "Captain Boomerang",
  DoctorFate: "Doctor Fate",
  GreenLantern: "Green Lantern",
  GreenArrow: "Green Arrow",
  BlackCanary: "Black Canary",
  MartianManhunter: "Martian Manhunter",
  BlueBeetle: "Blue Beetle",
  JohnWalker: "U.S. Agent",
  ScarletWitch: "Scarlet Witch",
  CaptainMarvel: "Captain Marvel",
  CaptainAmerica: "Captain America",
  WarMachine: "War Machine",
  BlackPanther: "Black Panther",
  DoctorStrange: "Doctor Strange",
  MoonKnight: "Moon Knight",
  IronFist: "Iron Fist",
  StarLord: "Star-Lord",
  AntMan: "Ant-Man",
  SheHulk: "She-Hulk",
  WonderWoman: "Wonder Woman",
  TwoFace: "Two-Face",
  GeneralZod: "General Zod",
  MrFantastic: "Mr Fantastic",
};

const rosterExtras = {
  mcu: {
    heroes: [
      { id: "ProfessorX", name: "Professor X" },
      { id: "Cyclops", name: "Cyclops" },
      { id: "Storm", name: "Storm" },
      { id: "JeanGrey", name: "Jean Grey" },
      { id: "Beast", name: "Beast" },
      { id: "Nightcrawler", name: "Nightcrawler" },
      { id: "Rogue", name: "Rogue" },
      { id: "Gambit", name: "Gambit" },
      { id: "Colossus", name: "Colossus" },
      { id: "Iceman", name: "Iceman" },
      { id: "KittyPryde", name: "Kitty Pryde" },
      { id: "MrFantastic", name: "Mister Fantastic" },
      { id: "InvisibleWoman", name: "Invisible Woman" },
      { id: "HumanTorch", name: "Human Torch" },
      { id: "Thing", name: "Thing" },
      { id: "SilverSurfer", name: "Silver Surfer" },
    ],
    villains: [
      { id: "Magneto", name: "Magneto" },
      { id: "DoctorDoom", name: "Doctor Doom" },
      { id: "Galactus", name: "Galactus" },
      { id: "Apocalypse", name: "Apocalypse" },
      { id: "Sabretooth", name: "Sabretooth" },
      { id: "MisterSinister", name: "Mister Sinister" },
      { id: "Kingpin", name: "Kingpin" },
    ],
    antiheroes: [
      { id: "Wolverine", name: "Wolverine" },
      { id: "GhostRider", name: "Ghost Rider" },
      { id: "Morbius", name: "Morbius" },
      { id: "X23", name: "X-23" },
      { id: "Cable", name: "Cable" },
      { id: "Domino", name: "Domino" },
      { id: "Mystique", name: "Mystique" },
    ],
  },
  dc: {
    heroes: [
      { id: "Raven", name: "Raven" },
      { id: "BeastBoy", name: "Beast Boy" },
      { id: "Starfire", name: "Starfire" },
      { id: "BoosterGold", name: "Booster Gold" },
      { id: "Firestorm", name: "Firestorm" },
      { id: "Vixen", name: "Vixen" },
      { id: "RedTornado", name: "Red Tornado" },
      { id: "Superboy", name: "Superboy" },
      { id: "Batwoman", name: "Batwoman" },
    ],
    villains: [
      { id: "MrFreeze", name: "Mr. Freeze" },
      { id: "PoisonIvy", name: "Poison Ivy" },
      { id: "GorillaGrodd", name: "Gorilla Grodd" },
      { id: "Parallax", name: "Parallax" },
      { id: "Trigon", name: "Trigon" },
      { id: "Hush", name: "Hush" },
    ],
    antiheroes: [
      { id: "BlackFire", name: "Blackfire" },
      { id: "Rorschach", name: "Rorschach" },
      { id: "TheQuestion", name: "The Question" },
    ],
  },
};

const profileOverrides = {
  "mcu:heroes:IronMan": {
    summary:
      "Tony Stark transformed from elite weapons innovator to the backbone of the Avengers, setting the tone for every major MCU era.",
    keyMoments: [
      "Built the first Iron Man armor in captivity and shut down Stark weapon trafficking.",
      "Helped assemble the Avengers during the Battle of New York.",
      "Sacrificed himself in Avengers: Endgame to defeat Thanos.",
    ],
  },
  "mcu:heroes:WandaMaximoff": {
    summary:
      "Wanda Maximoff's arc spans grief, overwhelming power, and multiversal consequences that reshape Marvel's strategic future.",
  },
  "mcu:antiheroes:Deadpool": {
    summary:
      "Deadpool operates as a fourth-wall-breaking antihero whose combat effectiveness and unpredictability disrupt both villain and hero operations.",
  },
  "mcu:antiheroes:Wolverine": {
    summary:
      "Wolverine is a long-surviving mutant combatant defined by regenerative endurance, adamantium weaponization, and morally complex field choices.",
  },
  "mcu:villains:DoctorDoom": {
    summary:
      "Doctor Doom combines sovereign power, scientific mastery, and arcane capability, making him one of Marvel's most complete strategic threats.",
  },
  "dc:heroes:Batman": {
    summary:
      "Batman represents disciplined human strategy in a universe filled with gods, aliens, and metahumans.",
  },
  "dc:heroes:Superman": {
    summary:
      "Superman remains the DC benchmark for hope, restraint, and raw power under moral responsibility.",
  },
  "dc:villains:Joker": {
    summary:
      "The Joker is Gotham's chaos engine, defined by psychological warfare rather than conventional conquest.",
  },
};

const wikiSearchCache = new Map();
const wikiSummaryCache = new Map();
const wikiMetaCache = new Map();
const wikidataImageCache = new Map();

function normalize(value = "") {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function dedupe(items) {
  return [...new Set(items.filter(Boolean))];
}

function sanitizeFileId(id) {
  return id.replace(/[^a-zA-Z0-9-_]/g, "");
}

function tokenize(value = "") {
  return dedupe(
    value
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, " ")
      .split(/\s+/)
      .map((token) => token.trim())
      .filter((token) => token.length >= 3 && !stopWords.has(token)),
  );
}

function getExtension(url) {
  try {
    const pathname = new URL(url).pathname.toLowerCase();
    const ext = path.extname(pathname);
    if ([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"].includes(ext)) {
      return ext === ".jpeg" ? ".jpg" : ext;
    }
  } catch {
    return ".jpg";
  }
  return ".jpg";
}

function cleanText(value) {
  if (!value || value === "-") return null;
  return String(value).trim();
}

function inferAlignment(faction) {
  if (faction === "heroes") return "Heroic";
  if (faction === "villains") return "Villainous";
  return "Chaotic / Neutral";
}

function defaultSummary(entry, universe, faction) {
  const universeLabel = universe === "mcu" ? "Marvel continuity" : "DC continuity";
  if (faction === "heroes") {
    return `${entry.name} is an active defender in ${universeLabel}, regularly involved in high-risk conflict response.`;
  }
  if (faction === "villains") {
    return `${entry.name} is a recurring strategic threat in ${universeLabel}, driving major conflict escalations.`;
  }
  return `${entry.name} operates in the gray zone of ${universeLabel}, balancing personal motives with broader consequences.`;
}

function defaultAffiliations(universe, faction) {
  if (universe === "mcu" && faction === "heroes") return ["Avengers", "Allied Hero Network"];
  if (universe === "mcu" && faction === "villains") return ["Independent Threat", "Rogue Alliances"];
  if (universe === "mcu" && faction === "antiheroes") return ["Shifting Alliances"];
  if (universe === "dc" && faction === "heroes") return ["Justice League", "Global Defenders"];
  if (universe === "dc" && faction === "villains") return ["Legion of Doom / Independent Cells"];
  return ["Independent Operator"];
}

function defaultKeyMoments(name, faction) {
  if (faction === "heroes") {
    return [
      `Origin arc that established ${name}'s operational identity.`,
      "Alliance or team integration that expanded mission scope.",
      "A defining high-stakes confrontation with long-term impact.",
    ];
  }
  if (faction === "villains") {
    return [
      `Rise to power and early strategic move by ${name}.`,
      "Major campaign that challenged multiple hero factions.",
      "Legacy impact after defeat, retreat, or unresolved status.",
    ];
  }
  return [
    `Critical moral crossroads that reshaped ${name}'s direction.`,
    "Shift in alignment triggered by personal or strategic pressure.",
    "Intervention that altered future faction relationships.",
  ];
}

function parseAffiliations(raw, universe, faction) {
  const fromApi = (raw || "")
    .split(/,|;|\//g)
    .map((part) => part.trim())
    .filter((part) => part && part.length > 2)
    .slice(0, 6);
  return dedupe([...fromApi, ...defaultAffiliations(universe, faction)]).slice(0, 6);
}

function toStatsObject(powerstats) {
  if (!powerstats) return null;
  const parsed = {
    intelligence: Number(powerstats.intelligence) || 0,
    strength: Number(powerstats.strength) || 0,
    speed: Number(powerstats.speed) || 0,
    durability: Number(powerstats.durability) || 0,
    power: Number(powerstats.power) || 0,
    combat: Number(powerstats.combat) || 0,
  };
  const hasAny = Object.values(parsed).some((value) => value > 0);
  return hasAny ? parsed : null;
}

function statsToAbilities(stats, faction) {
  const abilities = [];
  if (stats) {
    if (stats.intelligence >= 70) abilities.push("Advanced tactical intelligence");
    if (stats.strength >= 70) abilities.push("Exceptional physical strength");
    if (stats.speed >= 70) abilities.push("High-speed mobility and reaction");
    if (stats.durability >= 70) abilities.push("Extreme durability under pressure");
    if (stats.power >= 70) abilities.push("High energy or power projection");
    if (stats.combat >= 70) abilities.push("Elite combat proficiency");
  }

  const fallbackByFaction = {
    heroes: ["Strategic teamwork", "Specialized combat training", "Mission adaptability"],
    villains: ["Aggressive strategic planning", "High-threat offense", "Psychological disruption"],
    antiheroes: ["Unpredictable combat style", "Survival-based tactics", "Cross-faction adaptability"],
  };

  return dedupe([...abilities, ...fallbackByFaction[faction]]).slice(0, 6);
}

function extractKeyMomentsFromText(text, name, faction) {
  if (!text) return defaultKeyMoments(name, faction);
  const sentences = text
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 40);

  if (!sentences.length) return defaultKeyMoments(name, faction);
  return dedupe([...sentences.slice(0, 3), ...defaultKeyMoments(name, faction)]).slice(0, 3);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchWithRetry(url, options = {}, attempts = 4) {
  let lastError = null;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...REQUEST_HEADERS,
          ...(options.headers || {}),
        },
      });
      if (!response.ok) {
        throw new Error(`Failed ${url}: ${response.status}`);
      }
      return response;
    } catch (error) {
      lastError = error;
      if (attempt < attempts) {
        await sleep(450 * attempt);
      }
    }
  }
  throw lastError;
}

async function fetchJson(url) {
  const response = await fetchWithRetry(url, {
    headers: { accept: "application/json" },
  });
  return response.json();
}

async function fetchBuffer(url) {
  const response = await fetchWithRetry(url, {
    headers: { accept: "image/*,*/*;q=0.8" },
  });
  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

async function searchWikipediaTitles(query) {
  if (wikiSearchCache.has(query)) return wikiSearchCache.get(query);
  const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&utf8=1&srlimit=6&srsearch=${encodeURIComponent(query)}`;
  try {
    const data = await fetchJson(url);
    const titles = (data?.query?.search ?? []).map((item) => item.title);
    wikiSearchCache.set(query, titles);
    return titles;
  } catch {
    wikiSearchCache.set(query, []);
    return [];
  }
}

async function getWikiSummary(title) {
  if (wikiSummaryCache.has(title)) return wikiSummaryCache.get(title);
  const key = encodeURIComponent(title.replace(/ /g, "_"));
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${key}`;
  try {
    const response = await fetchWithRetry(url);
    const summary = await response.json();
    wikiSummaryCache.set(title, summary);
    return summary;
  } catch {
    wikiSummaryCache.set(title, null);
    return null;
  }
}

async function getWikiMeta(title) {
  if (wikiMetaCache.has(title)) return wikiMetaCache.get(title);
  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&redirects=1&prop=pageimages|pageprops&piprop=thumbnail&pithumbsize=1200&titles=${encodeURIComponent(title)}`;
  try {
    const data = await fetchJson(url);
    const pages = data?.query?.pages || {};
    const page = Object.values(pages)[0];
    if (!page || page.missing !== undefined) {
      wikiMetaCache.set(title, null);
      return null;
    }
    const meta = {
      title: page.title || title,
      thumbnail: page.thumbnail?.source || null,
      wikibase: page.pageprops?.wikibase_item || null,
    };
    wikiMetaCache.set(title, meta);
    return meta;
  } catch {
    wikiMetaCache.set(title, null);
    return null;
  }
}

async function getWikidataImage(itemId) {
  if (!itemId) return null;
  if (wikidataImageCache.has(itemId)) return wikidataImageCache.get(itemId);
  const url = `https://www.wikidata.org/wiki/Special:EntityData/${itemId}.json`;
  try {
    const data = await fetchJson(url);
    const entity = data?.entities?.[itemId];
    const imageClaim = entity?.claims?.P18?.[0]?.mainsnak?.datavalue?.value;
    if (!imageClaim) {
      wikidataImageCache.set(itemId, null);
      return null;
    }
    const imageUrl = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(imageClaim)}?width=1200`;
    wikidataImageCache.set(itemId, imageUrl);
    return imageUrl;
  } catch {
    wikidataImageCache.set(itemId, null);
    return null;
  }
}

function scoreWikiCandidate(entry, universe, title, extract, description) {
  const combined = `${title || ""} ${extract || ""} ${description || ""}`.toLowerCase();
  const titleLower = (title || "").toLowerCase();
  const tokens = dedupe([...tokenize(entry.name), ...tokenize(entry.alias || "")]);

  let score = 0;
  let titleHits = 0;
  for (const token of tokens) {
    if (titleLower.includes(token)) {
      score += 4;
      titleHits += 1;
    }
    if (combined.includes(token)) {
      score += 1;
    }
  }

  if (universe === "mcu" && combined.includes("marvel")) {
    score += 2;
  }
  if (universe === "dc" && combined.includes("dc")) {
    score += 2;
  }

  return { score, titleHits, tokenCount: tokens.length };
}

async function resolveWikiProfile(entry, universe) {
  const explicit = wikiTitleById[entry.id];
  const baseName = entry.name;
  const universeHint = universe === "mcu" ? "Marvel" : "DC";

  const directTitles = dedupe([
    explicit,
    `${baseName} (${universe === "mcu" ? "Marvel Cinematic Universe" : "DC Comics"})`,
    `${baseName} (${universe === "mcu" ? "Marvel Comics" : "DC Comics"})`,
    `${baseName} (character)`,
    baseName,
  ]);

  const searchedTitles = [];
  const queries = dedupe([explicit, `${baseName} ${universeHint}`, baseName, entry.alias]);
  for (const query of queries) {
    if (!query) continue;
    const fromSearch = await searchWikipediaTitles(query);
    searchedTitles.push(...fromSearch.slice(0, 4));
  }

  const uniqueTitles = dedupe([...directTitles, ...searchedTitles]).slice(0, 14);
  let best = null;

  for (const title of uniqueTitles) {
    const summary = await getWikiSummary(title);
    if (!summary || summary.type === "disambiguation") continue;

    const meta = (await getWikiMeta(title)) || {};
    const resolvedTitle = summary.title || meta.title || title;
    const extract = cleanText(summary.extract);
    const description = cleanText(summary.description);

    const scoreInfo = scoreWikiCandidate(entry, universe, resolvedTitle, extract, description);
    if (scoreInfo.tokenCount > 1 && scoreInfo.titleHits === 0) {
      continue;
    }

    let imageUrl = summary.thumbnail?.source || meta.thumbnail || null;
    if (!imageUrl) {
      imageUrl = await getWikidataImage(meta.wikibase);
    }

    const score = scoreInfo.score + (imageUrl ? 2 : 0) + (explicit && resolvedTitle === explicit ? 2 : 0);
    if (!best || score > best.score) {
      best = {
        title: resolvedTitle,
        extract,
        description,
        imageUrl,
        sourcePage:
          summary.content_urls?.desktop?.page ||
          `https://en.wikipedia.org/wiki/${encodeURIComponent(resolvedTitle.replace(/ /g, "_"))}`,
        score,
      };
    }

    if (explicit && resolvedTitle === explicit && imageUrl && score >= 4) {
      return best;
    }
  }

  if (!best) return null;
  if (best.score < 2) return null;
  return best;
}

function buildApiMatchIndex(records) {
  const map = new Map();
  for (const record of records) {
    const key = normalize(record.name);
    if (!map.has(key)) map.set(key, record);
  }
  return map;
}

function resolveApiRecord(entry, apiIndex) {
  const candidates = dedupe([
    apiNameById[entry.id],
    entry.name,
    entry.name.replace(" / Mighty Thor", ""),
    entry.alias,
  ]);

  for (const candidate of candidates) {
    const record = apiIndex.get(normalize(candidate));
    if (record) return record;
  }
  return null;
}

async function writePlaceholderSvg(destination, entry, universe, faction) {
  const universeColor = universe === "mcu" ? "#7f1d1d" : "#0f2a66";
  const factionColor = faction === "heroes" ? "#16a34a" : faction === "villains" ? "#b91c1c" : "#d97706";
  const svg = `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="720" height="1080" viewBox="0 0 720 1080">\n  <defs>\n    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">\n      <stop offset="0%" stop-color="${universeColor}"/>\n      <stop offset="100%" stop-color="#05060a"/>\n    </linearGradient>\n  </defs>\n  <rect width="720" height="1080" fill="url(#bg)"/>\n  <rect x="36" y="36" width="648" height="1008" rx="24" fill="none" stroke="${factionColor}" stroke-width="6"/>\n  <text x="360" y="500" fill="#f8fafc" font-family="Georgia, serif" font-size="54" text-anchor="middle">${entry.name.replace(/&/g, "and")}</text>\n  <text x="360" y="575" fill="#cbd5e1" font-family="Arial, sans-serif" font-size="24" text-anchor="middle">${universe.toUpperCase()} ${faction.toUpperCase()}</text>\n  <text x="360" y="640" fill="#94a3b8" font-family="Arial, sans-serif" font-size="20" text-anchor="middle">Image pending curation</text>\n</svg>`;
  await fs.writeFile(destination, svg, "utf8");
}

async function findExistingMedia(destinationDir, safeId, universe, faction) {
  for (const ext of [".jpg", ".png", ".webp", ".gif", ".avif", ".svg"]) {
    const filePath = path.join(destinationDir, `${safeId}${ext}`);
    try {
      await fs.access(filePath);
      return {
        imagePath: `/media/${universe}/${faction}/${safeId}${ext}`,
        imageSource: ext === ".svg" ? "placeholder" : "cached",
      };
    } catch {
      // Continue checking.
    }
  }
  return null;
}

async function ensureMedia(entry, universe, faction, apiIndex) {
  const safeId = sanitizeFileId(entry.id);
  const destinationDir = path.join(PUBLIC_MEDIA_ROOT, universe, faction);
  await fs.mkdir(destinationDir, { recursive: true });

  const wiki = await resolveWikiProfile(entry, universe);
  const apiRecord = resolveApiRecord(entry, apiIndex);

  let mediaUrl = wiki?.imageUrl || null;
  let mediaType = wiki?.imageUrl ? "wikipedia" : "none";
  let sourceUrl = wiki?.sourcePage || null;

  if (!mediaUrl && apiRecord?.images?.lg) {
    mediaUrl = apiRecord.images.lg;
    mediaType = "superhero-api";
    sourceUrl = `https://akabab.github.io/superhero-api/api/id/${apiRecord.id}.json`;
  }

  if (!mediaUrl && customImageById[entry.id]) {
    mediaUrl = customImageById[entry.id].url;
    mediaType = "fandom";
    sourceUrl = customImageById[entry.id].sourcePage;
  }

  if (!mediaUrl) {
    const placeholderPath = path.join(destinationDir, `${safeId}.svg`);
    await writePlaceholderSvg(placeholderPath, entry, universe, faction);
    return {
      imagePath: `/media/${universe}/${faction}/${safeId}.svg`,
      imageSource: "placeholder",
      sourceUrl,
      apiRecord,
      wiki,
    };
  }

  const extension = getExtension(mediaUrl);
  const destinationPath = path.join(destinationDir, `${safeId}${extension}`);
  const existingMedia = await findExistingMedia(destinationDir, safeId, universe, faction);
  if (existingMedia) {
    return {
      imagePath: existingMedia.imagePath,
      imageSource: existingMedia.imageSource,
      sourceUrl,
      apiRecord,
      wiki,
    };
  }

  try {
    const buffer = await fetchBuffer(mediaUrl);
    await fs.writeFile(destinationPath, buffer);
    return {
      imagePath: `/media/${universe}/${faction}/${safeId}${extension}`,
      imageSource: mediaType,
      sourceUrl,
      apiRecord,
      wiki,
    };
  } catch {
    const placeholderPath = path.join(destinationDir, `${safeId}.svg`);
    await writePlaceholderSvg(placeholderPath, entry, universe, faction);
    return {
      imagePath: `/media/${universe}/${faction}/${safeId}.svg`,
      imageSource: "placeholder",
      sourceUrl,
      apiRecord,
      wiki,
    };
  }
}

async function loadExistingRoster() {
  try {
    const raw = await fs.readFile(OUTPUT_JSON_PATH, "utf8");
    const parsed = JSON.parse(raw);
    const universes = parsed?.universes;
    if (!universes?.mcu || !universes?.dc) throw new Error("Invalid data shape");

    const copyList = (list) => list.map((entry) => ({ id: entry.id, name: entry.name, alias: entry.alias || null }));

    return {
      mcu: {
        heroes: copyList(universes.mcu.heroes || []),
        villains: copyList(universes.mcu.villains || []),
        antiheroes: copyList(universes.mcu.antiheroes || []),
      },
      dc: {
        heroes: copyList(universes.dc.heroes || []),
        villains: copyList(universes.dc.villains || []),
        antiheroes: copyList(universes.dc.antiheroes || []),
      },
    };
  } catch {
    throw new Error("characters.generated.json is required as source roster for phase 2");
  }
}

function mergeRoster(baseList, extras) {
  const map = new Map();
  for (const entry of [...baseList, ...extras]) {
    map.set(entry.id, {
      id: entry.id,
      name: entry.name,
      alias: entry.alias || null,
    });
  }
  return [...map.values()];
}

function buildCharacterRecord(entry, universe, faction, media) {
  const override = profileOverrides[`${universe}:${faction}:${entry.id}`] || {};
  const apiRecord = media.apiRecord || null;
  const wiki = media.wiki || null;
  const stats = toStatsObject(apiRecord?.powerstats);

  const summaryFromWiki = cleanText(wiki?.extract);
  const descriptionFromWiki = cleanText(wiki?.description);

  return {
    id: entry.id,
    name: entry.name,
    alias: entry.alias || null,
    universe,
    faction,
    summary: override.summary || summaryFromWiki || defaultSummary(entry, universe, faction),
    alignment: override.alignment || inferAlignment(faction),
    status: override.status || (faction === "villains" ? "Active Threat / Variable" : "Active / Evolving"),
    debut: override.debut || null,
    fullName: cleanText(override.fullName || apiRecord?.biography?.fullName),
    occupation: cleanText(override.occupation || apiRecord?.work?.occupation),
    placeOfBirth: cleanText(apiRecord?.biography?.placeOfBirth),
    publisher: cleanText(apiRecord?.biography?.publisher),
    firstAppearance: cleanText(apiRecord?.biography?.firstAppearance),
    affiliations: override.affiliations || parseAffiliations(apiRecord?.connections?.groupAffiliation, universe, faction),
    abilities: override.abilities || statsToAbilities(stats, faction),
    keyMoments: override.keyMoments || extractKeyMomentsFromText(summaryFromWiki, entry.name, faction),
    stats,
    image: media.imagePath,
    imageSource: media.imageSource,
    sourceUrl: media.sourceUrl,
    sourceTitle: cleanText(wiki?.title),
    sourceDescription: descriptionFromWiki,
  };
}

async function cleanMediaDirectory() {
  await fs.rm(PUBLIC_MEDIA_ROOT, { recursive: true, force: true });
  await fs.mkdir(PUBLIC_MEDIA_ROOT, { recursive: true });
}

async function processFactionEntries(universe, faction, entries, apiIndex, outputList, concurrency = 4) {
  let cursor = 0;

  async function worker() {
    while (true) {
      const index = cursor;
      cursor += 1;
      if (index >= entries.length) return;

      const entry = entries[index];
      const media = await ensureMedia(entry, universe, faction, apiIndex);
      const record = buildCharacterRecord(entry, universe, faction, media);
      outputList.push(record);
      console.log(`Prepared ${universe}/${faction}/${entry.id} -> ${media.imageSource}`);
    }
  }

  await Promise.all(Array.from({ length: Math.max(1, concurrency) }, () => worker()));
}

async function main() {
  const shouldCleanMedia = process.argv.includes("--clean-media");

  console.log("Loading base roster...");
  const existing = await loadExistingRoster();

  const roster = {
    mcu: {
      heroes: mergeRoster(existing.mcu.heroes, rosterExtras.mcu.heroes),
      villains: mergeRoster(existing.mcu.villains, rosterExtras.mcu.villains),
      antiheroes: mergeRoster(existing.mcu.antiheroes, rosterExtras.mcu.antiheroes),
    },
    dc: {
      heroes: mergeRoster(existing.dc.heroes, rosterExtras.dc.heroes),
      villains: mergeRoster(existing.dc.villains, rosterExtras.dc.villains),
      antiheroes: mergeRoster(existing.dc.antiheroes, rosterExtras.dc.antiheroes),
    },
  };

  if (shouldCleanMedia) {
    console.log("Cleaning media directory...");
    await cleanMediaDirectory();
  } else {
    await fs.mkdir(PUBLIC_MEDIA_ROOT, { recursive: true });
  }

  console.log("Loading superhero reference dataset...");
  const apiDb = await fetchJson("https://raw.githubusercontent.com/akabab/superhero-api/0.3.0/api/all.json");
  const apiIndex = buildApiMatchIndex(apiDb);

  const output = {
    updatedAt: new Date().toISOString(),
    universes: {
      mcu: { heroes: [], villains: [], antiheroes: [] },
      dc: { heroes: [], villains: [], antiheroes: [] },
    },
  };

  for (const universe of ["mcu", "dc"]) {
    for (const faction of ["heroes", "villains", "antiheroes"]) {
      await processFactionEntries(
        universe,
        faction,
        roster[universe][faction],
        apiIndex,
        output.universes[universe][faction],
        4,
      );
    }
  }

  await fs.mkdir(path.dirname(OUTPUT_JSON_PATH), { recursive: true });
  await fs.writeFile(OUTPUT_JSON_PATH, `${JSON.stringify(output, null, 2)}\n`, "utf8");

  console.log(`\nGenerated ${OUTPUT_JSON_PATH}`);
  console.log(`MCU heroes: ${output.universes.mcu.heroes.length}`);
  console.log(`MCU villains: ${output.universes.mcu.villains.length}`);
  console.log(`MCU antiheroes: ${output.universes.mcu.antiheroes.length}`);
  console.log(`DC heroes: ${output.universes.dc.heroes.length}`);
  console.log(`DC villains: ${output.universes.dc.villains.length}`);
  console.log(`DC antiheroes: ${output.universes.dc.antiheroes.length}`);

  const imageStats = {};
  for (const universe of ["mcu", "dc"]) {
    for (const faction of ["heroes", "villains", "antiheroes"]) {
      for (const item of output.universes[universe][faction]) {
        imageStats[item.imageSource] = (imageStats[item.imageSource] || 0) + 1;
      }
    }
  }
  console.log("Image source stats:", imageStats);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
