const gridContainer = document.querySelector(".gridContainer");
let size = document.querySelector(".sizeSlider").value;
let drawColour = document.querySelector("#colour").value;
let drawStatus = true;
window.addEventListener("keydown", keyInput);
//initialise the grid on page load
start();
function start() {
    gridCreate(size);
    sliderDisplay();
}

//Creates a grid with a set value
function gridCreate(cellCount) {
    let gridSize = cellCount * cellCount;
    for (let i = 0; i < gridSize; i++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        gridContainer.style.gridTemplateColumns = `repeat(${cellCount}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${cellCount}, 1fr)`;
        gridContainer.appendChild(cell);
        drawOrNot();
    }
}

function keyInput(e) {
    if (e.key === "d") {
        drawStatus = true;
    }
    if (e.key === "a") console.log("a");
}
if (drawStatus === false) console.log("False");
if (drawStatus === true) console.log("True");

function drawOrNot() {
    let cell = document.querySelectorAll(".cell");
    if (drawStatus === true) {
        cell[cell.length-1].addEventListener("mouseover", function(event) {
            event.target.style.backgroundColor = drawColour;
    })};
    }


//Colour switcher, proud of this as it doesn't re-set the grid allowing you to
//use multiple colours on the drawing
const colourButton = document.querySelector("#colour");
colourButton.onchange = () => drawColour = document.querySelector("#colour").value;


//listener for the resize button 
const resizeButton = document.querySelector("#resize");
resizeButton.addEventListener("click", () => {
    const resizeValue = document.querySelector(".sizeSlider").value;
    resize(resizeValue);
});

//clears grid, had to get some help from user Silende87's code with this one as I struggled.
function clearGrid() {
    gridContainer.innerHTML = "";
    gridCreate(size);
}

//listener for clear button
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    clearGrid();
});

//size slider script
function sliderDisplay() {
    const sizeSlider = document.querySelector(".sizeSlider");
    const sliderDisplay = document.querySelector("#display");
    sliderDisplay.textContent = `Grid Size: ${sizeSlider.value} x ${sizeSlider.value}`;
    sizeSlider.addEventListener("input", function() {
        sliderDisplay.textContent = `Grid Size: ${sizeSlider.value} x ${sizeSlider.value}`;
    });
    
}
//resize function
function resize() {
    gridContainer.innerHTML = "";
    size = document.querySelector(".sizeSlider").value;
    gridCreate(size);
}

