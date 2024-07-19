let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('guess-button').addEventListener('click', () => {
    const userGuess = Number(document.getElementById('guess-input').value);
    const resultMessage = document.getElementById('result-message');
    const attemptsDisplay = document.getElementById('attempts');
    attempts++;

    if (userGuess === randomNumber) {
        resultMessage.textContent = `Parabéns! Você acertou o número ${randomNumber} em ${attempts} tentativas.`;
        resultMessage.style.color = 'green';
        attemptsDisplay.textContent = '';
        resetGame();
    } else if (userGuess < randomNumber) {
        resultMessage.textContent = 'Muito baixo! Tente novamente.';
        resultMessage.style.color = 'red';
    } else {
        resultMessage.textContent = 'Muito alto! Tente novamente.';
        resultMessage.style.color = 'red';
    }

    attemptsDisplay.textContent = `Tentativas: ${attempts}`;
    document.getElementById('guess-input').value = '';
    document.getElementById('guess-input').focus();
});

function resetGame() {
    setTimeout(() => {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        document.getElementById('result-message').textContent = '';
        document.getElementById('attempts').textContent = '';
    }, 5000);
}
