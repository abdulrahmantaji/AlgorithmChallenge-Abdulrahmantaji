//don't cahnge the function name

const birthdayCake = (arr) => {
    let max = 0;
    let counter = 0;

    arr.forEach(item => {
        if (item > max) {
            max = item;
            counter = 1;
        } else if (item === max) {
            counter++;
        }
    });

    return counter;

}

let candles = [4,4,1,3]
console.log(birthdayCake(candles))