import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { CategoriaFinanc } from '../model/CategoriaFinanc.modelo';

@Injectable({
  providedIn: 'root'
})
export class CategoriaFinancService {

  private categoriaUrl = 'http://localhost:8080/categoria-financeiro';

  constructor(
    private http: Http
  ) { }

  public pesquisar(): Promise<CategoriaFinanc[]> {

    return this.http.get(`${this.categoriaUrl}`)
       .toPromise()
       .then(response => response.json());
   }
 
   excluir(id: number): Promise<void> {
     return this.http.delete(`${this.categoriaUrl}/${id}`)
       .toPromise()
       .then(response => null);
   }
 
   adicionar(categoria: CategoriaFinanc): Promise<CategoriaFinanc> {
     const headers = new Headers();
     headers.append('Content-Type', 'application/json');
     // console.log(JSON.stringify(musica));
 
     return this.http.post(this.categoriaUrl, 
         JSON.stringify(categoria), { headers })
       .toPromise()
       .then(response => response.json());
   }
 
   atualizar(categoria: CategoriaFinanc): Promise<CategoriaFinanc> {
     const headers = new Headers();
     headers.append('Content-Type', 'application/json');
 
     return this.http.put(`${this.categoriaUrl}/${categoria.id}`,
         JSON.stringify(categoria), { headers })
       .toPromise()
       .then(response => {
         const categoriaAlterada = response.json() as CategoriaFinanc;
 
         return categoriaAlterada;
       });
   }
 
   buscarPeloId(id: number): Promise<CategoriaFinanc> {
     return this.http.get(`${this.categoriaUrl}/${id}`)
       .toPromise()
       .then(response => {
         const categoria = response.json() as CategoriaFinanc;
 
         return categoria;
       });
   }
 

}
