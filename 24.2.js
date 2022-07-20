function buscarPalavrasSemelhantes(busca, palavras) {
    const result = []
    
    for (let palavra of palavras)
        if (palavra.includes(busca))
            result.push(palavra)


    return result
}

console.log(buscarPalavrasSemelhantes("java", ["javascript", "java", "c++"]))
console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))