// console.log("Number");

let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.gusses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const resultParas = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    // Validation for values
    if (isNaN(guess)) {
        alert("plz enter a valid number");
    } else if (guess < 1) {
        alert("plz enter number mopre than 1");
    } else if (guess > 100) {
        alert("plz enter number less than 100");
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            dispalyGuess(guess);
            displayMessage(`Game over ,Your Random number was ${randomNumber}`);
            endGame()
        } else {
            dispalyGuess(guess);
            CheckGuess(guess);
        }
    }
}

function CheckGuess(guess) {
    // check the  value is equal to random number
    if (guess === randomNumber) {
        displayMessage(`You gueesed right`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is too low`)
    } else if (guess > randomNumber) {
        displayMessage(`Number is too high`)
    }
}

function dispalyGuess(guess) {
    // Clean the values n arrays updation and update the remaing guesses
    userInput.value = '';
    guessSlot.innerHTML += `${guess}`;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(message) {
    // Wil, display the message
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
    userInput.value = '';
    userInput.setAttribute('disable', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="new-Game">Start New Game</h2>`;
    resultParas.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',(e)=>{
        e.preventDefault();
        randomNumber=parseInt(Math.random() * 100 + 1);
        prevGuess=[]
        numGuess=1;
        guessSlot.innerHTML='';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disable');
        resultParas.removeChild(p)
        playGame=true;
    })
}