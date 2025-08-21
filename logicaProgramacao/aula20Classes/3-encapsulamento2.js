class Carro {
    constructor(cor, modelo, velocidade) {
        this._cor = cor;
        this._modelo = modelo;
        this._velocidade = velocidade;
    }
    get cor() {
        return this._cor;
    }
    set cor(novaCor) {
        this._cor = novaCor;
    }
    mostrarInfo() {
        console.log(`Este é um ${this._modelo}, de cor ${this._cor} e sua velocidade máxima é de ${this._velocidade} Km/h.`)}
    }
    const fiat = new Carro('azul', 'Fiat 500', 160);
    console.log(fiat.cor);
    fiat.cor = 'vermelho';
    console.log(fiat.cor);