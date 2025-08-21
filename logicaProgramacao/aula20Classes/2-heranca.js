//coisas herdadas
class Veiculo {
  constructor(tipo, cor, velocidade) {
    this.tipo = tipo;
    this.cor = cor;
    this.velocidade = velocidade;
  }
  mostrarInfo() {
    console.log(
      `Este é um ${this.tipo}, de cor ${this.cor} e sua velocidade máxima é de ${this.velocidade} Km/h.`
    );
  }
}
class Carro extends Veiculo { // extends refere-se a heranca
    constructor (cor, modelo, velocidade){
        super(modelo, cor, velocidade)
        this.modelo = modelo
    }
}
const porsche = new Carro('Vemelho', 'Porsche 911 Turbo', 320);
const fiat = new Carro('azul', 'Fiat 500', 160);
const ferrari = new Carro('amarelo', 'Ferrari F450', 340);

porsche.mostrarInfo();
fiat.mostrarInfo();
ferrari.mostrarInfo();