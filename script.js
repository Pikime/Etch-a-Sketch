console.log("Hello World!");
const sketchPad = document.querySelector("#sketchPad");

const sketchCell = document.createElement("div");

sketchCell.textContent = "I am a Cell";
sketchCell.style.height = "100px";

sketchPad.appendChild(sketchCell)