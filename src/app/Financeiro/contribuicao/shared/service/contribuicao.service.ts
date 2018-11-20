import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Contribuicao } from '../model/Contribuicao.modelo';

@Injectable({
  providedIn: 'root'
})
export class ContribuicaoService {

  private contribUrl = 'http://localhost:8080/contribuicao';

  constructor(
    private http: Http
  ) { }

  public pesquisar(): Promise<Contribuicao[]> {

    return this.http.get(`${this.contribUrl}`)
       .toPromise()
       .then(response => response.json());
   }
 
   excluir(contrib: Contribuicao): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

      return this.http.put(`${this.contribUrl}/excluir/${contrib.id}`,
       JSON.stringify(contrib), { headers })
       .toPromise()
       .then(response => null);
   }
 
   adicionar(contrib: Contribuicao): Promise<Contribuicao> {
     const headers = new Headers();
     headers.append('Content-Type', 'application/json');
 
     return this.http.post(this.contribUrl, 
         JSON.stringify(contrib), { headers })
       .toPromise()
       .then(response => response.json());
   }
 
   atualizar(contrib: Contribuicao): Promise<Contribuicao> {
     const headers = new Headers();
     headers.append('Content-Type', 'application/json');
 
     return this.http.put(`${this.contribUrl}/${contrib.id}`,
         JSON.stringify(contrib), { headers })
       .toPromise()
       .then(response => {
         const contribAlterada = response.json() as Contribuicao;
 
         return contribAlterada;
       });
   }
 
   buscarPeloId(id: number): Promise<Contribuicao> {
     return this.http.get(`${this.contribUrl}/${id}`)
       .toPromise()
       .then(response => {
         const contrib = response.json() as Contribuicao;
 
         return contrib;
       });
   }


}
