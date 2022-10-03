const differenceArray = (fullArray, excludeArray) => {
    const newArray = fullArray.filter(x => !excludeArray.includes(x))
    return newArray
}

console.log(differenceArray([4,6,8], [4, 6]))

export {differenceArray}