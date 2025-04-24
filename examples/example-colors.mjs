import ansi from "../";

console.log(ansi.black(ansi.blueBG("All available colors:")));

Object.values(ansi.colors).forEach((e) => {
  if (
    [
      "yellowBG",
      "yellowBG2",
      "blueBG",
      "blueBG2",
      "orangeBG",
      "greenBG2",
      "cyanBG",
      "whiteBG",
    ].includes(e)
  ) {
    process.stdout.write(ansi.black(ansi[e](e) + "  "));
  } else if (["black"].includes(e)) {
    process.stdout.write(ansi[e](ansi.whiteBG(e)) + "  ");
  } else {
    process.stdout.write(ansi[e](e) + "  ");
  }
});
