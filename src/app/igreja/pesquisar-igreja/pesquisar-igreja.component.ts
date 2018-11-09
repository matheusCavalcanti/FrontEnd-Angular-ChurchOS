import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ToastyService } from 'ng2-toasty';
import { IgrejaService } from '../shared/service/igreja.service';
import { Igreja } from '../shared/model/Igreja.modelo';

@Component({
  selector: 'app-pesquisar-igreja',
  templateUrl: './pesquisar-igreja.component.html',
  styleUrls: ['./pesquisar-igreja.component.css']
})
export class PesquisarIgrejaComponent implements OnInit {

  igrejas = [];
  dataSource = new MatTableDataSource();
  public igrejaSelecionada: Igreja = new Igreja();
  display = false;

  colunas: string[] = ['nome', 'liderPrincipal', 'cnpj', 'email', 'celular',
    'telefone', 'acoes'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private igrejaService: IgrejaService,
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
    this.igrejaService.pesquisar()
      .then(igrejas => {
        this.igrejas = igrejas;
        this.dataSource = new MatTableDataSource<Igreja>(this.igrejas);
        this.dataSource.paginator = this.paginator;
      });
  }

  excluir(igreja: number) {
    this.igrejaService.excluir(igreja)
      .then(() => {
        this.pesquisar();

        this.toasty.success('Igreja excluída com sucesso!');
      });
  }

  confirmarExclusao(igreja: number) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(igreja);
      }
    });
  }

  showDialog(igreja: Igreja) {
    this.igrejaSelecionada = igreja;
    this.display = true;
  }

}
