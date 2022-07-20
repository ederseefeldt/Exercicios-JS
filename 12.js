function filtarNumeros(...elementos) {
    return elementos.filter(item => typeof item === "number")
}

console.log(filtarNumeros(1, 'eder', 5, true, 6, 'oi'))