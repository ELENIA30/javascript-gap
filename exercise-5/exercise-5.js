const getLargestNum = (arr) => {
    let largestNum = 0;
    arr.forEach(num => {
        if (num > largestNum) largestNum = num
    });
    return largestNum;
}

console.log(getLargestNum([2, 5, 8, 9]))

export {getLargestNum};