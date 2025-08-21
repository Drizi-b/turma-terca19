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
        super(modelo, cor, velocidade) //substitui 'carro' por modelo, pois ñ aparecia o modelo, funcionou, mas ñ sei se é o correto
        this._modelo = modelo // colocamos underline para identificar que um atributo é privado.
    } 
    get modelo () { // get mostra. Refere-se ao ENCAPSULAMENTO.
        return this._modelo
    }
    set modelo (novoModelo) { // set modifica. Refere-se ao ENCAPSULAMENTO.
        this._modelo = novoModelo
    }
}
const porsche = new Carro('Vermelho', 'Porsche 911 Turbo', 320);
porsche._modelo = 'GTS';
porsche.mostrarInfo();