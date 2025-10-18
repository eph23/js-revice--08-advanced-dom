'use strict';

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => {
  return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(
    0,
    255
  )})`;
};
console.log(randomColor());

document
  .querySelector('.nav__link')
  .addEventListener('click', function (event) {
    this.style.backgroundColor = randomColor();
  });

document
  .querySelector('.nav__links')
  .addEventListener('click', function (event) {
    this.style.backgroundColor = randomColor();
  });

document.querySelector('.nav').addEventListener(
  'click',
  function (event) {
    this.style.backgroundColor = randomColor();
  },
  true
);
