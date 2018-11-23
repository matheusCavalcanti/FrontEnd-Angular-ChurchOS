import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Pessoa } from '../model/Pessoa.modelo';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private pessoaUrl = 'http://localhost:8080/pessoas';

  constructor(
    private http: Http
  ) { }

  public pesquisar(): Promise<Pessoa[]> {
    return this.http.get(this.pessoaUrl)
      .toPromise()
      .then(response => response.json());
  }

  adicionar(pessoa: Pessoa): Promise<Pessoa> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.pessoaUrl, 
        JSON.stringify(pessoa), { headers })
      .toPromise()
      .then(response => response.json());
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.pessoaUrl}/${id}`)
      .toPromise()
      .then(response => null);
  }

  atualizar(pessoa: Pessoa): Promise<Pessoa> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.pessoaUrl}/${pessoa.id}`,
        JSON.stringify(pessoa), { headers })
      .toPromise()
      .then(response => {
        const pessoaAlterada = response.json() as Pessoa;

        return pessoaAlterada;
      });
  }

  buscarPeloId(id: number): Promise<Pessoa> {
    return this.http.get(`${this.pessoaUrl}/${id}`)
      .toPromise()
      .then(response => {
        const pessoa = response.json() as Pessoa;

        return pessoa;
      });
  }

}
