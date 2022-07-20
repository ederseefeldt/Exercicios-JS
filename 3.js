function calcSalario(hora, valorHora) {
    let salario = hora * valorHora

    return 'Salário igual a R$' + salario
}

console.log(calcSalario(150, 40.5))