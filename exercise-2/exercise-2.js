const todayDate = () => {
    const date = new Date()
    /* const today = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear(); */
    return date
}

todayDate();

const cmas = () => {
    const now = new Date();
    const cmasDay = new Date(now.getFullYear(), 11, 25);
    return cmasDay
}

const daysLeftToCmas = () => {
    const diffTime = Math.abs(cmas() - todayDate());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}

console.log(daysLeftToCmas(cmas(), todayDate()))
console.log(new Date())
export {todayDate, cmas, daysLeftToCmas};