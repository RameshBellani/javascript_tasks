function uniqueElements(inputArray) {
    let uniqueArray = [];
  
    for (let i = 0; i < inputArray.length; i++) {
      let currentElement = inputArray[i];
      let isUnique = true;
  
      // Check if the element is already in the uniqueArray
      for (let j = 0; j < uniqueArray.length; j++) {
        if (currentElement === uniqueArray[j]) {
          isUnique = false;
          break;
        }
      }
  
      // If the element is unique, add it to the uniqueArray
      if (isUnique) {
        uniqueArray.push(currentElement);
      }
    }
  
    return uniqueArray;
  }
  
// simple Inputs
  const inputArray = [1, 2, 2, 3, 4, 4, 5];
  const resultArray = uniqueElements(inputArray);
  console.log(resultArray);
  