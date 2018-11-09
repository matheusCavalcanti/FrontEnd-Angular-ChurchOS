import { Component, OnInit } from '@angular/core';
import { Ministro } from '../shared/model/ministro.modelo';
import { ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty/src/toasty.service';
import { PessoaService } from 'src/app/pessoa/shared/service/pessoa.service';
import { MinistroService } from '../shared/service/ministro.service';

@Component({
  selector: 'app-cadastro-ministro',
  templateUrl: './cadastro-ministro.component.html',
  styleUrls: ['./cadastro-ministro.component.css']
})
export class CadastroMinistroComponent implements OnInit {

  pessoas = [];
  ministro = new Ministro();
  tiposM = [
    {value: 'LOUVOR', view: 'Louvor'},
    {value: 'ARTES', view: 'Artes'}
  ];

  constructor(
    private ministroService: MinistroService,
    private pessoaService: PessoaService,
    private toasty: ToastyService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.carregarPessoas();
    const idMinistro = this.route.snapshot.params['id'];

    if (idMinistro) {
      this.carregarMinistro(idMinistro);
    }
  }

  carregarPessoas() {
    this.pessoaService.pesquisar()
      .then(pessoas => {
        this.pessoas = pessoas;
      });
  }

  get editando() {
    return Boolean(this.ministro.id);
  }

  carregarMinistro(id: number) {
    this.ministroService.buscarPeloId(id)
      .then(ministro => {
        this.ministro = ministro;
      });
  }

  salvar() {
    this.ministroService.adicionar(this.ministro)
      .then(() => {
        this.toasty.success('Ministro salvo com sucesso!');

        this.ministro = new Ministro();
      });
  }

}
