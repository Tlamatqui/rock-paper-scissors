//rock, paper, scissors game:

//prompt for user selection
function playerSelection() {
  const playerSelection = prompt("Rock, Paper, or Scissors?")

  return playerSelection;
}

//format string input
function conversion() {
  const string = playerSelection();
  const newString = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  return newString;
}

//randomly return an option
function computerSelection() {
  const attack = ["Rock", "Paper", "Scissors"]
  
  const random = Math.floor(Math.random() * attack.length);
  return attack[random];
}

//declare winner
function playRound(playerSelection, computerSelection) {
  const victory = "VICTORY!";
  const defeat = "DEFEAT!";
  const draw = "DRAW!"

  if (playerSelection === computerSelection) {
    return draw;
  } else if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      return victory;
    } else if (computerSelection === "Scissors") {
      return defeat;
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Scissors") {
      return defeat;
    } else if (computerSelection === "Rock") {
      return victory;
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      return defeat;
    } else if (computerSelection === "Paper") {
      return victory;
    }
  }
}

function game() {
  let score = 0;
  
  for (let i=0; i<5; i++) {
    console.log(playRound(conversion(), computerSelection()))
  }
}

game();