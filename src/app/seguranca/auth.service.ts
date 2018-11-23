import { Injectable, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { JwtHelper } from 'angular2-jwt';
import { Usuario } from '../usuario/shared/model/Usuario.modelo';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  private oauthTokenUrl = 'http://localhost:8080/oauth/token';
  public jwtPayload: any;
  public usuario: Usuario;
  private usuarios: Usuario[] = [];

  constructor(
    private http: Http,
    private jwtHelper: JwtHelper,
    private usuarioService: UsuarioService
  ) { 
    this.carregarToken();
    this.carregarUsuarios();
    this.buscarUsuario(this.jwtPayload.user_name);
  }
  
  ngOnInit() {
    if (this.usuario === null) {
      this.buscarUsuario(this.jwtPayload.user_name);
    }
  }

  login(usuario: string, senha: string): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic YW5ndWxhcjpAbmd1bGFy');
    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    return this.http.post(this.oauthTokenUrl, body, { headers })
      .toPromise()
      .then(response => {
        this.armazenarToken(response.json().access_token);
      })
      .catch(response => {
        if (response.status === 400) {
          const responseJson = response.json();

          if (responseJson === 'invalid_grant') {
            return Promise.reject('Usuário ou senha inválidos!!!!!!');
          }
        }

        return Promise.reject(response);
      });
  }

  private armazenarToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
    this.buscarUsuario(this.jwtPayload.user_name);
  }

  private carregarToken() {
    const token = localStorage.getItem('token');

    if (token) {
      this.armazenarToken(token);
    }
  }

  carregarUsuarios() {
    this.usuarioService.pesquisar()
      .then(usuarios => {
        this.usuarios = usuarios;
      });
  }

  buscarUsuario(username: string) {
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].email === username) {
        this.usuario = this.usuarios[i];
        console.log(this.usuario);
      }
    }
  }

}
