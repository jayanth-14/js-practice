function isVowel(character) {
  const isA = character === "a" || character === "A";
  const isE = character === "e" || character === "E";
  const isI = character === "i" || character === "I";
  const isO = character === "o" || character === "O";
  const isU = character === "u" || character === "U";
  return isA || isE || isI || isO || isU;
}

function areNotSameType(letterOne, letterTwo) {
  return isVowel(letterOne) !== isVowel(letterTwo);
}

function isUsed(position, usedPositions) {
  for (let index = 0; index < usedPositions.length; index++) {
    if (position === usedPositions[index]) {
      return true;
    }
  }
  return false;
}

function findAlternateLettered(string, character) {
  let newString = character;
  let lastCharacter = character;
  for (let position = 0; position < string.length; position++) {
    if (areNotSameType(lastCharacter, string[position])) {
      newString = newString + string[position];
      lastCharacter = string[position];
    }
  }
  return newString;
}

function splitWord(string) {
  let positions = '';
  let words = "";
  for (let position = 0; position < string.length; position++) {
    words = words + findAlternateLettered(string, string[position]) + ", ";
  }
  return words;
}

function generateTestSymbol(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function testSplitWord(string, expected) {
  const actual = splitWord(string);
  const testSymbol = generateTestSymbol(actual, expected);
  let message = testSymbol;
  message += "| [" + string + "]";
  message += " | expected : [" + expected + "]";
  message += " | actual  : [" + actual + "] |";
  console.log(message);
}

function testAll() {
  // testSplitWord("apple", "ape, p, l");
  testSplitWord("there", "tere, h");
  // testSplitWord("hello", "helo, l");
  // testSplitWord("abyss", "ab, y, s, s");
  // testSplitWord("this", "tis, h");
}

testAll();
