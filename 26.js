function segundoMaior(...numeros) {
    let ordernarNumeros = numeros.sort((numeroA, numeroB) => numeroB - numeroA)
    let segundoMaior = ordernarNumeros[1]

    return segundoMaior
}

console.log(segundoMaior(5, 9, 20,10))