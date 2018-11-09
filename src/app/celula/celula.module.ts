import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisarCelulasComponent } from './pesquisar-celulas/pesquisar-celulas.component';
import { CadastrarCelulaComponent } from './cadastrar-celula/cadastrar-celula.component';
import { MatTableModule, MatInputModule, MatToolbarModule, MatMenuModule, MatButtonModule, 
  MatIconModule, MatPaginatorModule, MatTooltipModule, MatListModule, MatDatepickerModule, MatSelectModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {MatCardModule} from '@angular/material/card';
import {PickListModule} from 'primeng/picklist';

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
  declarations: [PesquisarCelulasComponent, CadastrarCelulaComponent],
  exports: [PesquisarCelulasComponent, CadastrarCelulaComponent]
})
export class CelulaModule { }
