import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CadastrarIgrejaComponent } from './cadastrar-igreja/cadastrar-igreja.component';
import { PesquisarIgrejaComponent } from './pesquisar-igreja/pesquisar-igreja.component';

import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import {TooltipModule} from 'primeng/tooltip';
import { MatTooltipModule, MatListModule } from '@angular/material';
import { DialogModule } from 'primeng/components/dialog/dialog';

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
    MatListModule
  ],
  declarations: [CadastrarIgrejaComponent, PesquisarIgrejaComponent],
  exports: [CadastrarIgrejaComponent, PesquisarIgrejaComponent]
})
export class IgrejaModule { }
