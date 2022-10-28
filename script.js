'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 2;
let score = 20;
let highscore = 0;
const buttons = document.getElementsByClassName('btn');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const celebration = () => {

  const start = () => {
    setTimeout(function() {
        confetti.start()
    }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
  };
  
  //  Stop
  
  const stop = () => {
    setTimeout(function() {
        confetti.stop()
    }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
  };
  
  start();
  stop();
  };
  

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  
// var input = document.getElementsByClassName("guess");
//   input.addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {
//       event.preventDefault();
//       document.getElementById("button").click();
//     }
//   });

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';

    displayMessage('🎉 Correct Number!');
    celebration();
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#1e631e'; 
    buttons[0].style.backgroundColor= '#60b347';
    // buttons[0].style.boxShadow=' 6px 6px 6px #fff, -6px -6px 6px #4ad54a;';
    buttons[0].style.Color = '#222';
    buttons[1].style.backgroundColor= '#60b347';
    buttons[1].style.boxShadow='6px 6px 9px #123512, -6px -6px 9px #4ad54a;';
    buttons[1].style.Color = '#222';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }


    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📉 Try going lower!' : '📈 Try going higher!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }  
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

