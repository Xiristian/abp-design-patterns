import AvaliacaoBuilder from "./classes/AvaliacaoBuilder";

const builder = new AvaliacaoBuilder();

const avaliacaoComBuilder = builder
  .adicionaQuestaoDescritiva("Explique o conceito de encapsulamento em POO.")
  .adicionaQuestaoObjetiva(
    "Qual é a capital da Alemanha?",
    ["Berlim", "Paris", "Madrid", "Lisboa"],
    "Berlim"
  )
  .adicionaQuestaoMultiplaEscolha(
    "Quais dessas são linguagens de programação funcional?",
    ["Haskell", "Java", "Python", "Scala"],
    ["Haskell", "Scala"]
  )
  .build();

avaliacaoComBuilder.mostrar();

console.log(`Nota: ${avaliacaoComBuilder.calcularNota([
  "Encapsulamento é o conceito de ocultar detalhes internos.",
  "Berlim",
  ["Haskell", "Scala"]
])}`);

console.log(`Nota: ${avaliacaoComBuilder.calcularNota([
  "Encapsulamento é o conceito de ocultar detalhes internos.",
  "Berlim",
  ["Haskell"]
])}`);