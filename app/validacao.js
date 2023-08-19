function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = parseInt(chute)

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML+= "<div>Valor inválido</div>"
        return
    }

    if (numeroForMaiorOuMenorQueORange(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: diga um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero == numeroSecreto) {
        document.body.innerHTML = `
        <h1>Você Acertou!!!!</h1>
        <h3>O número secreto era <span id='numeroCerto'>${numeroSecreto}</span></h3>

        <button id="jogar-novamente" class="btn-jogar"><i class="fa-solid fa-arrows-rotate"></i>  Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-circle-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-circle-arrow-up"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueORange(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})