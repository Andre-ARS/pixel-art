let pixels = document.querySelector('#grid-length')
let grid = document.querySelector('#pixel-board')
let colorPallet = document.querySelectorAll('#color-palette div')
let pickedColor = document.getElementsByClassName('color selected')[0]
let clearBoard = document.getElementById('clear-board')

// function createBoard(base) {
//     for (let index = 0; index < base; index += 1) {
//         let line = document.createElement('section')

//         grid.appendChild(line)
//         for (let i = 0; i < base; i += 1) {
//             let pixel = document.createElement('div')

//             pixel.className = 'pixel'
//             line.appendChild(pixel)
//         }       
//     }
// }

// pixels.addEventListener('change', createBoard(document.querySelector('#grid-length').value))

function pickColor (event) {
    for (let index = 0; index < colorPallet.length; index += 1) {
        if (colorPallet[index].className === 'color selected') {
            document.querySelectorAll('#color-palette div')[index].className = 'color';
            break
        }    
    } 
    event.target.className = 'color selected'        
    
}
for (let i = 0; i < colorPallet.length; i += 1) {
    document.querySelectorAll('#color-palette div')[i].addEventListener('click', pickColor)    
}

function painter(event) {
    // if (event.target.className === 'color') {
        event.target.style.backgroundColor = window.getComputedStyle(document.getElementsByClassName('color selected')[0]).getPropertyValue('background-color'); 
    // }
}

grid.addEventListener('click', painter)

function clear() {
    document.getElementById('pixel-board').style.backgroundColor = 'white'
}

document.getElementById('clear-board').addEventListener('click', clear) 