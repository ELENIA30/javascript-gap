import { myClock } from "./exercise-13";

test("test myClock function", () => {
    expect(myClock()).toBe(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`)
})