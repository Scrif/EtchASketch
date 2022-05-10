const grid = document.querySelector('.grid')
let gridSetting = document.querySelector('.grid-size-setting')
let gridSize = document.querySelector('grid-size')
const resetBtn = document.querySelector('.reset')
let blockSize = 16

const defaultColor = '#ffffff'
let backgroundColor = defaultColor

createGrid(blockSize);

// Function Declarations below:

// This function creates the grid of blocks by creating a grid of divs
// by iterating through a for loop until the gridSize conditions are met.
function createGrid(gridSetting) {
    for (let i = 0; i < gridSetting; i++) {
        for (let j = 0; j < gridSetting; j++) {
            grid.appendChild(createBlock(grid.clientWidth / gridSetting));
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

//Event Listeners:

grid.addEventListener('mouseover', function(e) {
    if (e.target.matches('box')) {
        e.target.classList.add('active');
    }
});

gridSize.addEventListener('input', function (e) {
    blockSize = e.target.value;
    gridSetting.textContent = `${blockSize}x${blockSize}`;
});

applyGridSize.addEventListener('click', function () {
    reset();
})

resetBtn.addEventListener('click', reset);