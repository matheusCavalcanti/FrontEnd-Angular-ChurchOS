import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Usuario } from './shared/model/Usuario.modelo';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioUrl = 'http://localhost:8080/usuario';

  constructor(
    private http: Http
  ) { }

  public pesquisar(): Promise<Usuario[]> {
    return this.http.get(this.usuarioUrl)
      .toPromise()
      .then(response => response.json());
  }

  adicionar(usuario: Usuario): Promise<Usuario> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.usuarioUrl, 
        JSON.stringify(usuario), { headers })
      .toPromise()
      .then(response => response.json());
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.usuarioUrl}/${id}`)
      .toPromise()
      .then(response => null);
  }

  atualizar(usuario: Usuario): Promise<Usuario> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.usuarioUrl}/${usuario.id}`,
        JSON.stringify(usuario), { headers })
      .toPromise()
      .then(response => {
        const usuarioAlt = response.json() as Usuario;

        return usuarioAlt;
      });
  }

  buscarPeloId(id: number): Promise<Usuario> {
    return this.http.get(`${this.usuarioUrl}/${id}`)
      .toPromise()
      .then(response => {
        const usuario = response.json() as Usuario;

        return usuario;
      });
  }
}
