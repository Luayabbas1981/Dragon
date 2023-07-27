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

let index = 0

setInterval(() => {
  let newArray=  colorsArray.sort(() => Math.random() - 0.5).slice(0,4);
  spans.forEach((item,i) => {
    item.style.background = newArray[i];
    item.setAttribute("id",newArray[i])
  });
  setInterval(() => {
    box.style = `--before:${spans[index].id}`;
    index++
    console.log(index)
   if(index ===3){
    index = 0
   }
}, 500);
}, 4000);
