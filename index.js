const box = document.querySelector(".box");
const spans = document.querySelectorAll(".box>div>span");
const neonOne = document.querySelector(".neon1")
const neonTwo = document.querySelector(".neon2")
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
setTimeout(() => {
    setInterval(() => {
        if (!newArray) {
          box.style = `--before:${originalColors[originalArrayIndex]}`;
          originalArrayIndex++;
        } else {
          box.style = `--before:${spans[index].id}`;
         neonOne.style.backgroundImage= `linear-gradient(342deg, rgba(5,10,23,1) 30%, ${spans[index].id} 100%)` 
         neonTwo.style.backgroundImage= `linear-gradient(342deg, rgba(5,10,23,1) 30%, ${spans[index + 1].id} 100%)` 
          index++;
          if (index === 3) {
            index = 0;
          }
        }
      }, 500);
}, 2000);

