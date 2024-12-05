import { Questao } from '../interface/interface';
import Avaliacao from './Avaliacao';
import QuestaoFactory from './QuestaoFactory';

export default class AvaliacaoBuilder {
  private questoes: Questao[] = [];
  private factory: QuestaoFactory;

  constructor() {
    this.factory = new QuestaoFactory();
  }

  public adicionaQuestaoDescritiva(pergunta: string): AvaliacaoBuilder {
    const questaoDescritiva = this.factory.criarQuestaoDescritiva(pergunta);
    this.questoes.push(questaoDescritiva);
    return this;
  }

  public adicionaQuestaoObjetiva(
    pergunta: string,
    opcoes: string[],
    opcaoCorreta: string
  ): AvaliacaoBuilder {
    const questaoObjetiva = this.factory.criarQuestaoObjetiva(pergunta, opcoes, opcaoCorreta);
    this.questoes.push(questaoObjetiva);
    return this;
  }

  public adicionaQuestaoMultiplaEscolha(
    pergunta: string,
    opcoes: string[],
    opcoesCorretas: string[]
  ): AvaliacaoBuilder {
    const questaoMultiplaEscolha = this.factory.criarQuestaoMultiplaEscolha(pergunta, opcoes, opcoesCorretas);
    this.questoes.push(questaoMultiplaEscolha);
    return this;
  }

  public getQuestoes(): Questao[] {
    return this.questoes;
  }

  public build(): Avaliacao {
    const avaliacao = new Avaliacao();
    this.questoes.forEach((questao) => avaliacao.adicionaQuestao(questao));
    return avaliacao;
  }
}