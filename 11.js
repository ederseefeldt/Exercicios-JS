function removerPropriedade(objeto, nomePropriedade) {
    const copia = Object.assign({}, objeto)
    delete copia[nomePropriedade]

    return copia
}

console.log(removerPropriedade({objeto: 'mesa', nomePropriedade: 'eder'}, "nomePropriedade"))