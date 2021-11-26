function invert(array) {
   return array.map((arr) => {
     return arr >= 0 ? -Math.abs(arr) : Math.abs(arr);
   });
}