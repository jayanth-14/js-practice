const number = 19;
let copyOfNumber = number;
let binaryRepresentation = 0;
while (copyOfNumber >= 1) {
  const remainderWhenHalfed = copyOfNumber % 2;
  binaryRepresentation = binaryRepresentation * 10 + remainderWhenHalfed;
  copyOfNumber = (copyOfNumber - remainderWhenHalfed) / 2;
}
let copyOfBinary = binaryRepresentation;
binaryRepresentation = 0;
while (copyOfBinary >= 1) {
  const lastDigit = copyOfBinary % 10;
  binaryRepresentation = binaryRepresentation * 10 + lastDigit;
  copyOfBinary = (copyOfBinary - lastDigit) / 10;
}
console.log("The binary representation of", number, "is", binaryRepresentation);
