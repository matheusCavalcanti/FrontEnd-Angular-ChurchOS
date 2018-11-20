import { Component, OnInit } from '@angular/core';
import { Contribuicao } from '../shared/model/Contribuicao.modelo';
import { CategoriaFinanc } from '../../categoria-financeiro/shared/model/CategoriaFinanc.modelo';
import { ContaBancaria } from '../../contaBancaria/shared/model/ContaBancaria.modelo';
import { Pessoa } from 'src/app/pessoa/shared/model/Pessoa.modelo';
import { Router, ActivatedRoute } from '@angular/router';
import { ContribuicaoService } from '../shared/service/contribuicao.service';
import { ContaBancariaService } from '../../contaBancaria/shared/service/conta-bancaria.service';
import { CategoriaFinancService } from '../../categoria-financeiro/shared/service/categoria-financ.service';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { PessoaService } from 'src/app/pessoa/shared/service/pessoa.service';

@Component({
  selector: 'app-contribuicao-cadastrar',
  templateUrl: './contribuicao-cadastrar.component.html',
  styleUrls: ['./contribuicao-cadastrar.component.css']
})
export class ContribuicaoCadastrarComponent implements OnInit {

  contrib = new Contribuicao();
  categorias: CategoriaFinanc[] = [];
  categContribuicao: CategoriaFinanc[] = [];
  contas: ContaBancaria[] = [];
  pessoas: Pessoa[] = [];
  formaPag: FormaPag[] = [
    { value: 'Dinheiro', view: 'Dinheiro' },
    { value: 'Cheque', view: 'Cheque' },
    { value: 'Depósito', view: 'Depósito' },
    { value: 'Cartão Débito', view: 'Cartão Débito' },
    { value: 'Cartão Crédito', view: 'Cartão Crédito' },
    { value: 'Boleto', view: 'Boleto' },
  ];

  constructor(
    private router: Router,
    private contribService: ContribuicaoService,
    private contaService: ContaBancariaService,
    private pessoaService: PessoaService,
    private categoriaService: CategoriaFinancService,
    private toasty: ToastyService,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.carregarCategorias();
    this.carregarContas();
    this.carregarPessoas();
    const idContrib = this.route.snapshot.params['id'];

    if (idContrib) {
      this.carregarContrib(idContrib);
    }
  }

  get editando() {
    return Boolean(this.contrib.id);
  }

  carregarContrib(id: number) {
    this.contribService.buscarPeloId(id)
      .then(contrib => {
        this.contrib = contrib;
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
        this.categoriasContrib();
      });
  }

  categoriasContrib() {
    for (let i = 0; i < this.categorias.length; i++) {
      if (this.categorias[i].natureza === 'CONTRIBUICAO') {
        this.categContribuicao[i] = this.categorias[i];
      }
    }
  }

  carregarPessoas() {
    this.pessoaService.pesquisar()
      .then(pessoas => {
        this.pessoas = pessoas;
      });
  }

  salvar() {
    this.contribService.adicionar(this.contrib)
      .then(() => {
        this.toasty.success('Contribuição salva com sucesso!');

        this.contrib = new Contribuicao();
        this.router.navigate(['/contribuicao']);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}

export interface FormaPag {
  value: string;
  view: string;
}
