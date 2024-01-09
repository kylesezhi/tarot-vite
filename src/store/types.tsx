export const REVERSED_CHANCE = 0.4;
export const BACK_OF_CARD_NUMBER = 78;
export type Orientation = "upright" | "reversed";
export type Type = "major" | "cups" | "pentacles" | "swords" | "wands";
export type Card = {
  number: number;
  orientation: Orientation;
};
export type Interpretation = {
  name: string;
  type: string;
  number: number;
  keywords: {
    upright: Array<string>;
    reversed: Array<string>;
  };
  description: {
    upright: string;
    reversed: string;
  };
  affirmations: {
    upright: Array<string>;
    reversed: Array<string>;
  };
};
export type DrawnInterpretation = {
  name: string;
  type: string;
  number: number;
  keywords: Array<string>;
  description: string;
  affirmation: string;
  orientation: Orientation;
};
export interface Store {
  interpretations: Array<Interpretation>;
  interpretation: DrawnInterpretation;
  card: Card;
  deck: Array<Card>;
  drawCard: () => void;
  shuffleDeck: () => void;
  back: () => void;
  isCardShowing: boolean;
  isInterpretationShowing: boolean;
  showInterpretation: () => void;
  getInterpretation: (number: number) => Interpretation;
}
export const backCard: Card = {
  number: BACK_OF_CARD_NUMBER,
  orientation: "upright",
};
export const emptyInterpretation: Interpretation = {
  name: "",
  number: 0,
  type: "major",
  keywords: {
    upright: [],
    reversed: [],
  },
  description: {
    upright: "",
    reversed: "",
  },
  affirmations: {
    upright: [],
    reversed: [],
  },
};
export const emptyDrawnInterpretation: DrawnInterpretation = {
  name: "",
  type: "major",
  number: BACK_OF_CARD_NUMBER,
  keywords: [],
  description: "",
  affirmation: "",
  orientation: "upright",
};
