function removerVogais(frase) {
    return frase.replace(/[aeiouà-ú]/ig, '')
}

console.log(removerVogais('oi, eu sou o Eder'))
console.log(removerVogais('Programação'))