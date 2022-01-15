# @nexssp/ansi

**15.01.2022 Upgrade** - Now works also with `import` as module.

```js
const ansi = require("@nexssp/ansi");
// or
import ansi from "@nexssp/ansi";
```

## New cursor functions

- now you can do **up**, **left**, **right**, **down** with the number of lines/columns.. eg. **ansi.up(5)**

## Available colors and functions

![image](https://user-images.githubusercontent.com/53263666/149625041-bd8a2769-858d-4e55-8dc0-7130d6772617.png)

reset, **bold**, _italic_, **underscore**, ~~strikethrough~~, inverse, **gray**, **grayBG** **purple**, **purpleBG**, **red**, **redBG** **redBG2**, **green**, **greenBG**, **greenBG2** **blue**, **blueBG**, **blueBG2**, **yellow**, **yellowBG**, **yellowBG2**, **magenta**, **magentaBG**, **magentaBG2**, **cyan**, **cyanBG**, **orangeBG**, **white**, **whiteBG**, **black**, **blackBG**

## Other functions

- **up**, **down**, **right**, **left**: moves cursor,
- **saveCursor**: save cursor position,
- **restoreCursor**: restore last savd position,
- **clearScreen**: clear screen,

## Examples

```js
const ansi = require("@nexssp/ansi"); // OR import ansi from "@nexssp/ansi";
// colors list
console.log(ansi.colors);
console.log(ansi.red("My red text"));

// or
const { red, blue, yellowBG, bold } = require("@nexssp/ansi");
console.log(red("my test" + yellowBG(bold("red bold and yellow background"))));
```

![image](https://user-images.githubusercontent.com/53263666/149625089-d97a44fd-8236-4a83-8de9-494c03545410.png)
