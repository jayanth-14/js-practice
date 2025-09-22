/*
  Trying to check equilaty only using less than
*/
const numberOne = 20, numberTwo = 30;
let isEqual = true;
if (numberOne < numberTwo) {
  isEqual = false;
}
if (numberTwo < numberOne) {
  isEqual = false;
}
if (isEqual) {
  console.log(numberOne, "and", numberTwo, "are equal");
} else {
  console.log(numberOne, "and", numberTwo, "are not equal");
}
