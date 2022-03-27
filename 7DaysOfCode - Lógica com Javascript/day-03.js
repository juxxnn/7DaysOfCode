const area = prompt("* * * Olá! * * *\nVocê quer seguir para a área de Front-End ou para a área de Back-end? Digite [1] para Front-End e [2] para Back-End.")

if (area == 1) {
    const msg = prompt("Que legal! Você quer aprender React ou Vue?")
    prompt("Muito legal! Você quer seguir se especializando em " + msg + " ou seguir se desenvolvendo para se tornar FullStack?")
    alert("Não pare de estudar! Você vai conseguir chegar onde quiser.")

    const tec = prompt("Possui outra tecnologia que você gostaria de se especializar ou aprender? Digite [S] se a resposta for SIM e [N] se a resposta for NÃO.")
    if (tec == 'S') {
        let i = 1;
        while (i < 1000) {
            const resp = prompt("Digite quais outras tecnologias você gostaria de se especializar ou aprender. Caso não possua, digite [0] ")
            if (resp != 0) {
                prompt("Que legal! Possui outra?")
                i++;
            }
            else {
                alert("Obrigado por participar das perguntas. Até logo!")
                break;
            }
        }
    }
    else if (tec == 'N') {
        alert("Obrigado por participar das perguntas. Até logo!")
    }
    else {
        alert("Resposta inválida! Digite [S] para SIM e [N] para NÃO.")
    }
}
else if (area == 2) {
    const msg = prompt("Que legal! Você quer aprender C# ou Java?")
    prompt("Muito legal! Você quer seguir se especializando em " + msg + " ou seguir se desenvolvendo para se tornar FullStack?")
    alert("Não pare de estudar! Você vai conseguir chegar onde quiser.")

    const tec = prompt("Possui outra tecnologia que você gostaria de se especializar ou aprender? Digite [S] se a resposta for SIM e [N] se a resposta for NÃO.")
    if (tec == 'S') {
        let i = 1;
        while (i < 1000) {
            const resp = prompt("Digite quais outras tecnologias você gostaria de se especializar ou aprender. Caso não possua, digite [0] ")
            if (resp != 0) {
                prompt("Que legal! Possui outra?")
                i++;
            }
            else {
                alert("Obrigado por participar das perguntas. Até logo!")
                break;
            }
        }
    }
    else if (tec == 'N') {
        alert("Obrigado por participar das perguntas. Até logo!")
    }
    else {
        alert("Resposta inválida! Digite [S] para SIM e [N] para NÃO.")
    }
}
else {
    alert("Resposta inválida! Digite [1] para Front-End e [2] para Back-End.")
}

alert("Obrigado por participar das perguntas. Até logo!")