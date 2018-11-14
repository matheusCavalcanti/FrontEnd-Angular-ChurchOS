import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { PessoaService } from '../shared/service/pessoa.service';
import { Pessoa, Endereco } from '../shared/model/Pessoa.modelo';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-pesquisar-pessoas',
  templateUrl: './pesquisar-pessoas.component.html',
  styleUrls: ['./pesquisar-pessoas.component.css']
})
export class PesquisarPessoasComponent implements OnInit {
  
  pessoas = [];
  dataSource = new MatTableDataSource();
  public pessoaSelecionada: Pessoa = new Pessoa();
  endereco = new Endereco();
  display = false;

  colunas: string[] = ['nome', 'cpf', 'dataNascimento', 'estadoCivil', 'sexo',
  'celular', 'acoes'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private pessoaService: PessoaService,
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
    this.pessoaService.pesquisar()
      .then(pessoas => {
        this.pessoas = pessoas;
        this.dataSource = new MatTableDataSource<Pessoa>(this.pessoas);
        this.dataSource.paginator = this.paginator;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  excluir(pessoa: number) {
    this.pessoaService.excluir(pessoa)
      .then(() => {
        this.pesquisar();

        this.toasty.success('Pessoa excluída com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  confirmarExclusao(pessoa: number) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(pessoa);
      }
    });
  }

  showDialog(pessoa: Pessoa) {
      this.pessoaSelecionada = pessoa;
      if (this.pessoaSelecionada.endereco == null) {
          this.pessoaSelecionada.endereco = new Endereco();
      }
      this.display = true;
  }

}

