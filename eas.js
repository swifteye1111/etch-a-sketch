const container = document.querySelector('#container');

const tiles = document.createElement('div');
const btns = document.createElement('div');

btns.classList.add('btns');
container.appendChild(btns);

for (let i = 0; i < 4; i++) {
    let button = document.createElement('button');
    button.classList.add('button');
    button.textContent = 'Button' + i.toString();
    btns.appendChild(button);
}
const buttons = document.getElementsByClassName('button');

const dimBtn = buttons[0];
dimBtn.textContent = 'Change dimensions';

const rainbowBtn = buttons[1];
rainbowBtn.setAttribute('id','rainbow');
rainbowBtn.textContent = 'Paint rainbow colors'

const blackBtn = buttons[2];
blackBtn.setAttribute('id','black');
blackBtn.textContent = 'Paint black'

const darkBtn = buttons[3];
darkBtn.setAttribute('id','darken');
darkBtn.textContent = 'Darken by 10%';

tiles.classList.add('tiles');
container.appendChild(tiles);

let color = 'black';

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

function darken(tile) {
    return;
}

dimBtn.addEventListener('click', () => {
    x = prompt('Please enter the number of squares per side, up to 100.');
    if (x > 1 || x < 100) {
        newBox(x,color);
    } else {
        x = prompt('Invalid input. Please enter a number between 1 and 100');
    }
});

rainbowBtn.addEventListener('click', () => {
    color = 'rainbow';
    newBox(Math.sqrt(numTiles), color);
});

function makeBox (dim, color) {
    for (let i = 0; i < dim; i++) {
        const div = document.createElement('div');
        div.classList.add('tile');
        div.style.width = tileWidth;
        tiles.appendChild(div);

        div.addEventListener('mouseover', () => {
            if (color === 'rainbow') {
                let rgb = getRandomNums();
                div.style.background = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
            } else if (color === 'darken') {
                darken(div);
            } else div.style.background = 'black';
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
    makeBox(numTiles,color);
}