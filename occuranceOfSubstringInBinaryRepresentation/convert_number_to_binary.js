const number = 65;
let copyOfNumber = number;
let binaryRepresentation = 0;
while (copyOfNumber >= 1) {
  const remainderWhenHalfed = copyOfNumber % 2;
  binaryRepresentation = binaryRepresentation * 10 + remainderWhenHalfed;
  copyOfNumber = (copyOfNumber - remainderWhenHalfed) / 2;
}
console.log("The binary representation of", number, "is", binaryRepresentation);
