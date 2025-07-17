/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
// What is ASCIIART? Check the README.md or Workshop to see why ASCIIART is defined in your file.
const ASCIIART = [
  `

  O   
 /|\\\  
 / \\\  

=========`,
  `

  O      
 /|\\\   
 /       


=========`,
  `

  O      
 /|\\\   


=========`,
  `

  O      
 /|      


=========`,
  `

  O      
  |      


=========`,
  `

  O      



=========`,
  `





=========`,
];

class VanishingMan {
  constructor(secretWord) {
    this.secretWord = secretWord.toLowerCase().split("");
    this.remainingGuesses = 6;
    this.lettersGuessed = [];
    this.gameState = "playing";
  }
  submitGuess(letter) {
    if (this.gameState !== "playing") {
      return "Game Over";
    }
    letter = letter.toLowerCase();
    if (!this.lettersGuessed.includes(letter)) this.lettersGuessed.push(letter);

    if (!this.secretWord.includes(letter)) this.remainingGuesses--;
  }

  computeGameState() {
    let uniqueLetters = [];
    if (this.remainingGuesses === 0) this.gameState = "lost";
    for (let char of this.secretWord) {
      if (char !== " " && !uniqueLetters.includes(char)) {
        uniqueLetters.push(char);
      }
    }
    for (let letter of uniqueLetters) {
      if (!this.lettersGuessed.includes(letter)) {
        return;
      }
    }
    this.gameState = "won";
  }

  getSecretWordPuzzle() {
    let string = "";

    for (let i = 0; i < this.secretWord.length; i++) {
      const originalChar = this.secretWord[i];
      const lowerChar = originalChar.toLowerCase();
      if (this.secretWord[i] === " ") string += " ";
      else if (this.lettersGuessed.includes(lowerChar)) {
        string += originalChar;
      } else string += "#";
    }
    return string;
  }

  getGameStateMessage() {
    if (this.gameState === "won") {
      return "Winner Winner Chicken Dinner, you won!";
    } else if (this.gameState === "lost") {
      return (
        'Game Over, the word was "' +
        this.secretWord.join("") +
        '":\n' +
        ASCIIART[this.remainingGuesses]
      );
    } else if (this.gameState === "playing") {
      return (
        "There is a total of " +
        this.remainingGuesses +
        " guesses remaining:\n" +
        ASCIIART[this.remainingGuesses]
      );
    }
  }

  // simulateVanishingMan(secretWord) {
  //   const game = new VanishingMan(secretWord);
  //   const char = "abcdefghijklmnopqrstuvwxyz".split("");

  //   while (game.gameState === "playing") {
  //     const randomIndex = Math.floor(Math.random() * 26);
  //     const guess = char[randomIndex];
  //     game.submitGuess(guess);
  //   }

  //   return game.getGameStateMessage();
  // }
}
function simulateVanishingMan(secretWord) {
  const game = new VanishingMan(secretWord);
  const char = "abcdefghijklmnopqrstuvwxyz".split("");

  while (game.gameState === "playing") {
    const randomIndex = Math.floor(Math.random() * 26);
    const guess = char[randomIndex];
    game.submitGuess(guess);
    game.computeGameState();
  }

  return game.getGameStateMessage();
}
