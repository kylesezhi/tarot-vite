// import got from "got";
import { expect, test } from "vitest";
import { getLabyrinthosUrl } from "./helpers";

// const names: Array<{ name: string; type: string }> =
//   require("../store/interpretations.json").map(
//     (interpretation: Interpretation) => ({
//       name: interpretation.name,
//       type: interpretation.type,
//     }),
//   );

test("test generated links", async () => {
  expect(getLabyrinthosUrl("Death", "upright")).toBe(
    "https://labyrinthos.co/blogs/tarot-card-meanings-list/death-meaning-tarot-card-meanings",
  );
  // for (const { name, type } of names) {
  //   const result = await got.get(getLabyrinthosUrl(name, type));
  //   console.log(result);
  //   console.log(getLabyrinthosUrl(name, type));
  //   // expect().toBe(true);
  // }
});
