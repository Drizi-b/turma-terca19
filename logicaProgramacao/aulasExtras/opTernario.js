// const n1 = 2
// const n2 = 3

// const verificador = n1 > n2 ? 'MAIOR' : 'MENOR OU IGUAL'

// // igual:
// if (n1 > n2) {
//     console.log('MAIOR')
// } else {
//     console.log('MENOR OU IGUAL')
// }

const verificar = (n1, n2) => n1 > n2 ? 'MAIOR' : 'MENOR OU IGUAL'

console.log(verificar(5,3))
console.log(verificar(2,4))

console.clear()

const classificacao = x =>
  x > 10
    ? "maior que 10"
    : x > 5
    ? "entre 6 e 10"
    : x > 0
    ? "entre 1 e 5"
    : "zero ou negativo";

console.log(classificacao(7));
