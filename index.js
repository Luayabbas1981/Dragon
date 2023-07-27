const box = document.querySelector(".box");
const spans = document.querySelectorAll(".box>div>span");

let colorsArray = [
  "#9a27aec4",
  "#ff8c00d1",
  "#86f604de",
  "#ffe500de",
  "#ff1100de",
  "#00e2ffe6",
];

let previous = -1;

setInterval(() => {
  spans.forEach((item) => {
    let randomColor;
    do {
      randomColor = Math.floor(Math.random() * colorsArray.length);
      item.style.background = colorsArray[randomColor];
    } while (previous === randomColor);
    console.log(randomColor);
    previous = randomColor;
    box.style = `--before:${colorsArray[randomColor]}`;
  });
}, 4000);
