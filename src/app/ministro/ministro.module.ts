import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisarMinistroComponent } from './pesquisar-ministro/pesquisar-ministro.component';
import { MatTableModule, MatInputModule, MatToolbarModule, MatMenuModule, MatButtonModule,
   MatIconModule, MatPaginatorModule, MatTooltipModule, MatSelectModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';
import { CadastroMinistroComponent } from './cadastro-ministro/cadastro-ministro.component';

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
    MatSelectModule
  ],
  declarations: [PesquisarMinistroComponent, CadastroMinistroComponent],
  exports: [PesquisarMinistroComponent]
})
export class MinistroModule { }
