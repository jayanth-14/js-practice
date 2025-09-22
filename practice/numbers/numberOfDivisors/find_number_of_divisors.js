const number = 7;
let countOfDivisors = 0;
for (let counter = 1; counter <= number; counter++){
  if (number%counter === 0) {
    countOfDivisors = countOfDivisors + 1;
  }
}
console.log("The number of divisors for the number",number,"is", countOfDivisors);
