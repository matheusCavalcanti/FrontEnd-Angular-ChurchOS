import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Fornecedor } from '../model/Fornecedor.modelo';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  private fornecedorUrl = 'http://localhost:8080/fornecedor';

  constructor(
    private http: Http
  ) { }

  public pesquisar(): Promise<Fornecedor[]> {
    return this.http.get(`${this.fornecedorUrl}`)
    .toPromise()
    .then(response => response.json());
  }

  adicionar(fornecedor: Fornecedor): Promise<Fornecedor> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // console.log(JSON.stringify(musica));

    return this.http.post(this.fornecedorUrl, 
        JSON.stringify(fornecedor), { headers })
      .toPromise()
      .then(response => response.json());
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.fornecedorUrl}/${id}`)
      .toPromise()
      .then(response => null);
  }

  atualizar(fornecedor: Fornecedor): Promise<Fornecedor> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.fornecedorUrl}/${fornecedor.id}`,
        JSON.stringify(fornecedor), { headers })
      .toPromise()
      .then(response => {
        const fornecedorAlterado = response.json() as Fornecedor;

        return fornecedorAlterado;
      });
  }

  buscarPeloId(id: number): Promise<Fornecedor> {
    return this.http.get(`${this.fornecedorUrl}/${id}`)
      .toPromise()
      .then(response => {
        const fornecedor = response.json() as Fornecedor;

        return fornecedor;
      });
  }

}
