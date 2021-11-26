function squareDigits(num) {
  let sum = '';
  let number1 = num.toString().split('');
  for (let i = 0; i < number1.length; i++) {
    sum += number1[i] ** 2;
  }
  return +sum;
}