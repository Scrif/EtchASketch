const container = document.querySelector('.container');
const clearButton = document.querySelector('.clear');

// On Page Load - default size
createGrid(10);

function createGrid (gridNumber) {
    let gridArea = gridNumber * gridNumber;
    for (let i = 1, i <= gridArea; i++) {
        let gridItem = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        container.insertAdjacentElement('beforeend', gridItem);
    }
    var gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', colorGrid));
}

function wipeColors() {
    var gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = '#ffffff');
}

// Event Listeners
clearButton.addEventListener('click', eraseAllColor);
clearButton.addEventListener('mouseover', buttonHover);
clearButton.addEventListener('mouseout', buttonStandard);
colorButtons.forEach(colorButton => colorButton.addEventListener('click', changeColor));
colorButtons.forEach(colorButton => colorButton.addEventListener('mouseover', buttonHover));
colorButtons.forEach(colorButton => colorButton.addEventListener('mouseout', buttonStandard));
slider.addEventListener('mouseup', pixelSize);
userColorPicker.addEventListener('change', userColorSelection, false);
userColorPicker.addEventListener('input', userColorSelection, false);