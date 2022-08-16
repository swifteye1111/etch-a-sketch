const container = document.querySelector('#container');

const tiles = document.createElement('div');
const btns = document.createElement('div');

let color = 'black';

btns.classList.add('btns');

container.appendChild(btns);
const dimBtn = document.createElement('button');
dimBtn.classList.add('button');
dimBtn.textContent = 'Change Dimensions';
btns.appendChild(dimBtn);

const rainbowBtn = document.createElement('button');
rainbowBtn.classList.add('button');
rainbowBtn.setAttribute('id','rainbow');
rainbowBtn.background = 'green';
rainbowBtn.textContent = 'Paint rainbow colors'
btns.appendChild(rainbowBtn);

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

function darken() {
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
                darken();
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