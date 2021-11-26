function countSheeps(arrayOfSheep) {
  let sumSheep = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] == true) {
      sumSheep++
    }
  }
  return sumSheep;
}