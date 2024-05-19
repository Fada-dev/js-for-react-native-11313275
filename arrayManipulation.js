function processArray(numbers) {
  let processedArray = [];
  for (let number of numbers) {
    if (number % 2 === 0) {
      processedArray.push(number * number);
    } else {
      processedArray.push(number * 3);
    }
  }

  return processedArray;
}
