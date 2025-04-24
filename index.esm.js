import ansi from "./index.js";

// Re-export the default
export default ansi;

// Destructure and re-export every property so TS/runtime can do:
//    import { red, blue, up } from "@nexssp/ansi";
export const {
  reset, bold, italic, underscore, strikethrough, inverse,
  gray, grayBG, purple, purpleBG, red, redBG, redBG2,
  green, greenBG, greenBG2, blue, blueBG, blueBG2,
  yellow, yellowBG, yellowBG2, magenta, magentaBG, magentaBG2,
  cyan, cyanBG, orangeBG, white, whiteBG, black, blackBG,
  up, down, right, left, nextLine, prevLine,
  clearLine, clearLineAfterCursor, saveCursor, restoreCursor, clearScreen,
  colors, ansi: ansiFn
} = ansi;
