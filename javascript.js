console.log("Etch-A-Sketch")
const cointainer = document.getElementById("container");



let squares = window.prompt("Squares")
function createGrid() {
for(i = 0; i < squares; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.textContent = "GRID";
    cointainer.appendChild(grid);
}
}






createGrid(squares)