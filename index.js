const box = document.querySelector(".box");
const spans = document.querySelectorAll(".box>div>span");
let originalColors = [
  "#fc7e6b",
  " #fa53db",
  "#7890fd",
  "#ff8c00",
  "#fc7e6b",
  " #fa53db",
  "#7890fd",
  "#ff8c00",
];
let colorsArray = [
  "#9a27aec4",
  "#ff8c00d1",
  "#86f604de",
  "#ffe500de",
  "#ff1100de",
  "#00e2ffe6",
  "#0228fddb",
  "#d802fddb",
];

let originalArrayIndex = 0;
let index = 0;
let newArray;
setInterval(() => {
  newArray = colorsArray.sort(() => Math.random() - 0.5).slice(0, 4);

  spans.forEach((item, i) => {
    item.style.background = newArray[i];
    item.setAttribute("id", newArray[i]);
  });
}, 4000);

setInterval(() => {
  if (newArray === undefined) {
    box.style = `--before:${originalColors[originalArrayIndex]}`;
    originalArrayIndex++;
  } else {
    box.style = `--before:${spans[index].id}`;
    index++;
    if (index === 3) {
      index = 0;
    }
  }
}, 500);
