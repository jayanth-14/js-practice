const number = 10011;
let copyOfNumber = number;
let countOfDigits = 0;
while (copyOfNumber >= 1) {
  copyOfNumber = copyOfNumber / 10;
  countOfDigits = countOfDigits + 1;
}

console.log("Count of digits in", number, "is", countOfDigits);
