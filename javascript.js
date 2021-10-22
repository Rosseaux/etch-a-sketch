const gridContainer = document.createElement("div");
let sizeSlider = document.querySelector("#sizeSlider");
sizeSlider.value = "256";

gridContainer.className = "gridContainer"
document.body.appendChild(gridContainer);
for (i=0; i < sizeSlider.value; i++) {
    let grid = document.createElement("div");
    grid.className = "grid";
    grid.addEventListener("mouseover", (colour => {
        colour.target.style.backgroundColor = "aqua";
    }));
    gridContainer.appendChild(grid);
}

const clearButton = document.createElement("button");
clearButton.className = "button";
clearButton.id = "clear";
clearButton.textContent = "clear";
clearButton.addEventListener("click", reset);
document.body.appendChild(clearButton);




function reset() {
    let grid = document.querySelectorAll(".grid");
    grid.forEach(cell => {
        cell.style = "background-color: rgba(255, 255, 255, 0.596)";
    })
}