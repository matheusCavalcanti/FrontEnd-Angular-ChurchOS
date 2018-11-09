import { Pessoa } from 'src/app/pessoa/shared/model/Pessoa.modelo';

export class Celula {
    id: number;
    nome: string;
    lider: Pessoa = new Pessoa();
    dia: string;
    horario: string;
    auxiliar: string;
    membros: Pessoa[] = [];
    cep: string;
    estado: string;
    cidade: string;
    bairro: string;
    logradouro: string;
    numero: string;
}
