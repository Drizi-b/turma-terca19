let numeros = [1, 2, 3];
let resultado = numeros.flatMap(num => [num, num * 2]); //[repete, multiplica]
console.log(resultado); // => [ 1, 2, 2, 4, 3, 6 ]

let numeros1 = [1, 2, 3];
let resultado1 = numeros1.flatMap(num => [`${num} * 2 = ${num * 2}`]);
console.log(resultado1); // => [ '1 * 2 = 2', '2 * 2 = 4', '3 * 2 = 6' ]

