// select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch'); // # id
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake'); // # id
const MOVE_AMOUNT = 10;
// setup our canvas for drawing
const { width, height } = canvas;
// const width =canvas.width;
// destructuring, put a property into a variable
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round'; // the style of the end caps for a line
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();
// write a draw function
// pass a option object
function draw({ key }) {
  console.log(key);
  hue += 1;
  ctx.strokeStyle = `hsl(${hue},100%,50%)`;

  // start the path
  ctx.beginPath();
  ctx.moveTo(x, y);
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// write a handler for the keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
    console.log(`handling key${e.key}`);
  }
}
// clear shake fucntion
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    () => {
      canvas.classList.remove('shake');
    },
    { once: true }
  );
}

// listen for arrow keys
window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);
