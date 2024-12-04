import { QuestaoMultiplaEscolha } from './classes/QuestaoMultiplaEscolha';
import { QuestaoDescritiva } from './classes/QuestaoDescritiva';
import { QuestaoObjetiva } from './classes/QuestaoObjetiva';

// Testando QuestaoMultiplaEscolha
const questaoMultiplaEscolha = new QuestaoMultiplaEscolha(
  "Quais dessas linguagens são de tipagem estática?",
  ["JavaScript", "TypeScript", "Python", "Java"],
  ["TypeScript", "Java"]
);

console.log("Questão de Múltipla Escolha:");
questaoMultiplaEscolha.mostrar();
console.log(`Nota: ${questaoMultiplaEscolha.calcularNota(["TypeScript", "Java"])}\n`); 
// Respota deve ser 1

// Testando QuestaoDescritiva
const questaoDescritiva = new QuestaoDescritiva("Explique o conceito de herança em POO.");
console.log("Questão Descritiva:");
questaoDescritiva.mostrar();
console.log(`Nota: ${questaoDescritiva.calcularNota("Herança é quando uma classe deriva de outra classe.")}\n`); 
//Resposta deve ser 0, pois a avaliação é manual

// Testando QuestaoObjetiva
const questaoObjetiva = new QuestaoObjetiva(
  "Qual é a capital da França?",
  ["Berlim", "Madrid", "Paris", "Lisboa"],
  "Paris"
);

console.log("Questão Objetiva:");
questaoObjetiva.mostrar();
console.log(`Nota: ${questaoObjetiva.calcularNota("Paris")}`); 
// Resposta deve ser 1

// Testando uma resposta incorreta na QuestaoObjetiva
console.log(`Nota (resposta incorreta): ${questaoObjetiva.calcularNota("Madrid")}`); // Espera-se 0
