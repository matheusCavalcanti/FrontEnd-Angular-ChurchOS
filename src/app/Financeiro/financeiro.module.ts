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
import { CategoriaFinancPesquisarComponent } from 
'../Financeiro/categoria-financeiro/categoria-financ-pesquisar/categoria-financ-pesquisar.component';
import { CategoriaFinancCadastrarComponent } from 
'../Financeiro/categoria-financeiro/categoria-financ-cadastrar/categoria-financ-cadastrar.component';
import { FornecedorPesquisarComponent } from '../Financeiro/fornecedor/fornecedor-pesquisar/fornecedor-pesquisar.component';
import { FornecedorCadastrarComponent } from '../Financeiro/fornecedor/fornecedor-cadastrar/fornecedor-cadastrar.component';
import { DespesaPesquisarComponent } from '../Financeiro/despesas/despesa-pesquisar/despesa-pesquisar.component';
import { ContaBancariaPesquisarComponent } from '../Financeiro/contaBancaria/conta-bancaria-pesquisar/conta-bancaria-pesquisar.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ContaBancariaCadastrarComponent } from '../Financeiro/contaBancaria/conta-bancaria-cadastrar/conta-bancaria-cadastrar.component';
import { DespesaCadastrarComponent } from '../Financeiro/despesas/despesa-cadastrar/despesa-cadastrar.component';
import { ContribuicaoPesquisarComponent } from '../Financeiro/contribuicao/contribuicao-pesquisar/contribuicao-pesquisar.component';
import { ContribuicaoCadastrarComponent } from '../Financeiro/contribuicao/contribuicao-cadastrar/contribuicao-cadastrar.component';
import { ContribuicaoExcluidaPesquisarComponent } from '../Financeiro/contribuicao-excluida/contribuicao-excluida-pesquisar/contribuicao-excluida-pesquisar.component';

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
    PickListModule,
    CurrencyMaskModule
  ],
  declarations: [CategoriaFinancPesquisarComponent, CategoriaFinancCadastrarComponent, FornecedorPesquisarComponent, 
    FornecedorCadastrarComponent, DespesaPesquisarComponent, ContaBancariaPesquisarComponent, 
    ContaBancariaCadastrarComponent, DespesaCadastrarComponent, ContribuicaoPesquisarComponent, 
    ContribuicaoCadastrarComponent, ContribuicaoExcluidaPesquisarComponent
    ],
  exports: [CategoriaFinancPesquisarComponent, CategoriaFinancCadastrarComponent, FornecedorPesquisarComponent, 
    FornecedorCadastrarComponent, ContaBancariaPesquisarComponent, ContaBancariaCadastrarComponent, DespesaPesquisarComponent,
    DespesaCadastrarComponent]
})
export class FinanceiroModule { }
