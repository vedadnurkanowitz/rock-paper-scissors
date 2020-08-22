let player = 0;
let computer = 0;
let tie = 0;

function computerPlay() {
  let choices = ['Rock', 'Paper', 'Scissors'];

  return choices[Math.floor(Math.random() * 3)].toLowerCase();
}

function playRound(playerChoice, computerChoice) {
  let playerFormated = playerChoice.toLowerCase();
  let computerFormated = computerChoice.toLowerCase();

  if (
    (playerFormated === 'paper' && computerFormated === 'rock') ||
    (playerFormated === 'scissors' && computerFormated === 'paper') ||
    (playerFormated === 'rock' && computerFormated === 'scissors')
  ) {
    return `You win the round!`;
  } else if (
    (computerFormated === 'paper' && playerFormated === 'rock') ||
    (computerFormated === 'scissors' && playerFormated === 'paper') ||
    (computerFormated === 'rock' && playerFormated === 'scissors')
  ) {
    return `You lose the round!`;
  } else {
    return `It's a draw...`;
  }
}

function game() {
  for (i = 0; i < 5; i++) {
    let playerChoice = window.prompt('rock, paper or scissors?');
    let round = playRound(playerChoice, computerPlay());

    console.log(round);
  }
}

console.log(game());
