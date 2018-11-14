import { Component, OnInit, ViewChild } from '@angular/core';
import { ContaBancaria } from '../shared/model/ContaBancaria.modelo';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ToastyService } from 'ng2-toasty/src/toasty.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ContaBancariaService } from '../shared/service/conta-bancaria.service';

@Component({
  selector: 'app-conta-bancaria-pesquisar',
  templateUrl: './conta-bancaria-pesquisar.component.html',
  styleUrls: ['./conta-bancaria-pesquisar.component.css']
})
export class ContaBancariaPesquisarComponent implements OnInit {

  contas: ContaBancaria[] = [];
  dataSource = new MatTableDataSource();

  colunas: string[] = ['nome', 'tipo', 'banco', 'agencia', 'conta', 'saldo', 'acoes'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private contaService: ContaBancariaService,
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
    this.contaService.pesquisar()
      .then(contas => {
        this.contas = contas;
        this.dataSource = new MatTableDataSource<ContaBancaria>(this.contas);
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
    this.contaService.excluir(id)
      .then(() => {
        this.pesquisar();

        this.toasty.success('Conta Bancáia excluída com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }


}
