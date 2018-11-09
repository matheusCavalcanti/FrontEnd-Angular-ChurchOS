import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Ministro } from '../model/ministro.modelo';

@Injectable({
  providedIn: 'root'
})
export class MinistroService {

  private ministroUrl = 'http://localhost:8080/ministros';

  constructor(
    private http: Http
    ) { }

  public pesquisar(): Promise<Ministro[]> {

   return this.http.get(`${this.ministroUrl}`)
      .toPromise()
      .then(response => response.json());
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.ministroUrl}/${id}`)
      .toPromise()
      .then(response => null);
  }

  adicionar(ministro: Ministro): Promise<Ministro> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // console.log(JSON.stringify(musica));

    return this.http.post(this.ministroUrl, 
        JSON.stringify(ministro), { headers })
      .toPromise()
      .then(response => response.json());
  }

  atualizar(ministro: Ministro): Promise<Ministro> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.ministroUrl}/${ministro.id}`,
        JSON.stringify(ministro), { headers })
      .toPromise()
      .then(response => {
        const ministroAlterado = response.json() as Ministro;

        return ministroAlterado;
      });
  }

  buscarPeloId(id: number): Promise<Ministro> {
    return this.http.get(`${this.ministroUrl}/${id}`)
      .toPromise()
      .then(response => {
        const musica = response.json() as Ministro;

        return musica;
      });
  }

}
