function experiencia(ano: number): string {
    if (ano >= 0 && ano <= 1) {
        return 'Iniciante'
    } else if (ano > 1 && ano <= 3) {
        return 'Intermediário'
    } else if (ano > 3 && ano <= 6) {
        return 'avançado'
    }
    else {
        return 'jedi master'
    }
}

console.log(experiencia(2))