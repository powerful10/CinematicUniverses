import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const OUTPUT_JSON_PATH = path.join(ROOT, "app/data/characters.generated.json");
const PUBLIC_MEDIA_ROOT = path.join(ROOT, "public/media");

// New characters definition with canonical metadata, stats, and fallback data
const newCharacters = [
  // Marvel Heroes
  {
    id: "MilesMorales",
    name: "Spider-Man (Miles Morales)",
    alias: "Miles Morales",
    universe: "mcu",
    faction: "heroes",
    fullName: "Miles Gonzalo Morales",
    alignment: "Heroic",
    status: "Active / Multiversal Champion",
    firstAppearance: "Ultimate Fallout #4 (August, 2011)",
    summary: "Miles Morales is a Brooklyn teenager bitten by a genetically engineered spider, gaining classic spider-abilities alongside unique bio-electric Venom Blasts and camouflage invisibility. He stepped up following Peter Parker's legacy to protect both New York and the broader multiverse.",
    affiliations: ["Champions", "Avengers", "Spider-Army", "Web-Warriors"],
    abilities: ["Wall-crawling & Spider-Sense", "Bio-Electric Venom Blast", "Spider-Camouflage Invisibility", "Superhuman Agility & Reflexes", "Tactical Acrobatic Combat", "Web-Shooter Mastery"],
    keyMoments: [
      "Took up the mantle of Spider-Man in Brooklyn after witnessing Peter Parker fall in battle.",
      "Mastered his signature Venom Strike and bio-camouflage during the Spider-Verse crisis.",
      "Anchored the Champions and defended the Marvel multiverse across alternate realities."
    ],
    stats: { intelligence: 75, strength: 72, speed: 82, durability: 70, power: 85, combat: 80 },
    apiName: "Spider-Man II",
    wikiTitle: "Miles Morales"
  },
  {
    id: "SpiderGwen",
    name: "Spider-Gwen",
    alias: "Ghost-Spider / Gwen Stacy",
    universe: "mcu",
    faction: "heroes",
    fullName: "Gwendolyne Maxine Stacy",
    alignment: "Heroic",
    status: "Active / Multiverse Traveler",
    firstAppearance: "Edge of Spider-Verse #2 (September, 2014)",
    summary: "On Earth-65, Gwen Stacy was bitten by a radioactive spider instead of Peter Parker. Blending punk-rock rhythm, high agility, and dimensional travel wrist-devices, Ghost-Spider fights crime across multiple realities while maintaining her fiercely independent spirit.",
    affiliations: ["Web-Warriors", "Spider-Army", "The Mary Janes", "Secret Warriors"],
    abilities: ["Superhuman Agility & Reflexes", "Wall-crawling & Precognitive Spider-Sense", "Dimension-Hopping Tech", "Acrobatic Combat Rhythms", "Synthetic Web-Fluid Mechanics", "Tactical Street Combat"],
    keyMoments: [
      "Bitten by radioactive spider on Earth-65 and formed the superhero identity Spider-Woman.",
      "United with the Spider-Army to defeat the Inheritors across multiversal timelines.",
      "Adopted the codename Ghost-Spider while defending parallel Earth realities."
    ],
    stats: { intelligence: 72, strength: 68, speed: 80, durability: 68, power: 74, combat: 78 },
    apiName: "Spider-Gwen",
    wikiTitle: "Spider-Gwen"
  },
  {
    id: "Nova",
    name: "Nova",
    alias: "Human Rocket / Richard Rider",
    universe: "mcu",
    faction: "heroes",
    fullName: "Richard Rider",
    alignment: "Heroic",
    status: "Active Cosmic Centurion",
    firstAppearance: "The Man Called Nova #1 (September, 1976)",
    summary: "Chosen by dying alien Rhomann Dey, Richard Rider was empowered with the boundless Nova Force of Xandar. Transforming into the Human Rocket, Nova became the foremost guardian against cosmic threats like the Annihilation Wave.",
    affiliations: ["Nova Corps", "Guardians of the Galaxy", "New Warriors", "Secret Avengers"],
    abilities: ["Nova Force Manipulation", "Near-Light Cosmic Flight", "Superhuman Strength & Invulnerability", "Gravimetric Energy Beams", "Xandarian Worldmind Tactical Link", "Cosmic Survival"],
    keyMoments: [
      "Empowered with Nova Centurion rank and defended Earth from intergalactic raiders.",
      "Absorbed the entire Xandarian Worldmind during the Annihilation Wave invasion.",
      "Held the Cancerverse line alongside the Guardians of the Galaxy."
    ],
    stats: { intelligence: 70, strength: 88, speed: 92, durability: 88, power: 90, combat: 82 },
    apiName: "Nova",
    wikiTitle: "Nova (Richard Rider)"
  },
  {
    id: "Sentry",
    name: "Sentry",
    alias: "The Golden Guardian / Robert Reynolds",
    universe: "mcu",
    faction: "heroes",
    fullName: "Robert Reynolds",
    alignment: "Heroic",
    status: "Variable / Cosmic Paragon",
    firstAppearance: "The Sentry #1 (September, 2000)",
    summary: "Empowered by a perfected Super Soldier serum giving him the power of one million exploding suns, the Sentry is one of Marvel's most potent beings. However, his power is perpetually shadowed by the Void, a cosmic manifestation of his darker nature.",
    affiliations: ["Avengers", "Dark Avengers", "Mighty Avengers"],
    abilities: ["Power of a Million Exploding Suns", "Molecular Matter Manipulation", "Limitless Physical Strength", "Light Generation & Energy Blasts", "Nigh-Invulnerability & Immortality", "Hypersonic Flight"],
    keyMoments: [
      "Defeated the Void by erasing knowledge of his existence from the entire world.",
      "Joined the New Avengers and stood as Earth's mightiest defensive vanguard.",
      "Tore Ares in half during the Siege of Asgard before being sacrificed in the sun."
    ],
    stats: { intelligence: 75, strength: 100, speed: 95, durability: 98, power: 100, combat: 85 },
    apiName: "Sentry",
    wikiTitle: "Sentry (Robert Reynolds)"
  },
  {
    id: "BetaRayBill",
    name: "Beta Ray Bill",
    alias: "Champion of the Korbinite Race",
    universe: "mcu",
    faction: "heroes",
    fullName: "Beta Ray Bill",
    alignment: "Heroic",
    status: "Active Cosmic Protector",
    firstAppearance: "Thor #337 (November, 1983)",
    summary: "A cyborg champion genetically engineered to protect his displaced people, Beta Ray Bill proved worthy of lifting Thor's hammer Mjolnir. Acknowledging his pure valor, Odin granted him the war hammer Stormbreaker.",
    affiliations: ["Thor Corps", "Annihilators", "Star Masters", "Asgardian Allies"],
    abilities: ["Wields Stormbreaker Hammer", "Weather & Lightning Control", "God-Tier Physical Strength", "Interstellar Flight & Space Survivability", "Enhanced Korbinite Cyborg Physiology", "Master Hammer Combatant"],
    keyMoments: [
      "Lifted Mjolnir in single combat against Thor, proving complete unyielding worthiness.",
      "Gifted Stormbreaker by Odin and formed an unbreakable brotherhood with Thor.",
      "Stood on the frontlines of the Annihilation War alongside the Annihilators."
    ],
    stats: { intelligence: 70, strength: 95, speed: 85, durability: 95, power: 90, combat: 88 },
    apiName: "Beta Ray Bill",
    wikiTitle: "Beta Ray Bill"
  },
  {
    id: "BlackBolt",
    name: "Black Bolt",
    alias: "Midnight King / Blackagar Boltagon",
    universe: "mcu",
    faction: "heroes",
    fullName: "Blackagar Boltagon",
    alignment: "Heroic",
    status: "Inhuman Sovereign",
    firstAppearance: "Fantastic Four #45 (December, 1965)",
    summary: "Monarch of the Inhumans, Black Bolt's speech triggers electron-disrupting sonic concussions capable of leveling entire cities with a whisper. He rules in stoic silence, leading with profound restraint and devastating cosmic might.",
    affiliations: ["Inhuman Royal Family", "Illuminati", "Universal Inhumans"],
    abilities: ["Quasi-Sonic Destruction Scream", "Electron & Particle Manipulation", "Matter & Energy Channeling", "Flight via Anti-Graviton Field", "Master Martial Artist", "Telepathic Shielding"],
    keyMoments: [
      "Ascended Attilan's throne and defended his people through the Terrigenesis crisis.",
      "Joined Marvel's clandestine Illuminati council to neutralize multiversal incursions.",
      "Detonated the Terrigen Bomb across Earth's atmosphere, awakening new Inhumans."
    ],
    stats: { intelligence: 82, strength: 85, speed: 75, durability: 90, power: 98, combat: 86 },
    apiName: "Black Bolt",
    wikiTitle: "Black Bolt"
  },
  {
    id: "Medusa",
    name: "Medusa",
    alias: "Queen of the Inhumans",
    universe: "mcu",
    faction: "heroes",
    fullName: "Medusalith Amaquelin-Boltagon",
    alignment: "Heroic",
    status: "Active Royal Diplomat",
    firstAppearance: "Fantastic Four #36 (March, 1965)",
    summary: "Queen of the Inhumans and voice of her husband Black Bolt, Medusa controls her steel-strong psychokinetic hair with surgical precision. She is a master statesman, fierce battle commander, and steadfast protector of Attilan.",
    affiliations: ["Inhuman Royal Family", "Fantastic Four", "A-Force", "Frightful Four (formerly)"],
    abilities: ["Psychokinetic Hair Control", "Tensile Strength Exceeding Steel", "Tactical Royal Leadership", "Master Hand-to-Hair Combatant", "Acrobatic Grappling", "Inhuman Physiology"],
    keyMoments: [
      "Spoke on behalf of Black Bolt to maintain royal governance and diplomatic stability.",
      "Substituted for the Invisible Woman as an official member of the Fantastic Four.",
      "Led Inhuman forces against mutant factions during the Terrigen mist conflict."
    ],
    stats: { intelligence: 75, strength: 65, speed: 60, durability: 70, power: 75, combat: 78 },
    apiName: "Medusa",
    wikiTitle: "Medusa (Marvel Comics)"
  },
  {
    id: "Bishop",
    name: "Bishop",
    alias: "Lucas Bishop",
    universe: "mcu",
    faction: "heroes",
    fullName: "Lucas Bishop",
    alignment: "Heroic",
    status: "Active Mutant Security Officer",
    firstAppearance: "The Uncanny X-Men #282 (November, 1991)",
    summary: "Born in a dystopian 21st-century timeline where Sentinels enslaved mutants, Bishop traveled back in time to avert the disaster. His mutant power enables him to absorb ambient energy and redirect it as devastating concussive blasts.",
    affiliations: ["X-Men", "XSE (Xavier Security Enforcers)", "War College", "X-Treme X-Men"],
    abilities: ["Energy Absorption & Redirection", "Futuristic Energy Weaponry", "Tactical Warfare Strategy", "Internal Chrono-Spatial Awareness", "Master Marksman & Combatant", "Extreme Pain Tolerance"],
    keyMoments: [
      "Traveled back in time to stop the traitor who brought down Xavier's dream.",
      "Served as senior officer in the XSE protecting mutant survival across eras.",
      "Served on the Krakoan War College training young mutants for planetary defense."
    ],
    stats: { intelligence: 72, strength: 70, speed: 65, durability: 78, power: 84, combat: 85 },
    apiName: "Bishop",
    wikiTitle: "Bishop (Marvel Comics)"
  },
  {
    id: "Psylocke",
    name: "Psylocke",
    alias: "Kwannon / Betsy Braddock",
    universe: "mcu",
    faction: "heroes",
    fullName: "Kwannon / Elizabeth Braddock",
    alignment: "Heroic",
    status: "Active X-Men Field Operative",
    firstAppearance: "New Mutants #45 (November, 1986)",
    summary: "Psylocke channels raw telepathic and telekinetic energy into razor-sharp psychic blades that slice through mental resistance and physical barriers alike. Combining elite ninja ninjutsu with psionic prowess, she is deadly at any range.",
    affiliations: ["X-Men", "X-Force", "Excalibur", "Hellions", "Captain Britain Corps"],
    abilities: ["Psychic Knife & Psionic Katana", "Telepathy & Telekinesis", "Master Ninjutsu & Swordplay", "Stealth Infiltration", "Mental Shields", "Acrobatic Reflexes"],
    keyMoments: [
      "Operated in X-Force carrying out lethal black-ops assignments to protect mutantkind.",
      "Reclaimed her singular identity and mastered dual psychic blades in Krakoan combat.",
      "Led the Hellions team and guided volatile mutants through redemption missions."
    ],
    stats: { intelligence: 76, strength: 65, speed: 72, durability: 68, power: 86, combat: 92 },
    apiName: "Psylocke",
    wikiTitle: "Psylocke"
  },
  {
    id: "EmmaFrost",
    name: "Emma Frost",
    alias: "White Queen",
    universe: "mcu",
    faction: "heroes",
    fullName: "Emma Grace Frost",
    alignment: "Heroic",
    status: "Quiet Council Regent",
    firstAppearance: "The Uncanny X-Men #129 (January, 1980)",
    summary: "An Omega-class telepath and former Hellfire Club White Queen, Emma Frost can also shift into an organic diamond form granting near-invulnerability. Shrewd, wealthy, and brilliant, she evolved into a foundational leader of the mutant nation.",
    affiliations: ["X-Men", "Hellfire Club", "Generation X", "Quiet Council of Krakoa"],
    abilities: ["Omega-Class Telepathy", "Organic Diamond Transformation", "Mental Illusion & Mind Control", "Near-Invulnerable Diamond Shell", "High Society Strategic Influence", "Genius Corporate Tactician"],
    keyMoments: [
      "Shifted from Hellfire adversary to co-director of the Xavier Institute alongside Cyclops.",
      "Unlocked her secondary mutation into impenetrable diamond during Genosha's fall.",
      "Brokered sovereign geopolitical alliances on the Krakoan Quiet Council."
    ],
    stats: { intelligence: 88, strength: 80, speed: 60, durability: 92, power: 90, combat: 78 },
    apiName: "Emma Frost",
    wikiTitle: "Emma Frost"
  },
  {
    id: "Angel",
    name: "Angel",
    alias: "Archangel / Warren Worthington III",
    universe: "mcu",
    faction: "heroes",
    fullName: "Warren Kenneth Worthington III",
    alignment: "Heroic",
    status: "Active Mutant Defender",
    firstAppearance: "The X-Men #1 (September, 1963)",
    summary: "Founding X-Men member endowed with magnificent feathered wings, Warren Worthington III was tragically transformed by Apocalypse into Archangel, wielding razor-sharp metallic techno-organic wings and toxic feather flechettes.",
    affiliations: ["X-Men", "X-Force", "Champions", "Defenders", "Horsemen of Apocalypse"],
    abilities: ["High-Velocity Aerial Flight", "Techno-Organic Razor Wings", "Paralytic Neurotoxin Flechettes", "Aerial Combat Mastery", "Billionaire Financial Backer", "Regenerative Secondary Blood"],
    keyMoments: [
      "Stood as one of the original five X-Men defending Charles Xavier's dream.",
      "Remade into the Angel of Death by Apocalypse before breaking free through sheer will.",
      "Served on Wolverine's strike team X-Force balancing his human and lethal Archangel personas."
    ],
    stats: { intelligence: 68, strength: 65, speed: 84, durability: 72, power: 76, combat: 80 },
    apiName: "Angel",
    wikiTitle: "Warren Worthington III"
  },
  {
    id: "Havok",
    name: "Havok",
    alias: "Alex Summers",
    universe: "mcu",
    faction: "heroes",
    fullName: "Alexander Summers",
    alignment: "Heroic",
    status: "Active Strike Leader",
    firstAppearance: "The X-Men #54 (March, 1969)",
    summary: "Younger brother of Cyclops, Alex Summers absorbs cosmic energy and discharges it as superheated plasma waves radiating in concentric circles. Though his powers are immensely destructive, Havok has led multiple frontline hero teams.",
    affiliations: ["X-Men", "Avengers Unity Division", "X-Factor", "Starjammers"],
    abilities: ["Cosmic Plasma Discharge", "Energy Absorption & Radiation Immunity", "Concentric Concussive Blasts", "Tactical Squad Leadership", "Acrobatic Hand-to-Hand Combat", "Spatial Targeting"],
    keyMoments: [
      "Led the government-sponsored X-Factor squad handling public mutant relations.",
      "Captained the Starjammers across the Shi'ar Empire against Vulcan's tyranny.",
      "Chosen by Captain America to lead the Avengers Unity Division."
    ],
    stats: { intelligence: 72, strength: 65, speed: 68, durability: 74, power: 90, combat: 80 },
    apiName: "Havok",
    wikiTitle: "Havok (comics)"
  },
  {
    id: "Magik",
    name: "Magik",
    alias: "Illyana Rasputina / Darkchylde",
    universe: "mcu",
    faction: "heroes",
    fullName: "Illyana Nikolievna Rasputina",
    alignment: "Heroic",
    status: "Captain of Krakoa / Limbo Sorceress",
    firstAppearance: "Giant-Size X-Men #1 (May, 1975)",
    summary: "Younger sister of Colossus, Illyana Rasputina was kidnapped to the hellish realm of Limbo, where she mastered dark sorcery and forged her Soulsword. She can open stepping discs across space, time, and dimensions.",
    affiliations: ["X-Men", "New Mutants", "Midnight Suns", "War Captains of Krakoa"],
    abilities: ["Soulsword Manifestation", "Interdimensional Stepping Discs", "Supreme Sorcery of Limbo", "Mystical Eldritch Armor", "Master Broadsword Swordsmanship", "Telepathic Shielding"],
    keyMoments: [
      "Forged the Soulsword from her own life essence and deposed the demon Belasco.",
      "Served as one of the four Great Captains organizing Krakoan military operations.",
      "Allied with the Midnight Suns to neutralize dark elder-god incursions."
    ],
    stats: { intelligence: 75, strength: 68, speed: 74, durability: 75, power: 92, combat: 88 },
    apiName: "Magik",
    wikiTitle: "Magik (character)"
  },
  {
    id: "Hercules",
    name: "Hercules",
    alias: "The Prince of Power",
    universe: "mcu",
    faction: "heroes",
    fullName: "Heracles / Harry Cleese",
    alignment: "Heroic",
    status: "Olympian Avenger",
    firstAppearance: "Journey into Mystery Annual #1 (October, 1965)",
    summary: "Son of Zeus and Greek demigod of strength, Hercules has fought across millennia. Wielding an adamantine mace and peerless brawling power, he brings Olympian bravado and genuine heroism to the Avengers.",
    affiliations: ["Avengers", "Gods of Olympus", "Champions", "Defenders"],
    abilities: ["Olympian Demigod Strength", "Immortality & Divine Durability", "Golden Adamantine Mace", "Ancient Grappling & Pankration", "Regenerative Godly Vigor", "Master Archer & Charioteer"],
    keyMoments: [
      "Stood toe-to-toe with Thor and the Hulk in legendary clashes of brute strength.",
      "Fought alongside the Avengers against Kang, the Masters of Evil, and Thanos.",
      "Led the Godpack against the Chaos King to preserve all creation."
    ],
    stats: { intelligence: 65, strength: 100, speed: 65, durability: 95, power: 88, combat: 95 },
    apiName: "Hercules",
    wikiTitle: "Hercules (Marvel Comics)"
  },
  {
    id: "WonderMan",
    name: "Wonder Man",
    alias: "Simon Williams",
    universe: "mcu",
    faction: "heroes",
    fullName: "Simon Williams",
    alignment: "Heroic",
    status: "Ionic Avenger",
    firstAppearance: "The Avengers #9 (October, 1964)",
    summary: "Infused with experimental ionic energy, Simon Williams possesses superhuman physical prowess and complete energy immortality. Despite a pacifist philosophy and career in Hollywood acting, he remains one of Earth's foundational defenders.",
    affiliations: ["Avengers", "West Coast Avengers", "Defenders", "Force Works"],
    abilities: ["Pure Ionic Energy Form", "Immortal Invulnerability", "Class-100 Physical Strength", "Ionic Energy Blasts & Flight", "Teleportation & Size Alteration", "Hollywood Theatricality"],
    keyMoments: [
      "Sacrificed his life to save the original Avengers from Baron Zemo's betrayal.",
      "Resurrected as an immortal being of pure ionic power and co-founded West Coast Avengers.",
      "Provided the brain-wave patterns used by Hank Pym and Ultron to create Vision."
    ],
    stats: { intelligence: 70, strength: 95, speed: 78, durability: 92, power: 90, combat: 78 },
    apiName: "Wonder Man",
    wikiTitle: "Wonder Man"
  },
  {
    id: "CaptainBritain",
    name: "Captain Britain",
    alias: "Brian Braddock",
    universe: "mcu",
    faction: "heroes",
    fullName: "Brian Braddock",
    alignment: "Heroic",
    status: "Champion of the Omniverse",
    firstAppearance: "Captain Britain Weekly #1 (October, 1976)",
    summary: "Chosen by Merlin and given the Amulet of Right, Brian Braddock became Captain Britain, defender of the British Isles and the Captain Britain Corps across the multiverse. His power is directly fueled by confidence and willpower.",
    affiliations: ["Excalibur", "Captain Britain Corps", "MI-13", "Secret Avengers"],
    abilities: ["Amulet of Right Mystical Power", "Superhuman Strength & Supersonic Flight", "Interdimensional Shielding", "Confidence-Scalable Power", "Master British Swordsmanship", "Genius Physics Mind"],
    keyMoments: [
      "Defended otherworld and anchored the Captain Britain Corps across infinite Earths.",
      "Formed and led the mutant hero team Excalibur in the UK.",
      "Stood alongside the Secret Avengers against cosmic incursions."
    ],
    stats: { intelligence: 78, strength: 88, speed: 75, durability: 88, power: 85, combat: 82 },
    apiName: "Captain Britain",
    wikiTitle: "Captain Britain"
  },

  // Marvel Villains
  {
    id: "RedHulk",
    name: "Red Hulk",
    alias: "Rulk / General Thaddeus 'Thunderbolt' Ross",
    universe: "mcu",
    faction: "villains",
    fullName: "Thaddeus E. Ross",
    alignment: "Villainous",
    status: "Active Super Soldier Titan",
    firstAppearance: "Incredible Hulk #1 (May 1962, as Ross); Hulk #1 (January 2008, as Red Hulk)",
    summary: "Obsessed with capturing Bruce Banner, US General 'Thunderbolt' Ross underwent classified gamma and cosmic radiation enhancements through the Intelligencia. Unlike Hulk, Red Hulk retains military battle cunning and generates superheated thermal radiation that melts concrete with every punch.",
    affiliations: ["Code Red", "Intelligencia", "Offenders", "Thunderbolts", "US Military"],
    abilities: ["Gamma & Cosmic Thermal Radiation Emission", "Rage-Generated Plasma Heat Aura", "Colossal Physical Strength", "Energy Absorption", "Strategic Military Command", "Bulletproof & Missileproof Hull"],
    keyMoments: [
      "Hunted Bruce Banner across decades as a three-star US Air Force general.",
      "Transformed by MODOK and the Leader into the lethal, tactical Red Hulk.",
      "Defeated the Hulk, Thor, and the Abomination in single combat across Earth and space."
    ],
    stats: { intelligence: 78, strength: 100, speed: 68, durability: 95, power: 92, combat: 88 },
    apiName: "Red Hulk",
    wikiTitle: "Thunderbolt Ross"
  },
  {
    id: "Abomination",
    name: "Abomination",
    alias: "Emil Blonsky",
    universe: "mcu",
    faction: "villains",
    fullName: "Emil Blonsky",
    alignment: "Villainous",
    status: "Active Heavy Enforcer",
    firstAppearance: "Tales to Astonish #90 (April, 1967)",
    summary: "Ex-KGB operative Emil Blonsky intentionally bathed himself in a higher dose of gamma radiation than Bruce Banner received, morphing into the reptilian Abomination. Stronger than the base Hulk at resting rage, he is a savage recurring menace.",
    affiliations: ["Masters of Evil", "Intelligencia", "KGB (formerly)", "Forgotten"],
    abilities: ["Monstrous Physical Strength", "Scaly Armored Exoskeleton", "Extreme Kinetic Durability", "Hyper-Leaping & Seismic Slams", "KGB Military Hand-to-Hand Combat", "Regenerative Gamma Vitality"],
    keyMoments: [
      "Overwhelmed the Hulk during their first brutal clash in New Mexico.",
      "Murdered Betty Ross via radiation poisoning, igniting Banner's eternal wrath.",
      "Fought across Harlem against the Hulk in an apocalyptic destructive siege."
    ],
    stats: { intelligence: 62, strength: 95, speed: 60, durability: 92, power: 85, combat: 85 },
    apiName: "Abomination",
    wikiTitle: "Abomination (character)"
  },
  {
    id: "Carnage",
    name: "Carnage",
    alias: "Cletus Kasady",
    universe: "mcu",
    faction: "villains",
    fullName: "Cletus Cortland Kasady",
    alignment: "Villainous",
    status: "Active Symbiote Killer",
    firstAppearance: "The Amazing Spider-Man #361 (April, 1992)",
    summary: "When Venom's offspring bonded with sadistic serial killer Cletus Kasady at a molecular bloodstream level, Carnage was born. Far deadlier and more chaotic than Venom, he morphs symbiote tendrils into scythes, axes, and lethal projectiles.",
    affiliations: ["Maximum Carnage Gang", "Cult of Knull", "Symbiote Hive"],
    abilities: ["Blood-Bonded Symbiote Weaponry", "Symbiote Blades, Scythes & Projectiles", "Superhuman Strength Exceeding Venom & Spider-Man", "Wall-Crawling & Camouflage", "Undetectable to Spider-Sense", "Rapid Cellular Regeneration"],
    keyMoments: [
      "Escaped Ravencroft and terrorized Manhattan in the iconic Maximum Carnage massacre.",
      "Forced Spider-Man and Venom into a desperate truce to stop his reign of slaughter.",
      "Acted as the harbinger of Knull the Symbiote God across Earth."
    ],
    stats: { intelligence: 65, strength: 88, speed: 84, durability: 88, power: 90, combat: 84 },
    apiName: "Carnage",
    wikiTitle: "Carnage (character)"
  },
  {
    id: "DoctorOctopus",
    name: "Doctor Octopus",
    alias: "Doc Ock / Otto Octavius",
    universe: "mcu",
    faction: "villains",
    fullName: "Dr. Otto Gunther Octavius",
    alignment: "Villainous",
    status: "Sinister Six Mastermind",
    firstAppearance: "The Amazing Spider-Man #3 (July, 1963)",
    summary: "A nuclear physicist whose body was permanently fused with four artificially intelligent mechanical tentacles, Doctor Octopus is Spider-Man's most enduring cerebral nemesis and founder of the Sinister Six.",
    affiliations: ["Sinister Six", "Masters of Evil", "Legion of Accursed"],
    abilities: ["Four Telescopic Titanium-Steel Tentacles", "Genius-Level Nuclear & Cybernetic Intellect", "Master Strategist & Planner", "High-Speed Climbing & Striking", "Tactical Pre-Planning", "Direct Neural Harness Interface"],
    keyMoments: [
      "Founded the original Sinister Six uniting Spider-Man's most dangerous adversaries.",
      "Nearly incinerated the Earth using his Octavian lens satellites in Ends of the Earth.",
      "Swapped consciousness with Peter Parker, briefly becoming the Superior Spider-Man."
    ],
    stats: { intelligence: 94, strength: 65, speed: 55, durability: 75, power: 75, combat: 78 },
    apiName: "Doctor Octopus",
    wikiTitle: "Doctor Octopus"
  },
  {
    id: "Juggernaut",
    name: "Juggernaut",
    alias: "The Unstoppable / Cain Marko",
    universe: "mcu",
    faction: "villains",
    fullName: "Cain Marko",
    alignment: "Villainous",
    status: "Unstoppable Mystic Force",
    firstAppearance: "The X-Men #12 (July, 1965)",
    summary: "Stepbrother to Charles Xavier, Cain Marko was imbued with the mystical power of the Crimson Gem of Cyttorak. Once he gains forward momentum, no physical force on Earth or in the cosmos can halt his forward charge.",
    affiliations: ["Brotherhood of Mutants", "Excalibur", "Thunderbolts", "Cyttorak Avatars"],
    abilities: ["Unstoppable Forward Kinetic Momentum", "Cyttorak Mystic Invulnerability Force Field", "God-Tier Physical Strength", "Immunity to Physical Fatigue & Hunger", "Telepathic-Blocking Domed Helmet", "Cataclysmic Shockwaves"],
    keyMoments: [
      "Smashed through the X-Mansion defense systems in his inaugural unstoppable rampage.",
      "Tore through whole superhero teams single-handedly across decades of clashes.",
      "Chosen as the Kuurth Breaker of Stone during the Fear Itself crisis."
    ],
    stats: { intelligence: 55, strength: 100, speed: 60, durability: 100, power: 90, combat: 82 },
    apiName: "Juggernaut",
    wikiTitle: "Juggernaut (character)"
  },
  {
    id: "Sandman",
    name: "Sandman",
    alias: "William Baker / Flint Marko",
    universe: "mcu",
    faction: "villains",
    fullName: "William Baker",
    alignment: "Villainous",
    status: "Variable / Rogue Element",
    firstAppearance: "The Amazing Spider-Man #4 (September, 1963)",
    summary: "Caught in a radioactive beach sand explosion while fleeing police, Flint Marko's body converted into living granular sand. He can reshape his limbs into crushing sandhammers, dissipate through physical attacks, and summon sandstorms.",
    affiliations: ["Sinister Six", "Frightful Four", "Outlaws", "Avengers (briefly)"],
    abilities: ["Granular Shape-Shifting & Density Control", "Form Hardened Stone & Sand Mallets", "Sandstorm Generation & Flight", "Immunity to Physical Concussion", "Absorption of Environmental Sand", "High Adaptability"],
    keyMoments: [
      "Clashed with Spider-Man as one of his original founding rogue gallery members.",
      "Joined the inaugural Sinister Six lineup under Doctor Octopus's leadership.",
      "Struggled with redemption, serving temporarily as an active reserve Avenger."
    ],
    stats: { intelligence: 60, strength: 80, speed: 62, durability: 90, power: 85, combat: 75 },
    apiName: "Sandman",
    wikiTitle: "Sandman (Marvel Comics)"
  },
  {
    id: "Electro",
    name: "Electro",
    alias: "Max Dillon",
    universe: "mcu",
    faction: "villains",
    fullName: "Maxwell Dillon",
    alignment: "Villainous",
    status: "Active Electric Threat",
    firstAppearance: "The Amazing Spider-Man #9 (February, 1964)",
    summary: "Struck by lightning while repairing power lines, Max Dillon gained the power to generate, store, and discharge millions of volts of high-frequency electricity. He can ride electrical currents and short out entire city grids.",
    affiliations: ["Sinister Six", "Frightful Four", "Emissaries of Evil"],
    abilities: ["Electrostatic Energy Discharge", "Electrical Current Riding & Flight", "Disruption of Power Grids & Tech", "Electromagnetic Levitation", "Lightning Bolts & Plasma Blasts", "Energy Body State"],
    keyMoments: [
      "Blacked out New York City during his opening campaign against Spider-Man.",
      "Served on multiple iterations of Doctor Octopus's Sinister Six strike teams.",
      "Transformed into an antimatter-charged live wire during multiversal crossovers."
    ],
    stats: { intelligence: 65, strength: 65, speed: 75, durability: 70, power: 92, combat: 70 },
    apiName: "Electro",
    wikiTitle: "Electro (Marvel Comics)"
  },
  {
    id: "Kraven",
    name: "Kraven the Hunter",
    alias: "Sergei Kravinoff",
    universe: "mcu",
    faction: "villains",
    fullName: "Sergei Nikolaevich Kravinoff",
    alignment: "Villainous",
    status: "Elite Apex Predator",
    firstAppearance: "The Amazing Spider-Man #15 (August, 1964)",
    summary: "A Russian aristocrat and big-game hunter enhanced by mystical jungle elixirs, Kraven views Spider-Man as the ultimate quarry. Disdaining modern firearms, he hunts with spears, traps, and bare-knuckle savagery.",
    affiliations: ["Sinister Six", "Kravinoff Family"],
    abilities: ["Mystical Elixir Enhanced Physicals", "Apex Tracking & Scent Hunting", "Master Trapper & Poison Brewer", "Lethal Hand-to-Hand Combatant", "Master of Nerve Strikes & Blades", "Indomitable Predator Will"],
    keyMoments: [
      "Trapped and buried Spider-Man alive in the legendary masterpiece Kraven's Last Hunt.",
      "Donned Spider-Man's suit and prowled the city to prove his absolute superiority.",
      "Resurrected through dark sacrificial rituals by the Kravinoff family clan."
    ],
    stats: { intelligence: 75, strength: 75, speed: 70, durability: 78, power: 65, combat: 92 },
    apiName: "Kraven the Hunter",
    wikiTitle: "Kraven the Hunter"
  },
  {
    id: "Bullseye",
    name: "Bullseye",
    alias: "Lester",
    universe: "mcu",
    faction: "villains",
    fullName: "Lester",
    alignment: "Villainous",
    status: "Active Lethal Mercenary",
    firstAppearance: "Daredevil #131 (March, 1976)",
    summary: "A psychopathic assassin with innate superhuman marksmanship, Bullseye can turn any object—from a playing card or paperclip to a sniper bullet—into a lethal projectile. Reinforced with an adamantium spine, he is Daredevil's darkest personal foil.",
    affiliations: ["Thunderbolts", "Dark Avengers", "Hand (formerly)"],
    abilities: ["Infallible Projectile Accuracy", "Adamantium-Reinforced Skeleton", "Deadly Lethal Improvisation", "Master Martial Artist", "Acrobatic Reflexes", "Sadistic Psychological Torment"],
    keyMoments: [
      "Murdered Elektra with her own sai, cementing a legendary blood rivalry with Daredevil.",
      "Impersonated Hawkeye on Norman Osborn's Dark Avengers squad.",
      "Smashed through Daredevil's life in Hell's Kitchen across decades of assassinations."
    ],
    stats: { intelligence: 72, strength: 60, speed: 70, durability: 75, power: 55, combat: 95 },
    apiName: "Bullseye",
    wikiTitle: "Bullseye (character)"
  },
  {
    id: "Mephisto",
    name: "Mephisto",
    alias: "Lord of the Underworld",
    universe: "mcu",
    faction: "villains",
    fullName: "Mephisto",
    alignment: "Villainous",
    status: "Hell-Realm Sovereign",
    firstAppearance: "The Silver Surfer #3 (December, 1968)",
    summary: "The archetypal demon lord of Marvel lore, Mephisto rules a netherworld pocket dimension, trading deceitful pacts and consuming souls. He is behind some of Marvel history's most tragic bargains, including Ghost Rider's curse.",
    affiliations: ["Lords of the Splinter Realms", "Council of Red"],
    abilities: ["Reality & Soul Manipulation", "Cosmic Black Magic", "Shape-Shifting & Immortality", "Dimensional Warping", "Summoning Demon Armies", "Contractual Deception"],
    keyMoments: [
      "Bound Johnny Blaze with Zarathos, creating the first Ghost Rider.",
      "Erased Peter Parker and Mary Jane's marriage in One More Day.",
      "Orchestrated multiversal villain councils across infinite realities."
    ],
    stats: { intelligence: 92, strength: 85, speed: 75, durability: 95, power: 100, combat: 80 },
    apiName: "Mephisto",
    wikiTitle: "Mephisto (Marvel Comics)"
  },

  // Marvel Antiheroes
  {
    id: "BlackCat",
    name: "Black Cat",
    alias: "Felicia Hardy",
    universe: "mcu",
    faction: "antiheroes",
    fullName: "Felicia Sara Hardy",
    alignment: "Chaotic / Neutral",
    status: "Active Master Thief",
    firstAppearance: "The Amazing Spider-Man #194 (July, 1979)",
    summary: "Daughter of a world-renowned cat burglar, Felicia Hardy took up the mantle of Black Cat. Combining Olympic acrobatics, martial arts, and subconscious probability manipulation ('bad luck' fields), she maintains an electric cat-and-mouse romance with Spider-Man.",
    affiliations: ["Heroes for Hire", "Defenders", "Cat's Claw"],
    abilities: ["Tiniest Probability 'Bad Luck' Hexes", "Olympic Gymnastics & Cat Burglary", "Retractable Micro-Claws & Grapples", "Night-Vision Contact Lenses", "Master Martial Artist", "Master Infiltrator"],
    keyMoments: [
      "Broke Spider-Man out of custody and stole into the hearts of Marvel fans.",
      "Ran New York's underworld as queenpin before returning to freelance heroism.",
      "Stole ancient relics from Doctor Strange and the Thieves Guild."
    ],
    stats: { intelligence: 72, strength: 55, speed: 75, durability: 65, power: 65, combat: 82 },
    apiName: "Black Cat",
    wikiTitle: "Black Cat (character)"
  },
  {
    id: "SilverSable",
    name: "Silver Sable",
    alias: "Silver Sablinova",
    universe: "mcu",
    faction: "antiheroes",
    fullName: "Silveria Sablinova",
    alignment: "Chaotic / Neutral",
    status: "CEO of Silver Sable International",
    firstAppearance: "The Amazing Spider-Man #265 (June, 1985)",
    summary: "Leader of the elite Symkarian Wild Pack mercenary force, Silver Sable is an uncompromising tactician, markswoman, and hand-to-hand combatant dedicated to hunting war criminals and funding her homeland.",
    affiliations: ["Wild Pack", "Heroes for Hire", "The Outlaws"],
    abilities: ["Master Martial Artist & Marksman", "Wild Pack Military Command", "Kevlar-Reinforced Tactical Armor", "Master Knife Fighter & Thrower", "International Espionage", "Corporate Logistics"],
    keyMoments: [
      "Hunted international war criminals across Europe alongside Spider-Man.",
      "Held off Doctor Octopus's army during Ends of the Earth.",
      "Protected Symkarian sovereignty from Latverian expansion."
    ],
    stats: { intelligence: 78, strength: 58, speed: 65, durability: 68, power: 45, combat: 88 },
    apiName: "Silver Sable",
    wikiTitle: "Silver Sable"
  },
  {
    id: "AntiVenom",
    name: "Anti-Venom",
    alias: "Eddie Brock",
    universe: "mcu",
    faction: "antiheroes",
    fullName: "Edward Charles Allan Brock",
    alignment: "Chaotic / Neutral",
    status: "Purifying Symbiote",
    firstAppearance: "The Amazing Spider-Man #569 (August, 2008)",
    summary: "When Eddie Brock's dormant symbiote remnants merged with his white blood cells under Mister Negative's healing touch, Anti-Venom emerged. Possessing caustic antibodies that neutralize toxins, diseases, and other symbiotes, he functions as a lethal vigilante purifier.",
    affiliations: ["Revengers", "Savage Six"],
    abilities: ["Caustic Symbiote Cleansing Antibodies", "Cure Toxins, Poisons & Symbiotes", "Immunity to Fire & Sound", "Camouflage & Web-Shooting", "Wall-Crawling & Tendrils", "Healing Factor"],
    keyMoments: [
      "Purged the Venom symbiote from Mac Gargan with searing touch.",
      "Cured thousands of New Yorkers infected by the Spider-Island virus.",
      "Fought alongside Agent Venom against Carnage's forces."
    ],
    stats: { intelligence: 68, strength: 88, speed: 78, durability: 88, power: 86, combat: 84 },
    apiName: "Anti-Venom",
    wikiTitle: "Anti-Venom"
  },

  // DC Heroes
  {
    id: "GreenLanternJohnStewart",
    name: "Green Lantern (John Stewart)",
    alias: "John Stewart",
    universe: "dc",
    faction: "heroes",
    fullName: "John Stewart",
    alignment: "Heroic",
    status: "Honor Guard Architect",
    firstAppearance: "Green Lantern #87 (December, 1971)",
    summary: "A US Marine veteran and master architect, John Stewart brings unmatched discipline and structural integrity to his Green Lantern Power Ring. His constructs are not hollow light—they are solid, functional, mechanical masterpieces built from the inside out.",
    affiliations: ["Green Lantern Corps", "Justice League", "Darkstars"],
    abilities: ["Oan Power Ring Willpower Constructs", "Architectural Solid-Light Engineering", "US Marine Tactical Combat & Marksmanship", "FTL Space Flight & Planetary Survival", "Energy Absorption & Force Fields", "Indomitable Willpower"],
    keyMoments: [
      "Selected by the Guardians of the Universe as Earth's alternate Green Lantern.",
      "Anchored the Justice League on the frontlines against Darkseid and Brainiac.",
      "Ascended to the Green Lantern Honor Guard overseeing interstellar sectors."
    ],
    stats: { intelligence: 82, strength: 88, speed: 85, durability: 88, power: 95, combat: 90 },
    apiName: "Green Lantern",
    wikiTitle: "John Stewart (character)"
  },
  {
    id: "SwampThing",
    name: "Swamp Thing",
    alias: "Avatar of the Green / Alec Holland",
    universe: "dc",
    faction: "heroes",
    fullName: "Alec Holland",
    alignment: "Heroic",
    status: "Elemental Earth Sovereign",
    firstAppearance: "House of Secrets #92 (July, 1971)",
    summary: "When botanist Alec Holland was murdered in Louisiana swamps by corporate saboteurs, his consciousness bonded with the elemental plant network known as the Green. As Swamp Thing, he commands all plant life on Earth.",
    affiliations: ["Parliament of Trees", "Justice League Dark", "Shadowpact"],
    abilities: ["Avatar of the Green Plant Manipulation", "Regenerate Body from Any Flora", "Biomass Size Alteration & Spores", "Superhuman Elemental Strength", "Travel via the Earth's Root Web", "Astral Projection"],
    keyMoments: [
      "Discovered through Alan Moore's revelation that he was not a man turned monster, but a plant god that believed it was Alec Holland.",
      "Defended the Green against the Rot and Anton Arcane in the Rotworld crisis.",
      "Joined Justice League Dark to protect Earth's mystical biosphere."
    ],
    stats: { intelligence: 84, strength: 95, speed: 60, durability: 100, power: 98, combat: 80 },
    apiName: "Swamp Thing",
    wikiTitle: "Swamp Thing"
  },
  {
    id: "Deadman",
    name: "Deadman",
    alias: "Boston Brand",
    universe: "dc",
    faction: "heroes",
    fullName: "Boston Brand",
    alignment: "Heroic",
    status: "Spirit Infiltrator",
    firstAppearance: "Strange Adventures #205 (October, 1967)",
    summary: "A trapeze artist murdered during a circus stunt, Boston Brand was granted the ability to walk the Earth as an invisible spirit by the Hindu goddess Rama Kushna. He can possess any living body to fight injustice and guide lost souls.",
    affiliations: ["Justice League Dark", "Sentinels of Magic", "Black Lantern Corps (formerly)"],
    abilities: ["Full Body Possession of Living Beings", "Invisibility & Intangibility", "Flight & Astral Perception", "Circus Acrobatics Mastery", "Immunity to Physical Harm", "Mystic Sense"],
    keyMoments: [
      "Sought his own assassin while freeing innocent victims across the globe.",
      "Served on Justice League Dark as their primary ethereal scout.",
      "Given the White Lantern Ring during the Brightest Day resurrection."
    ],
    stats: { intelligence: 70, strength: 50, speed: 70, durability: 100, power: 85, combat: 70 },
    apiName: "Deadman",
    wikiTitle: "Deadman (DC Comics)"
  },
  {
    id: "TheSpectre",
    name: "The Spectre",
    alias: "Wrath of God / Jim Corrigan",
    universe: "dc",
    faction: "heroes",
    fullName: "Aztar / Jim Corrigan",
    alignment: "Heroic",
    status: "Cosmic Judge of Vengeance",
    firstAppearance: "More Fun Comics #52 (February, 1940)",
    summary: "The cosmic embodiment of divine vengeance, the Spectre must be anchored to a human soul to temper his limitless retribution. Bound first to murdered detective Jim Corrigan, he punishes the guilty with terrifying reality-altering power.",
    affiliations: ["Justice Society of America", "Sentinels of Magic"],
    abilities: ["Limitless Reality & Matter Warping", "Near-Omnipotent Divine Power", "Omnipresence & Intangibility", "Time & Space Manipulation", "Soul Judgment & Punishment", "Absolute Immortality"],
    keyMoments: [
      "Fought in World War II with the original Justice Society of America.",
      "Manipulated by Eclipso to eliminate magic across the Day of Vengeance crisis.",
      "Reanchored his divine mandate to protect human redemption."
    ],
    stats: { intelligence: 95, strength: 100, speed: 95, durability: 100, power: 100, combat: 85 },
    apiName: "Spectre",
    wikiTitle: "Spectre (DC Comics character)"
  },
  {
    id: "StaticShock",
    name: "Static",
    alias: "Static Shock / Virgil Hawkins",
    universe: "dc",
    faction: "heroes",
    fullName: "Virgil Ovid Hawkins",
    alignment: "Heroic",
    status: "Dakota City Defender",
    firstAppearance: "Static #1 (June, 1993)",
    summary: "Exposed to mutagenic gas during the Big Bang gang shootout in Dakota City, teenager Virgil Hawkins gained electromagnetic manipulation powers. Flying on a metal manhole cover or Static Saucer, he uses wit and science to defend Dakota and the Teen Titans.",
    affiliations: ["Teen Titans", "Shadow Cabinet", "Heroes", "Young Justice"],
    abilities: ["Electromagnetic Energy Generation", "Levitation & Flight via Metallic Saucers", "Magnetize & Manipulate Metals", "Taser Energy Projectiles & Forcefields", "Genius Scientific Acumen", "Electrical Drain & Redirection"],
    keyMoments: [
      "Survives the Dakota Big Bang and becomes the hero of Paris Island.",
      "Joined the Teen Titans and defended Earth against the Terror Titans.",
      "Defeated Holocaust and saved the Milestone Universe heroes."
    ],
    stats: { intelligence: 80, strength: 60, speed: 75, durability: 70, power: 88, combat: 75 },
    apiName: "Static",
    wikiTitle: "Static (character)"
  },
  {
    id: "BlackLightning",
    name: "Black Lightning",
    alias: "Jefferson Pierce",
    universe: "dc",
    faction: "heroes",
    fullName: "Jefferson Michael Pierce",
    alignment: "Heroic",
    status: "Active Educator & Hero",
    firstAppearance: "Black Lightning #1 (April, 1977)",
    summary: "An Olympic decathlete and dedicated high-school principal in Suicide Slum, Jefferson Pierce possesses internal bio-electrical generation. As Black Lightning, he channels electrical force fields, lightning blasts, and righteous defense of marginalized communities.",
    affiliations: ["Justice League", "Outsiders", "Batman's Strike Force"],
    abilities: ["Bio-Electric Energy Blasts", "Electromagnetic Force Fields", "Olympic Decathlon Athletics & Hand-to-Hand", "Supercharged Reaction Speeds", "Electrical Absorption", "Community Leadership"],
    keyMoments: [
      "Cleaned up Suicide Slum and opposed the corrupt 100 criminal syndicate.",
      "Founding cornerstone member of Batman's covert Outsiders team.",
      "Appointed US Secretary of Education under the Luthor administration."
    ],
    stats: { intelligence: 78, strength: 68, speed: 75, durability: 75, power: 88, combat: 85 },
    apiName: "Black Lightning",
    wikiTitle: "Black Lightning"
  },
  {
    id: "Atom",
    name: "Atom",
    alias: "Ray Palmer",
    universe: "dc",
    faction: "heroes",
    fullName: "Raymond Palmer",
    alignment: "Heroic",
    status: "Subatomic Explorer",
    firstAppearance: "Showcase #34 (October, 1961)",
    summary: "A physicist who harnessed white dwarf star matter in a compression belt, Dr. Ray Palmer can shrink down to subatomic levels while retaining or multiplying his full human mass and punching power.",
    affiliations: ["Justice League", "Suicide Squad (briefly)", "Indigo Tribe"],
    abilities: ["Subatomic Size Alteration via White Dwarf Star", "Mass & Weight Distribution Control", "Travel through Phone Lines & Neural Synapses", "Genius Nuclear & Quantum Physics", "Microscopic Reconnaissance", "Superhuman Density Strikes"],
    keyMoments: [
      "Discovered white dwarf star lens compression and saved Ivy Town.",
      "Traveled into the brains and bloodstreams of fallen heroes to perform miracle surgeries.",
      "Traveled the Bleed across 52 multiversal realities in search of Ray Palmer."
    ],
    stats: { intelligence: 92, strength: 75, speed: 70, durability: 72, power: 80, combat: 75 },
    apiName: "Atom II",
    wikiTitle: "Atom (Ray Palmer)"
  },
  {
    id: "PlasticMan",
    name: "Plastic Man",
    alias: "Patrick 'Eel' O'Brian",
    universe: "dc",
    faction: "heroes",
    fullName: "Patrick O'Brian",
    alignment: "Heroic",
    status: "Indestructible Shapeshifter",
    firstAppearance: "Police Comics #1 (August, 1941)",
    summary: "Doused in an unknown chemical compound during a botched chemical plant heist, small-time crook Eel O'Brian was saved by monks and reformed into Plastic Man. Virtually indestructible, he can morph into anything from rubber gliders to giant bouncy balls.",
    affiliations: ["Justice League", "All-Star Squadron", "Terrifics"],
    abilities: ["Total Molecular Elasticity & Shape-Shifting", "Immunity to Physical Concussion & Bullets", "Density Manipulation & Camouflage", "Nigh-Immortality & Regeneration", "Hilarious Disorientation Tactics", "Superhuman Reflexes"],
    keyMoments: [
      "Reformed from street hoodlum to one of the most beloved Justice League defenders.",
      "Held off Martian invaders and the Burning Martian Fernus single-handedly.",
      "Reassembled his scattered molecules after spending 3,000 years under the ocean."
    ],
    stats: { intelligence: 72, strength: 80, speed: 70, durability: 100, power: 88, combat: 80 },
    apiName: "Plastic Man",
    wikiTitle: "Plastic Man"
  },
  {
    id: "Steel",
    name: "Steel",
    alias: "John Henry Irons",
    universe: "dc",
    faction: "heroes",
    fullName: "John Henry Irons",
    alignment: "Heroic",
    status: "Metropolis High-Tech Guardian",
    firstAppearance: "The Adventures of Superman #500 (June, 1993)",
    summary: "Inspired by Superman's sacrifice against Doomsday, weapons engineer John Henry Irons forged a suit of powered armor and an energy-charged sledgehammer to uphold the Man of Steel's legacy in Metropolis.",
    affiliations: ["Justice League", "Team Superman", "Suicide Squad"],
    abilities: ["Advanced Powered Exo-Armor", "Kinetic Energy Sledgehammer", "Genius Ballistics & Metallurgy Engineering", "Wrist-Mounted Rivet Guns", "Jet Boot Flight", "Tactical Combatant"],
    keyMoments: [
      "Stepped forward as the Man of Steel in Metropolis following Superman's death.",
      "Shut down illegal Toastmaster weapon distribution in the streets.",
      "Designed the Justice League Watchtower teleportation and defense systems."
    ],
    stats: { intelligence: 88, strength: 85, speed: 70, durability: 88, power: 80, combat: 82 },
    apiName: "Steel",
    wikiTitle: "Steel (John Henry Irons)"
  },
  {
    id: "Katana",
    name: "Katana",
    alias: "Tatsu Yamashiro",
    universe: "dc",
    faction: "heroes",
    fullName: "Tatsu Yamashiro",
    alignment: "Heroic",
    status: "Active Outsider Swordsman",
    firstAppearance: "The Brave and the Bold #200 (July, 1983)",
    summary: "Following the murder of her husband by the Yakuza, Tatsu Yamashiro took possession of the mystical Soultaker sword, which traps the souls of its victims. She is a peerless martial artist and loyal Outsiders commander.",
    affiliations: ["Outsiders", "Birds of Prey", "Suicide Squad", "Justice League of America"],
    abilities: ["Wields the Soultaker Mystical Blade", "Communes with Trapped Souls", "Master of Kenjutsu & Iaido", "Master Martial Artist & Acrobat", "Stealth & Infiltration", "Unshakable Bushido Honor"],
    keyMoments: [
      "Took vengeance against Takeo and mastered the Soultaker sword.",
      "Co-founded Batman's Outsiders, anchoring their frontline melee operations.",
      "Served on Amanda Waller's Suicide Squad as Waller's personal enforcer."
    ],
    stats: { intelligence: 75, strength: 65, speed: 78, durability: 70, power: 75, combat: 95 },
    apiName: "Katana",
    wikiTitle: "Katana (comics)"
  },

  // DC Villains
  {
    id: "SolomonGrundy",
    name: "Solomon Grundy",
    alias: "Born on a Monday / Cyrus Gold",
    universe: "dc",
    faction: "villains",
    fullName: "Cyrus Gold",
    alignment: "Villainous",
    status: "Immortal Slaughter Swamp Zombie",
    firstAppearance: "All-American Comics #61 (October, 1944)",
    summary: "Murdered in Slaughter Swamp in the late 19th century, Cyrus Gold was resurrected decades later as an unkillable, plant-matter zombie brute. Each time Grundy dies, he returns with altered intellect and monstrous strength.",
    affiliations: ["Injustice Society", "Legion of Doom", "Secret Society of Super Villains"],
    abilities: ["Immortal Resurrection Cycle", "Colossal Superhuman Strength", "Bulletproof Plant-Decay Flesh", "Immunity to Pain & Fatigue", "Crushing Brutality", "Spiritual Invulnerability"],
    keyMoments: [
      "Challenged the Golden Age Green Lantern Alan Scott using wood-infused invulnerability.",
      "Tore through the Justice League in multiple resurrected forms.",
      "Stood as the muscle of the Legion of Doom against Superman and Batman."
    ],
    stats: { intelligence: 45, strength: 95, speed: 50, durability: 98, power: 85, combat: 78 },
    apiName: "Solomon Grundy",
    wikiTitle: "Solomon Grundy (character)"
  },
  {
    id: "Clayface",
    name: "Clayface",
    alias: "Basil Karlo",
    universe: "dc",
    faction: "villains",
    fullName: "Basil Karlo",
    alignment: "Villainous",
    status: "Shapeshifting Gotham Menace",
    firstAppearance: "Detective Comics #40 (June, 1940)",
    summary: "Once a B-movie actor driven mad by his role being recast, Basil Karlo injected himself with the DNA of other shapeshifting specimens, turning into a massive living mass of clay capable of copying anyone's appearance, voice, and weapons.",
    affiliations: ["Mud Pack", "Secret Society of Super Villains", "Batman Family (briefly)"],
    abilities: ["Complete Clay Biomass Shape-Shifting", "Flawless Voice & Identity Replication", "Hardened Clay Hammers & Spikes", "Density & Liquid Absorption", "Immunity to Physical Concussion", "Acrobatic Theatricality"],
    keyMoments: [
      "United the Mud Pack to terrorize Gotham City and destroy Batman.",
      "Infiltrated Arkham Asylum by impersonating doctors, guards, and patients.",
      "Reformed temporarily in Detective Comics under Batman and Batwoman's guidance."
    ],
    stats: { intelligence: 68, strength: 85, speed: 60, durability: 92, power: 80, combat: 75 },
    apiName: "Clayface",
    wikiTitle: "Clayface"
  },
  {
    id: "KillerCroc",
    name: "Killer Croc",
    alias: "Waylon Jones",
    universe: "dc",
    faction: "villains",
    fullName: "Waylon Jones",
    alignment: "Villainous",
    status: "Gotham Sewer Warlord",
    firstAppearance: "Batman #357 (March, 1983)",
    summary: "Born with an extreme form of epidermolytic hyperkeratosis, Waylon Jones developed reptilian scales, razor claws, and monstrous jaw strength. Exiled to the Gotham sewers, he became a ruthless underworld enforcer and cannibalistic terror.",
    affiliations: ["Suicide Squad", "Secret Society of Super Villains"],
    abilities: ["Armored Reptilian Scales", "Superhuman Strength & Razor Claws", "Underwater Swimming & Extended Breath-Holding", "Enhanced Scent & Night Vision", "Carnivorous Jaw Biting Force", "Subterranean Sewer Guerrilla Combat"],
    keyMoments: [
      "Killed Jason Todd's circus acrobat parents in pre-Crisis Gotham continuity.",
      "Ruled the flooded sewer underbelly of Gotham during No Man's Land.",
      "Served on Amanda Waller's Suicide Squad, defending Task Force X underwater."
    ],
    stats: { intelligence: 55, strength: 82, speed: 62, durability: 85, power: 65, combat: 80 },
    apiName: "Killer Croc",
    wikiTitle: "Killer Croc"
  },
  {
    id: "AntiMonitor",
    name: "Anti-Monitor",
    alias: "Mobius / Ruler of the Antimatter Universe",
    universe: "dc",
    faction: "villains",
    fullName: "Mobius",
    alignment: "Villainous",
    status: "Cosmic Multiverse Destroyer",
    firstAppearance: "Crisis on Infinite Earths #2 (May, 1985)",
    summary: "The cosmic opposite of the Monitor, the Anti-Monitor rules the Antimatter Universe. Driven to consume all positive-matter realities with antimatter waves, he destroyed thousands of parallel universes in the landmark Crisis on Infinite Earths.",
    affiliations: ["Sinestro Corps", "Black Lantern Corps (Battery)"],
    abilities: ["Antimatter Universe Manipulation", "Universal Energy Absorption", "Destruction of Entire Timelines & Earths", "Cosmic Armor & Reality Warping", "Unstoppable Divine Size & Might", "Antimatter Projection"],
    keyMoments: [
      "Wiped out infinite parallel Earths in Crisis on Infinite Earths.",
      "Slaughtered Supergirl and the Flash (Barry Allen) in high-stakes cosmic combat.",
      "Served as the Sinestro Corps' ultimate guardian and Central Battery in Blackest Night."
    ],
    stats: { intelligence: 95, strength: 100, speed: 90, durability: 100, power: 100, combat: 90 },
    apiName: "Anti-Monitor",
    wikiTitle: "Anti-Monitor"
  },
  {
    id: "SuperboyPrime",
    name: "Superboy-Prime",
    alias: "Clark Kent of Earth-Prime",
    universe: "dc",
    faction: "villains",
    fullName: "Clark Kent",
    alignment: "Villainous",
    status: "Multiversal Threat",
    firstAppearance: "DC Comics Presents #87 (November, 1985)",
    summary: "Hailing from Earth-Prime where superheroes only existed in comic books, Clark Kent gained Silver-Age Kryptonian powers just before his universe was erased. Driven mad by loneliness and obsession with a 'perfect' universe, he shattered reality itself with punches.",
    affiliations: ["Sinestro Corps", "Legion of Doom", "Injustice League"],
    abilities: ["Pre-Crisis Silver-Age Kryptonian Power", "Reality-Punching Dimensional Shattering", "Immunity to Magic & Kryptonite from Other Earths", "Hypersonic Interstellar Flight", "Solar Armor Energy Channeling", "Uncontrollable Rage"],
    keyMoments: [
      "Helped defeat the Anti-Monitor before retreating to a paradisiacal pocket dimension.",
      "Shattered the walls of reality with his bare fists, causing the Infinite Crisis.",
      "Slaughtered dozens of Green Lanterns and decimated the Teen Titans."
    ],
    stats: { intelligence: 75, strength: 100, speed: 100, durability: 100, power: 100, combat: 85 },
    apiName: "Superboy-Prime",
    wikiTitle: "Superboy-Prime"
  },
  {
    id: "Atrocitus",
    name: "Atrocitus",
    alias: "Lord of the Red Lantern Corps",
    universe: "dc",
    faction: "villains",
    fullName: "Atros",
    alignment: "Villainous",
    status: "Red Lantern Sovereign",
    firstAppearance: "Green Lantern #25 (December, 2007)",
    summary: "Sole survivor of the Manhunters' sector 666 massacre, Atrocitus forged the Red Lantern Central Battery using blood magic and the emotional spectrum of pure rage. Red Lanterns vomit napalm-like plasma blood that incinerates all in its path.",
    affiliations: ["Red Lantern Corps", "Five Inversions"],
    abilities: ["Red Power Ring of Pure Rage", "Napalm Acid Blood Vomit", "Blood Divination & Prophecy", "Superhuman Alien Strength", "Construct Creation via Burning Hate", "Rage Induction"],
    keyMoments: [
      "Survived the slaughter of Sector 666 and swore vengeance on the Guardians of Oa.",
      "Forged the Red Lantern Corps battery on the blood plains of Ysmault.",
      "Invaded Earth and clashed with Hal Jordan and Sinestro during Blackest Night."
    ],
    stats: { intelligence: 82, strength: 92, speed: 75, durability: 90, power: 98, combat: 90 },
    apiName: "Atrocitus",
    wikiTitle: "Atrocitus"
  },

  // DC Antiheroes
  {
    id: "Etrigan",
    name: "Etrigan the Demon",
    alias: "The Demon / Jason Blood",
    universe: "dc",
    faction: "antiheroes",
    fullName: "Etrigan / Jason Blood",
    alignment: "Chaotic / Neutral",
    status: "Immortal Rhyming Demon",
    firstAppearance: "The Demon #1 (August, 1972)",
    summary: "Bound to Arthurian knight Jason Blood by the wizard Merlin, the rhyming demon Etrigan fights evil when summoned through the immortal incantation: 'Gone, gone the form of man, rise the demon Etrigan!'",
    affiliations: ["Justice League Dark", "Demon Knights", "Shadowpact"],
    abilities: ["Hellfire Breath & Mystical Flame", "Superhuman Demonic Strength", "Rhyming Sorcery & Magic Resistance", "Claws & Fangs", "Immortal Regeneration", "Jason Blood's Occult Lore"],
    keyMoments: [
      "Bound to Jason Blood in Camelot following the fall of King Arthur.",
      "Stood as the mystical bruiser of Justice League Dark against elder horrors.",
      "Fought across centuries from medieval battlefields to modern Gotham."
    ],
    stats: { intelligence: 80, strength: 90, speed: 72, durability: 95, power: 92, combat: 88 },
    apiName: "Etrigan",
    wikiTitle: "Etrigan the Demon"
  },
  {
    id: "JonahHex",
    name: "Jonah Hex",
    alias: "The Scared Bounty Hunter",
    universe: "dc",
    faction: "antiheroes",
    fullName: "Jonah Woodson Hex",
    alignment: "Chaotic / Neutral",
    status: "Old West Legend",
    firstAppearance: "All-Star Western #10 (February, 1972)",
    summary: "A scarred Civil War veteran and bounty hunter of the American Old West, Jonah Hex lives by a strict personal code to protect the innocent. Unmatched with a revolver, he has also traveled through time to fight modern threats.",
    affiliations: ["Rough Bunch", "Justice League (temporary ally)"],
    abilities: ["Fastest Draw in the American West", "Superhuman Marksman with Revolvers & Rifles", "Master Knife & Hand-to-Hand Combatant", "Ironclad Personal Honor Code", "Extreme Survival & Tracking", "Pain Tolerance"],
    keyMoments: [
      "Earned his horrific 'mark of the demon' scar from the Apache tribe.",
      "Brought down hundreds of corrupt warlords and outlaws across the frontier.",
      "Traveled to post-apocalyptic future and modern Gotham, fighting Batman."
    ],
    stats: { intelligence: 72, strength: 60, speed: 75, durability: 75, power: 40, combat: 90 },
    apiName: "Jonah Hex",
    wikiTitle: "Jonah Hex"
  },
  {
    id: "KillerFrost",
    name: "Killer Frost",
    alias: "Caitlin Snow",
    universe: "dc",
    faction: "antiheroes",
    fullName: "Dr. Caitlin Snow",
    alignment: "Chaotic / Neutral",
    status: "Reformed Justice League Member",
    firstAppearance: "Fury of Firestorm: The Nuclear Man #19 (June, 2013)",
    summary: "A STAR Labs scientist who gained heat-vampirism powers following an Arctic lab sabotaged incident, Caitlin Snow must absorb warmth to survive, projecting freezing cold in return. She reformed into a key member of the Justice League of America.",
    affiliations: ["Justice League of America", "Suicide Squad", "STAR Labs"],
    abilities: ["Thermal Energy Absorption", "Cryokinetic Ice Projections & Spikes", "Sub-Zero Temperature Fields", "Ice Armor & Slides", "Genius Physics & Engineering", "Heat-Seeking Senses"],
    keyMoments: [
      "Transformed by a thermodynamic engine accident into a heat-craving metahuman.",
      "Served on the Suicide Squad and helped save Earth from Eclipso.",
      "Invited by Batman to join the Justice League of America as an agent of redemption."
    ],
    stats: { intelligence: 85, strength: 65, speed: 65, durability: 75, power: 88, combat: 72 },
    apiName: "Killer Frost",
    wikiTitle: "Killer Frost"
  },
  {
    id: "Arsenal",
    name: "Arsenal",
    alias: "Roy Harper / Speedy / Red Arrow",
    universe: "dc",
    faction: "antiheroes",
    fullName: "Roy William Harper Jr.",
    alignment: "Chaotic / Neutral",
    status: "Outlaw Marksman",
    firstAppearance: "More Fun Comics #73 (November, 1941)",
    summary: "Green Arrow's former ward Speedy, Roy Harper outgrew his mentor's shadow through grit, overcoming addiction, and mastering every weapon known to humankind. Operating as Arsenal, he fights alongside Jason Todd in the Outlaws.",
    affiliations: ["Outlaws", "Titans", "Teen Titans", "Justice League", "Checkmate"],
    abilities: ["Master Marksman with Bow & Firearms", "Lethal Weapon Improvisation", "Master Martial Artist", "Cybernetic Arm Enhancements", "Tactical Infiltration", "Street-Smart Resilience"],
    keyMoments: [
      "Overcame addiction and established his own independent identity as Arsenal.",
      "Graduated to the Justice League of America as Red Arrow.",
      "Formed an unbreakable brotherhood with Red Hood in the Outlaws."
    ],
    stats: { intelligence: 75, strength: 65, speed: 74, durability: 70, power: 65, combat: 88 },
    apiName: "Red Arrow",
    wikiTitle: "Roy Harper (character)"
  }
];

