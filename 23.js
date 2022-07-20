function contarCaracter(caracter, palavra) {
    let contador = 0
    let letras = palavra.split("")

    for (let i = 0; i < letras.length; i++) {
        if (caracter == letras[i]) {
            contador++
        }
    }

    return contador
}

console.log(contarCaracter('d', 'eder'))