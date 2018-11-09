import { Component, OnInit } from '@angular/core';
import { CelulaService } from '../shared/service/celula.service';
import { ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty/src/toasty.service';
import { PessoaService } from 'src/app/pessoa/shared/service/pessoa.service';
import { Pessoa } from 'src/app/pessoa/shared/model/Pessoa.modelo';
import { Celula } from '../shared/model/Celula.modelo';

@Component({
  selector: 'app-cadastrar-celula',
  templateUrl: './cadastrar-celula.component.html',
  styleUrls: ['./cadastrar-celula.component.css']
})
export class CadastrarCelulaComponent implements OnInit {
  
  pessoas: Pessoa[];
  pessoa: Pessoa = new Pessoa();
  pessoasSelecionadas: Pessoa[] = [];
  outrasPessoas: Pessoa[] = [];

  celula: Celula = new Celula();
  dias: Dia[] = [
    {value: 'Segunda', view: 'Segunda-Feira'},
    {value: 'Terça', view: 'Terça-Feira'},
    {value: 'Quarta', view: 'Quarta-Feira'},
    {value: 'Quinta', view: 'Quinta-Feira'},
    {value: 'Sexta', view: 'Sexta-Feira'},
    {value: 'Sabado', view: 'Sábado'},
  ];
  public idCelula: number;
  
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
        private celulaService: CelulaService,
        private pessoaService: PessoaService,
        private toasty: ToastyService,
        private route: ActivatedRoute
      ) { }
    
      get editando() {
        return Boolean(this.celula.id);
      }
  
  ngOnInit() {
    this.carregarPessoas();
    this.idCelula = this.route.snapshot.params['id'];
    if (this.idCelula) {
      this.carregarCelula(this.idCelula);
    } else {
      this.carregarPessoas();
      this.outrasPessoas = this.pessoas;
    }
  }

  carregarPessoas() {
    this.pessoaService.pesquisar()
      .then(pessoas => {
        this.pessoas = pessoas;
      });
  }

  carregarCelula(id: number) {
    this.celulaService.buscarPeloId(id)
      .then(celula => {
        this.celula = celula;
        this.pessoasSelecionadas = this.celula.membros;
        this.tentaTirar();
      });
  }

  salvar() {
    this.celulaService.adicionar(this.celula)
      .then(() => {
        this.toasty.success('Célula salva com sucesso!');

        this.celula = new Celula();
      });
  }

  tentaTirar() {
    for (let i = 0; i < this.pessoasSelecionadas.length; i++) {
      for (let j = 0; j < this.pessoas.length; j++) {
        if (this.pessoas[j].id !== this.pessoasSelecionadas[i].id) {
          console.log(this.pessoas[j].nome + '---' + this.pessoasSelecionadas[i].nome);
          this.outrasPessoas.push(this.pessoas[j]);
          if (this.outrasPessoas[j] === this.pessoasSelecionadas[i]) {
            console.log(this.outrasPessoas);
            this.outrasPessoas.pop();
          }
      }
      }
    }
  }

}

export interface Dia {
  value: string;
  view: string;
}

export interface Estado {
  value: string;
  view: string;
}
