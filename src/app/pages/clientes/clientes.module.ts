import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientesComponent} from './clientes.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {FormClienteComponent} from './form-cliente/form-cliente.component';

export const clientesRoutes: Routes = [
  {
    path: '',
    component: ClientesComponent
  },
  {
    path: 'addCliente',
    component: FormClienteComponent
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(clientesRoutes),
    SharedModule
  ],
  declarations: [ClientesComponent, FormClienteComponent]
})
export class ClientesModule {
}
