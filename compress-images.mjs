import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";

const folder = path.join("public", "Basil-uploads");
const backupFolder = "image-originals";
const names = ["propertypro", "hotel-system", "agrismart", "smartroad"];

await fs.mkdir(backupFolder, { recursive: true });

for (const name of names) {
  const file = path.join(folder, `${name}.jpg`);

  try {
    const original = await fs.readFile(file);

    // keep the untouched original outside public/ so it is never deployed
    await fs.writeFile(path.join(backupFolder, `${name}.jpg`), original);

    const compressed = await sharp(original)
      .rotate()
      .resize({ width: 1600, withoutEnlargement: true })
      .jpeg({ quality: 78, mozjpeg: true })
      .toBuffer();

    await fs.writeFile(file, compressed);

    console.log(
      `${name}.jpg: ${(original.length / 1024).toFixed(0)} KB -> ${(compressed.length / 1024).toFixed(0)} KB`
    );
  } catch (error) {
    console.log(`${name}.jpg: skipped (${error.message})`);
  }
}
