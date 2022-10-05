const isLowerCase = (string) => {
    const lowerCaseString = string.toLowerCase()

    if(string.length <= 0 || string === " ") return false
    return lowerCaseString === string
}





console.log(isLowerCase("Ciao"))
console.log(isLowerCase("ciAo"))
console.log(isLowerCase("CIAo"))
console.log(isLowerCase("cIAO"))
console.log(isLowerCase("ciao"))

export {isLowerCase}