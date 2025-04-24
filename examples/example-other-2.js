const ansi = require("../");

let x = 0;
console.log(
  ansi.clearScreen(),
  ansi.up(),
  ansi.up(),
  ansi.left(),
  ansi.yellowBG(ansi.black(`number of colors: ${ansi.colors.length}`)),
  ansi.down()
);
const f = setInterval(() => {
  if (x <= ansi.colors.length - 1) {
    // console.log(ansi.colors[x]);
    process.stdout.write(ansi.up());
    process.stdout.write(ansi.right(10));
    process.stdout.write(ansi.clearLine());
    console.log(
      ansi[ansi.colors[x]]("Color: " + x, "   ", ansi.colors[x], " ".repeat(10))
    );
  } else {
    clearInterval(f);
  }
  x++;
}, 300);
