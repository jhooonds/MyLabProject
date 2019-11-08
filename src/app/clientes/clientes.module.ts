import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteAddComponent } from './cliente-add/cliente-add.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { ClienteViewComponent } from './cliente-view/cliente-view.component';



@NgModule({
  declarations: [ClienteAddComponent, ClienteEditComponent, ClienteViewComponent],
  imports: [
    CommonModule
  ]
})
export class ClientesModule { }
