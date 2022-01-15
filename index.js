/*
 * Basic ansi library
 */

const ansi =
  (color, bold) =>
  (...args) =>
    `${bold ? "\x1b[1m" : ""}${color ? "\x1b[" + color : ""}${args.join(
      ""
    )}\x1b[0m`;

const colors = {
  reset: (...args) => ansi("0m")(...args),
  bold: (...args) => ansi("1m")(...args),
  italic: (...args) => ansi("3m")(...args),
  underscore: (...args) => ansi("4m")(...args),
  strikethrough: (...args) => ansi("9m")(...args),
  inverse: (...args) => ansi("7m")(...args),
  gray: (...args) => ansi("90m")(...args),
  grayBG: (...args) => ansi("100m")(...args),
  purple: (...args) => ansi("35m")(...args),
  purpleBG: (...args) => ansi("45m")(...args),
  red: (...args) => ansi("31m")(...args),
  redBG: (...args) => ansi("41m")(...args),
  redBG2: (...args) => ansi("101m")(...args),
  green: (...args) => ansi("32m")(args),
  greenBG: (...args) => ansi("42m")(...args),
  greenBG2: (...args) => ansi("102m")(...args),
  blue: (...args) => ansi("34m")(...args),
  blueBG: (...args) => ansi("44m")(...args),
  blueBG2: (...args) => ansi("104m")(...args),
  yellow: (...args) => ansi("33m")(...args),
  yellowBG: (...args) => ansi("43m")(...args),
  yellowBG2: (...args) => ansi("103m")(...args),
  magenta: (...args) => ansi("35m")(...args),
  magentaBG: (...args) => ansi("45m")(...args),
  magentaBG2: (...args) => ansi("105m")(...args),
  cyan: (...args) => ansi("36m")(...args),
  cyanBG: (...args) => ansi("46m")(...args),
  orangeBG: (...args) => ansi("106m")(...args),
  white: (...args) => ansi("30m")(ansi("37m")(...args)),
  whiteBG: (...args) => ansi("47m")(...args),
  black: (...args) => ansi("30m")(...args),
  blackBG: (...args) => ansi("40m")(...args),
};

const other = {
  // Cursor moves
  up: (lines = 1) => ansi(`${lines}A`)(),
  down: (lines = 1) => ansi(`${lines}B`)(),
  right: (lines = 1) => ansi(`${lines}C`)(),
  left: (lines = 1) => ansi(`${lines}D`)(),
  nextLine: (...args) => ansi("1E")(...args),
  prevLine: (...args) => ansi("1F")(...args),
  clearLine: () => ansi("2K")(),
  clearLineAfterCursor: () => ansi("K")(),
  saveCursor: (...args) => ansi("s")(...args),
  restoreCursor: (...args) => ansi("u")(...args),
  clearScreen: (...args) => ansi("2J")(...args),
};

module.exports = Object.assign({}, colors, other);

module.exports.colors = Object.keys(colors);
module.exports.ansi = ansi;
