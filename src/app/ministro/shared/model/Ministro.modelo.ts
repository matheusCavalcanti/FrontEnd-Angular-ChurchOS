import { Pessoa } from 'src/app/pessoa/shared/model/Pessoa.modelo';

export class Ministro {
    id: number;
    tipoMinisterio: string;
    pessoa: Pessoa = new Pessoa();
}
