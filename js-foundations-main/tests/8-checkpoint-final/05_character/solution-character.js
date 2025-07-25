class Character {
  constructor(character, fontName, fontSize) {
    this.character = character;
    this.fontName = fontName;
    this.fontSize = fontSize;
  }
  drawCharacter() {
    return this.character;
  }
}

class Letter extends Character {
  constructor(character, fontName, fontSize, charCase) {
    super(character, fontName, fontSize);
    this.charCase = charCase;
  }
  toLowerCase() {
    this.charCase = "lowerCase";
    this.character = this.character.toLowerCase();
  }
  toUpperCase() {
    this.charCase = "upperCase";
    this.character = this.character.toUpperCase();
  }
  getCase() {
    return this.charCase;
  }
}

class Digit extends Character {
  constructor(character, fontName, fontSize, isDigit) {
    super(character, fontName, fontSize);
    isDigit;
    this.isDigit = true;
    if (typeof character === "string") {
      this.isDigit = false;
    }
  }
  integerValue() {
    if (typeof this.character === "string") {
      this.character = Number(this.character);
    }
    this.isDigit = true;
  }
}
