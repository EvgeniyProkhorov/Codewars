function longest(s1, s2) {
  let sum1 = new Set(s1 + s2);
  str = Array.from(sum1).sort().join('');
  return str;
}
longest("aretheyhere", "yestheyarehere");