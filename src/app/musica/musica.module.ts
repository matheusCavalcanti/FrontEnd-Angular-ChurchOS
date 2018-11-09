import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PesquisarMusicasComponent } from './pesquisar-musicas/pesquisar-musicas.component';
import { CadastrarMusicaComponent } from './cadastrar-musica/cadastrar-musica.component';

import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { MusicaService } from './shared/service/musica.service';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import {TooltipModule} from 'primeng/tooltip';
import { MatTooltipModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    HttpModule,
    RouterModule,
    BrowserModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatTooltipModule,
    TooltipModule,
    FormsModule
  ],
  declarations: [PesquisarMusicasComponent, CadastrarMusicaComponent],
  exports: [PesquisarMusicasComponent, CadastrarMusicaComponent],
  providers: [MusicaService]
})
export class MusicaModule { }
