const savannahMap = "L     Z";
const lengthOfMap = savannahMap.length;
let shortestDistance = 0;
let currentPosition = 1;
let distanceFromLastAnimal = 0;
let lastAnimal = savannahMap[0];

while (currentPosition < lengthOfMap) {
  const animalAtCurrentPosition = savannahMap[currentPosition];
  const notASpace = animalAtCurrentPosition !== " ";
  if (notASpace && animalAtCurrentPosition !== lastAnimal) {
    lastAnimal = animalAtCurrentPosition;
    if ( distanceFromLastAnimal <= distanceFromLastAnimal) {
      shortestDistance = distanceFromLastAnimal;
      distanceFromLastAnimal = 0;
    }
  }
  distanceFromLastAnimal = distanceFromLastAnimal + 1;
  currentPosition = currentPosition + 1;
}

console.log("The shortest distance between lions and zebras in given savannah map \"",savannahMap,"\" is", shortestDistance);
