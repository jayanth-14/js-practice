function getVowelCount(string) {
  return string.length;
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
  // testFunction(testInput, expectedOutput);
}

startTest();
