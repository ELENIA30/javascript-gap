import { extractValueOfArray } from "./exercise-9"

test("extractValueOfArray",() => {
    expect(extractValueOfArray(["mela", 2, "#"], [1])).toStrictEqual([2])
})
test("extractValueOfArray",() => {
    expect(extractValueOfArray(["ciao", 9, "", "#"], [2])).toStrictEqual([""])
})
test("extractValueOfArray",() => {
    expect(extractValueOfArray(["ciao", 9, "", "#"], [2, 3])).toStrictEqual(["", "#"])
})
test("extractValueOfArray",() => {
    expect(extractValueOfArray(["ciao", 9, "", "#"], [0])).toStrictEqual(["ciao"])
})