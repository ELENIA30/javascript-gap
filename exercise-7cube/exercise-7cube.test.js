import { sumCubes } from "./exercise-7cube";

test("test sumCubes function", () => {
    expect(sumCubes(1)).toBe(1);
})
test("test sumCubes function", () => {
    expect(sumCubes(3)).toBe(14);
})
test("test sumCubes function", () => {
    expect(sumCubes(0)).toBe(0);
})
test("test sumCubes function", () => {
    expect(sumCubes(9)).toBe(285);
})