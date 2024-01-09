import {
  Orientation,
  Interpretation,
  DrawnInterpretation,
  Card,
} from "../store/types";

const getRandom = (array: Array<any>): any =>
  array[Math.floor(Math.random() * array.length)];

const parseOrientation = (param: string | undefined): Orientation => {
  if (param !== "reversed") {
    return "upright";
  }
  return "reversed";
};

const parseNum = (str: string | undefined, alt: number): number => {
  if (str === undefined) {
    return alt;
  }
  try {
    const result = parseInt(str);
    return isNaN(result) ? alt : result;
  } catch (_) {
    return alt;
  }
};

const getCardUrl = (number: number, orientation: Orientation): string => {
  return `${window.location.origin}/cards/${number}/${orientation}`;
};

const getTitle = (name: string, orientation: Orientation) => {
  if (orientation === "upright") {
    return name;
  }
  const words = name.split(" ");
  const firstWordIsThe = words[0].toLocaleLowerCase() === "the";
  return firstWordIsThe
    ? `The Reversed ${words.slice(1).join(" ")}`
    : `Reversed ${name}`;
};

const drawInterpretation = (
  interpretation: Interpretation,
  drawnCard: Card,
): DrawnInterpretation => {
  const name = getTitle(interpretation.name, drawnCard.orientation);
  const affirmation = getRandom(
    interpretation.affirmations[drawnCard.orientation],
  );
  return {
    name,
    type: interpretation.type,
    number: drawnCard.number,
    keywords: interpretation.keywords[drawnCard.orientation],
    description: interpretation.description[drawnCard.orientation],
    affirmation,
    orientation: drawnCard.orientation,
  };
};

const getLabyrinthosUrl = (name: string, type: string): string => {
  return name
    ? `https://labyrinthos.co/blogs/tarot-card-meanings-list/${name
        .toLowerCase()
        .split(" ")
        .join("-")}-meaning-${
        type === "major" ? "major-arcana-" : ""
      }tarot-card-meanings`
    : "";
};

export {
  getRandom,
  parseNum,
  getCardUrl,
  parseOrientation,
  getTitle,
  drawInterpretation,
  getLabyrinthosUrl,
};
