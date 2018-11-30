import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TextFieldComponent } from './components/text-field/text-field.component'
import { MsgBoxComponent } from './components/msg-box/msg-box.component'
import { ConfirmCancelBtnGroupComponent } from './components/confirm-cancel-btn-group/confirm-cancel-btn-group.component';

@NgModule({
  declarations: [
    TextFieldComponent,
    MsgBoxComponent,
    ConfirmCancelBtnGroupComponent,
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    TextFieldComponent,
    ConfirmCancelBtnGroupComponent,
    MsgBoxComponent
  ]
})
export class SharedModule { }
