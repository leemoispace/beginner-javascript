import { handleResult } from './handlers'; // import function from module,{}
import { colorsByLength, isDark } from './colors';

const colorsEl = document.querySelector('.colors');

function displayColors(colors) {
  return colors
    .map(
      (color) => `<span class="color ${color} ${isDark(color) ? 'dark' : ''}"
  style="background:${color};">${color}</span>`
    )
    .join('');
}

window.SpeechRecognition = window.webkitSpeechRecognition;

function start() {
  if (!('SpeechRecognition' in window)) {
    console.log('sorry your browser does not support ');
    return;
  }
  console.log('Starting');
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  // event listener
  recognition.onresult = handleResult;
  console.log(recognition);
  recognition.start();
}

start();
colorsEl.innerHTML = displayColors(colorsByLength);
