function mergeCars(carA, carB) {
    let mergedCar = {};
  
    // Copy properties from carA to mergedCar
    for (let keyA in carA) {
      mergedCar[keyA] = carA[keyA];
    }
  
    // Copy properties from carB to mergedCar, overriding if necessary
    for (let keyB in carB) {
      mergedCar[keyB] = carB[keyB];
    }
  
    return mergedCar;
  }
  
  //create car Object
  const car1 = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
  };
  
  // Example usage:
  const car2 = {
    model: "Corolla",
    color: "Blue",
  };
  
  const mergedCar = mergeCars(car1, car2);
  console.log(mergedCar);
  