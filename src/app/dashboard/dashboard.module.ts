import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TelaComponent } from './tela/tela.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatCardModule, MatTableModule, MatInputModule, MatPaginatorModule, MatTooltipModule } from '@angular/material';
import { InicioComponent } from './inicio/inicio.component';
import {ChartModule} from 'primeng/components/chart/chart';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    ChartModule,
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
  declarations: [TelaComponent, InicioComponent, TelaLoginComponent],
  exports: [TelaComponent, InicioComponent, TelaLoginComponent]
})
export class DashboardModule { }
