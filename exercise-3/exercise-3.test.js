//una funzione che prende i numeri in input
//una che fa la moltiplicazione
//una che fa la divisione

import {multiplication,division } from "./exercise-3";

test("test multiplication function", () => {
    const multResult = multiplication(2,5)
    expect(multResult).toBe(10);
})

test("test division function", () => {
    const divResult = division(4,2)
    expect(divResult).toBe(2);
})
