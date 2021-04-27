// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

numbers = [2, 3, 6, 7, 10, 1];

function maiorValor(nums){
    let maior = nums[0];
    for (let num of nums) {
        if (num > maior) {
            maior = num;
        }
    }
    return nums.indexOf(maior);
}

console.log(maiorValor(numbers));