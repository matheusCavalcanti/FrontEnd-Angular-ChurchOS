import { Component, OnInit } from '@angular/core';
import { CategoriaFinanc } from '../shared/model/CategoriaFinanc.modelo';
import { CategoriaFinancService } from '../shared/service/categoria-financ.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty/src/toasty.service';

@Component({
  selector: 'app-categoria-financ-cadastrar',
  templateUrl: './categoria-financ-cadastrar.component.html',
  styleUrls: ['./categoria-financ-cadastrar.component.css']
})
export class CategoriaFinancCadastrarComponent implements OnInit {

  categoria = new CategoriaFinanc();
  natureza: Natureza[] = [
    { value: 'CONTRIBUICAO', view: 'Contribuição' },
    { value: 'DESPESA', view: 'Despesa' }
  ];

  constructor(
    private categoriaService: CategoriaFinancService,
    private toasty: ToastyService,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    const idCategoria = this.route.snapshot.params['id'];

    if (idCategoria) {
      this.carregarCategoria(idCategoria);
    }
  }

  get editando() {
    return Boolean(this.categoria.id);
  }

  carregarCategoria(id: number) {
    this.categoriaService.buscarPeloId(id)
      .then(categoria => {
        this.categoria = categoria;
      });
  }

  salvar() {
    this.categoriaService.adicionar(this.categoria)
      .then(() => {
        this.toasty.success('Categoria adicionada com sucesso!');

        this.categoria = new CategoriaFinanc();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}

export interface Natureza {
  value: string;
  view: string;
}
