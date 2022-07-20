function receberPrimeiroEUltimoElemento(valores) {
    let array = [valores]

    const primeiro = array.shift()
    const ultimo = array.pop()

    return [primeiro, ultimo]
}

console.log(receberPrimeiroEUltimoElemento('eder', 'rei', 'sergio'))