function minMax(arr){
  return [Math.min.apply(Math, arr), Math.max.apply(Math, arr)]
}
minMax([1,2,3,4,5]);