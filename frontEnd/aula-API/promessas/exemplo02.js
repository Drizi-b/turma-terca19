const primeiroElemento = arrayOuString => arrayOuString[0] //chama o indice zero do array
const letraMinuscula = letra => letra.toLowerCase() //pega o primeiro indice transforma em letra min.

new Promise(resolve => {
    resolve(['Adriana', 'Welinton', 'Leonardo']) //os nomes estão dentro de uma promessa
})
    .then(primeiroElemento) //criou uma nova array com o indice zero (Adriana)
    .then(primeiroElemento) //acessou o indice zero da nova array (A)
    .then(letraMinuscula) //transf em letra minuscula o primeiro elemento do segundo array
    .then(console.log)