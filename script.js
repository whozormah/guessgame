'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'New Score';
// document.querySelector('.score').textContent = 10;
// document.querySelector('.number').textContent = 19;
// document.querySelector('.guess').value = 12;
// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.score').textContent);
// console.log(document.querySelector('.number').textContent);
// console.log(document.querySelector('.guess').value);

let score = 20;
let highscore = 0;
const ranNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = ranNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = `Enter a number`;

    // When Player Wins
  } else if (guess === ranNumber) {
    document.querySelector('.message').textContent = `🏆 Correct Number`;
    document.querySelector('.number').textContent = ranNumber;
    document.querySelector('body').style.backgroundColor = '#20C32C';
    document.querySelector('.number').style.width = '30rem';
    // Setting the highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // I refactored the code ...here
  } else if (guess !== ranNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess < ranNumber ? `The guess is to LOW 😒` : `Guess is too HIGH`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector(
        '.message'
      ).textContent = `Youve lost the game 😫😫😫😒`;
      document.querySelector('.score').textContent = 0;
    }
  }
  // I did this first

  //   } else if (guess < ranNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = `The guess is to LOW 😒`;
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector(
  //         '.message'
  //       ).textContent = `Youve lost the game 😫😫😫😒`;
  //       document.querySelector('.score').textContent = 0;
  //     }
  //     // When there is a high guess
  //   } else if (guess > ranNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = `Guess is too HIGH 😥`;
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     }
  //   } else {
  //     document.querySelector(
  //       '.message'
  //     ).textContent = `Youve lost the game 😫😫😫😒`;
  //     document.querySelector('.score').textContent = 0;
  //   }
  // });

  // Reset the Game
  document.querySelector('.again').addEventListener('click', function () {
    const ranNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = `?`;
    document.querySelector('body').style.backgroundColor = '#333';
    document.querySelector('.message').textContent = `Enter a number`;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').value = 20;
    document.querySelector('.message').textContent = `Start guessing...`;
    document.querySelector('.guess').value = ``;
  });
});
