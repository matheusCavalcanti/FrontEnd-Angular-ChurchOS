import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ToastyModule } from 'ng2-toasty';
import { ErrorHandlerService } from './error-handler.service';

@NgModule({
  imports: [
    CommonModule,
    ConfirmDialogModule,
    ToastyModule.forRoot(),
  ],
  declarations: [],
  exports: [ToastyModule, ConfirmDialogModule],
  providers: [ErrorHandlerService]
})
export class CoreModule { }
