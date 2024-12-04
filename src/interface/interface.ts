export interface Questao {
    mostrar(): void;
    calcularNota(resposta: string): number;
    calcularNota(respostas: string[]): number;
  }
  