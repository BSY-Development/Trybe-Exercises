// Conversor numero romano para inteiro

function romanoInt(value) {
    let romanos = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    let result = 0;
    for (let i = 0; i < value.length; i += 1) {
        if ((i > 0) && (romanos[value[i]] > romanos[value[i - 1]])) {
            result += romanos[value[i]] - (2 * romanos[value[i - 1]]);
        } else {
            result += romanos[value[i]];
        }
    }
    return result;
}

console.log(romanoInt("MCMXCVI"));