const getLongestString = (arr) => {
    let longestString = '';
    arr.forEach(str=> {
        if (str.length >= longestString.length){
            longestString = str;
        }
    });
    return longestString;
}

console.log(getLongestString(["ciao", "goodmorning"]))

export {getLongestString}