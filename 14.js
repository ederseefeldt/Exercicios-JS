function receberSomenteOsParesDeIndicesPares(...elementos) {
    let result = []

    for (let i = 0; i < elementos.length; i += 2) {
        if (elementos[i] % 2 === 0) {
            result.push(elementos[i])
        }
    }

    return result
}

console.log(receberSomenteOsParesDeIndicesPares(10, 8, 6, 80, 97))