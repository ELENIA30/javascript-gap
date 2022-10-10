import promptSync from "prompt-sync";

const getRandomNumber = () => {
    return Math.floor(Math.random() * 10) + 1;
}

const checkEquality = (randomNum, userInput) => {
    if (randomNum === userInput) {
        return "Good Work"
    } else {
        return "Not matched"
    }
}

const prompt = promptSync()
const userInput = parseInt(prompt("Add a num"));

const randomNum = getRandomNumber();

/* checkEquality(randomNum, userInput); */
console.log(checkEquality(randomNum, userInput));
export {getRandomNumber, checkEquality}