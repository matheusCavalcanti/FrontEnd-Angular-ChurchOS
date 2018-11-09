import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { EscalaLouvor } from '../model/EscalaLouvor.modelo';

@Injectable({
  providedIn: 'root'
})
export class EscalaLouvorService {

  private escalaUrl = 'http://localhost:8080/escala-louvor';

  constructor(
    private http: Http
  ) { }

  public pesquisar(): Promise<EscalaLouvor[]> {
    return this.http.get(`${this.escalaUrl}`)
      .toPromise()
      .then(response => response.json());
  }

  adicionar(escalaLouvor: EscalaLouvor): Promise<EscalaLouvor> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // console.log(JSON.stringify(musica));

    return this.http.post(this.escalaUrl, 
        JSON.stringify(escalaLouvor), { headers })
      .toPromise()
      .then(response => response.json());
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.escalaUrl}/${id}`)
      .toPromise()
      .then(response => null);
  }

  atualizar(escalaLouvor: EscalaLouvor): Promise<EscalaLouvor> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.escalaUrl}/${escalaLouvor.id}`,
        JSON.stringify(escalaLouvor), { headers })
      .toPromise()
      .then(response => {
        const escalaAlterada = response.json() as EscalaLouvor;

        return escalaAlterada;
      });
  }

  buscarPeloId(id: number): Promise<EscalaLouvor> {
    return this.http.get(`${this.escalaUrl}/${id}`)
      .toPromise()
      .then(response => {
        const escalaLouvor = response.json() as EscalaLouvor;

        return escalaLouvor;
      });
  }

}
