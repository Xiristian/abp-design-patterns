import { Questao } from '../interface/interface'

export class QuestaoDescritiva implements Questao {
  private pergunta: string;

  constructor(pergunta: string) {
    this.pergunta = pergunta;
  }

  mostrar(): void {
    console.log(this.pergunta);
  }


  calcularNota(respostaOuRespostas: string | string[]): number {
    console.log("Avaliação manual necessária para a resposta descritiva.");
    return 0; 
  }
}
