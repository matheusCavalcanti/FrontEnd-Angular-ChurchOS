import { Component, OnInit } from '@angular/core';
import { Despesa } from '../shared/model/Despesa.modelo';
import { Fornecedor } from '../../fornecedor/shared/model/Fornecedor.modelo';
import { ContaBancaria } from '../../contaBancaria/shared/model/ContaBancaria.modelo';
import { CategoriaFinanc } from '../../categoria-financeiro/shared/model/CategoriaFinanc.modelo';
import { Router, ActivatedRoute } from '@angular/router';
import { ContaBancariaService } from '../../contaBancaria/shared/service/conta-bancaria.service';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { FornecedorService } from '../../fornecedor/shared/service/fornecedor.service';
import { CategoriaFinancService } from '../../categoria-financeiro/shared/service/categoria-financ.service';
import { DespesaService } from '../shared/service/despesa.service';

@Component({
  selector: 'app-despesa-cadastrar',
  templateUrl: './despesa-cadastrar.component.html',
  styleUrls: ['./despesa-cadastrar.component.css']
})
export class DespesaCadastrarComponent implements OnInit {

  despesa = new Despesa();
  categorias: CategoriaFinanc[] = [];
  categDespesa: CategoriaFinanc[] = [];
  contas: ContaBancaria[] = [];
  fornecedores: Fornecedor[] = [];
  formaPag: FormaPag[] = [
    { value: 'Dinheiro', view: 'Dinheiro' },
    { value: 'Cheque', view: 'Cheque' },
    { value: 'Depósito', view: 'Depósito' },
    { value: 'Cartão Débito', view: 'Cartão Débito' },
    { value: 'Cartão Crédito', view: 'Cartão Crédito' },
    { value: 'Boleto', view: 'Boleto' },
  ];
  status: Status[] = [
    { value: 'ABERTO', view: 'Em Aberto' },
    { value: 'PAGO', view: 'Pago' }
  ];

  constructor(
    private router: Router,
    private despesaService: DespesaService,
    private contaService: ContaBancariaService,
    private fornecedorService: FornecedorService,
    private categoriaService: CategoriaFinancService,
    private toasty: ToastyService,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.carregarCategorias();
    this.carregarContas();
    this.carregarFornecedores();
    const idDespesa = this.route.snapshot.params['id'];

    if (idDespesa) {
      this.carregarDespesa(idDespesa);
    }
  }

  get editando() {
    return Boolean(this.despesa.id);
  }

  carregarDespesa(id: number) {
    this.despesaService.buscarPeloId(id)
      .then(despesa => {
        this.despesa = despesa;
      });
  }

  carregarContas() {
    this.contaService.pesquisar()
      .then(contas => {
        this.contas = contas;
      });
  }

  carregarCategorias() {
    this.categoriaService.pesquisar()
      .then(categorias => {
        this.categorias = categorias;
        this.categoriasDespesa();
      });
  }

  categoriasDespesa() {
    let j = 0;
    for (let i = 0; i < this.categorias.length; i++) {
      if (this.categorias[i].natureza === 'DESPESA') {
        this.categDespesa[j] = this.categorias[i];
        j++;
      }
    }
    console.log(this.categDespesa);  
  }

  carregarFornecedores() {
    this.fornecedorService.pesquisar()
      .then(fornecedores => {
        this.fornecedores = fornecedores;
      });
  }

  salvar() {
    this.despesaService.adicionar(this.despesa)
      .then(() => {
        this.toasty.success('Despesa salva com sucesso!');

        this.despesa = new Despesa();
        this.router.navigate(['/despesas']);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }


}

export interface FormaPag {
  value: string;
  view: string;
}

export interface Status {
  value: string;
  view: string;
}
