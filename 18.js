function calcularMedia(...numeros) {
    let total = 0
    let media = 0

    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i]

        media = total / numeros.length
    }

    return media
}

console.log(calcularMedia(10, 10, 6, 10))