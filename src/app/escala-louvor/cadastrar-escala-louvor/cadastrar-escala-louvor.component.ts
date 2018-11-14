import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { EscalaLouvor } from '../shared/model/EscalaLouvor.modelo';
import { MusicaService } from 'src/app/musica/shared/service/musica.service';
import { EscalaLouvorService } from '../shared/service/escala-louvor.service';
import { Musica } from 'src/app/musica/shared/model/Musica.modelo';
import { Ministro } from 'src/app/ministro/shared/model/ministro.modelo';
import { MinistroService } from 'src/app/ministro/shared/service/ministro.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-cadastrar-escala-louvor',
  templateUrl: './cadastrar-escala-louvor.component.html',
  styleUrls: ['./cadastrar-escala-louvor.component.css']
})
export class CadastrarEscalaLouvorComponent implements OnInit {

  escala: EscalaLouvor = new EscalaLouvor();
  ministros: Ministro[] = [];
  ministrosSelecionados: Ministro[] = [];
  musicas: Musica[] = [];
  musicasSelecionadas: Musica[] = [];

  tiposCulto: TipoCulto[] = [
    { value: 'DOMINGO', view: 'Domingo' },
    { value: 'SABADO', view: 'Sábado' },
    { value: 'QUINTA', view: 'Quinta-Feira' },
    { value: 'OUTRO', view: 'Outro' }
  ];

  constructor(
    private escalaLouvorService: EscalaLouvorService,
    private musicaService: MusicaService,
    private ministroService: MinistroService,
    private toasty: ToastyService,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.carregarMinistros();
    this.carregarMusicas();
    const idEscala = this.route.snapshot.params['id'];

    if (idEscala) {
      this.buscarEscala(idEscala);
    }
  }

  get editando() {
    return Boolean(this.escala.id);
  }

  carregarMinistros() {
    this.ministroService.pesquisar()
      .then(ministros => {
        this.ministros = ministros;
      });
  }

  carregarMusicas() {
    this.musicaService.pesquisar()
      .then(musicas => {
        this.musicas = musicas;
      });
  }

  buscarEscala(id: number) {
    this.escalaLouvorService.buscarPeloId(id)
      .then(escala => {
        this.escala = escala;
      });
  }

  salvar() {
    this.escala.ministros = this.ministrosSelecionados;
    this.escala.musicas = this.musicasSelecionadas;
    this.escalaLouvorService.adicionar(this.escala)
      .then(() => {
        this.toasty.success('Escala salva com sucesso!');

        this.escala = new EscalaLouvor();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}

export interface TipoCulto {
  view: string;
  value: string;
}
