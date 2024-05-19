function processArray(numbers) {
  let processedArray = [];
  for (let number of numbers) {
    if (number % 2 === 0) {
      processedArray.push(number * number);
    } else {
      processedArray.push(number * 3);
    }
  }
  function formatArrayStrings(stringArray, numberArray) {
    for (let i = 0; i < stringArray.length; i++) {
      if (numberArray[i] % 2 === 0) {
        stringArray[i] = stringArray[i].toUpperCase();
      } else {
        stringArray[i] = stringArray[i].toLowerCase();
      }
    }
    return stringArray;
  }
  
  return processedArray;
}
