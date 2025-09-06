console.log("Hello World!");
const sketchPad = document.querySelector("#sketchPad");

for (let i = 0; i < 4; i++) {
    const sketchCell = document.createElement("div");
    sketchCell.textContent = "I am a Cell";
    sketchCell.style.height = "100px";
    sketchCell.style.aspectRatio = "1/1";
    sketchPad.appendChild(sketchCell);
}