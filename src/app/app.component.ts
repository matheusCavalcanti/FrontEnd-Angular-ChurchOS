import { Component, Input } from '@angular/core';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'churchos';

  constructor(private toastyConfig: ToastyConfig) {
    this.toastyConfig.theme = 'bootstrap';
  }


}
