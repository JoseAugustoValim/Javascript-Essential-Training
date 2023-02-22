/**
 * Creating classes:
 *
 * Class declaration: class Name {
 * constructor(// Defines parameters:) { 
 * }
 * {
  // Add methods like normal functions:
   }
 * Class expression:  const Name = class {}
 * 
 *  
}
 */

class fichaPersonagemOP {
  constructor(
    nome,
    idade,
    zonaOrigem,
    valorRecompensa,
    tipohaki,
    status,
    lutaStatus,
    hakiStatus
  ) {
    this.nome = nome;
    this.idade = idade;
    this.zonaOrigem = zonaOrigem;
    this.valorRecompensa = valorRecompensa;
    this.tipohaki = tipohaki;
    this.status = status;
    this.lutaStatus = lutaStatus;
    this.hakiStatus = hakiStatus;
  }
  prontoLutar(lutaStatus, hakiStatus) {
    this.lutaStatus = false;
    this.hakiStatus = false;
  }
}

export default fichaPersonagemOP;
