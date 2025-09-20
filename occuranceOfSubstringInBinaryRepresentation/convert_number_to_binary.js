const number = 65;
let copyOfNumber = number;
let binaryRepresentation = 0;
if (copyOfNumber > 0) {
  const remainderWhenHalfed = copyOfNumber % 2;
  binaryRepresentation = binaryRepresentation * 10 + remainderWhenHalfed;
  copyOfNumber = number / 2;
  if (copyOfNumber > 0) {
    const remainderByHalfing = copyOfNumber % 2;
    binaryRepresentation = binaryRepresentation * 10 + remainderByHalfing;
    copyOfNumber = number / 2;
    if (copyOfNumber > 0) {
      const remainderByHalfing = copyOfNumber % 2;
      binaryRepresentation = binaryRepresentation * 10 + remainderByHalfing;
      copyOfNumber = number / 2;
      if (copyOfNumber > 0) {
        const remainderByHalfing = copyOfNumber % 2;
        binaryRepresentation = binaryRepresentation * 10 + remainderByHalfing;
        copyOfNumber = number / 2;
        if (copyOfNumber > 0) {
          const remainderByHalfing = copyOfNumber % 2;
          binaryRepresentation = binaryRepresentation * 10 + remainderByHalfing;
          copyOfNumber = number / 2;
          if (copyOfNumber > 0) {
            const remainderByHalfing = copyOfNumber % 2;
            binaryRepresentation = binaryRepresentation * 10 + remainderByHalfing;
            copyOfNumber = number / 2;
            if (copyOfNumber > 0) {
              const remainderByHalfing = copyOfNumber % 2;
              binaryRepresentation = binaryRepresentation * 10 + remainderByHalfing;
              copyOfNumber = number / 2;
            }
          }
        }
      }
    }
  }
}
console.log("The binary representation of", number, "is", binaryRepresentation);
