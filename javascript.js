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
let promptNum = window.prompt("Squares")
function createGrid(promptNum) {
    const squareSize = 500/promptNum;
for(i = 0; i < promptNum*promptNum; i++) {
    const squares = document.createElement("div");
    squares.classList.add("squares");
    squares.style.width = `${squareSize}px`;
    squares.style.height = `${squareSize}px`;
    squares.textContent = "";
    canvas.appendChild(squares);
    squares.addEventListener("mouseover", changeColor)
    }
}

createGrid(promptNum)

canvas.style.color = "red"

function alertFunction() {
    alert("click");
}

function changeColor() {
    console.log("Hello World")
    this.style.backgroundColor = "red";
}

const clearCanvasBtn = document.getElementById("clearCanvas")

clearCanvasBtn.addEventListener("click", () => {
squares.style.backgroundColor = "blue";
})
