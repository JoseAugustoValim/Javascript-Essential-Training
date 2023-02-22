/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class chakra {
  constructor(
    // Defines parameters:
    nome,
    id,
    forma,
    elemento,
    tipo,
    quantidadeChakra,
    selo
  ) {
    // Define properties:
    this.nome = nome;
    this.id = id;
    this.forma = forma;
    this.elemento = elemento;
    this.tipo = tipo;
    this.quantidadeChakra = quantidadeChakra;
    this.selo = selo;
  }
  // Add methods like normal functions:
  jutsu(quantidadeChakra, selo) {
    this.quantidadeChakra = quantidadeChakra;
    this.selo = selo;
  }
}

export default chakra;
