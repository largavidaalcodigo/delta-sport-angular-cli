import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { PedidosComponent } from "./pedidos.component";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { FormPedidoComponent } from "./form-pedido/form-pedido.component";
//import { FormPedidoDetalleComponent } from "./form-pedido-detalle/form-pedido-detalle.component";
import { HttpModule } from "@angular/http";
import { PedidosService } from "../../services/pedidos.service";

export const pedidosRoutes: Routes = [
  {
    path: '',
    component: PedidosComponent
  },
  {
    path: '/nuevo',
    component: FormPedidoComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(pedidosRoutes),
    SharedModule
  ],
  providers: [PedidosService],
  declarations: [PedidosComponent, FormPedidoComponent]
})
export class PedidosModule {}
