const number = function (array) {
    const finalArray = []
    for(let i = 0; i < array.length; i++){
        finalArray.push(`${i + 1}: ${array[i]}`)
    }
    return finalArray
}