// Crie uma função que receba um array de inteiros e retorne o índice do menor valor

let numbers = [2, 4, 6, 7, 10, 0, -3];

function menorValor(nums){
    let menor = nums[0];
    for (let num of nums) {
        if (num < menor) {
            menor = num;
        }
    }
    return nums.indexOf(menor);
}

console.log(menorValor(numbers));