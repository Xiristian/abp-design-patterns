import { Questao } from '../interface/interface'

export class QuestaoMultiplaEscolha implements Questao {
  private pergunta: string;
  private opcoes: string[];
  private opcoesCorretas: string[];

  constructor(pergunta: string, opcoes: string[], opcoesCorretas: string[]) {
    this.pergunta = pergunta;
    this.opcoes = opcoes;
    this.opcoesCorretas = opcoesCorretas;
  }

  mostrar(): void {
    console.log(this.pergunta);
    this.opcoes.forEach((opcao, index) => {
      console.log(`${index + 1}: ${opcao}`);
    });
  }


  calcularNota(respostaOuRespostas: string | string[]): number {
    if (Array.isArray(respostaOuRespostas)) {
      const corretas = this.opcoesCorretas.filter(opcao => respostaOuRespostas.includes(opcao));
      return corretas.length === this.opcoesCorretas.length ? 1 : 0;
    } else {
      return this.opcoesCorretas.includes(respostaOuRespostas) ? 1 : 0;
    }
  }
}
