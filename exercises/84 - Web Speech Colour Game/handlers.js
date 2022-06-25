import { isValidColor } from './colors';

function logWords(results) {
  //   console.log(results[results.length - 1][0].transcript);
  // didnt output anything 11:40
}

export function handleResult({ results }) {
  //   logWords(results);
  const words = results[results.length - 1][0].transcript;
  console.log(words);
  // lower case
  const color = words.toLowerCase();
  // strip spaces
  color = color.replace(/\s/g, '');
  // check if it is a valid color
  if (!isValidColor(color)) return;
  // if it is
  const colorSpan = document.querySelector(`.${color}`);
  // const colorSpan=document.getElementsByClassName(color)[0];
  colorSpan.classList.add('got');
  console.log('this is valid color');
  console.log(color);
  // change the background color
  document.body.style.backgroundColor = color;
}
