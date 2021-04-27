// 16 + 18 = 214

let result = "";
let num1 = "125";
let num2 = "18";

function differentSizes(number) {
    let count = Math.abs(number);
    for (let i = 0; i < count; i += 1) {
        if (number > 0) {
            num2 = "0" + num2;
        } else {
            num1 = "0" + num1;
        }
    }
}

function brokenSum(numOne, numTwo) {
    if (numOne.length - numTwo.length != 0) {
        differentSizes(numOne.length - numTwo.length);
    }
    for (let i = 0; i < num1.length; i += 1) {
        sum = parseInt(num1[i]) + parseInt(num2[i]);
        sum = sum.toString();
        result += sum;
    }
    return result;
}

console.log(brokenSum(num1, num2));