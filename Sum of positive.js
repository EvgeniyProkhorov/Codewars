function positiveSum(arr) {
  let positInt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positInt += arr[i];
    }
  }
  return positInt;
}