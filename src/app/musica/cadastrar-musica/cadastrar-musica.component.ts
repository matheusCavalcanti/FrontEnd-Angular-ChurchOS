import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';

import { MusicaService } from '../shared/service/musica.service';
import { Musica } from '../shared/model/Musica.modelo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastrar-musica',
  templateUrl: './cadastrar-musica.component.html',
  styleUrls: ['./cadastrar-musica.component.css']
})
export class CadastrarMusicaComponent implements OnInit {

  musica = new Musica();

  constructor(
    private musicaService: MusicaService,
    private toasty: ToastyService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    const idMusica = this.route.snapshot.params['id'];

    if (idMusica) {
      this.carregarMusica(idMusica);
    }

  }

  get editando() {
    return Boolean(this.musica.id);
  }

  carregarMusica(id: number) {
    this.musicaService.buscarPeloId(id)
      .then(musica => {
        this.musica = musica;
      });
  }

  salvar() {
    this.musicaService.adicionar(this.musica)
      .then(() => {
        this.toasty.success('Música adicionada com sucesso!');

        this.musica = new Musica();
      });
  }

  

}
