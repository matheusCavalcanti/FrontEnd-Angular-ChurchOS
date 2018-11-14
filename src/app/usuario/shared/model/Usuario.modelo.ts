import { Pessoa } from 'src/app/pessoa/shared/model/Pessoa.modelo';

export class Usuario {
    id: number;
    email: string;
    senha: string;
    permissao: string;
    pessoa: Pessoa = new Pessoa();
}
