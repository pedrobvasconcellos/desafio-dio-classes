class Heroi {
  constructor(nome, idade, tipo, ataque) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.ataque = ataque;
  }

  atacar() {
    console.log(`O herói de nome ${this.nome}, de idade ${this.idade}, do tipo ${this.tipo} atacou usando ${this.ataque}`);
  }
}

let heroi = new Heroi("Arthur", 22, "guerreiro", "espada");
heroi.atacar();
