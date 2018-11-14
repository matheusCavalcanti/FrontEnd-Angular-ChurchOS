import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Despesa } from '../model/Despesa.modelo';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {

  private despesaUrl = 'http://localhost:8080/despesas';

  constructor(
    private http: Http
  ) { }

  public pesquisar(): Promise<Despesa[]> {

    return this.http.get(`${this.despesaUrl}`)
       .toPromise()
       .then(response => response.json());
   }
 
   excluir(id: number): Promise<void> {
     return this.http.delete(`${this.despesaUrl}/${id}`)
       .toPromise()
       .then(response => null);
   }
 
   adicionar(despesa: Despesa): Promise<Despesa> {
     const headers = new Headers();
     headers.append('Content-Type', 'application/json');
     // console.log(JSON.stringify(musica));
 
     return this.http.post(this.despesaUrl, 
         JSON.stringify(despesa), { headers })
       .toPromise()
       .then(response => response.json());
   }
 
   atualizar(despesa: Despesa): Promise<Despesa> {
     const headers = new Headers();
     headers.append('Content-Type', 'application/json');
 
     return this.http.put(`${this.despesaUrl}/${despesa.id}`,
         JSON.stringify(despesa), { headers })
       .toPromise()
       .then(response => {
         const despesaAlterada = response.json() as Despesa;
 
         return despesaAlterada;
       });
   }
 
   buscarPeloId(id: number): Promise<Despesa> {
     return this.http.get(`${this.despesaUrl}/${id}`)
       .toPromise()
       .then(response => {
         const despesa = response.json() as Despesa;
 
         return despesa;
       });
   }
}
