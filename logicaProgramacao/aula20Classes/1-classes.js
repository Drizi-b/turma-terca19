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
const barco = new Veiculo('barco', 'branca', 80);
barco.mostrarInfo();
