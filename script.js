console.log("Hello World!");
const sketchPad = document.querySelector("#sketchPad");

const sketchCell = document.createElement("div");

sketchCell.textContent = "I am a Cell";
sketchCell.style.height = "100px";
sketchCell.style.aspect-ratio: "1/1";

for(let i = 0; i < 4; i++) {
    sketchPad.appendChild(sketchCell);
}