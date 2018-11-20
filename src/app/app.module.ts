import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import 'hammerjs'; 
import {NgxMaskModule} from 'ngx-mask';
import {MatDividerModule} from '@angular/material/divider';

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
import { MatDatepickerModule, MAT_DATE_LOCALE, MatNativeDateModule, MatToolbarModule, MatMenuModule, 
  MatButtonModule, MatIconModule } from '@angular/material';
import { PesquisarMinistroComponent } from './ministro/pesquisar-ministro/pesquisar-ministro.component';
import { MinistroModule } from './ministro/ministro.module';
import { CadastroMinistroComponent } from './ministro/cadastro-ministro/cadastro-ministro.component';
import { PesquisarCelulasComponent } from './celula/pesquisar-celulas/pesquisar-celulas.component';
import { CelulaModule } from './celula/celula.module';
import { CadastrarCelulaComponent } from './celula/cadastrar-celula/cadastrar-celula.component';
import { EscalaLouvorModule } from './escala-louvor/escala-louvor.module';
import { PesquisarEscalaLouvorComponent } from './escala-louvor/pesquisar-escala-louvor/pesquisar-escala-louvor.component';
import { CadastrarEscalaLouvorComponent } from './escala-louvor/cadastrar-escala-louvor/cadastrar-escala-louvor.component';
import { TelaComponent } from './dashboard/tela/tela.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CoreModule } from './core/core.module';
import { CategoriaFinancPesquisarComponent } from 
  './Financeiro/categoria-financeiro/categoria-financ-pesquisar/categoria-financ-pesquisar.component';
import { CategoriaFinancCadastrarComponent } from
  './Financeiro/categoria-financeiro/categoria-financ-cadastrar/categoria-financ-cadastrar.component';
import { FinanceiroModule } from './financeiro/financeiro.module';
import { FornecedorPesquisarComponent } from './Financeiro/fornecedor/fornecedor-pesquisar/fornecedor-pesquisar.component';
import { FornecedorCadastrarComponent } from './Financeiro/fornecedor/fornecedor-cadastrar/fornecedor-cadastrar.component';
import { InicioComponent } from './dashboard/inicio/inicio.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { UsuarioCadastrarComponent } from './usuario/usuario-cadastrar/usuario-cadastrar.component';
import { UsuarioModule } from './usuario/usuario.module';
import { ContaBancariaPesquisarComponent } from './Financeiro/contaBancaria/conta-bancaria-pesquisar/conta-bancaria-pesquisar.component';
import { ContaBancariaCadastrarComponent } from './Financeiro/contaBancaria/conta-bancaria-cadastrar/conta-bancaria-cadastrar.component';
import { DespesaPesquisarComponent } from './Financeiro/despesas/despesa-pesquisar/despesa-pesquisar.component';
import { DespesaCadastrarComponent } from './Financeiro/despesas/despesa-cadastrar/despesa-cadastrar.component';
import { TelaLoginComponent } from './seguranca/tela-login/tela-login.component';
import { ContribuicaoPesquisarComponent } from './Financeiro/contribuicao/contribuicao-pesquisar/contribuicao-pesquisar.component';
import { ContribuicaoCadastrarComponent } from './Financeiro/contribuicao/contribuicao-cadastrar/contribuicao-cadastrar.component';
import { ContribuicaoExcluidaPesquisarComponent } from './Financeiro/contribuicao-excluida/contribuicao-excluida-pesquisar/contribuicao-excluida-pesquisar.component';



const routes: Routes = [
  { path: '', component: TelaComponent },
  { path: 'inicio', component: InicioComponent },
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
  { path: 'categoria-financeiro', component: CategoriaFinancPesquisarComponent },
  { path: 'categoria-financeiro/nova', component: CategoriaFinancCadastrarComponent },
  { path: 'categoria-financeiro/:id', component: CategoriaFinancCadastrarComponent },
  { path: 'fornecedor', component: FornecedorPesquisarComponent },
  { path: 'fornecedor/novo', component:  FornecedorCadastrarComponent},
  { path: 'fornecedor/:id', component:  FornecedorCadastrarComponent},
  { path: 'conta-bancaria', component: ContaBancariaPesquisarComponent },
  { path: 'conta-bancaria/nova', component: ContaBancariaCadastrarComponent },
  { path: 'conta-bancaria/:id', component: ContaBancariaCadastrarComponent },
  { path: 'despesas', component: DespesaPesquisarComponent },
  { path: 'despesas/nova', component: DespesaCadastrarComponent },
  { path: 'despesas/:id', component: DespesaCadastrarComponent },
  { path: 'contribuicao', component: ContribuicaoPesquisarComponent },
  { path: 'contribuicao/nova', component: ContribuicaoCadastrarComponent },
  { path: 'contribuicao/:id', component: ContribuicaoCadastrarComponent },
  { path: 'contribuicao-excluida', component: ContribuicaoExcluidaPesquisarComponent },
  { path: 'usuario/novo', component: UsuarioCadastrarComponent },
  { path: 'login', component: TelaLoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    CurrencyMaskModule,

    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,

    CoreModule,
    DashboardModule,
    MusicaModule,
    IgrejaModule,
    PessoaModule,
    MinistroModule,
    CelulaModule,
    EscalaLouvorModule,
    FinanceiroModule,
    UsuarioModule
  ],
  providers: [ConfirmationService, {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
