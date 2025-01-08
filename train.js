const choices = ['rock', 'paper', 'scissor'];
const playerDisplay = document.getElementById('player-choice');
const computerDisplay = document.getElementById('computer-choice');
const results = document.getElementById('result');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
let playerCounter = 0;
let computerCounter = 0; 


function playGame(choice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = ``
    console.log(computerChoice)

    if(choice === computerChoice){

        result = `IT'S A TIE!`        

    }else{

        switch(choice){
            case 'rock':
                result = (computerChoice === 'scissors')  ? 'YOU WIN' : 'YOU LOSE'
                break;
            case 'paper':
                result = (computerChoice === 'rock')  ? 'YOU WIN' : 'YOU LOSE'
                break;
            case 'scissor':
                result = (computerChoice === 'paper')  ? 'YOU WIN' : 'YOU LOSE'
                break;

        }
    }

    playerDisplay.textContent = `PLAYER: ${choice}`
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`
    results.textContent = result;

    results.classList.remove('correct', 'wrong');

    switch(result){

        case 'YOU WIN':
            results.classList.add('correct');
            playerCounter++;
            playerScore.textContent = playerCounter
            break;
        case 'YOU LOSE':
            results.classList.add('wrong');
            computerCounter++;
            computerScore.textContent = computerCounter
            break;

    }



}