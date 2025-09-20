const number  = 65;
let copyOfNumber = number;
let binaryRepresentation = 0;
if (copyOfNumber > 0) {
  binaryRepresentation = binaryRepresentation * 10 + copyOfNumber % 2;
  copyOfNumber = number / 2;
}
console.log("The binary representation of",number,"is", binaryRepresentation);
