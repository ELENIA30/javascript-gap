// A function who calculate the current data
// A function who calculate the cmas data (NO I know thw date)
// a function who calculate the different between them
import {todayDate, cmas, daysLeftToCmas} from "./exercise-2";

test("test todayDate function", () => {
    expect(todayDate().toLocaleDateString()).toBe(new Date().toLocaleDateString())
})

test("test cmas", () => {
    expect(cmas().toLocaleDateString()).toBe("12/25/2022")
})
//set the en-us format
test("test cmas", () => {
    expect(cmas().toLocaleDateString("en-us")).toBe("12/25/2022")
})

test("test daysLeftToCmas", () => {
    expect(daysLeftToCmas()).toBeGreaterThanOrEqual(0);
    expect(daysLeftToCmas()).toBeLessThanOrEqual(365);
})
