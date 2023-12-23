function findCommonElements(array1, array2) {
    let commonElements = [];
  
    // Iterate through elements of array1
    for (let i = 0; i < array1.length; i++) {
      let currentElement = array1[i];
  
      // Check if the current element is also in array2
      let isCommon = false;
      for (let j = 0; j < array2.length; j++) {
        if (currentElement === array2[j]) {
          isCommon = true;
          break;
        }
      }
  
      // If the element is common, add it to the commonElements Array
      if (isCommon) {
        commonElements.push(currentElement);
      }
    }
  
    return commonElements;
  }
  
  // Example usage:
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [3, 4, 5, 6, 7];
  const resultArray = findCommonElements(array1, array2);
  console.log(resultArray);
  