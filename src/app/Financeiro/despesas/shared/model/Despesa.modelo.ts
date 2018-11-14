import { Fornecedor } from 'src/app/Financeiro/fornecedor/shared/model/Fornecedor.modelo';
import { ContaBancaria } from 'src/app/Financeiro/contaBancaria/shared/model/ContaBancaria.modelo';
import { CategoriaFinanc } from 'src/app/Financeiro/categoria-financeiro/shared/model/CategoriaFinanc.modelo';

export class Despesa {
    id: number;
    fornecedor = new Fornecedor();
    categoria = new CategoriaFinanc();
    conta = new ContaBancaria();
    data: Date;
    valor: number;
    formaPagamento: string;
    status: string;
    tipoDocumento: string;
    notaFiscal: string;
    observacao: string;
}

