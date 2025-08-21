let arr = [1, 2, [3, 4],[40, 50, [2, 6]]];
let arrFlat = arr.flat(); //elimina os colchetes, onde o núm dentro dos () determina qtos colchetes serão eliminados...sem nada são 2, com 2 serão 3 colchetes eliminados e assim por diante...Infinity todos os colchetes serão eliminados
console.log(arrFlat); // => [ 1, 2, 3, 4, 40, 50, [ 2, 6 ] ]