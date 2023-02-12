'use strict';


let random = Math.floor(Math.random() * (20 - 1) + 1);
let score = 20;
let highscore = 0;

document.querySelector('.btn-check').addEventListener('click', function () {

  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '😅 No Number !';
  }

  else if (guess > 20 || guess < 1) {
    document.querySelector('.message').textContent = 'Enter a number between 1 and 20 😃';
  }

  else if (guess === random) {
    document.querySelector('.message').textContent = 'Correct Number!😎';
    document.body.style.backgroundColor = "rgb(40, 162, 40)"
    document.querySelector('.number').textContent = guess;
    highscore += score;
    document.querySelector('.highscore').textContent = highscore;
    random = Math.floor(Math.random() * (20 - 1) + 1);
  }

  else if ((guess < random && random - guess <= 2) || (guess > random && guess - random <= 2)) {
    document.querySelector('.message').textContent = 'Too Hot 😏';
    score--;
    document.querySelector('.score').textContent = score;
    document.body.style.backgroundColor = "rgb(77, 71, 71)";
  }

  else if (guess > random) {
    document.querySelector('.message').textContent = 'Too Big 😑';
    score--;
    document.querySelector('.score').textContent = score;
    document.body.style.backgroundColor = "rgb(77, 71, 71)";
  }

  else if (guess < random) {
    document.querySelector('.message').textContent = 'Too small 😑';
    document.querySelector('.score').textContent = score;
    score--;
    document.body.style.backgroundColor = "rgb(77, 71, 71)";
  }

  if (score === 0) {
    document.body.style.backgroundColor = "red";
    document.querySelector('.message').textContent = 'You lost ! 😌';
    document.querySelector('.score').textContent = '0';
    document.querySelector('.highscore').textContent = '0';
  }

});

/* Reset Game */
document.querySelector('.btn-again').addEventListener('click', function () {
  document.querySelector('.guess').value = null;
  document.querySelector('.number').textContent = '?';
  random = Math.floor(Math.random() * (20 - 1) + 1);
  document.querySelector('.message').textContent = 'Start guessing ... ';
  document.body.style.backgroundColor = "rgb(77, 71, 71)";
  document.querySelector('.score').textContent = '20';
  score = 20;
});










