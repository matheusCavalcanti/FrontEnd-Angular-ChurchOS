import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ToastyService } from 'ng2-toasty';
import { MinistroService } from '../shared/service/ministro.service';
import { MatTableDataSource } from '@angular/material/table';
import { Pessoa } from 'src/app/pessoa/shared/model/Pessoa.modelo';
import { MatPaginator } from '@angular/material/paginator';
import { Ministro } from '../shared/model/ministro.modelo';

@Component({
  selector: 'app-pesquisar-ministro',
  templateUrl: './pesquisar-ministro.component.html',
  styleUrls: ['./pesquisar-ministro.component.css']
})
export class PesquisarMinistroComponent implements OnInit {

  ministros = [];
  dataSource = new MatTableDataSource();
  pessoa = new Pessoa();
  display = false;

  colunas: string[] = ['nome', 'tipoMinisterio', 'sexo', 'celular', 'acoes'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private ministroService: MinistroService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService
  ) { }

  ngOnInit() {
    this.pesquisar();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  pesquisar() {
    this.ministroService.pesquisar()
      .then(ministros => {
        this.ministros = ministros;
        this.dataSource = new MatTableDataSource<Pessoa>(this.ministros);
        this.dataSource.paginator = this.paginator;
      });
  }

  excluir(ministro: number) {
    this.ministroService.excluir(ministro)
      .then(() => {
        this.pesquisar();

        this.toasty.success('Ministro excluído com sucesso!');
      });
  }

  confirmarExclusao(ministro: number) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(ministro);
      }
    });
  }

}
