function sumTwoSmallestNumbers(numbers) {  
  let ordr = numbers.sort((a, b) => a - b);
  return ordr[0] + ordr[1]
};
sumTwoSmallestNumbers([5, 8, 12, 19, 22]);