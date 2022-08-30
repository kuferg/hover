const container = document.querySelector('.container');
let colors = [];
const squares = 800;

function randomColor() {
    const l = 6;
    let color = "";
    let charSet = "abcdef1234567890";
    
    for (let i = 0, n = 16; i < l; i++) {
        color += charSet.charAt(Math.floor(Math.random() * n));
    }
    colors.push(`#${color}`);
}

for (let i = 0; i < 21; i++)  randomColor(i);

for(let i = 0; i < squares; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(e) {
    const color = getRandomColor();
    e.style.background = color;
    e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

function removeColor(e) {
    e.style.background = '#1d1d1d'
    e.style.boxShadow = '0 0 2px #000'
}




