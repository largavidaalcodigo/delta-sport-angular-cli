import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PedidosComponent} from './pedidos.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {FormPedidoComponent} from './form-pedido/form-pedido.component';

export const pedidosRoutes: Routes = [
  {
    path: '',
    component: PedidosComponent
  },
  {
    path: 'addPedido',
    component: FormPedidoComponent
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pedidosRoutes),
    SharedModule
  ],
  declarations: [PedidosComponent, FormPedidoComponent]
})
export class PedidosModule {
}
