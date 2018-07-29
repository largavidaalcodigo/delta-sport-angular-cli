import { ClientesService } from './../../services/clientes.service';
import { PedidosService } from './../../services/pedidos.service';
import { SharedModule } from './../../shared/shared.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { pedidosRouter } from './pedidos.router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosComponent } from './pedidos.component';
import { RouterModule, Routes } from '@angular/router';
import { FormPedidoComponent } from './form-pedido/form-pedido.component';
/* const pedidosRoutes: Routes = [
  {path: '', component: PedidosComponent},
  {path: 'formPedido', component: FormPedidoComponent}
]; */

@NgModule({
  imports: [
    pedidosRouter,
    RouterModule,
    CommonModule,
    FormsModule,
    HttpModule,
    SharedModule
  ],
  providers: [
    PedidosService,
    ClientesService
  ],
  declarations: [PedidosComponent, FormPedidoComponent]
})
export class PedidosModule {}
