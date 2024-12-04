import { Questao } from "../interface/interface";
import { QuestaoDescritiva } from "./QuestaoDescritiva";
import { QuestaoMultiplaEscolha } from "./QuestaoMultiplaEscolha";
import { QuestaoObjetiva } from "./QuestaoObjetiva";

export default class QuestaoFactory {
    public criarQuestaoDescritiva(pergunta : string) : Questao{
        return new QuestaoDescritiva(pergunta);
    }

    public criarQuestaoObjetiva(pergunta : string, opcoes : string[], opcaoCorreta : string) : Questao{
        return new QuestaoObjetiva(pergunta, opcoes, opcaoCorreta);
    }

    public criarQuestaoMultiplaEscolha(pergunta : string, opcoes : string[], opcoesCorretas : string[]) : Questao{
        return new QuestaoMultiplaEscolha(pergunta, opcoes, opcoesCorretas);
    }
}