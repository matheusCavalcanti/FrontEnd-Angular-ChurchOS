import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { EscalaLouvorService } from '../shared/service/escala-louvor.service';
import { EscalaLouvor } from '../shared/model/EscalaLouvor.modelo';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-pesquisar-escala-louvor',
  templateUrl: './pesquisar-escala-louvor.component.html',
  styleUrls: ['./pesquisar-escala-louvor.component.css']
})
export class PesquisarEscalaLouvorComponent implements OnInit {

  escalasLouvor = [];
  escalaSelecionada: EscalaLouvor = new EscalaLouvor();

  displayDialog = false;
  display = false;

  constructor(
    private escalaLouvorService: EscalaLouvorService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.escalaLouvorService.pesquisar()
      .then(escalas => {
        this.escalasLouvor = escalas;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  excluir(escalaLouvor: number) {
    this.escalaLouvorService.excluir(escalaLouvor)
      .then(() => {
        this.pesquisar();

        this.toasty.success('Escala excluída com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  confirmarExclusao(escalaLouvor: number) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(escalaLouvor);
      }
    });
  }

  showDialog(escalaLouvor: EscalaLouvor) {
    this.escalaSelecionada = escalaLouvor;
    this.displayDialog = true;
  }

}
