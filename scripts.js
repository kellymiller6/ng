var userInput = document.getElementById('user-input');
var guessBtn = document.getElementById('guess-btn');
var lastGuess = document.getElementById('user-guess');
var clearBtn = document.getElementById('clear-btn');
var hint = document.getElementById('hint');
var resetBtn = document.getElementById('reset-btn')
var userGuess;
var secretNumber;

window.onload = createSecretNumber()

guessBtn.addEventListener('click', function(){
  userGuess = parseInt(userInput.value);
  lastGuess.innerHTML = userInput.value;
  compareNumbers()
  clearInput();
})

clearBtn.addEventListener('click', function(){
  clearInput();
})

resetBtn.addEventListener('click', function(){
  clearInput();
  createSecretNumber();
  disableBtns();
  lastGuess.innerHTML = '';
  hint.innerHTML = '';
})

userInput.addEventListener('keyup', function(){
  guessBtn.disabled = false;
  clearBtn.disabled = false;
  resetBtn.disabled = false;
})

function clearInput() {
  userInput.value = '';
}

function disableBtns(){
  guessBtn.disabled = true;
  clearBtn.disabled = true;
  resetBtn.disabled = true;
}

function createSecretNumber(){
  secretNumber = Math.floor(Math.random() * (100-0) + 0);
  console.log(secretNumber)
}

function compareNumbers(){
  if(userGuess < secretNumber){
    hint.innerHTML = 'too low!';
  } else if (userGuess > secretNumber){
    hint.innerHTML = 'too high!';
  } else {
    hint.innerHTML = 'boom!';
  }
}
