const startingNumber = Infinity;
let sum = 0;
for (let counter = startingNumber, oddNumberFound = 0; oddNumberFound < 10; counter++) {
  if (counter % 2 !== 0) {
    oddNumberFound = oddNumberFound + 1;
    sum = sum + counter;
  }
}
console.log("Sum of first 10 odd numbers starting from",startingNumber,"is", sum);
