function oddOrEven(array) {
   let sumArr = 0;
   for (let i = 0; i < array.length; i++) {
     sumArr += array[i]
   };
   return sumArr % 2 == 0 ? 'even' : 'odd';
};