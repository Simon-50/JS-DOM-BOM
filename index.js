'use strict';

const buttons = document.querySelectorAll('button');
const pressedButtons = new Set();
const functions = [
  changeBg,
  changePicture,
  header,
  goodVibes,
  hidePicture,
  removeHeader,
  time,
  showPicture,
  showHeader,
];

//* First column
function changeBg() {
  document.body.style.background = '#add7e4';
}

function goodVibes() {
  document.querySelector('#good-vibes').style.display = 'block';
}

function time() {
  const timeDisplay = document.querySelector('#time');

  timeDisplay.textContent = Date();
  timeDisplay.style.display = 'block';
}

//* Second column
function changePicture() {
  const img = document.querySelector('img');

  img.src = `images/dice ${Math.floor(Math.random() * 6) + 1}.png`;
}

function hidePicture() {
  document.querySelector('img').style.display = 'none';
}

function showPicture() {
  document.querySelector('img').style.display = 'inline';
}

//* Third column
function header() {
  const header = document.querySelector('#header');

  header.style.background = '#808080';
  header.style.display = 'flex';
  header.style.flexDirection = 'column';
  header.style.alignItems = 'center';

  document.querySelector('#good-vibes').style.color = 'white';
  document.querySelector('#time').style.color = 'white';

  document.querySelector('img').style.border = '0.7vw solid #028104';
  document.querySelector('img').style.margin = '0';
}

function removeHeader() {
  document.querySelector('#header').style.display = 'none';
}

function showHeader() {
  document.querySelector('#header').style.display = 'flex';
}

//* Button tracking
function trackClicks(event) {
  pressedButtons.add(event.target.textContent);

  if (pressedButtons.size === buttons.length) {
    document.querySelector('#thanks').style.display = 'block';
  }
}

buttons.forEach((button, idx) => {
  button.addEventListener('click', functions[idx]);
  button.addEventListener('click', trackClicks);
});
