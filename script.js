console.log("Hello World!");
const sketchPad = document.querySelector("#sketchPad");

sketchPad.style.height = "85vmin";
sketchPad.style.width = "85vmin";
sketchPad.style.border = "5px solid black"

let count = 16;

for (let i = 0; i < count; i++) {
    const sketchRow = document.createElement("div");
    sketchRow.style.display = "flex";
    sketchRow.style.flexGrow = 1;
    for (let j = 0; j < count; j++) {
        const sketchCell = document.createElement("div");
        sketchCell.textContent = "I am a Cell";
        //sketchCell.style.height = "100px";
        sketchCell.style.aspectRatio = "1/1";
        sketchCell.style.flexGrow = 1;
        sketchCell.style.border = "1px solid darkgray";
        sketchCell.addEventListener("mouseenter", cellHover);
        sketchRow.appendChild(sketchCell);
    }
    sketchPad.appendChild(sketchRow)  ;  
}

function cellHover(event) {
    event.target.style.backgroundcolor = "black";
}