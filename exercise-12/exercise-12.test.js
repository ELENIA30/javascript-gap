import { isLowerCase } from "./exercise-12";

test("test isLowerCase function", () => {
    expect(isLowerCase("CIAO")).toBe(false)
})
test("test isLowerCase function", () => {
    expect(isLowerCase("abcdE")).toBe(false)
})
test("test isLowerCase function", () => {
    expect(isLowerCase("AcvFGbhU")).toBe(false)
})
test("test isLowerCase function", () => {
    expect(isLowerCase("abcd")).toBe(true)
})
test("test isLowerCase function", () => {
    expect(isLowerCase("")).toBe(false)
})
test("test isLowerCase function", () => {
    expect(isLowerCase(" ")).toBe(false)
})