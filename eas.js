const container = document.querySelector('#container');
const tiles = document.createElement('div');

const btn = document.createElement('div');
container.appendChild(btn);
const button = document.createElement('button');
button.classList.add('button');
button.textContent = 'Change Dimensions';
btn.appendChild(button);

tiles.classList.add('tiles');
container.appendChild(tiles);

let x = 16;
let numTiles = x * x;
const boxWidth = tiles.offsetWidth;
let tileWidth = `${boxWidth / Math.sqrt(numTiles)}px`;

makeBox(numTiles);

function getRandomNums () {
    let randomNums = [];
    for (let i = 0; i < 3; i++)
        randomNums[i] = Math.round(Math.random() * 255);
    return randomNums;
}

button.addEventListener('click', () => {
    x = prompt('Please enter the number of squares per side, up to 100.');
    if (x > 1 || x < 100) {
        newBox(x);
    } else {
        x = prompt('Invalid input. Please enter a number between 1 and 100');
    }
});

function makeBox (dim) {
    for (let i = 0; i < dim; i++) {
        const div = document.createElement('div');
        div.classList.add('tile');
        div.style.width = tileWidth;
        tiles.appendChild(div);

        div.addEventListener('mouseover', () => {
            let rgb = getRandomNums();
            div.style.background = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
        });
    }
}

function clearBox () {
    let first = tiles.firstElementChild;
    while (first) {
        first.remove();
        first = tiles.firstElementChild;
    }
}

function newBox(input) {
    numTiles = input * input;
    tileWidth = `${boxWidth / Math.sqrt(numTiles)}px`;
    clearBox();
    makeBox(numTiles);
}