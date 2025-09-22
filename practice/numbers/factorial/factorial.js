const number = 0;
const isNumberInfinity = number === Infinity;
let factorial = isNumberInfinity ? undefined : 1;
for (let counter = 1; counter <= number && !isNumberInfinity; counter++) {
  factorial = factorial * counter;
}
console.log("factorial of", number, "is", factorial);
