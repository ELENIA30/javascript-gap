const sumCubes = (num) => {
    let sumOfCube = 0;

    for (let i = 1; i <= num; i++) {
        sumOfCube = sumOfCube + (i * i );
    }
    return sumOfCube;
}

console.log(sumCubes(9))

export {sumCubes}