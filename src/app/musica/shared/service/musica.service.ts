import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Musica } from '../model/Musica.modelo';
import 'rxjs/add/operator/toPromise';

export interface MusicaFiltro {
  descricao: string;
}

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

 private musicasUrl = 'http://localhost:8080/musicas';

  constructor(
    private http: Http
    ) { }

  public pesquisar(): Promise<Musica[]> {

   return this.http.get(`${this.musicasUrl}`)
      .toPromise()
      .then(response => response.json());
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.musicasUrl}/${id}`)
      .toPromise()
      .then(response => null);
  }

  adicionar(musica: Musica): Promise<Musica> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // console.log(JSON.stringify(musica));

    return this.http.post(this.musicasUrl, 
        JSON.stringify(musica), { headers })
      .toPromise()
      .then(response => response.json());
  }

  atualizar(musica: Musica): Promise<Musica> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.musicasUrl}/${musica.id}`,
        JSON.stringify(musica), { headers })
      .toPromise()
      .then(response => {
        const musicaAlterada = response.json() as Musica;

        return musicaAlterada;
      });
  }

  buscarPeloId(id: number): Promise<Musica> {
    return this.http.get(`${this.musicasUrl}/${id}`)
      .toPromise()
      .then(response => {
        const musica = response.json() as Musica;

        return musica;
      });
  }

}
