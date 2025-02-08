console.log("Etch-A-Sketch")
const cointainer = document.getElementById("container");
const canvas = document.getElementById("canvas");
let gridDefault = 16


// This function asks the user for a number of squares for the canvas
// and creates a grid of squared divs by squaring the inputted number
// the size of the div is set by dividing the size (height and width) of
// the canvas by the number of squares so that it stays constant
// e.g. if the square number is 10 and the canvas is 500px*500px
// 500/10 = 50px for the height and 50 px for the width of every div 
let squares = window.prompt("Squares")
function createGrid(squares) {
    const squareSize = 500/squares;
for(i = 0; i < squares*squares; i++) {
    const squares = document.createElement("div");
    squares.classList.add("squares");
    squares.style.width = `${squareSize}px`
    squares.style.width = `${squareSize}px`
    squares.textContent = "";
    canvas.appendChild(squares);
}}






createGrid(squares)