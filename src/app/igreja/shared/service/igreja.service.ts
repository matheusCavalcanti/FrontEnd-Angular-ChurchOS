import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Igreja } from '../model/Igreja.modelo';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class IgrejaService {

  private igrejaUrl = 'http://localhost:8080/igrejas';

  constructor(
    private http: Http
  ) { }

  public pesquisar(): Promise<Igreja[]> {
    return this.http.get(`${this.igrejaUrl}`)
    .toPromise()
    .then(response => response.json());
  }

  adicionar(igreja: Igreja): Promise<Igreja> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // console.log(JSON.stringify(musica));

    return this.http.post(this.igrejaUrl, 
        JSON.stringify(igreja), { headers })
      .toPromise()
      .then(response => response.json());
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.igrejaUrl}/${id}`)
      .toPromise()
      .then(response => null);
  }

  atualizar(igreja: Igreja): Promise<Igreja> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.igrejaUrl}/${igreja.id}`,
        JSON.stringify(igreja), { headers })
      .toPromise()
      .then(response => {
        const musicaAlterada = response.json() as Igreja;

        return musicaAlterada;
      });
  }

  buscarPeloId(id: number): Promise<Igreja> {
    return this.http.get(`${this.igrejaUrl}/${id}`)
      .toPromise()
      .then(response => {
        const igreja = response.json() as Igreja;

        return igreja;
      });
  }


}
