import { Questao } from "../interface/interface";

export class QuestaoDescritiva implements Questao {
  private pergunta: string;

  constructor(pergunta: string) {
    this.pergunta = pergunta;
  }

  mostrar(): void {
    console.log(this.pergunta);
  }

  calcularNota(respostaOuRespostas: string | string[]): number {
    return respostaOuRespostas ? 1 : 0;
  }
}
