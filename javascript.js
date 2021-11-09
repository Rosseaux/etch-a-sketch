const gridContainer = document.querySelector(".gridContainer");
const sizeSlider = document.querySelector(".sizeSlider");
const resizeButton = document.querySelector("#resize");
const colourButton = document.querySelector("#colour");
const sizeValue = sizeSlider.value;

gridCreate(16);


//Creates a grid with a set value
function gridCreate(cellCount) {
    let gridSize = cellCount * cellCount;
    for (let i = 0; i < gridSize; i++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        gridContainer.style.gridTemplateColumns = `repeat(${cellCount}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${cellCount}, 1fr)`;
        gridContainer.appendChild(cell);
        cell.addEventListener("mouseover", function(event) {
            event.target.style.backgroundColor = "black";
        })
    }

}

//clears grid, had to get some help from user Silende87's code with this one as I struggled.
function clearGrid() {
    gridContainer.innerHTML = "";
    gridCreate(16);
}

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    clearGrid();
});