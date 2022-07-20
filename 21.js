function sorteio(num) {
    let numSorteado = Math.floor(Math.random() * 10 + 1)

    if(num == numSorteado) {
        return 'Parabéns! O seu número foi sorteado.'
    }else {
        return 'Que pena! O número sorteado foi ' + numSorteado
    }
}

console.log(sorteio(6))