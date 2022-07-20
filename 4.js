function nomeMes(num) {
    const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
        'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return mapeamento[--num];
}

console.log(nomeMes(5))