console.log("Hello World!");
const sketchPad = document.querySelector("#sketchPad");

sketchPad.style.height = "100vmin";
sketchPad.style.width = "100vmin";
sketchPad.style.justifContent = "center";
sketchPad.style.border = "10px solid black"

for (let i = 0; i < 4; i++) {
    const sketchRow = document.createElement("div");
    sketchRow.style.display = "flex";
    sketchRow.style.flexGrow = 1;
    for (let j = 0; j < 4; j++) {
        const sketchCell = document.createElement("div");
        sketchCell.textContent = "I am a Cell";
        //sketchCell.style.height = "100px";
        sketchCell.style.aspectRatio = "1/1";
        sketchCell.style.flexGrow = 1;
        sketchCell.style.border = "2px solid darkgray"
        sketchRow.appendChild(sketchCell);
    }
    sketchPad.appendChild(sketchRow)    
}