async function fetchBuffer(url) {
  const res = await fetch(url, { headers: { "user-agent": "cinematicuniverses-updater/1.0" } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const ab = await res.arrayBuffer();
  return Buffer.from(ab);
}

async function writePlaceholderSvg(filePath, name, universe, faction) {
  const isMcu = universe === "mcu";
  const bg1 = isMcu ? "#831843" : "#0f172a";
  const bg2 = isMcu ? "#0f172a" : "#1e1b4b";
  const accent = isMcu ? "#f43f5e" : "#38bdf8";

  const initials = name
    .split(/[\s-]/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0].toUpperCase())
    .join("");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${bg1}" />
        <stop offset="100%" stop-color="${bg2}" />
      </linearGradient>
    </defs>
    <rect width="600" height="800" fill="url(#bg)" />
    <circle cx="300" cy="360" r="140" fill="${accent}" opacity="0.18" />
    <text x="300" y="390" font-family="system-ui, sans-serif" font-size="84" font-weight="800" fill="#ffffff" text-anchor="middle">${initials}</text>
    <text x="300" y="560" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#e2e8f0" text-anchor="middle">${name}</text>
    <text x="300" y="600" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="${accent}" text-anchor="middle">${universe.toUpperCase()} • ${faction.toUpperCase()}</text>
  </svg>`;

  await fs.writeFile(filePath, svg, "utf8");
}

async function ensureImage(char, apiIndex) {
  const destDir = path.join(PUBLIC_MEDIA_ROOT, char.universe, char.faction);
  await fs.mkdir(destDir, { recursive: true });

  const jpgPath = path.join(destDir, `${char.id}.jpg`);
  const svgPath = path.join(destDir, `${char.id}.svg`);

  // Check if image already exists
  try {
    await fs.access(jpgPath);
    return `/media/${char.universe}/${char.faction}/${char.id}.jpg`;
  } catch {}
  try {
    await fs.access(svgPath);
    return `/media/${char.universe}/${char.faction}/${char.id}.svg`;
  } catch {}

  // Find image in apiIndex
  const apiMatch = apiIndex.get(char.apiName?.toLowerCase().replace(/[^a-z0-9]/g, "")) ||
                   apiIndex.get(char.name.toLowerCase().replace(/[^a-z0-9]/g, ""));
  const imageUrl = apiMatch?.images?.lg || apiMatch?.images?.md;

  if (imageUrl) {
    try {
      const buf = await fetchBuffer(imageUrl);
      await fs.writeFile(jpgPath, buf);
      console.log(`[Media] Downloaded ${jpgPath}`);
      return `/media/${char.universe}/${char.faction}/${char.id}.jpg`;
    } catch (e) {
      console.warn(`[Media] Failed download ${imageUrl}:`, e.message);
    }
  }

  // Fallback to SVG placeholder
  await writePlaceholderSvg(svgPath, char.name, char.universe, char.faction);
  console.log(`[Media] Created SVG placeholder ${svgPath}`);
  return `/media/${char.universe}/${char.faction}/${char.id}.svg`;
}

async function main() {
  console.log("Loading superhero-api dataset...");
  const apiDb = await fetch("https://raw.githubusercontent.com/akabab/superhero-api/0.3.0/api/all.json").then((r) => r.json());
  const apiIndex = new Map();
  for (const item of apiDb) {
    apiIndex.set(item.name.toLowerCase().replace(/[^a-z0-9]/g, ""), item);
  }

  console.log("Reading existing characters.generated.json...");
  const current = JSON.parse(await fs.readFile(OUTPUT_JSON_PATH, "utf8"));
  const u = current.universes;

  let addedCount = 0;
  for (const char of newCharacters) {
    const list = u[char.universe][char.faction];
    const existingIndex = list.findIndex((c) => c.id === char.id || c.name.toLowerCase() === char.name.toLowerCase());

    const imgPath = await ensureImage(char, apiIndex);
    const apiMatch = apiIndex.get(char.apiName?.toLowerCase().replace(/[^a-z0-9]/g, "")) ||
                     apiIndex.get(char.name.toLowerCase().replace(/[^a-z0-9]/g, ""));

    const record = {
      id: char.id,
      name: char.name,
      alias: char.alias || null,
      universe: char.universe,
      faction: char.faction,
      summary: char.summary,
      alignment: char.alignment,
      status: char.status,
      debut: null,
      fullName: char.fullName || apiMatch?.biography?.fullName || char.name,
      occupation: apiMatch?.work?.occupation || (char.faction === "heroes" ? "Adventurer / Defender" : "Criminal Strategist"),
      placeOfBirth: apiMatch?.biography?.placeOfBirth || "-",
      publisher: char.universe === "mcu" ? "Marvel Comics" : "DC Comics",
      firstAppearance: char.firstAppearance || apiMatch?.biography?.firstAppearance || "-",
      affiliations: char.affiliations,
      abilities: char.abilities,
      keyMoments: char.keyMoments,
      stats: char.stats,
      image: imgPath,
      imageSource: imgPath.endsWith(".svg") ? "placeholder" : "superhero-api",
      sourceUrl: `https://en.wikipedia.org/wiki/${encodeURIComponent((char.wikiTitle || char.name).replace(/ /g, "_"))}`,
      sourceTitle: char.wikiTitle || char.name,
      sourceDescription: `${char.name} in ${char.universe === "mcu" ? "Marvel" : "DC"} Universe`,
    };

    if (existingIndex >= 0) {
      list[existingIndex] = record;
      console.log(`Updated ${char.universe}/${char.faction}/${char.id}`);
    } else {
      list.push(record);
      addedCount++;
      console.log(`Added ${char.universe}/${char.faction}/${char.id}`);
    }
  }

  current.updatedAt = new Date().toISOString();
  await fs.writeFile(OUTPUT_JSON_PATH, JSON.stringify(current, null, 2), "utf8");

  console.log(`\nSuccessfully updated characters.generated.json!`);
  console.log(`New characters added: ${addedCount}`);
  console.log(`MCU Heroes: ${u.mcu.heroes.length}`);
  console.log(`MCU Villains: ${u.mcu.villains.length}`);
  console.log(`MCU Antiheroes: ${u.mcu.antiheroes.length}`);
  console.log(`DC Heroes: ${u.dc.heroes.length}`);
  console.log(`DC Villains: ${u.dc.villains.length}`);
  console.log(`DC Antiheroes: ${u.dc.antiheroes.length}`);
  const total = u.mcu.heroes.length + u.mcu.villains.length + u.mcu.antiheroes.length +
                u.dc.heroes.length + u.dc.villains.length + u.dc.antiheroes.length;
  console.log(`TOTAL CHARACTERS ON SITE: ${total}`);
}

main().catch(console.error);
