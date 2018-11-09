import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material';
import { MusicaService } from '../shared/service/musica.service';
import { Musica } from '../shared/model/Musica.modelo';
import { ToastyService } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

@Component({
  selector: 'app-pesquisar-musicas',
  templateUrl: './pesquisar-musicas.component.html',
  styleUrls: ['./pesquisar-musicas.component.css']
})
export class PesquisarMusicasComponent implements OnInit {
  
  musicasRecebidas = [];
  dataSource = new MatTableDataSource();

  colunas: string[] = ['descricao', 'nomeOriginal', 'banda', 'tom', 'acoes'];
  // displayedColumns: string[] = ['descricao', 'nomeOriginal', 'banda', 'tom', 'acoes'];
 
  
  @ViewChild('tabela') grid;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private musicaService: MusicaService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService
    ) {}
    
    
    ngOnInit() {
      this.pesquisar();   
      console.log(this.dataSource);
      console.log(this.musicasRecebidas);
    }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  pesquisar() {
    this.musicaService.pesquisar()
      .then(musicas => {
        this.musicasRecebidas = musicas;
        this.dataSource = new MatTableDataSource<Musica>(this.musicasRecebidas);
        this.dataSource.paginator = this.paginator;
      });
  }

  confirmarExclusao(musica: number) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(musica);
      }
    });
  }

  excluir(musica: number) {
    this.musicaService.excluir(musica)
      .then(() => {
        this.pesquisar();
        this.grid.firstPage = 0;

        this.toasty.success('Música excluída com sucesso!');
      });
  }

}
