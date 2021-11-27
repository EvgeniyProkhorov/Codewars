function disemvowel(str) {
  let arr = str.replace(/a/gi,'').replace(/e/gi,'').replace(/i/gi,'').replace(/o/gi,'').replace(/u/gi,'');
  return arr;
}