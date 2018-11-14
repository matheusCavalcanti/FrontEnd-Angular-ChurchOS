import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../shared/service/pessoa.service';
import { ToastyService } from 'ng2-toasty';
import { ActivatedRoute } from '@angular/router';
import { Pessoa, Endereco } from '../shared/model/Pessoa.modelo';
import { IgrejaService } from 'src/app/igreja/shared/service/igreja.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-cadastrar-pessoa',
  templateUrl: './cadastrar-pessoa.component.html',
  styleUrls: ['./cadastrar-pessoa.component.css']
})
export class CadastrarPessoaComponent implements OnInit {

  igrejas = [];
  pessoa = new Pessoa();
  endereco = new Endereco();
  estadoCivil: EstadoCivil[] = [
    {value: 'SOLTEIRO', view: 'Solteiro(a)'},
    {value: 'CASADO', view: 'Casado(a)'},
    {value: 'DIVORCIADO', view: 'Divorciado(a)'},
    {value: 'VIUVO', view: 'Viúvo(a)'}
  ];
  vinculo: Vinculo[] = [
    {value: 'NAOMEMBRO', view: 'Não Membro'},
    {value: 'MEMBRO', view: 'Membro'},
    {value: 'DESLIGADO', view: 'Desligado'}
  ];
  estados: Estado[] = [
    {value: 'Acre', view: 'Acre'},
    {value: 'Alagoas', view: 'Alagoas'},
    {value: 'Amapá', view: 'Amapá'},
    {value: 'Amazonas', view: 'Amazonas'},
    {value: 'Bahia', view: 'Bahia'},
    {value: 'Ceará', view: 'Ceará'},
    {value: 'Distrito Federal', view: 'Distrito Federal'},
    {value: 'Goiás', view: 'Goiás'},
    {value: 'Maranhão', view: 'Maranhão'},
    {value: 'Mato Grosso', view: 'Mato Grosso'},
    {value: 'Mato Grosso do Sul', view: 'Mato Grosso do Sul'},
    {value: 'Minas Gerais', view: 'Minas Gerais'},
    {value: 'Pará', view: 'Pará'},
    {value: 'Paraíba', view: 'Paraíba'},
    {value: 'Paraná', view: 'Paraná'},
    {value: 'Pernambuco', view: 'Pernambuco'},
    {value: 'Piauí', view: 'Piauí'},
    {value: 'Rio de Janeiro', view: 'Rio de Janeiro'},
    {value: 'Rio Grande do Norte', view: 'Rio Grande do Norte'},
    {value: 'Rio Grande do Sul', view: 'Rio Grande do Sul'},
    {value: 'Rondônia', view: 'Rondônia'},
    {value: 'Roraima', view: 'Roraima'},
    {value: 'Santa Catarina', view: 'Santa Catarina'},
    {value: 'São Paulo', view: 'São Paulo'},
    {value: 'Sergipe', view: 'Sergipe'},
    {value: 'Tocantins', view: 'Tocantins'},
  ];


  constructor(
    private igrejaService: IgrejaService,
    private pessoaService: PessoaService,
    private toasty: ToastyService,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.carregarIgrejas();
    const idPessoa = this.route.snapshot.params['id'];

    if (idPessoa) {
      this.carregarPessoa(idPessoa);
    }
  }

  carregarIgrejas() {
    this.igrejaService.pesquisar()
      .then(igrejas => {
        this.igrejas = igrejas;
      });
  }

  get editando() {
    return Boolean(this.pessoa.id);
  }

  carregarPessoa(id: number) {
    this.pessoaService.buscarPeloId(id)
      .then(pessoa => {
        this.pessoa = pessoa;
      });
  }

  salvar() {
    this.pessoaService.adicionar(this.pessoa)
      .then(() => {
        this.toasty.success('Pessoa salva com sucesso!');

        this.pessoa = new Pessoa();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}

export interface EstadoCivil {
  value: string;
  view: string;
}

export interface Vinculo {
  value: string;
  view: string;
}

export interface Estado {
  value: string;
  view: string;
}

