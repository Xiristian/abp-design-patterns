import { QuestaoMultiplaEscolha } from './classes/QuestaoMultiplaEscolha';
import { QuestaoDescritiva } from './classes/QuestaoDescritiva';
import { QuestaoObjetiva } from './classes/QuestaoObjetiva';
import QuestaoFactory from './classes/QuestaoFactory';
import Avaliacao from './classes/Avaliacao';

const factory = new QuestaoFactory()

// Testando QuestaoMultiplaEscolha
const questaoMultiplaEscolha = factory.criarQuestaoMultiplaEscolha(
  "Quais dessas linguagens são de tipagem estática?",
  ["JavaScript", "TypeScript", "Python", "Java"],
  ["TypeScript", "Java"]
);

//console.log("Questão de Múltipla Escolha:");
//questaoMultiplaEscolha.mostrar();
//console.log(`Nota: ${questaoMultiplaEscolha.calcularNota(["TypeScript", "Java"])}\n`); 
// Resposta deve ser 1

// Testando QuestaoDescritiva
const questaoDescritiva = factory.criarQuestaoDescritiva("Explique o conceito de herança em POO.");
/*console.log("Questão Descritiva:");
questaoDescritiva.mostrar();
console.log(`Nota: ${questaoDescritiva.calcularNota("Herança é quando uma classe deriva de outra classe.")}\n`);*/ 
//Resposta deve ser 0, pois a avaliação é manual

// Testando QuestaoObjetiva
const questaoObjetiva = factory.criarQuestaoObjetiva(
  "Qual é a capital da França?",
  ["Berlim", "Madrid", "Paris", "Lisboa"],
  "Paris"
);

/*console.log("Questão Objetiva:");
questaoObjetiva.mostrar();
console.log(`Nota: ${questaoObjetiva.calcularNota("Paris")}`); */
// Resposta deve ser 1

// Testando uma resposta incorreta na QuestaoObjetiva
//console.log(`Nota (resposta incorreta): ${questaoObjetiva.calcularNota("Madrid")}`); // Espera-se 0

const avaliacao = new Avaliacao()
avaliacao.adicionaQuestao(questaoMultiplaEscolha);
avaliacao.adicionaQuestao(questaoDescritiva);
avaliacao.adicionaQuestao(questaoObjetiva);

avaliacao.mostrar()
console.log(`Nota: ${avaliacao.calcularNota([["TypeScript", "Java"], "Herança é quando uma classe deriva de outra classe.", "Paris" ])}`)
console.log(`Nota: ${avaliacao.calcularNota([["TypeScript", "Java"], "Herança é quando uma classe deriva de outra classe.", "Madrid" ])}`)

