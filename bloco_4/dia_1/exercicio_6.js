// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let nomePeca = "TOrRE".toLowerCase();

switch(nomePeca) {
    case "torre":
        console.log("Anda somente nas horizontais e verticais se não houver nada bloqueando o caminho.");
        break;
    case "cavalo":
        console.log("Anda em L, pode pular por qualquer peça do jogo, mas não pode parar em um quadrado que já possua um aliado.");
        break;
    case "bispo":
        console.log("Anda somente nas diagonais se não houver nada bloqueando o caminho.");
        break;
    case "rei":
        console.log("Anda uma casa somente para qualquer um dos lados se houver caminho e não estiver em cheque.");
        break;
    case "rainha":
        console.log("Anda para todos os lados quantas casas quiser contanto que não tenha nada bloqueando o caminho.");
        break;
    case "peao":
        console.log("Anda somente uma casa para frente e ataca somente nas diagonais frontais. Seu primeiro movimento pode andar até duas casas.");
        break;
    default:
        console.log("Peça com nome inválido, tente usar sem acentos no nome.");
        break;
}