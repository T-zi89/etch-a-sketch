

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
let rgb = ""

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

// This function updated the color global variable with the color chosen
// by clicking the color buttons

function setColor(colorChoice) {
    color = colorChoice
}

// This function has a mouseover event listener applied to the board div,
// then if the mouseover is on one of the divs (but not on the board div) the div
// is colored based on which color was chosen by the user (stored in the color global variable)
// The rainbow color is randomized with Math.floor and an array join method

function colorDiv() {
    board.addEventListener("mouseover", (e) => {
        if (e.target != board) {
            if (color == "red") {
                e.target.style.backgroundColor = "red";
            } else if (color == "white") {
                e.target.style.backgroundColor = "white";
            } else if (color == "rgb") {
                    r = Math.floor(Math.random() * 255)
                    g = Math.floor(Math.random() * 255)
                    b = Math.floor(Math.random() * 255)
                    getRgb = [r,g,b]
                    rgb = getRgb.join(" ")
                    e.target.style.backgroundColor = `rgb(${rgb})`;
            }} else {
        }
    })
}

// This function takes all the divs in the board and reset them 
// by changing their background color to white

function resetBoard() { 
    const allDivs = board.querySelectorAll(".divs");
    allDivs.forEach((div) => div.style.backgroundColor = "white");
}

// This function remove all the divs in the board with removeChild
// since each div is a child of board

function removeDivs(){
    const allDivs = board.querySelectorAll(".divs");
    allDivs.forEach((div) => board.removeChild(div));  
}

// Every color button has a click event listener that updates the color global variable

redBtn.addEventListener("click", () => {
    setColor("red");
})

eraserBtn.addEventListener("click", () => {
    setColor("white");
});

rainbowBtn.addEventListener("click", () => {
    setColor("rgb")
})

clearBoardBtn.addEventListener("click", resetBoard)

// This button creates a new board, in order it calls for the removeDivs, getSize and createGrid functions

newBoardBtn.addEventListener("click", () => {
    removeDivs();
    getSize();
    createGrid(size);
})

createGrid(size)