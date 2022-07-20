function repetir(text, repetidor) {
    let result = []

    for (let i = 0; i < repetidor; i++) {
        result.push(text)
    }

    return result
}

console.log(repetir(7, 5))
console.log(repetir('Eder', 5))