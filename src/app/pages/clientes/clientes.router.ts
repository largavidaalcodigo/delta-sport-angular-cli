import { ClientesComponent } from './clientes.component';
import { RouterModule, Routes } from '@angular/router';

const CLIENTES_ROUTER: Routes = [
  {path: '', component: ClientesComponent, pathMatch: 'full'},
];

export const clientesRouter = RouterModule.forChild(CLIENTES_ROUTER);
