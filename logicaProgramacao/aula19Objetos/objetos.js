const pessoa = {
    nome: 'Adriana',
    idade: 49,
    profissao: 'Caixa'
};
pessoa.idade = 15,
pessoa.cidade = 'Teresopolis',
delete pessoa.profissao,
pessoa.idade = 50,
pessoa.corFavorita = 'vermelho'
//console.log(pessoa);

const carro = {
    roda: 'Aro15',
    cor: '#000000',
    velocidade: 300,
    motor: 'V8',
    pecas: ['volante', 'cambio', 'retrovisor', 'banco', 'cinto', {
        velocimetro: 'km/h',
        painelDeMedia: 'nível de combustivel'
    }],
    acelerar () {
        return 'A velocidade máxima é ' + this.velocidade;
    }
}
carro.modelo = 'Lamborghini',
delete carro.roda,
carro.cor = 'Preto',
//console.log(carro.velocidade + ' Km/h')
//console.log(carro);
console.log(carro.acelerar())
//console.log(carro.pecas[5].painelDeMedia)
//console.log(carro.pecas[5].velocimetro)
carro.pecas.forEach(peca => console.log(peca))

for (key in carro) {
    //console.log(key)
    //console.log(`${key}: ${carro[key]}`);
}