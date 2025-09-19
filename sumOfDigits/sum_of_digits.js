const number = 234;
let sumOfDigits = 0;
let substituteNumber = number > 0 ? number : -number;
while (substituteNumber > 0) {
  const lastDigit = substituteNumber % 10;
  substituteNumber = (substituteNumber - lastDigit) / 10;
  sumOfDigits = sumOfDigits + lastDigit;
}

console.log("Sum of digits of number",number,"is", sumOfDigits);
