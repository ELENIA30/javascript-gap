const sum = (inputOne, inputTwo) => {
    return new Promise (
        (resolve, reject) => {
            if(inputOne === undefined || inputTwo === undefined) {
                reject(console.log("Must provide two parameters"))
            } else {
                resolve (inputOne + inputTwo)
            }
        }
    )
    }

    console.log(sum(3))
    console.log(sum(90, 39))


    export {sum}