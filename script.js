'use strict';

// document.querySelector('.message').textContent;
//  

// document.querySelector('.number').textContent = 15;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 19;
// document.querySelector('.guess').value;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score =20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess) {
        displayMessage('⛔No number!') ;
    }else if (guess === secretNumber) {
        displayMessage('👍correct Number!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;

        }

    } else if (guess  !== secretNumber) {
        if(score > 1) {
            
            displayMessage (guess > secretNumber ? '📈Too High' : '📉Too Low') ;
            score = score - 1;
            document.querySelector('.score').textContent = score;
            } else {
                displayMessage('🤦‍♂️you lost the game');
                document.querySelector('.score').textContent = 0;
            }

    // } else if (guess > secretNumber) {
    //     if(score > 1) {
            
    //     document.querySelector('.message').textContent = '📈Too High';
    //     score = score - 1;
    //     document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '🤦‍♂️you lost the game';
    //         document.querySelector('.score').textContent = 0;
    //     }

    // }
    // else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉Too Low';
    //         score = score - 1;
    //         document.querySelector('.score').textContent = score;
    //     }else {
    //         document.querySelector('.message').textContent = '🤦‍♂️you lost the game';
    //         document.querySelector('.score').textContent = 0;
    //     }


    }
});
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...') ;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';

})