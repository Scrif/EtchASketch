const grid = document.querySelector('.grid');
const resetBtn = document.querySelector('.reset');
const setGridSize = document.querySelector('.apply');
const defaultColor = '#222222'
const defaultSize = 16
const slider = document.getElementById('slider')

let currentColor = '#333333'
let blockSize = 16
let backgroundColor = defaultColor
let sizeValue = document.querySelector('size-value');
let gridSize = document.querySelector('input');

createGrid(blockSize);

colorPicker.onchange = (e) => setColor(e.target.value)
slider.onmousemove = (e) => updateSizeValue(e.target.value)
slider.onchange = (e) => changeSize(e.target.value)

// Function Declarations below:

// This function creates the grid of blocks by creating a grid of divs
// by iterating through a for loop until the gridSize conditions are met.
function createGrid(gridSize) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i=0; i < size * size; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add("grid-element")
        gridElement.addEventListener('mouseover', changeColor)
        gridElement.addEventListener('mousedown', changeColor)
        grid.appendChild(gridElement)
    }
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'rainbow') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = '#ffffff'
    }
}

// Resets the grid
function reset() {
    grid.innerHTML = ''
}

// Updates the pen color to the new selection
function setColor(newColor) {
    currentColor = newColor
}

// Updates the grid size to the new selection
function setCurrentSize(newSize) {
    currentSize = newSize
}

// Updates the grid dimension label to the new selection
function updateSizeValue(value) {
    sizeValue.textContent = `${blockSize}x${blockSize}`;
}

// Changes the size setting
function changeSize(value) {
    setCurrentSize(value)
    updateCurrentSize(value)
    reset()
}

function activateButton(newMode) {
    if (currentMode === 'rainbow') {
        rainbowBtn.classList.remove('active')
    } else if (currentMode === 'color') {
        colorBtn.classList.remove('active')
    } else if (currentMode === 'eraser') {
        eraserBtn.classList.remove('active')
    }
  
    if (newMode === 'rainbow') {
        rainbowBtn.classList.add('active')
    } else if (newMode === 'color') {
        colorBtn.classList.add('active')
    } else if (newMode === 'eraser') {
        eraserBtn.classList.add('active')
    }
  }

  window.onload = () => {
      setupGrid(defaultSize)
      activateButton(defaultMode)
  }

//Event Listeners:

// Changes the color of an individual block when the user mouses over it
grid.addEventListener('mouseover', function(e) {
    if (e.target.matches('.block')) {
        e.target.style.backgroundColor = currentColor;
    }
});

// Updates the grid size label when the user adjusts the slider
gridSize.addEventListener('input', function (e) {
    blockSize = e.target.value;
    sizeValue.textContent = `${blockSize}x${blockSize}`;
});

// Applies the new grid size setting from the slider
setGridSize.addEventListener('click', function () {
    reset();
})

// Clears the grid
resetBtn.addEventListener('click', reset);