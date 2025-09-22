const number = 7;
let countOfDivisors = 0;
let counter = 1;
while (counter <= number ){
  if (number%counter === 0) {
    countOfDivisors = countOfDivisors + 1;
  }
  counter = counter + 1;
}
console.log("The number of divisors for the number",number,"is", countOfDivisors);
