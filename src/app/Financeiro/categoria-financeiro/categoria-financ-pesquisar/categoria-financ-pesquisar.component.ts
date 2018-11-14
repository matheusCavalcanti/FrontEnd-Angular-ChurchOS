import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoriaFinanc } from '../shared/model/CategoriaFinanc.modelo';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CategoriaFinancService } from '../shared/service/categoria-financ.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ToastyService } from 'ng2-toasty/src/toasty.service';

@Component({
  selector: 'app-categoria-financ-pesquisar',
  templateUrl: './categoria-financ-pesquisar.component.html',
  styleUrls: ['./categoria-financ-pesquisar.component.css']
})
export class CategoriaFinancPesquisarComponent implements OnInit {

  categorias: CategoriaFinanc[] = [];
  dataSource = new MatTableDataSource();

  colunas: string[] = ['descricao', 'natureza', 'acoes'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private categoriaService: CategoriaFinancService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.pesquisar();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  pesquisar() {
    this.categoriaService.pesquisar()
      .then(categorias => {
        this.categorias = categorias;
        this.dataSource = new MatTableDataSource<CategoriaFinanc>(this.categorias);
        this.dataSource.paginator = this.paginator;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  confirmarExclusao(id: number) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(id);
      }
    });
  }

  excluir(id: number) {
    this.categoriaService.excluir(id)
      .then(() => {
        this.pesquisar();

        this.toasty.success('Categoria Financeiro excluída com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }


}
