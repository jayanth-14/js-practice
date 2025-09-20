const substring = 10;
const number = 19;
let occuranceCount = 0;
let copyOfNumber = number;
let binaryRepresentation = 0;

while (copyOfNumber >= 1) {
  const remainderWhenHalfed = copyOfNumber % 2;
  binaryRepresentation = binaryRepresentation * 10 + remainderWhenHalfed;
  copyOfNumber = (copyOfNumber - remainderWhenHalfed) / 2;
}
let copyOfBinary = binaryRepresentation;
let countOfDigitsInBinary = 0;
binaryRepresentation = 0;
while (copyOfBinary >= 1) {
  const lastDigit = copyOfBinary % 10;
  binaryRepresentation = binaryRepresentation * 10 + lastDigit;
  copyOfBinary = (copyOfBinary - lastDigit) / 10;
  countOfDigitsInBinary = countOfDigitsInBinary + 1;
}

let copyOfSubstring = substring;
let countOfDigitsInSubstring = 0;
while (copyOfSubstring >= 1) {
  copyOfSubstring = copyOfSubstring / 10;
  countOfDigitsInSubstring = countOfDigitsInSubstring + 1;
}

let divider = 1;
for (let currentPosition = 0; currentPosition < countOfDigitsInSubstring; currentPosition++){
  divider = divider * 10;
}

console.log("The number of occurance of", substring,"in binary representation of",number,"(",binaryRepresentation,") is", occuranceCount);
