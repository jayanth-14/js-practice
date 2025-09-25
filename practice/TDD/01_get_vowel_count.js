function isVowel(character) {
  const isA = character === "a" || character === "A";
  const isE = character === "e" || character === "O";
  const isI = character === "i" || character === "I";
  const isO = character === "o" || character === "O";
  const isU = character === "u" || character === "U";
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
function testResultSymbol (result, expectedOutput) {
  return (result === expectedOutput) ? "✅" : "❌" ;
}

function testFunction(testInput, expectedOutput) {
  const result = getVowelCount(testInput);
  const resultSymbol = testResultSymbol(result, expectedOutput);
  const testIntro = resultSymbol +" The count of vowels in " + testInput;
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
