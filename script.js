const WORDS = [
    "vixen", "bacon", "plane", "water", "stone", "candy", "tears", "flame", "paint", "white",
    "brown", "clamp", "brush", "liver", "mouse", "table", "wound", "night", "flute", "piano",
    "lemon", "smirk", "pearl", "index", "leap", "light", "quilt", "sharp", "march", "jumpy",
    "quick", "viper", "heart", "break", "stare", "spike", "block", "spark", "chair", "rhyme",
    "tiger", "plant", "truck", "trace", "flush", "singh", "grape", "track", "blanc", "crypt", "knurl", "fique", "fjord", "opium", "phlox", "zesty"
];

const GAME_COLUMN = ["A", "B", "C", "D", "E"];
let selectedWord;
let gameRow = 1;

function gameStart() {
    selectedWord = WORDS[Math.trunc(Math.random() * WORDS.length)];
    console.log("Selected word:", selectedWord);
}

function showGuess(row, guess) {
    document.getElementById(`row${row}A`).innerText = guess[0];
    document.getElementById(`row${row}B`).innerText = guess[1];
    document.getElementById(`row${row}C`).innerText = guess[2];
    document.getElementById(`row${row}D`).innerText = guess[3];
    document.getElementById(`row${row}E`).innerText = guess[4];
}

function checker(guess) {
    let inputA = document.getElementById(`row${gameRow}A`);
    let inputB = document.getElementById(`row${gameRow}B`);
    let inputC = document.getElementById(`row${gameRow}C`);
    let inputD = document.getElementById(`row${gameRow}D`);
    let inputE = document.getElementById(`row${gameRow}E`);

    if (guess[0] === selectedWord[0]) inputA.style.backgroundColor = "green";
    else if (selectedWord.indexOf(guess[0]) !== -1) inputA.style.backgroundColor = "yellow";
    else inputA.style.backgroundColor = "red";

    if (guess[1] === selectedWord[1]) inputB.style.backgroundColor = "green";
    else if (selectedWord.indexOf(guess[1]) !== -1) inputB.style.backgroundColor = "yellow";
    else inputB.style.backgroundColor = "red";

    if (guess[2] === selectedWord[2]) inputC.style.backgroundColor = "green";
    else if (selectedWord.indexOf(guess[2]) !== -1) inputC.style.backgroundColor = "yellow";
    else inputC.style.backgroundColor = "red";

    if (guess[3] === selectedWord[3]) inputD.style.backgroundColor = "green";
    else if (selectedWord.indexOf(guess[3]) !== -1) inputD.style.backgroundColor = "yellow";
    else inputD.style.backgroundColor = "red";

    if (guess[4] === selectedWord[4]) inputE.style.backgroundColor = "green";
    else if (selectedWord.indexOf(guess[4]) !== -1) inputE.style.backgroundColor = "yellow";
    else inputE.style.backgroundColor = "red";
}

function updateTries() {
    document.getElementById("tries").innerText = 5 - (gameRow - 1);
}

function checkWord() {
    let input = prompt('Guess The Word').toLowerCase();

    if (input === null || input.trim() === "") {
        alert('Enter a word!')
        return;
    }

    if (input.length !== 5) {
        alert('Guess must be exactly 5 letters!');
        return;
    }

    showGuess(gameRow, input);
    checker(input);

    if (input === selectedWord) {
        alert('🎉 Congrats! You guessed the word!');
        return;
    }

    gameRow++;
    updateTries();

    if (gameRow > 5) {
        alert(`💀 Game Over! The word was: ${selectedWord}`);
    }
}

function restartGame() {
    location.reload();
}

window.onload = gameStart;
