// * Exemplo 1 
//function primeiraFuncao() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("Esperou isso aqui");
//       resolve();
//     }, 1000);
//   });
// }

// function primeiraFuncao02() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log("Esperou isso aqui tambem");
//       resolve();
//     }, 3000);
//   });
// }

// async function segundaFuncao() {
//     console.log("Iniciou");
//     await primeiraFuncao();
//     await primeiraFuncao02();
//     console.log("Terminou");
// }
// segundaFuncao();

// * Exemplo 2
// async function esperarSegundos(s) {
//     await new Promise(resolve => setTimeout(resolve, s * 1000))
//     console.log(`Esperei ${s} segundos!`)
// }
// esperarSegundos(2)

// * Exemplo 3
// function obterDadosDoServidor(id) {
//     fetch(`http://pokeapi.co/api/v2/pokemon/${id}`)
//         .then(resposta => resposta.json())
//         .then(dados => {
//         console.log('Nome Pokemon: ', dados.name.toUpperCase())
// })
// }
// obterDadosDoServidor(150) //chama o pokemon pelo numero


// * Exemplo 4
// async function obterDadosDoServidor(id) {
//     const resposta = await fetch(`http://pokeapi.co/api/v2/pokemon/${id}`)
//     const dados = await resposta.json()
//     console.log('Nome Pokemon: ', dados.name.toUpperCase())
// }
// obterDadosDoServidor(150) //chama o pokemon pelo numero

// * Exemplo 5
const fs = require('fs').promises;

async function lerArquivo() {
    const conteudo = await fs.readFile('arquivo.txt', 'utf-8');
    console.log('conteudo do arquivo:', conteudo);
}
lerArquivo();