import {random} from './math.ts';

function randColorStr() {
  const col = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  return col;
}

function setBg(element, color: string) {
  element.style.backgroundColor = color;
}

function randomBg() {
  let color = randColorStr();
  setBg(color);
}

