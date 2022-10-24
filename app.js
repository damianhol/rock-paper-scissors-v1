const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice


possibleChoices.forEach(button => button.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    generateResult()
}));

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    if (randomNumber === 0){
        computerChoice = 'Paper';
    } else if (randomNumber === 1){
        computerChoice = 'Rock';
    } else {
        computerChoice = 'Scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function generateResult() {
    if (userChoice === computerChoice){
        resultDisplay.innerHTML = 'Draw'
    } else if (userChoice === 'Paper' && computerChoice === 'Scissors') {
        resultDisplay.innerHTML = 'Computer Wins'
    } else if (userChoice === 'Scissors' && computerChoice === 'Paper') {
        resultDisplay.innerHTML = 'User Wins'
    } else if (userChoice === 'Rock' && computerChoice === 'Scissors') {
            resultDisplay.innerHTML = 'User Wins'
   }
}