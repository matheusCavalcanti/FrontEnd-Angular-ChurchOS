import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ToastyModule } from 'ng2-toasty';
import { ErrorHandlerService } from './error-handler.service';
import { SegurancaModule } from '../seguranca/seguranca.module';

@NgModule({
  imports: [
    CommonModule,
    ConfirmDialogModule,
    ToastyModule.forRoot(),
    SegurancaModule
  ],
  declarations: [],
  exports: [ToastyModule, ConfirmDialogModule, SegurancaModule],
  providers: [ErrorHandlerService]
})
export class CoreModule { }
