const { exec } = require("child_process");
const interpretations = require("../src/store/interpretations.json");
const fs = require("fs");
const prompt = fs.readFileSync("./prompt.txt", "utf-8");

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

const askBard = async (interpretations, subset) => {
  await waitRandomTimeAsync();

  const index = subset.shift();
  const promptWithTitle = `'Title: ${interpretations[index].name}\n${prompt}'`;
  exec(`./bard-cli ${promptWithTitle}`, (error, stdout, stderr) => {
    if (error) {
      console.error("Error:", error);
      process.exit();
    } else if (stderr) {
      console.error("Standard error:", error);
      process.exit();
    } else {
      const jsonMaybe = verifyJson(removeJsonFormatting(stdout));
      if (jsonMaybe !== null) {
        interpretations[index].affirmations = jsonMaybe.affirmations;
        console.log(jsonMaybe);
      } else {
        console.log("Invalid JSON returned: " + interpretations[index].name);
        console.log(stdout);
        appendError(
          index +
            " Invalid JSON returned: " +
            interpretations[index].name +
            "\n" +
            stdout,
        );
      }
    }

    // Recursion
    if (subset.length <= 0) {
      console.log("done.");
      saveFile(interpretations);
      return;
    }
    askBard(interpretations, subset);
  });
};

// Subset
askBard(interpretations, [20, 23, 30, 62, 66, 72, 73, 76]);

// All
// askBard(
//   interpretations,
//   Array.from({ length: 10 }, (_, i) => i),
// );
