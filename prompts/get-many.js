import { exec } from "child_process";
import interpretations from "../src/store/interpretations.json" assert { type: "json" };
import fs from "fs";
const prompt = fs.readFileSync("./prompt.txt", "utf-8");
import process from "node:process";

const removeJsonFormatting = (str) => {
  return str.replace(/```json/, "").replace(/```/, "");
};

const verifyJson = (jsonMaybe) => {
  try {
    const json = JSON.parse(jsonMaybe);
    return json;
  } catch (e) {
    return null;
  }
};

const saveFile = (json) => {
  const filepath = "./interpretations.json";
  try {
    fs.writeFileSync(filepath, JSON.stringify(json), "utf-8");
    console.log(`${filepath} written successfully!`);
  } catch (error) {
    console.error(`Error writing ${filepath}: `, error);
  }
};

const appendError = (error) => {
  const filePath = "./errors.log";
  try {
    let existingContent = fs.readFileSync(filePath, "utf-8"); // Read existing content
    fs.writeFileSync(filePath, existingContent + error, "utf-8");
    console.log("Content appended successfully!");
  } catch (error) {
    console.error("Error appending to file:", error);
  }
};

const waitRandomTimeAsync = async () => {
  const minDelay = 30000;
  const maxDelay = 40000;
  const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;

  await new Promise((resolve) => setTimeout(resolve, randomDelay));
};

const askBard = async (interpretations, subset, propToUpdate) => {
  await waitRandomTimeAsync();

  const index = subset.shift();
  const promptWithTitle = `'Title: ${interpretations[index].name}\n${prompt}'`;
  exec(`./bard-cli ${promptWithTitle}`, (error, stdout, stderr) => {
    if (error) {
      console.error("Error:", error);
      saveFile(interpretations);
      process.exit();
    } else if (stderr) {
      console.error("Standard error:", error);
      saveFile(interpretations);
      process.exit();
    } else {
      const jsonMaybe = verifyJson(removeJsonFormatting(stdout));
      if (jsonMaybe !== null) {
        interpretations[index][propToUpdate] = jsonMaybe[propToUpdate];
        console.log(jsonMaybe);
      } else {
        const errorMessage =
          index +
          " Invalid JSON returned: " +
          interpretations[index].name +
          "\n" +
          stdout;
        console.log(errorMessage);
        appendError(errorMessage);
      }
    }

    // Recursion
    if (subset.length <= 0) {
      console.log("Done!");
      saveFile(interpretations);
      return;
    }
    askBard(interpretations, subset, propToUpdate);
  });
};

// Subset
// askBard(interpretations, [0, 1], "http404Message");

// All
const allCards = Array.from({ length: 78 }, (_, i) => i);
askBard(interpretations, allCards, "http404Message");
