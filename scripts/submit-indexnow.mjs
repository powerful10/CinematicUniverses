const HOST = "cinematic-universes.vercel.app";
const KEY = "cu2026indexnowkey9f4e2a1b8c3d7e6f";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const PRIORITY_URLS = [
  `https://${HOST}/`,
  `https://${HOST}/mcu/timeline`,
  `https://${HOST}/versus`,
  `https://${HOST}/mcu`,
  `https://${HOST}/dc`,
  `https://${HOST}/mcu/heroes`,
  `https://${HOST}/mcu/villains`,
  `https://${HOST}/dc/heroes`,
  `https://${HOST}/dc/villains`,
  `https://${HOST}/coverage`,
];

async function main() {
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: PRIORITY_URLS,
    }),
  });
  console.log("IndexNow status:", res.status, await res.text());
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
