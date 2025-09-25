function isLetterSame(letter, lowerLetterToCheck, upperLetterToCheck) {
  return letter === lowerLetterToCheck || letter === upperLetterToCheck;
}

function isVowel(character) {
  const isA = isLetterSame(character, "a", "A");
  const isE = isLetterSame(character, "e", "E");
  const isI = isLetterSame(character, "i", "I");
  const isO = isLetterSame(character, "o", "O");
  const isU = isLetterSame(character, "u", "U");
  return isA || isE || isI || isO || isU;
}

function getVowelCount(string) {
  let vowelCount = 0;
  const length = string.length;
  for (let currentPosition = 0; currentPosition < length; currentPosition++) {
    if (isVowel(string[currentPosition])) {
      vowelCount = vowelCount + 1;
    }
  }
  return vowelCount;
}

// testing logic starts here
function testResultSymbol(result, expectedOutput) {
  return (result === expectedOutput) ? "✅" : "❌";
}

function testFunction(testInput, expectedOutput) {
  const result = getVowelCount(testInput);
  const resultSymbol = testResultSymbol(result, expectedOutput);
  const testIntro = resultSymbol + " The count of vowels in \"" + testInput + "\"";
  console.log(testIntro, "is", expectedOutput, "and we got", result);
}

function startTest() {
  console.log("Testing \"Finding the count of vowels in given string\"");
  testFunction("testInput", 3);
  testFunction("aeiou", 5);
  testFunction("cry", 0);
  testFunction(1010, 0);
  testFunction(-98, 0);
  testFunction(Infinity, 0);
  // testFunction(testInput, expectedOutput);
}

startTest();
