import { PedidosComponent } from './pedidos.component';
import { RouterModule, Routes } from '@angular/router';

const PEDIDOS_ROUTER: Routes = [
  {path: '', component: PedidosComponent},
];

export const pedidosRouter = RouterModule.forChild(PEDIDOS_ROUTER);
