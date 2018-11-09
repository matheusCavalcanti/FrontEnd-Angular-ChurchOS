import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastyModule } from 'ng2-toasty';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import 'hammerjs'; 
import {NgxMaskModule} from 'ngx-mask';

import { DashboardModule } from './dashboard/dashboard.module';
import { MusicaModule } from './musica/musica.module';
import { PesquisarMusicasComponent } from './musica/pesquisar-musicas/pesquisar-musicas.component';
import { CadastrarMusicaComponent } from './musica/cadastrar-musica/cadastrar-musica.component';
import { IgrejaModule } from './igreja/igreja.module';
import { PesquisarIgrejaComponent } from './igreja/pesquisar-igreja/pesquisar-igreja.component';
import { CadastrarIgrejaComponent } from './igreja/cadastrar-igreja/cadastrar-igreja.component';
import { PessoaModule } from './pessoa/pessoa.module';
import { PesquisarPessoasComponent } from './pessoa/pesquisar-pessoas/pesquisar-pessoas.component';
import { CadastrarPessoaComponent } from './pessoa/cadastrar-pessoa/cadastrar-pessoa.component';
import { MatDatepickerModule, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material';
import { PesquisarMinistroComponent } from './ministro/pesquisar-ministro/pesquisar-ministro.component';
import { MinistroModule } from './ministro/ministro.module';
import { CadastroMinistroComponent } from './ministro/cadastro-ministro/cadastro-ministro.component';
import { PesquisarCelulasComponent } from './celula/pesquisar-celulas/pesquisar-celulas.component';
import { CelulaModule } from './celula/celula.module';
import { CadastrarCelulaComponent } from './celula/cadastrar-celula/cadastrar-celula.component';
import { EscalaLouvorModule } from './escala-louvor/escala-louvor.module';
import { PesquisarEscalaLouvorComponent } from './escala-louvor/pesquisar-escala-louvor/pesquisar-escala-louvor.component';
import { CadastrarEscalaLouvorComponent } from './escala-louvor/cadastrar-escala-louvor/cadastrar-escala-louvor.component';

const routes: Routes = [
  { path: 'musicas', component: PesquisarMusicasComponent },
  { path: 'musicas/nova', component: CadastrarMusicaComponent },
  { path: 'musicas/:id', component: CadastrarMusicaComponent },
  { path: 'igrejas', component: PesquisarIgrejaComponent },
  { path: 'igrejas/nova', component: CadastrarIgrejaComponent },
  { path: 'igrejas/:id', component: CadastrarIgrejaComponent },
  { path: 'pessoas', component: PesquisarPessoasComponent },
  { path: 'pessoas/nova', component: CadastrarPessoaComponent },
  { path: 'pessoas/:id', component: CadastrarPessoaComponent },
  { path: 'ministros', component: PesquisarMinistroComponent },
  { path: 'ministros/novo', component: CadastroMinistroComponent },
  { path: 'ministros/:id', component: CadastroMinistroComponent },
  { path: 'celulas', component: PesquisarCelulasComponent },
  { path: 'celulas/nova', component: CadastrarCelulaComponent },
  { path: 'celulas/:id', component: CadastrarCelulaComponent },
  { path: 'escala-louvor', component: PesquisarEscalaLouvorComponent },
  { path: 'escala-louvor/nova', component: CadastrarEscalaLouvorComponent },
  { path: 'escala-louvor/:id', component: CadastrarEscalaLouvorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ConfirmDialogModule,
    ToastyModule.forRoot(),
    NgxMaskModule,

    MatDatepickerModule,
    MatNativeDateModule,
    
    DashboardModule,
    MusicaModule,
    IgrejaModule,
    PessoaModule,
    MinistroModule,
    CelulaModule,
    EscalaLouvorModule
  ],
  providers: [ConfirmationService, {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
