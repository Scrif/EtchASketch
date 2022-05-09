const defaultColor = '#ffffff'
const grid = document.querySelector('.grid')

let backgroundColor = defaultColor
let gridSize = document.querySelector('.grid-size')
let blockSize = 16


// Function Declarations below:

// This function creates the grid of blocks
function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            grid.appendChild(createDiv(grid.clientWidth / gridSize));
        }
    }
}

// This function sets the block size and creates the individual divs
function createBlock(size) {
    const block = document.createElement('div');
    div.classList.add('block');
    div.style.height = '${size}px';
    div.style.width = '${size}px';
    return block;
}

function reset() {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
    createGrid(blockSize);
}