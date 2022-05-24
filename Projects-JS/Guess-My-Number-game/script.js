'use strict';

let Secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = document.querySelector('.guess').value;
    console.log(guess);
    //when there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = '😢 No Number!';
        displayMessage('😢 No Number!');
    }
    //when player wins
    else if (guess == Secretnumber) {
        // document.querySelector('.message').textContent = '🎉 Correct Number!';
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = Secretnumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    //when guess is wrong
    else if (guess !== Secretnumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > Secretnumber ? '🔥 Too High!' : '🌂 Too Low!';
            displayMessage(guess > Secretnumber ? '🔥 Too High!' : '🌂 Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            // document.querySelector('.message').textContent = '😢 You lost the game!';
            displayMessage('😢 You lost the game!');
            document.querySelector('.score').textContent = 0;

        }

    }
    // else if (guess > Secretnumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '🔥 Too High!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = '😢 You lost the game!';
    //         document.querySelector('.score').textContent = 0;

    //     }
    // }
    // //when guess is too low
    // else if (guess < Secretnumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '🌂 Too Low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = '😢 You lost the game!';
    //         document.querySelector('.score').textContent = 0;

    //     }

    // }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    Secretnumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.guess').value = ' ';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';



})


