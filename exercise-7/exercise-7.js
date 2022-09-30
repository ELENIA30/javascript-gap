const cubesSum = (num) => {
    let sum = 0;

    for(let i = 1; i <= num; i++){
        sum = sum + (i*i);
    }
    return sum;
}

console.log(cubesSum(30));
console.log(cubesSum(4));

export {cubesSum}