//1 dato fullArray filtrare i valori da escludere da excludeArray
//2 creare un array vuoto
//3 confrontare ogni singolo valore di  fullArray con ogni singolo 
//  valore di excludeArray
//4 se il punto 3 è vero passa al punto 5
//  se il punto 3 è falso salva l'elemento nell'array nuovo
//5 ritornate l'array nuovo
import { differenceArray } from "./exercise-8";

test("differenceArray function with exclusion", () => {
    expect(differenceArray([3, 4, 5, 6], [5, 6])).toStrictEqual([3, 4])
})
test("differenceArray function with equal arrays", () => {
    expect(differenceArray([3, 4, 5, 6], [3, 4, 5, 6])).toStrictEqual([])
})
test("differenceArray function with no match", () => {
    expect(differenceArray([3, 4, 5, 6], [7, 8, "ciao"])).toStrictEqual([3, 4, 5, 6])
})