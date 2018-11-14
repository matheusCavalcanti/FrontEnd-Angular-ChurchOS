import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenUrl = 'http://localhost:8080/oauth/token';

  constructor(
    private http: Http
  ) { }

  login(usuario: string, senha: string): Promise<void> {
    const headers = new Headers();
    headers.append('Authorization', 'QG5ndWxhcg==');
    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    return this.http.post(this.oauthTokenUrl, body, { headers })
      .toPromise()
      .then(response => {

      })
      .catch(response => {
        console.log('Erro');
      });
  }

}