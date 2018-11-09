import { Igreja } from 'src/app/igreja/shared/model/Igreja.modelo';

export class Pessoa {
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    estadoCivil: string;
    sexo: string;
    celular: string;
    vinculo: string;
    igreja: Igreja = new Igreja();
    endereco: Endereco = new Endereco();
}

export class Endereco {
    cep: string;
    estado: string;
    cidade: string;
    logradouro: string;
    numero: string;
}
