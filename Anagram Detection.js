// write the function isAnagram
let isAnagram = function(test, original) {
  let check1 = test.toLowerCase().split('').sort().join();
  let check2 = original.toLowerCase().split('').sort().join();
  return check1  == check2;
};
