import { PedidosComponent } from './pedidos.component';
import { RouterModule, Routes } from '@angular/router';
/* import { SharedModule } from '../../shared/shared.module';
import { FormPedidoComponent } from './form-pedido/form-pedido.component';
 */
const PEDIDOS_ROUTER: Routes = [
  {path: '', component: PedidosComponent},
];

export const pedidosRouter = RouterModule.forChild(PEDIDOS_ROUTER);
