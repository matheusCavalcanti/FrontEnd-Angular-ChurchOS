import { Pessoa } from 'src/app/pessoa/shared/model/Pessoa.modelo';
import { CategoriaFinanc } from 'src/app/Financeiro/categoria-financeiro/shared/model/CategoriaFinanc.modelo';
import { ContaBancaria } from 'src/app/Financeiro/contaBancaria/shared/model/ContaBancaria.modelo';

export class Contribuicao {
    id: number;
    pessoa = new Pessoa();
    categoria = new CategoriaFinanc();
    conta = new ContaBancaria();
    culto: string;
    data = new Date();
    valor: number;
    mesContribuicao: string;
    observacao: string;
    motivoExclusao: string;
}
