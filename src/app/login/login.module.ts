import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login.component';



@NgModule({
  declarations: [ForgetPasswordComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
