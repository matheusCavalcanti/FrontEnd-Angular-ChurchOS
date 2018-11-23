import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioCadastrarComponent } from './usuario-cadastrar/usuario-cadastrar.component';
import { MatTableModule, MatInputModule, MatToolbarModule, MatMenuModule, MatButtonModule, 
  MatIconModule, MatPaginatorModule, MatTooltipModule, MatSelectModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from './usuario.service';

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
  declarations: [UsuarioCadastrarComponent],
  exports: [UsuarioCadastrarComponent],
  providers: [UsuarioService]
})
export class UsuarioModule { }
