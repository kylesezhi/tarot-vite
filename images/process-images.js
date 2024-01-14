import sharp from "sharp";
import fs from "fs";

const directoryPath = "../src/assets/Cards";

// Read the list of files in the directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  // Process each WebP file
  files.forEach((file) => {
    if (!file.endsWith(".webp")) {
      return;
    }
    const filePath = `${directoryPath}/${file}`;
    const outputFilePath = `./processed/${file}`;
    const borderWidth = 20;
    const color = { r: 40, g: 44, b: 52, alpha: 1 };
    const imageSize = 160;

    // Use Sharp to load and process the WebP file
    sharp(filePath)
      .extend({
        top: borderWidth,
        bottom: borderWidth,
        left: borderWidth,
        right: borderWidth,
        background: color,
      })
      .resize({
        width: imageSize,
        height: imageSize,
        fit: "contain",
        kernel: "lanczos2",
        background: color,
      })
      // .composite([
      //   {
      //     input: Buffer.from(
      //       `<svg><rect width="100%" height="100%" rx="10" ry="10" fill="transparent"/></svg>`,
      //     ),
      //     blend: "dest-in",
      //   },
      // ])
      .toFile(outputFilePath, (err) => {
        if (err) {
          console.error(`Error processing ${file}:`, err);
        } else {
          console.log(`Processed ${file} and saved to ${outputFilePath}`);
        }
      });
  });
});
