import fs from "fs";

const vBumpConfigPath = ".github/vbump-config.json";
const vBumpConfigJson = JSON.parse(fs.readFileSync(vBumpConfigPath, "utf8"));

let bumpType = "patch";
if (vBumpConfigJson.major) bumpType = "major";
else if (vBumpConfigJson.minor) bumpType = "minor";

const hasBumpConfig =
  vBumpConfigJson.major || vBumpConfigJson.minor || vBumpConfigJson.patch;

if (hasBumpConfig) {
  const readmePath = "README.md";
  const data = fs.readFileSync(readmePath, "utf8");

  const startMarker = "<!--version-start-->";
  const endMarker = "<!--version-end-->";

  const start = data.indexOf(startMarker);
  const end = data.indexOf(endMarker);

  if (start === -1 || end === -1) {
    console.error("❌ Version markers not found in README.md");
    process.exit(1);
  }

  let versionText = data.substring(start + startMarker.length, end).trim();
  versionText = versionText.substring(versionText.indexOf("v") + 1);
  const [mainVersion, assetsVersion] = versionText.split("_");
  let assets = Number(assetsVersion) ?? 0;
  let [major, minor, patch] = mainVersion.split(".").map(Number);

  if (vBumpConfigJson.assets) {
    assets++;
  } else if (vBumpConfigJson.major) {
    major++;
    minor = 0;
    patch = 0;
  } else if (vBumpConfigJson.minor) {
    minor++;
    patch = 0;
  } else if (vBumpConfigJson.patch) patch++;
  const newVersion = `${major}.${minor}.${patch}_${assets}`;
  const updatedData =
    data.substring(0, start + startMarker.length) +
    "\n> v" +
    newVersion +
    "\n" +
    data.substring(end);

  fs.writeFileSync(readmePath, updatedData);
  console.log("New version:", newVersion);
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `newVersion=${newVersion}\n`);
} else {
  console.warn("⚠️ No version bump flag set in vbump-config.json");
}
