console.log("Hello World!");
const sketchPad = document.querySelector("#sketchPad");

let size = Math.min(window.innerWidth, window.innerHeight);

console.log("the minimum size is: " + size)

sketchPad.style.height = size;
sketchPad.style.aspectRatio = "1/1";

for (let i = 0; i < 0; i++) {
    const sketchRow = document.createElement("div");
    for (let j = 0; j < 4; j++) {
        const sketchCell = document.createElement("div");
        sketchCell.textContent = "I am a Cell";
        //sketchCell.style.height = "100px";
        sketchCell.style.aspectRatio = "1/1";
        sketchRow.appendChild(sketchCell);
    }
    sketchPad.appendChild(sketchRow)    
}