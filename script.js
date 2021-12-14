const grid = document.querySelector('#pixel-board');
const colorPallet = document.querySelectorAll('#color-palette div');
const clearBoard = document.getElementById('clear-board');
const pixels = document.getElementsByClassName('pixel');
const boardSize = document.getElementById('board-size');
const vqvButton = document.getElementById('generate-board')
const generateColor = document.getElementById('generate-color')
const child = grid.childElementCount
let colorRgb = []

function createBoard() {
    if (boardSize.value === '') {
        alert('Board inválido!')
    }

    grid.innerHTML = '';

    intervalCheck();

    grid.style.width = 42 * boardSize.value + 'px';
    for (let index = 0; index < boardSize.value * boardSize.value; index += 1) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        grid.appendChild(pixel);
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

function intervalCheck() {
    if (boardSize.value <= 5 && boardSize.value !== '') {
        boardSize.value = 5;
    } else if (boardSize.value >= 50) {
        boardSize.value = 50;
    }
}

function eraser(event) {
    event.target.style.backgroundColor = 'white'; 
}

for (let i = 0; i < pixels.length; i += 1){
    grid.addEventListener('dblclick', eraser);
}

function randomNumbers() {
    let rgb = []
    for (let i = 0; i < 3; i += 1) {
        rgb.push(Math.floor(Math.random() * 255) + 1)
    }

    return 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')'  
}

function randomColors() {
    for (let index = 0; index < 3; index += 1){
       let color = randomNumbers();
        
        if (index === 0) {
            colorRgb.push(color);
        }
        if (index === 1 && color !== colorRgb[0]) {
            colorRgb.push(color)
        } else if (index === 1) {
            colorRgb.push(randomNumbers())
        }
        if (index === 2 && color !== colorRgb[0] && color !== colorRgb[1]) {
            colorRgb.push(color)
        } else if (index === 2) {
            colorRgb.push(randomNumbers())
        }
    }
}

function palletGenerator() {
    colorRgb = []

    randomColors()

    document.getElementById('color2').style.backgroundColor = colorRgb[0]
    document.getElementById('color3').style.backgroundColor = colorRgb[1]
    document.getElementById('color4').style.backgroundColor = colorRgb[2]
}

function paintAll (event) {

    for (let i = 0; i < pixels.length; i += 1){
       document.getElementsByClassName('pixel')[i].style.backgroundColor = window.getComputedStyle(document.getElementsByClassName('color selected')[0]).getPropertyValue('background-color');
    }
}

document.getElementById("paint-all").addEventListener('click', paintAll);

generateColor.addEventListener('click', palletGenerator)

window.onload = palletGenerator

