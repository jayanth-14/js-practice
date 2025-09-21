const orginalNumber = Infinity;
let reverseRepresentation = 0;
const isNumberInfinity = orginalNumber === Infinity;
const isNumberNegative = orginalNumber < 0;
let numberDuplicate = isNumberNegative ? -orginalNumber : orginalNumber;

while (numberDuplicate > 0 && !isNumberInfinity) {
  const lastDigit = numberDuplicate % 10;
  reverseRepresentation = (reverseRepresentation * 10) + lastDigit;
  numberDuplicate = (numberDuplicate - lastDigit) / 10;
}

reverseRepresentation = isNumberNegative ? -reverseRepresentation : reverseRepresentation;
reverseRepresentation = isNumberInfinity ? Infinity : reverseRepresentation;

console.log("reverse representation of",orginalNumber,"is", reverseRepresentation)
