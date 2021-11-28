function noOdds( values ){
  let notOdd = []
  for (let i = 0; i < values.length; i++)
    if (values[i] % 2 == 0) {
      notOdd.push(values[i])
    }
  return notOdd;
}
noOdds([0,1,2,3]);