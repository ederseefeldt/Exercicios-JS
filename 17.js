function despesasTotais(...itens) {
    let total = 0

    for(let item of itens)
        total += item.preco

    return total
}

console.log(despesasTotais(
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
    ))