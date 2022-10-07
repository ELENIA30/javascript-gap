const myClock = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${hours}:${minutes}:${seconds}`;
}

//disable setInterval before run the test
setInterval(() => {
    console.log(myClock());
}, 1000);

export {myClock}

