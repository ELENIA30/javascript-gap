import {getRandomNumber, checkEquality} from "./exercise-1"

test('test randomNum function', () => {
    const randomNumber1and10 = getRandomNumber()
    expect(randomNumber1and10).toBeGreaterThanOrEqual(1)
    expect(randomNumber1and10).toBeLessThanOrEqual(10)
})

test('Test checkEquality function', () => {
    expect(checkEquality(10,5)).toBe("Not matched");
    expect(checkEquality(12,12)).toBe("Good Work")
})
//test the randomly
test('test getRandomNumber function min = 1', () => {
    global.Math.random = () => 0
    const randomNumber1and10 = getRandomNumber()
    expect(randomNumber1and10).toBe(1)
})

test('test getRandomNumber function max = 10', () => {
    global.Math.random = () => 0.9
    const randomNumber1and10 = getRandomNumber()
    expect(randomNumber1and10).toBe(10)
})