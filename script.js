const randomNumber = Math.floor(Math.random() * 100) + 1;
const fakeAnswer = Math.floor(Math.random() * 100) + 100;
const messageElement = document.getElementById('message');
const errorMessageElement = document.getElementById('error-message');
const guessInput = document.getElementById('guess');
const guessBtn = document.getElementById('guessBtn');

console.error(`Pssst... The answer is ${fakeAnswer}`);

guessBtn.addEventListener('click', () => {
    const userGuess = Number(guessInput.value);

    if(userGuess === fakeAnswer){
        messageElement.textContent = "Caught you red-handed! Cheating won't win you any medals here.";
        messageElement.className = "cheat";
        return;
    }    

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        errorMessageElement.textContent = 'Please enter a number between 1 and 100.';
        return;
    }

    errorMessageElement.textContent = '';

    if (userGuess === randomNumber) {
        messageElement.innerHTML = "🎉 Jackpot! You guessed it! <a href=\"https://spageektti.cc/guess-the-number\">Play Again</a>";
        messageElement.className = "won";
        guessBtn.disabled = true;
        guessInput.disabled = true;
    } else if (userGuess < randomNumber) {
        messageElement.textContent = userGuess + "? Too low! Even a sloth could aim higher.";
        messageElement.className = "low";
    } else {
        messageElement.textContent = userGuess + "? Too high! NASA called, they want their rocket back.";
        messageElement.className = "high";
    }
});
