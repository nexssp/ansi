/**
 * Applies ANSI styles to input arguments and returns the styled string.
 * @param args Values to concatenate and style
 */
type AnsiStyleFunction = (...args: any[]) => string;

/**
 * Generates ANSI escape code for cursor movement.
 * @param count Number of lines/columns to move (default: 1)
 */
type AnsiCursorMoveFunction = (count?: number) => string;

// Base color names and variants
type BaseColor = 'gray' | 'purple' | 'red' | 'green' | 'blue' | 'yellow' | 'magenta' | 'cyan' | 'orange' | 'white' | 'black';
type ColorVariants = {
  [K in BaseColor]: AnsiStyleFunction;
} & {
  [K in BaseColor as `${K}BG`]: AnsiStyleFunction;
} & {
  [K in 'red' | 'green' | 'blue' | 'yellow' | 'magenta' as `${K}BG2`]: AnsiStyleFunction;
} & {
  orangeBG: AnsiStyleFunction;  // Specific case for orange background
};

// Cursor movement functions
type CursorMove = {
  up: AnsiCursorMoveFunction;
  down: AnsiCursorMoveFunction;
  right: AnsiCursorMoveFunction;
  left: AnsiCursorMoveFunction;
};

// Other cursor operations
type CursorActions = {
  nextLine: () => string;
  prevLine: () => string;
  clearLine: () => string;
  clearLineAfterCursor: () => string;
  saveCursor: () => string;
  restoreCursor: () => string;
  clearScreen: () => string;
};

// Core ANSI interface combining all variants
interface Ansi extends ColorVariants, CursorMove, CursorActions {
  // Text styles
  reset: AnsiStyleFunction;
  bold: AnsiStyleFunction;
  italic: AnsiStyleFunction;
  underscore: AnsiStyleFunction;
  strikethrough: AnsiStyleFunction;
  inverse: AnsiStyleFunction;

  // Utility
  colors: ReadonlyArray<string>;
  ansi: (color?: string, bold?: boolean) => AnsiStyleFunction;
}

export declare const reset: AnsiStyleFunction;
export declare const bold: AnsiStyleFunction;
export declare const italic: AnsiStyleFunction;
export declare const underscore: AnsiStyleFunction;
export declare const strikethrough: AnsiStyleFunction;
export declare const inverse: AnsiStyleFunction;

export declare const gray: AnsiStyleFunction;
export declare const grayBG: AnsiStyleFunction;
export declare const purple: AnsiStyleFunction;
export declare const purpleBG: AnsiStyleFunction;
export declare const red: AnsiStyleFunction;
export declare const redBG: AnsiStyleFunction;
export declare const redBG2: AnsiStyleFunction;
export declare const green: AnsiStyleFunction;
export declare const greenBG: AnsiStyleFunction;
export declare const greenBG2: AnsiStyleFunction;
export declare const blue: AnsiStyleFunction;
export declare const blueBG: AnsiStyleFunction;
export declare const blueBG2: AnsiStyleFunction;
export declare const yellow: AnsiStyleFunction;
export declare const yellowBG: AnsiStyleFunction;
export declare const yellowBG2: AnsiStyleFunction;
export declare const magenta: AnsiStyleFunction;
export declare const magentaBG: AnsiStyleFunction;
export declare const magentaBG2: AnsiStyleFunction;
export declare const cyan: AnsiStyleFunction;
export declare const cyanBG: AnsiStyleFunction;
export declare const orangeBG: AnsiStyleFunction;
export declare const white: AnsiStyleFunction;
export declare const whiteBG: AnsiStyleFunction;
export declare const black: AnsiStyleFunction;
export declare const blackBG: AnsiStyleFunction;

// Cursor exports
export declare const up: AnsiCursorMoveFunction;
export declare const down: AnsiCursorMoveFunction;
export declare const right: AnsiCursorMoveFunction;
export declare const left: AnsiCursorMoveFunction;
export declare const nextLine: () => string;
export declare const prevLine: () => string;
export declare const clearLine: () => string;
export declare const clearLineAfterCursor: () => string;
export declare const saveCursor: () => string;
export declare const restoreCursor: () => string;
export declare const clearScreen: () => string;

// Utilities
export declare const colors: ReadonlyArray<string>;
export declare const ansi: (color?: string, bold?: boolean) => AnsiStyleFunction;

// Default export
declare const ansiDefault: Ansi;
export default ansiDefault;
