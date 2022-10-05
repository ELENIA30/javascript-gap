import { deleteRollno } from "./exercise-10"

test("test deleteRollno function", () => {
    expect(deleteRollno()).toStrictEqual({"name": "Davide Rayy", "sclass": "VI"})
})