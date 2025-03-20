const words = ["javascript", "python", "html", "css", "react", "node"];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let attemptsLeft = 6;
let guessedLetters = [];
let displayWord = Array(selectedWord.length).fill("_");

function updateDisplay() {
    document.getElementById("word").textContent = displayWord.join(" ");
    document.getElementById("tries").textContent = attemptsLeft;
    document.getElementById("guessed").textContent = guessedLetters.join(", ");
}

function handleKeyPress(event) {
    const letter = event.key.toLowerCase();

    if (guessedLetters.includes(letter) || attemptsLeft <= 0) {
        return;
    }

    guessedLetters.push(letter);

    if (selectedWord.includes(letter)) {
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === letter) {
                displayWord[i] = letter;
            }
        }
    } else {
        attemptsLeft--;
    }

    updateDisplay();

    if (!displayWord.includes("_")) {
        alert("Bravo! Vous avez deviné le mot!");
        resetGame();
    }

    if (attemptsLeft === 0) {
        alert("Désolé, vous avez perdu! Le mot était: " + selectedWord);
        resetGame();
    }
}

function resetGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    attemptsLeft = 6;
    guessedLetters = [];
    displayWord = Array(selectedWord.length).fill("_");
    updateDisplay();
}

document.addEventListener("keydown", handleKeyPress);
updateDisplay();
