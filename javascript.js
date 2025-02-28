

console.log("Etch-A-Sketch")
const cointainer = document.getElementById("container");
const divContainer = document.getElementById("divContainer");
const board = document.getElementById("board");
const newBoardBtn = document.getElementById("newBoardBtn");
const clearBoardBtn = document.getElementById("clearBoardBtn");
const redBtn = document.getElementById("redBtn");
const eraserBtn = document.getElementById("eraserBtn");
const rainbowBtn = document.getElementById("rainbowBtn");

let size = 16
let color = ""

// This function asks the user for a number of squares for the canvas
// and creates a grid of squared divs by squaring the inputted number
// the size of the div is set by dividing the size (height and width) of
// the canvas by the number of squares so that it stays constant
// e.g. if the square number is 10 and the canvas is 500px*500px
// 500/10 = 50px for the height and 50 px for the width of every div 

function createGrid(size) {
    const squareSize = 500/((size));
for(i = 0; i < size*size; i++) {
    let div = document.createElement("div");
    div.classList.add("divs")
    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;
    board.appendChild(div);
    div.addEventListener("mouseover", colorDiv)
    }
    const allDivs = board.querySelectorAll(".divs");
}

function getSize() {
    let squaresNum = window.prompt("Please choose the number of squares for each side of the sketching board, it should be between 2 and 100.");
    console.log(squaresNum)
        if (squaresNum < 2 || squaresNum > 100) {
            alert("The number of squares should be between 2 and 100, please choose again.");
            getSize();
        } else {
            size = squaresNum;    
        }
}

board.addEventListener("mouseover", (e) => {
    
    if (e.target == board) {
        console.log("not a div");
    } else if (e.target.tagName == "DIV") {
        console.log("div");
        //console.log(e.target)
        e.target.style.backgroundColor = "green";
    }
})

function colorDiv() {
if (color == "red") {
    this.style.backgroundColor = "red";
} else if (color == "white") {
    this.style.backgroundColor = "white";
}}


function resetBoard() { 
    const allDivs = board.querySelectorAll(".divs");
    allDivs.forEach((div) => div.style.backgroundColor = "white");
}
function removeDivs(){
    const allDivs = board.querySelectorAll(".divs");
    allDivs.forEach((div) => board.removeChild(div));  
}
    
redBtn.addEventListener("click", () => {
    setColor("red");
})

eraserBtn.addEventListener("click", () => {
    setColor("white");
});


function setColor(colorChoice) {
    color = colorChoice
}

clearBoardBtn.addEventListener("click", resetBoard)

newBoardBtn.addEventListener("click", () => {
    removeDivs();
    getSize();
    createGrid(size);
})

createGrid(size)

function rainbow() {
    r = Math.floor(Math.random() * 255)
    g = Math.floor(Math.random() * 255)
    b = Math.floor(Math.random() * 255)
    getRgb = [r,g,b]
    rgb = getRgb.join(",")

console.log(rgb)
}

const button = document.getElementByTagName("button")
button.style.color = "blue"