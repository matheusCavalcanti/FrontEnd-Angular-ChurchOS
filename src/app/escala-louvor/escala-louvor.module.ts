import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatInputModule, MatToolbarModule, MatMenuModule, 
  MatButtonModule, MatIconModule, MatPaginatorModule, MatTooltipModule, MatListModule, 
  MatDatepickerModule, MatSelectModule, MatCardModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PickListModule } from 'primeng/picklist';
import { PesquisarEscalaLouvorComponent } from './pesquisar-escala-louvor/pesquisar-escala-louvor.component';
import { CadastrarEscalaLouvorComponent } from './cadastrar-escala-louvor/cadastrar-escala-louvor.component';

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
    DataViewModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    MatCardModule,
    PickListModule
  ],
  declarations: [PesquisarEscalaLouvorComponent, CadastrarEscalaLouvorComponent],
  exports: [PesquisarEscalaLouvorComponent, CadastrarEscalaLouvorComponent]
})
export class EscalaLouvorModule { }
