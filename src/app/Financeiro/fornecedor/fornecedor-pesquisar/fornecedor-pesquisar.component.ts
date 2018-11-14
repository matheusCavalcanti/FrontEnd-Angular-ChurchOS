import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Fornecedor } from '../shared/model/Fornecedor.modelo';
import { MatPaginator } from '@angular/material/paginator';
import { FornecedorService } from '../shared/service/fornecedor.service';
import { ToastyService } from 'ng2-toasty/src/toasty.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-fornecedor-pesquisar',
  templateUrl: './fornecedor-pesquisar.component.html',
  styleUrls: ['./fornecedor-pesquisar.component.css']
})
export class FornecedorPesquisarComponent implements OnInit {

  fornecedores = [];
  dataSource = new MatTableDataSource();
  public fornecedorSelecionado: Fornecedor = new Fornecedor();
  display = false;

  colunas: string[] = ['nome', 'tipo', 'cnpj', 'celular', 'telefone', 'acoes'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private fornecedorService: FornecedorService,
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
    this.fornecedorService.pesquisar()
      .then(fornecedores => {
        this.fornecedores = fornecedores;
        this.dataSource = new MatTableDataSource<Fornecedor>(this.fornecedores);
        this.dataSource.paginator = this.paginator;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  excluir(id: number) {
    this.fornecedorService.excluir(id)
      .then(() => {
        this.pesquisar();

        this.toasty.success('Fornecedor excluído com sucesso!');
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

  showDialog(fornecedor: Fornecedor) {
    this.fornecedorSelecionado = fornecedor;
    this.display = true;
  }

}
