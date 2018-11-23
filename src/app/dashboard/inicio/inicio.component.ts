import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/pessoa/shared/model/Pessoa.modelo';
import { PessoaService } from 'src/app/pessoa/shared/service/pessoa.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AuthService } from 'src/app/seguranca/auth.service';
import { Usuario } from 'src/app/usuario/shared/model/Usuario.modelo';
import { MusicaService } from 'src/app/musica/shared/service/musica.service';
import { Musica } from 'src/app/musica/shared/model/Musica.modelo';
import { MinistroService } from 'src/app/ministro/shared/service/ministro.service';
import { Ministro } from 'src/app/ministro/shared/model/ministro.modelo';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  data: any;
  contrib: any;
  pessoas: Pessoa[] = [];
  totalHomens = 0;
  totalMulheres = 0;
  musicas = [];
  qtdeMusicas = 0;
  qtdeMinistros = 0;
  ministros: Ministro[] = [];
  usuario: Usuario = this.auth.usuario;

  ngOnInit() {
    this.carregarPessoas();
    this.carregarMusicas();
    this.carregarMinistros();
  }

  constructor(
    private pessoaService: PessoaService,
    private musicaService: MusicaService,
    private ministroService: MinistroService,
    private errorHandler: ErrorHandlerService,
    private auth: AuthService
  ) {
    // localStorage.setItem('usuario', this.nomeUsuario);
  }

  grafico() {
    this.data = {
      labels: ['Homens', 'Mulheres'],
      datasets: [
        {
          data: [this.totalHomens, this.totalMulheres],
          backgroundColor: [
            '#36A2EB',
            '#FF6384'
          ],
          hoverBackgroundColor: [
            '#36A2EB',
            '#FF6384'
          ]
        }]
    };
  }

  graficoBarra() {
    this.contrib = {
      labels: ['Despesas', 'Contribuições'],
      datasets: [
        {
          label: 'Despesas',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 55]
        },
        {
          label: 'Contribuicoes',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 34]
        }
      ]
    }
  }

  carregarMusicas() {
    this.musicaService.pesquisar()
      .then(musicas => {
        this.musicas = musicas;
        this.somarMusicas();
      });
  }

  carregarMinistros() {
    this.ministroService.pesquisar()
      .then(ministros => {
        this.ministros = ministros;
        this.somarMin();
      });
  }

  carregarPessoas() {
    this.pessoaService.pesquisar()
      .then(pessoas => {
        this.pessoas = pessoas;
        this.somarPessoas();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  somarPessoas() {
    for (let i = 0; i < this.pessoas.length; i++) {
      if (this.pessoas[i].sexo === 'MASCULINO') {
        this.totalHomens = this.totalHomens + 1;
      } else {
        this.totalMulheres = this.totalMulheres + 1;
      }
    }
    this.grafico();
  }

  somarMusicas() {
    for (let i = 0; i < this.musicas.length; i++) {
      this.qtdeMusicas++;
    }
  }

  somarMin() {
    for (let i = 0; i < this.ministros.length; i++) {
      this.qtdeMinistros++;
    }
  }

}
