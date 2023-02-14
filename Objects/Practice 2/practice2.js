/**
 * Create a chakra object.
 */

const chakra = {
  nome: 'Chakra Padrão',
  id: '0',
  forma: 'Forma Padrão',
  elemento: 'Elemento Padrão',
  tipo: 'Tipo Padrão',
  quantidadeChakra: '0',
  selo: 'selo padrão',
  outroTipo: 'Outro Tipo Padrão',
  corChakra: {
    nomeCor: 'Nome Padrao',
    outraCor: 'Outro tipo de cor',
  },
  jutsu: function (quantidadeChakra, selo) {
    this.quantidadeChakra = quantidadeChakra;
    this.selo = selo;
  },
};
/*chakra.quantidadeChakra = 10;
chakra.selo = 'cavalo';
console.log('Quantidade de chakra:', chakra.quantidadeChakra);
console.log('selo:', chakra.selo);*/
console.log(chakra.quantidadeChakra);
console.log(chakra.selo);
chakra.jutsu('10', 'carneiro');
console.log('Bushin no justu:', chakra.quantidadeChakra, chakra.selo);

/**
 * Create a haki object.
 */

const haki = {
  tipoHaki: 'Haki padrao',
};

/**
 * Create a demon-fruit object.
 */

const demonfruit = {
  crescimento: 'Crescimento Padrao',
  identificacao: 'Identificação Padrao',
  proficiencia: 'Proficiaencia padrao',
  forca: {
    beneficio: 'beneficio padrao',
    consequencia: 'consequencia padrao',
  },
  fraqueza: {
    beneficio: 'beneficio padrao',
    consequencia: 'consequencia padrao',
  },
  superioridade: {
    idSuperioridade: '0',
  },
  pesquisa: {
    arficialidade: 'sim',
  },
};
