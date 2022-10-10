import promptSync from "prompt-sync";

const multiplication = (num1, num2) => {
    return num1 * num2
}

const division = (num1, num2) => {
    return num1 / num2
}

const prompt = promptSync()

const userNum1 = parseInt(prompt("Add First num"));
const userNum2 = parseInt(prompt("Add Second num"));

console.log("multiplication result:", multiplication(userNum1,userNum2))
console.log("division result:", division(userNum1, userNum2))

export {multiplication, division};