const compareObj = (obj1, obj2) => {
    const obj1Props = Object.getOwnPropertyNames(obj1);
    const obj2Props = Object.getOwnPropertyNames(obj2);

    if(obj1Props.length >= obj2Props.length) {
        return obj1Props.every((v, i) => v === obj2Props[i]);
    }
    return obj2Props.every((v, i) => v === obj1Props[i]);
}
console.log(compareObj({a: 2, b: 6, e: 5}, {a: 3, b: 9, e: 4, h: 4}))

export {compareObj}
