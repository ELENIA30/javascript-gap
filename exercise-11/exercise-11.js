const getCylinderVolume = (r, h) => {
    const PI = Math.PI;
    return parseFloat((PI * (r * r) * h).toFixed(4));
}

console.log(getCylinderVolume(5, 10))

export {getCylinderVolume}