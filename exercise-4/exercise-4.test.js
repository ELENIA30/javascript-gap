import {getLongestString} from "./exercise-4";

test("test getLongestString function ", () => {
    expect(getLongestString(["elenia", "centamore"])).toBe("centamore")
    expect(getLongestString(["ciao"])).toBe("ciao")
    expect(getLongestString([""])).toBe("")
})
