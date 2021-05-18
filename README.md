# @nexssp/ansi

## New cursor functions

- now you can do **up**, **left**, **right**, **down** with the number of lines/columns.. eg. **ansi.up(5)**

## Available colors

![image](https://user-images.githubusercontent.com/53263666/116795666-efede280-aad6-11eb-8d29-fc5f02cc5739.png)

**bold**, **underscore**, **grey**, **greyBG** **purple**, **purpleBG**, **red**, **redBG** **redBG2**, **green**, **greenBG**, **greenBG2** **blue**, **blueBG**, **blueBG2**, **yellow**, **yellowBG**, **yellowBG2**, **magenta**, **magentaBG**, **magentaBG2**, **cyan**, **cyanBG**, **orangeBG**, **white**, **whiteBG**, **black**, **blackBG**

## Other functions

- **up**, **down**, **right**, **left**: moves cursor,
- **saveCursor**: save cursor position,
- **restoreCursor**: restore last savd position,
- **clearScreen**: clear screen,

## Examples

```js
const ansi = require("@nexssp/ansi");
// colors list
console.log(ansi.colors);
console.log(ansi.red("My red text"));

// or
const { red, blue, yellowBG, bold } = require("@nexssp/ansi");
console.log(red("my test" + yellowBG(bold("red bold and yellow background"))));
```

![image](https://user-images.githubusercontent.com/53263666/116795709-3fcca980-aad7-11eb-8c8a-7af52682f150.png)
