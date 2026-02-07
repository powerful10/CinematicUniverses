import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DATA_PATH = path.join(ROOT, "app/data/characters.generated.json");
const MEDIA_ROOT = path.join(ROOT, "public");

function fail(message) {
  console.error(`ERROR: ${message}`);
  process.exitCode = 1;
}

function assert(condition, message) {
  if (!condition) {
    fail(message);
  }
}

function main() {
  if (!fs.existsSync(DATA_PATH)) {
    fail("Missing app/data/characters.generated.json");
    return;
  }

  const raw = fs.readFileSync(DATA_PATH, "utf8");
  const data = JSON.parse(raw);

  const universes = ["mcu", "dc"];
  const factions = ["heroes", "villains", "antiheroes"];

  for (const universe of universes) {
    for (const faction of factions) {
      const list = data?.universes?.[universe]?.[faction];
      assert(Array.isArray(list), `Missing array at universes.${universe}.${faction}`);
      if (!Array.isArray(list)) continue;

      const ids = new Set();
      list.forEach((character, index) => {
        const where = `${universe}/${faction}[${index}]`;
        assert(typeof character.id === "string" && character.id.length > 0, `${where} missing id`);
        assert(typeof character.name === "string" && character.name.length > 0, `${where} missing name`);
        assert(typeof character.summary === "string" && character.summary.length >= 40, `${where} summary too short`);
        assert(typeof character.image === "string" && character.image.startsWith("/"), `${where} invalid image path`);

        if (typeof character.id === "string") {
          const key = `${universe}/${faction}/${character.id}`;
          assert(!ids.has(character.id), `Duplicate id in ${universe}/${faction}: ${character.id}`);
          ids.add(character.id);

          const imageFile = path.join(MEDIA_ROOT, character.image.replace(/^\//, ""));
          assert(fs.existsSync(imageFile), `Missing image file for ${key}: ${character.image}`);
        }
      });
    }
  }

  if (process.exitCode !== 1) {
    const counts = {};
    for (const universe of universes) {
      for (const faction of factions) {
        counts[`${universe}/${faction}`] = data.universes[universe][faction].length;
      }
    }
    console.log("Dataset validation passed.");
    console.log(counts);
  }
}

main();
