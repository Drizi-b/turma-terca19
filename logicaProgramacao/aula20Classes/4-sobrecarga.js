class Carro {
  constructor(cor, modelo, velocidade) {
    this.cor = cor;
    this.modelo = modelo;
    this.velocidade = velocidade;
  }
  acelerar(velocidadeExtra = 10) {
    this.velocidade += velocidadeExtra
    console.log(`O ${this.modelo} acelerou. Sua nova velocidade é: ${this.velocidade} Km/h.`)
  }
}
const ferrari = new Carro('vermelho', 'Ferrari F450', 340)
ferrari.acelerar()
ferrari.acelerar(50)