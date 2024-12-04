import { Questao } from '../interface/interface';

export class QuestaoObjetiva implements Questao {
  private pergunta: string;
  private opcoes: string[];
  private opcaoCorreta: string;

  constructor(pergunta: string, opcoes: string[], opcaoCorreta: string) {
    this.pergunta = pergunta;
    this.opcoes = opcoes;
    this.opcaoCorreta = opcaoCorreta;
  }

  mostrar(): void {
    console.log(this.pergunta);
    this.opcoes.forEach((opcao, index) => {
      console.log(`${index + 1}: ${opcao}`);
    });
  }


  calcularNota(respostaOuRespostas: string | string[]): number {
    if (Array.isArray(respostaOuRespostas)) {
      const corretas = respostaOuRespostas.filter(resposta => resposta === this.opcaoCorreta);
      return corretas.length === 1 ? 1 : 0;
    } else {
      return respostaOuRespostas === this.opcaoCorreta ? 1 : 0;
    }
  }
}
