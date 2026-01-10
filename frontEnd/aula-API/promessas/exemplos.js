// const p = new Promise (resolverPromessa => {
//     resolverPromessa([
//         {
//             id: 1,
//             nome: 'Welinton',
//             idade: 40
//         },
//         {
//             id: 2,
//             nome: 'Adriana',
//             idade: 49
//         },
//         {
//             id: 3,
//             nome: 'Leonardo',
//             idade: 16
//         },
// ])
// })
// p.then(JSON.stringify) //transf em JSON ou seja, string
// .then(JSON.parse) //transf novamente em objeto
// .then(valor => valor.forEach(el => {
//     console.log(el.nome, el.idade) //paraCada elemento, imprime somente o nome e a idade
// }))


// * Exemplo 2
const primeiroElemento = arrayOuString => arrayOuString[3] //chama o indice zero do array
const letraMinuscula = letra => letra.toUpperCase() //pega o primeiro indice transforma em letra min.

new Promise(resolve => {
    resolve(["Welinton", "Leonardo", "Adriana"]); //os nomes estão dentro de uma promessa
})
    .then(primeiroElemento) //criou uma nova array com o indice zero (Adriana)
    .then(primeiroElemento) //acessou o indice zero da nova array (A)
    .then(letraMinuscula) //transf em letra minuscula o primeiro elemento do segundo array
    .then(console.log)
