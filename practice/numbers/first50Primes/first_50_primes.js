const target = 50;
let primeNumberFound = 0;
let currentNumber = 1;

while (primeNumberFound < target) {
  let isPrime = true;
  let counter = 2;
  while (counter < currentNumber) {
    if (currentNumber % counter === 0) {
      isPrime = false;
      break;
    }
    counter = counter + 1;
  }
  if (isPrime) {
    primeNumberFound = primeNumberFound + 1;
    console.log(currentNumber);
  }
  currentNumber++;
}
