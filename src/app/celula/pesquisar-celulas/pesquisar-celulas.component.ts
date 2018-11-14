import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ToastyService } from 'ng2-toasty/src/toasty.service';
import { Celula } from '../shared/model/Celula.modelo';
import { MatTableDataSource } from '@angular/material/table';
import { CelulaService } from '../shared/service/celula.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-pesquisar-celulas',
  templateUrl: './pesquisar-celulas.component.html',
  styleUrls: ['./pesquisar-celulas.component.css']
})
export class PesquisarCelulasComponent implements OnInit {

  celulaSelecionada: Celula;
  celulaMembros: Celula = new Celula();
  displayDialog = false;
  display = false;

  celulas: Celula[];
  dataSource = new MatTableDataSource();
  // public celulaSelecionada: Celula = new Celula();

  constructor(
    private celulaService: CelulaService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.celulaService.pesquisar()
      .then(celulas => {
        this.celulas = celulas;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  excluir(celula: number) {
    this.celulaService.excluir(celula)
      .then(() => {
        this.pesquisar();

        this.toasty.success('Célula excluída com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  confirmarExclusao(celula: number) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(celula);
      }
    });
  }

  showDialog(celula: Celula) {
    this.celulaSelecionada = celula;
    this.displayDialog = true;
  }

  showDialogMembros(celula: Celula) {
    this.celulaMembros = celula;
    this.display = true;
    console.log(this.celulaMembros);
  }

}
