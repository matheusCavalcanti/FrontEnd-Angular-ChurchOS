import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/pessoa/shared/model/Pessoa.modelo';
import { PessoaService } from 'src/app/pessoa/shared/service/pessoa.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  data: any;
  pessoas: Pessoa[] = [];
  totalHomens = 0;
  totalMulheres = 0;

  ngOnInit() {
    this.carregarPessoas();
    this.somarPessoas();
    this.grafico();
  }

  constructor(
    private pessoaService: PessoaService,
    private errorHandler: ErrorHandlerService
  ) { }

  grafico() {
    this.data = {
      labels: ['Homens', 'Mulheres'],
      datasets: [
        {
          data: [this.totalHomens, this.totalMulheres],
          backgroundColor: [
            '#FF6384',
            '#36A2EB'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB'
          ]
        }]
    };
  }

  carregarPessoas() {
    this.pessoaService.pesquisar()
      .then(pessoas => {
        this.pessoas = pessoas;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  somarPessoas() {
    for (let i = 0; i < this.pessoas.length; i++) {
      if (this.pessoas[i].sexo === 'MASCULINO') {
        this.totalHomens = this.totalHomens + 1;
      } else {
        this.totalMulheres = this.totalMulheres + 1;
      }
    }
  }

}
