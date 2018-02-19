var userInput = document.getElementById('user-input');
var guessBtn = document.getElementById('guess-btn');
var lastGuess = document.getElementById('user-guess');
var clearBtn = document.getElementById('clear-btn');

guessBtn.addEventListener('click', function(){
  console.log('hit!', userInput.value);
  lastGuess.innerHTML = userInput.value;
  clearInput();
})

clearBtn.addEventListener('click', function(){
  clearInput();
})

function clearInput() {
  userInput.value = '';
}
