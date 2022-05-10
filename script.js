const grid = document.querySelector('.grid');
let sizeValue = document.querySelector('.grid-size');
let gridSize = document.querySelector('input');
const resetBtn = document.querySelector('.reset');
const setGridSize = document.querySelector('.apply');
const defaultColor = '#ffffff'
let currentColor = defaultColor
let blockSize = 16
let backgroundColor = defaultColor

createGrid(blockSize);

// Function Declarations below:

// This function sets the block size and creates the individual divs
function createBlock(size) {
    const div = document.createElement('div');
    div.classList.add('block');
    div.style.height = `${size}px`;
    div.style.width = `${size}px`;
    return div;
}

// This function creates the grid of blocks by creating a grid of divs
// by iterating through a for loop until the gridSize conditions are met.
function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            grid.appendChild(createBlock(grid.clientWidth / gridSize));
        }
    }
}

// Resets the grid
function reset() {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
    createGrid(blockSize);
}

function setColor(newColor) {
    currentColor = newColor
}

colorPicker.onchange = (e) => setColor(e.target.value)

//Event Listeners:

// Changes the color of an individual block when the user mouses over it
grid.addEventListener('mouseover', function(e) {
    if (e.target.matches('.block')) {
        e.target.style.backgroundColor = currentColor;
    }
});

// Updates the grid size label when the user adjusts the slider
gridSize.addEventListener('grid-size', function (e) {
    blockSize = e.target.value;
    gridSetting.textContent = `${blockSize}x${blockSize}`;
});

// Applies the new grid size setting from the slider
applyGridSize.addEventListener('click', function () {
    reset();
})

// Clears the grid
resetBtn.addEventListener('click', reset);