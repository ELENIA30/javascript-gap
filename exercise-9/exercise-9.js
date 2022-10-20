const extractValueOfArray = (array, indexes) => {
    let newArray = []

/*  indexes.map((v) => newArray.push(array[v]))
    return newArray*/
//better than map because I don't need a new array
    indexes.forEach( (v) => newArray.push(array[v]));
    return newArray
}

console.log(extractValueOfArray(["ciao", "to", ",", "hello", "mates", "nice", "see", "you"], [3, 4, 2, 5, 1, 6, 7]))

export {extractValueOfArray}
