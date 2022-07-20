function contarPalavras(frase) {
    const palavras = frase.split(" ") //É importante deixar o espaço entre as aspas para ele contar palavras ao invés de letras

    return palavras.length
}

console.log(contarPalavras('Eu sou o Eder'))