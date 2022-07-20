function buscarPalavrasSemelhantes(busca, palavras) {
    return palavras.filter(palavra => palavra.includes(busca))
}

console.log(buscarPalavrasSemelhantes("java", ["javascript", "java", "c++"]))
console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))