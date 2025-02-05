console.log("Etch-A-Sketch")
const cointainer = document.getElementById("container");
const etchASketch = document.getElementById("etch-a-sketch");


let squares = window.prompt("Squares")
function createGrid() {
for(i = 0; i < squares*squares; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.textContent = "GRID";
    etchASketch.appendChild(grid);
}
}






createGrid(squares)