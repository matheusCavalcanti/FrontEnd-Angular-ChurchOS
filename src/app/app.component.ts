import { Component, Input, OnInit } from '@angular/core';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';
import { Router } from '@angular/router';
import { AuthService } from './seguranca/auth.service';
import { Usuario } from './usuario/shared/model/Usuario.modelo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'churchos';
  usuario: Usuario;
  payload: any;

  constructor(
      private toastyConfig: ToastyConfig,
      private router: Router,
    ) {
    this.toastyConfig.theme = 'bootstrap';
  }

  showPainel = false;
  showCelulas = false;
  showPessoas = false;
  showFinanc = false;
  showLouvor = false;
  showConfig = false;
  
  telaLogin() {
    if (this.router.url === '/' || this.router.url === '/usuario/novo' || this.router.url === '/login') {
      return true;
    } else {
      return false;
    }
  }

}
