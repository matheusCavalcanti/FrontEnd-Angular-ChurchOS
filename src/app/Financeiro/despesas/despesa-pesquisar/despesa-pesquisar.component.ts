import { Component, OnInit, ViewChild } from '@angular/core';
import { Despesa } from '../shared/model/Despesa.modelo';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ToastyService } from 'ng2-toasty/src/toasty.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { DespesaService } from '../shared/service/despesa.service';

@Component({
  selector: 'app-despesa-pesquisar',
  templateUrl: './despesa-pesquisar.component.html',
  styleUrls: ['./despesa-pesquisar.component.css']
})
export class DespesaPesquisarComponent implements OnInit {

  despesas: Despesa[] = [];
  dataSource = new MatTableDataSource();

  colunas: string[] = ['fornecedor', 'categoria', 'conta', 'data', 'valor', 'formaPagamento', 'status', 'acoes'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private despesaService: DespesaService,
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
    this.despesaService.pesquisar()
      .then(despesas => {
        this.despesas = despesas;
        this.dataSource = new MatTableDataSource<Despesa>(this.despesas);
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
    this.despesaService.excluir(id)
      .then(() => {
        this.pesquisar();

        this.toasty.success('Despesa excluída com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }


}
