import { Component, Input } from '@angular/core';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'churchos';

  constructor(
      private toastyConfig: ToastyConfig,
      private router: Router
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
