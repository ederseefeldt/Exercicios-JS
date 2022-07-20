function objetoParaArray(objeto) {
    return Object.entries(objeto)
}

console.log(objetoParaArray({nome: "Eder", profissão: "Desenvolvedor JS"}))