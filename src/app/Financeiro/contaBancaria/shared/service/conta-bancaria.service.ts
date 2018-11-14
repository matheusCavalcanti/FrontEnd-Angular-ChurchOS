import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ContaBancaria } from '../model/ContaBancaria.modelo';

@Injectable({
  providedIn: 'root'
})
export class ContaBancariaService {

  private contaUrl = 'http://localhost:8080/conta-bancaria';

  constructor(
    private http: Http
  ) { }

  public pesquisar(): Promise<ContaBancaria[]> {

    return this.http.get(`${this.contaUrl}`)
       .toPromise()
       .then(response => response.json());
   }
 
   excluir(id: number): Promise<void> {
     return this.http.delete(`${this.contaUrl}/${id}`)
       .toPromise()
       .then(response => null);
   }
 
   adicionar(conta: ContaBancaria): Promise<ContaBancaria> {
     const headers = new Headers();
     headers.append('Content-Type', 'application/json');
     // console.log(JSON.stringify(musica));
 
     return this.http.post(this.contaUrl, 
         JSON.stringify(conta), { headers })
       .toPromise()
       .then(response => response.json());
   }
 
   atualizar(conta: ContaBancaria): Promise<ContaBancaria> {
     const headers = new Headers();
     headers.append('Content-Type', 'application/json');
 
     return this.http.put(`${this.contaUrl}/${conta.id}`,
         JSON.stringify(conta), { headers })
       .toPromise()
       .then(response => {
         const contaAlterada = response.json() as ContaBancaria;
 
         return contaAlterada;
       });
   }
 
   buscarPeloId(id: number): Promise<ContaBancaria> {
     return this.http.get(`${this.contaUrl}/${id}`)
       .toPromise()
       .then(response => {
         const conta = response.json() as ContaBancaria;
 
         return conta;
       });
   }
 

}
