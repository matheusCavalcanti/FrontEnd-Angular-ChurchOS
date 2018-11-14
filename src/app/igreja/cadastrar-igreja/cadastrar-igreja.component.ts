import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { Igreja } from '../shared/model/Igreja.modelo';
import { IgrejaService } from '../shared/service/igreja.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-cadastrar-igreja',
  templateUrl: './cadastrar-igreja.component.html',
  styleUrls: ['./cadastrar-igreja.component.css']
})
export class CadastrarIgrejaComponent implements OnInit {

  igreja = new Igreja();

  constructor(
    private igrejaService: IgrejaService,
    private toasty: ToastyService,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    const idIgreja = this.route.snapshot.params['id'];

    if (idIgreja) {
      this.carregarIgreja(idIgreja);
    }
  }

  get editando() {
    return Boolean(this.igreja.id);
  }

  carregarIgreja(id: number) {
    this.igrejaService.buscarPeloId(id)
      .then(igreja => {
        this.igreja = igreja;
      });
  }

  salvar() {
    this.igrejaService.adicionar(this.igreja)
      .then(() => {
        this.toasty.success('Igreja salva com sucesso!');

        this.igreja = new Igreja();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
