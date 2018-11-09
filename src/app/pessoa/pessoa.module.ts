import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { CadastrarPessoaComponent } from './cadastrar-pessoa/cadastrar-pessoa.component';
import { PesquisarPessoasComponent } from './pesquisar-pessoas/pesquisar-pessoas.component';

import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import {TooltipModule} from 'primeng/tooltip';
import { MatTooltipModule, MatListModule, MatDatepickerModule, MatSelectModule, MatRadioModule } from '@angular/material';
import {DialogModule} from 'primeng/dialog';

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
    FormsModule,
    DialogModule,
    MatListModule,
    MatDatepickerModule,
    MatSelectModule,
    MatRadioModule
  ],
  declarations: [PesquisarPessoasComponent, CadastrarPessoaComponent],
  exports: [PesquisarPessoasComponent, CadastrarPessoaComponent]
})
export class PessoaModule { }
