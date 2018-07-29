import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PedidosComponent } from './pedidos.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { FormPedidoComponent } from './form-pedido/form-pedido.component';
import { HttpModule } from '@angular/http';
import { PedidosService } from '../../services/pedidos.service';
import { ClientesService } from '../../services/clientes.service';
import { FilterDataPipe } from './form-pedido/filterdata.pipe';

export const pedidosRoutes: Routes = [
  {
    path: '',
    component: PedidosComponent,
    children: [
    {
      path: '/nuevo',
      component: FormPedidoComponent
    }
  ]
}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forChild(pedidosRoutes),
    SharedModule
  ],
  providers: [
    PedidosService,
    ClientesService
  ],
  declarations: [
    PedidosComponent,
    FormPedidoComponent,
    FilterDataPipe
  ]
})
export class PedidosModule {}
