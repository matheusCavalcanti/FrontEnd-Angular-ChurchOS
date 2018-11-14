import { Component, OnInit } from '@angular/core';
import { ContaBancaria } from '../shared/model/ContaBancaria.modelo';
import { ContaBancariaService } from '../shared/service/conta-bancaria.service';
import { ToastyService } from 'ng2-toasty/src/toasty.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-conta-bancaria-cadastrar',
  templateUrl: './conta-bancaria-cadastrar.component.html',
  styleUrls: ['./conta-bancaria-cadastrar.component.css']
})
export class ContaBancariaCadastrarComponent implements OnInit {
  
  conta = new ContaBancaria();
  tipoConta: Tipo[] = [
    { value: 'Conta corrente', view: 'Conta corrente' },
    { value: 'Conta poupança', view: 'Conta poupança' },
    { value: 'Caixa', view: 'Caixa' },
    { value: 'Outro', view: 'Outro' },
  ];

  constructor(
    private router: Router,
    private contaService: ContaBancariaService,
    private toasty: ToastyService,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService
  ) { }

  ngOnInit() {
    const idConta = this.route.snapshot.params['id'];

    if (idConta) {
      this.carregarConta(idConta);
    }
  }

  get editando() {
    return Boolean(this.conta.id);
  }

  carregarConta(id: number) {
    this.contaService.buscarPeloId(id)
      .then(conta => {
        this.conta = conta;
      });
  }

  salvar() {
    this.contaService.adicionar(this.conta)
      .then(() => {
        this.toasty.success('Conta Bancária adicionada com sucesso!');

        this.conta = new ContaBancaria();
        this.router.navigate(['/conta-bancaria']);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}

export interface Tipo {
  value: string;
  view: string;
}
