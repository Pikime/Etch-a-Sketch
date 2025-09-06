console.log("Hello World!");
const sketchPad = document.querySelector("#sketchPad");

let size = Math.min(window.innerwidth, window.innerheight);

console.log("the minimum size")

for (let i = 0; i < 4; i++) {
    const sketchCell = document.createElement("div");
    sketchCell.textContent = "I am a Cell";
    sketchCell.style.height = "100px";
    sketchCell.style.aspectRatio = "1/1";
    sketchPad.appendChild(sketchCell);
}