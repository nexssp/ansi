# @nexssp/ansi

## Available colors

![Available colors](https://raw.githubusercontent.com/nexssp/ansi/master/nexssp_ansi_colors.png)

**bold**, **underscore**, **grey**, **greyBG** **purple**, **purpleBG**, **red**, **redBG** **redBG2**, **green**, **greenBG**, **greenBG2** **blue**, **blueBG**, **blueBG2**, **yellow**, **yellowBG**, **yellowBG2**, **magenta**, **magentaBG**, **magentaBG2**, **cyan**, **cyanBG**, **orangeBG**, **white**, **whiteBG**, **black**, **blackBG**

## Other functions

- **up**, **down**, **right**, **left**: moves cursor,
- **saveCursor**: save cursor position,
- **restoreCursor**: restore last savd position,
- **clearScreen**: clear screen,

## Examples

```js
const ansi = require('@nexssp/ansi');
// colors list
console.log(ansi.colors);
console.log(ansi.red('My red text'));

// or
const { red, blue, yellowBG, bold } = require('@nexssp/ansi');
console.log(red('my test' + yellowBG(bold('red bold and yellow background'))));
```
