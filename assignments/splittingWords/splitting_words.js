function splitWord(string) {

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
  testSplitWord("apple", "ape, p, l");
  testSplitWord("there", "tere, h");
  testSplitWord("hello", "helo, l");
  testSplitWord("abyss", "ab, y, s, s");
  testSplitWord("this", "tis, h");
}

testAll();
