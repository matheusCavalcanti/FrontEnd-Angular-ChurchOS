import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../shared/model/Fornecedor.modelo';
import { FornecedorService } from '../shared/service/fornecedor.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty/src/toasty.service';

@Component({
  selector: 'app-fornecedor-cadastrar',
  templateUrl: './fornecedor-cadastrar.component.html',
  styleUrls: ['./fornecedor-cadastrar.component.css']
})
export class FornecedorCadastrarComponent implements OnInit {

  fornecedor = new Fornecedor();
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
    private fornecedorService: FornecedorService,
    private toasty: ToastyService,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    const idForn = this.route.snapshot.params['id'];

    if (idForn) {
      this.carregarFornecedor(idForn);
    }
  }

  get editando() {
    return Boolean(this.fornecedor.id);
  }

  carregarFornecedor(id: number) {
    this.fornecedorService.buscarPeloId(id)
      .then(fornecedor => {
        this.fornecedor = fornecedor;
      });
  }

  salvar() {
    this.fornecedorService.adicionar(this.fornecedor)
      .then(() => {
        this.toasty.success('Fornecedor salvo com sucesso!');

        this.fornecedor = new Fornecedor();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }


}

export interface Estado {
  value: string;
  view: string;
}
