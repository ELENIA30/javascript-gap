const removeDopplerChar = (string) => {
    const arrChar = string.split("")
    const newArray = [];

    arrChar.forEach(char => {
        if(newArray.includes(char) === false) {
            newArray.push(char)
        }
    })
    return newArray.join("")
}

const string = "hello"

console.log(removeDopplerChar(string))

export {removeDopplerChar}