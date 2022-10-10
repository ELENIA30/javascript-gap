import { sum } from "./exercise-14";

test("test sum function", () => {
    expect(sum(90, 9)).resolves.toBe(99)
})

test("test sum function", () => {
    expect(sum(90, )).rejects.toBe("Must provide two parameters")
})

test("test sum function", () => {
    expect(sum()).rejects.toBe("Must provide two parameters")
})
