function retornaString(num) {
    let result = ''

    for (let i = 0; i < num; i++) {
        result += '+'
    }

    return result
}

console.log(retornaString(8))