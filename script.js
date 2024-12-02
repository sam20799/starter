'use strict';

let number = Math.floor(Math.random() * 20) + 1;
// we have generated random no here based on this number we're manup. our dom by directly comparing with this number.
// it has nothing to do with below update .
// this update is just to show the number on ? place .
// document.querySelector('.number').textContent = number;

const checkBtnEl = document.querySelector('.check');
const inputEl = document.querySelector('.guess');
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
let score = Number(scoreEl.textContent);
const highScoreEl = document.querySelector('.highscore');
const btnAgain = document.querySelector('.again');
// console.log(againEl);
// console.log(score);

// inputEl.value = 13;
let count = 0;
let updatedScore = 0;
let prevHighScore = 0;
let printHighScore = 0;

checkBtnEl.addEventListener('click', () => {
  count++;

  updatedScore = score - count;

  let inputValue = Number(document.querySelector('.guess').value);
  // console.log(inputValue);
  if (updatedScore > 0) {
    scoreEl.textContent = updatedScore;

    if (inputValue == 0) {
      messageEl.textContent = '⛔ Number not given';
    } else if (inputValue == number) {
      messageEl.textContent = '🎉 Correct guess!! ';
      document.querySelector('.number').textContent = number;

      document.querySelector('body').classList.add('bodyWin');
      document.querySelector('.number').style.width = '30rem';
      // printHighScore =
      //   updatedScore > prevHighScore ? updatedScore : prevHighScore;
      highScoreEl.textContent =
        updatedScore > prevHighScore ? updatedScore : prevHighScore;
    } else if (inputValue > number) {
      messageEl.textContent = '🥱 Too high!!';
    } else if (inputValue < number) {
      messageEl.textContent = '🥱 Too low';
    }
  } else {
    messageEl.textContent = '😂You lost!!';
    scoreEl.textContent = 0;
  }
});

btnAgain.addEventListener('click', () => {
  prevHighScore = Number(highScoreEl.textContent);

  let number2 = Math.floor(Math.random() * 20) + 1;
  number = number2;
  document.querySelector('.number').textContent = number;

  messageEl.textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  inputEl.value = '';
  scoreEl.textContent = 20;
  highScoreEl.textContent = prevHighScore;
  count = 0;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').classList.remove('bodyWin');
});
