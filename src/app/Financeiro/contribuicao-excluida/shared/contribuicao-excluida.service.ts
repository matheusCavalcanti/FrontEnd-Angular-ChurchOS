import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ContribuicaoExcluida } from './ContribuicaoExcluida.modelo';

@Injectable({
  providedIn: 'root'
})
export class ContribuicaoExcluidaService {

  private contribExcluidaUrl = 'http://localhost:8080/contribuicao-excluida';

  constructor(
    private http: Http
  ) { }

  public listarTodas(): Promise<ContribuicaoExcluida[]> {
    return this.http.get(`${this.contribExcluidaUrl}`)
      .toPromise()
      .then(response => response.json());
  }

  remover(id: number): Promise<void> {
    return this.http.delete(`${this.contribExcluidaUrl}/${id}`)
      .toPromise()
      .then(response => null);
  }

}
