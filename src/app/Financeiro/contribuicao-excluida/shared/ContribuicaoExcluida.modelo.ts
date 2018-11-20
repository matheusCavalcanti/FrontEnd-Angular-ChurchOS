import { Pessoa } from 'src/app/pessoa/shared/model/Pessoa.modelo';

export class ContribuicaoExcluida {
    id: number;
    pessoa = new Pessoa();
    valor: number;
    data = new Date();
    motivo: string;
}
