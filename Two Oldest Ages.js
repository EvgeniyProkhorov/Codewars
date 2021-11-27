// return the two oldest/oldest ages within the array of ages passed in.

function twoOldestAges(ages) {
    let agesArray = ages.sort((a,b) => a - b);
    return agesArray.slice(-2);
}
twoOldestAges([1, 5, 87, 45, 8, 8]);