import { compareObj } from "./exercise-7";

test("test compareObj function - in different case", () => {
    expect(compareObj({a: 3, c: 7}, {a: 0, k: 8})).toBe(false)
})
test("test compareObj function - in equal case", () => {
    expect(compareObj({a: 3, c: 7}, {a: 0, c: 9})).toBe(true)
})
test("test compareObj function - first arg length is major", () => {
    expect(compareObj({a: 3, c: 7, v: 6}, {a: 0, c: 9})).toBe(false)
})
test("test compareObj function - second arg length is major", () => {
    expect(compareObj({a: 3, c: 7}, {a: 0, c: 9, o: 6})).toBe(false)
})