import { Questao } from "../interface/interface";

export default class Avaliacao {
    private id : string = Math.random().toString();
    private questoes : Questao[] = [];

    public getId() : string {
        return this.id;
    }

    public adicionaQuestao(questao : Questao){
        this.questoes.push(questao);
    }

    public getQuestoes() : Questao[] {
        return this.questoes;
    }
    
    public calcularNota(respostas : any[]){
        let totalNota = 0;
        this.questoes.map((questao, i)=>{
            totalNota = totalNota + questao.calcularNota(respostas[i])
        });
        return totalNota;
    }
    
    public mostrar(){
        this.questoes.map((questao, i)=>{
            questao.mostrar()
        })
    }

}