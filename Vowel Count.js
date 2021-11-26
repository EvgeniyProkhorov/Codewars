function getCount(str) {
  let vowelsCount = 0;
  const vow = ['a', 'e', 'i', 'o','u'];
  for (let char of str) {
    if (vow.includes(char)) {
      vowelsCount++
    }
  }
  
  return vowelsCount;
}