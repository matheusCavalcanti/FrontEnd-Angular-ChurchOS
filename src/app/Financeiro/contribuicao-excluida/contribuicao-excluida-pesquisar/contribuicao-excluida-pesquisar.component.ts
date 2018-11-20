import { Component, OnInit, ViewChild } from '@angular/core';
import { ContribuicaoExcluida } from '../shared/ContribuicaoExcluida.modelo';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ToastyService } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ContribuicaoExcluidaService } from '../shared/contribuicao-excluida.service';

@Component({
  selector: 'app-contribuicao-excluida-pesquisar',
  templateUrl: './contribuicao-excluida-pesquisar.component.html',
  styleUrls: ['./contribuicao-excluida-pesquisar.component.css']
})
export class ContribuicaoExcluidaPesquisarComponent implements OnInit {

  contribExcluidas: ContribuicaoExcluida[] = [];
  dataSource = new MatTableDataSource();

  colunas: string[] = ['pessoa', 'valor', 'data', 'motivo', 'acoes'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private contribService: ContribuicaoExcluidaService,
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
    this.contribService.listarTodas()
      .then(contribuicoes => {
        this.contribExcluidas = contribuicoes;
        this.dataSource = new MatTableDataSource<ContribuicaoExcluida>(this.contribExcluidas);
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
    this.contribService.remover(id)
      .then(() => {
        this.pesquisar();

        this.toasty.success('Contribuição excluída com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
