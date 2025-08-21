const menu = ['Home', 'Sobre', 'Noticias', 'Contato', 'Esportes'];
const itens = menu.join(" | "); //.join() retorna string e ñ é mais possível utilizar como array.
console.log(itens); //(typeof itens) => mostra o retorno, se array ou string
// => Home | Sobre | Noticias | Contato | Esportes