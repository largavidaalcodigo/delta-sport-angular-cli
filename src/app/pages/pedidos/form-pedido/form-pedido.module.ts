import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormPedidoComponent } from './form-pedido.component';
import { HttpModule } from '@angular/http';
import { PedidosService } from '../../../services/pedidos.service';
import { ClientesService } from '../../../services/clientes.service';
import { FilterDataPipe } from './filterdata.pipe';

/* export const formPedidoRoutes: Routes = [
  {
    path: '',
    component: FormPedidoComponent
  }
]; */

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
/*   providers: [
    PedidosService,
    ClientesService
  ],
 */  declarations: [
    FormPedidoComponent,
    FilterDataPipe
  ]
})
export class FormPedidoModule {}
