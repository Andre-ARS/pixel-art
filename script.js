const grid = document.querySelector('#pixel-board');
const colorPallet = document.querySelectorAll('#color-palette div');
const clearBoard = document.getElementById('clear-board');
const pixels = document.getElementsByClassName('pixel');
const boardSize = document.getElementById('board-size');
const vqvButton = document.getElementById('generate-board')
const child = grid.childElementCount


function createBoard() {
grid.innerHTML = ''

    grid.style.width = 42 * boardSize.value + 'px'
    for (let index = 0; index < boardSize.value * boardSize.value; index += 1) {
        let pixel = document.createElement('div')
        pixel.className = 'pixel'
        grid.appendChild(pixel)
    }
}

vqvButton.addEventListener('click', createBoard);

function pickColor (event) {
    for (let index = 0; index < colorPallet.length; index += 1) {
        if (colorPallet[index].className === 'color selected') {
            document.querySelectorAll('#color-palette div')[index].className = 'color';
            break;
        }    
    } 
    event.target.className = 'color selected';        
    
}
for (let i = 0; i < colorPallet.length; i += 1) {
    document.querySelectorAll('#color-palette div')[i].addEventListener('click', pickColor);    
}

function painter(event) {
    // if (event.target.className === 'color') {
        event.target.style.backgroundColor = window.getComputedStyle(document.getElementsByClassName('color selected')[0]).getPropertyValue('background-color'); 
    // }
}

for (let i = 0; i < pixels.length; i += 1){
    grid.addEventListener('click', painter);
}


function clear() {

    for (let i = 0; i < pixels.length; i += 1){
       document.getElementsByClassName('pixel')[i].style.backgroundColor = 'white';
    }
}

document.getElementById('clear-board').addEventListener('click', clear);