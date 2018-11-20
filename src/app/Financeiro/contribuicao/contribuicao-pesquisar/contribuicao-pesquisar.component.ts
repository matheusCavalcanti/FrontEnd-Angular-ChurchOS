import { Component, OnInit, ViewChild } from '@angular/core';
import { Contribuicao } from '../shared/model/Contribuicao.modelo';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ToastyService } from 'ng2-toasty/src/toasty.service';
import { ContribuicaoService } from '../shared/service/contribuicao.service';

@Component({
  selector: 'app-contribuicao-pesquisar',
  templateUrl: './contribuicao-pesquisar.component.html',
  styleUrls: ['./contribuicao-pesquisar.component.css']
})
export class ContribuicaoPesquisarComponent implements OnInit {

  contribuicoes: Contribuicao[] = [];
  dataSource = new MatTableDataSource();
  showDialog = false;
  contribSelecionada = new Contribuicao();

  colunas: string[] = ['pessoa', 'categoria', 'conta', 'culto', 'data', 'valor', 'mesContribuicao', 'observacao', 'acoes'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private contribService: ContribuicaoService,
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
    this.contribService.pesquisar()
      .then(contribuicoes => {
        this.contribuicoes = contribuicoes;
        this.dataSource = new MatTableDataSource<Contribuicao>(this.contribuicoes);
        this.dataSource.paginator = this.paginator;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  motivoExclusao(contrib: Contribuicao) {
    this.showDialog = true;
    this.contribSelecionada = contrib;
    // this.confirmarExclusao(this.contribSelecionada);
  }

  confirmarExclusao(contrib: Contribuicao) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(contrib);
      }
    });
  }

  excluir(contrib: Contribuicao) {
    this.contribService.excluir(contrib)
      .then(() => {
        this.pesquisar();

        this.toasty.success('Contribuição excluída com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  validaExclusao(): boolean {
    let confirm = false;
    if (this.contribSelecionada.motivoExclusao === '' ||
     this.contribSelecionada.motivoExclusao === null ||
    this.contribSelecionada.motivoExclusao === undefined) {
      confirm = true;
    }
    return confirm;
  }

}
