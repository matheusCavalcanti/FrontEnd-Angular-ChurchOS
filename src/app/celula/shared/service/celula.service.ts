import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Celula } from '../model/Celula.modelo';

@Injectable({
  providedIn: 'root'
})
export class CelulaService {

  private celulaUrl = 'http://localhost:8080/celulas';

  constructor(
    private http: Http
  ) { }

  public pesquisar(): Promise<Celula[]> {
    return this.http.get(`${this.celulaUrl}`)
      .toPromise()
      .then(response => response.json());
  }

  adicionar(celula: Celula): Promise<Celula> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // console.log(JSON.stringify(musica));

    return this.http.post(this.celulaUrl, 
        JSON.stringify(celula), { headers })
      .toPromise()
      .then(response => response.json());
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.celulaUrl}/${id}`)
      .toPromise()
      .then(response => null);
  }

  atualizar(celula: Celula): Promise<Celula> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.celulaUrl}/${celula.id}`,
        JSON.stringify(celula), { headers })
      .toPromise()
      .then(response => {
        const celulaAlterada = response.json() as Celula;

        return celulaAlterada;
      });
  }

  buscarPeloId(id: number): Promise<Celula> {
    return this.http.get(`${this.celulaUrl}/${id}`)
      .toPromise()
      .then(response => {
        const celula = response.json() as Celula;

        return celula;
      });
  }

}
