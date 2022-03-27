const numero = Math.floor(Math.random() * (10 - 0 + 1) + 0)
var chances = 1;


alert("* * * JOGO DE ADIVINHA * * *\nAdivinhe o número que o computador está pensando...")

while (chances < 4) {

    const valor = prompt("Digite um número de 0 a 10: ")

    if (valor == numero) {
        alert("Parabéns! Você adivinhou. O número era " + numero + ".")
        break;
    }
    else {
        alert("Você errou. Tente novamente. \nVocê possui 3 tentativas e já realizou " + chances + ".")
        chances = chances + 1;
    }
}
alert("Fim do jogo!")

