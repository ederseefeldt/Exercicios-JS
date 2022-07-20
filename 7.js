function multiplicar(n1, n2) {
    let result = 0
    
    for (let i = 0; i < n2; i++) {
        result += n1
    }

    return result
}

console.log(multiplicar(5, 2))