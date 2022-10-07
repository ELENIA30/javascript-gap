import { getCylinderVolume } from "./exercise-11";

test("test getCylinderVolume function", () => {
    expect(getCylinderVolume(5, 10)).toBe(785.3982)
})
test("test getCylinderVolume function", () => {
    expect(getCylinderVolume(2, 24)).toBe(301.5929)
})