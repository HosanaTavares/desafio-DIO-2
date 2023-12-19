function nivelHeroi (vitorias, derrotas){

    let saldoVitorias = vitorias - derrotas

    if (saldoVitorias <= 10) {
        nivel = "Ferro"
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze"
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata"
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro"
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante"
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário"
    } else if (saldoVitorias >= 101) {
        nivel = "Imortal"
    }


    return  `O Heroi tem saldo de: ${saldoVitorias}  e no nivel  ${nivel} `
}

let resultado = nivelHeroi (100, 10)

console.log(resultado)
