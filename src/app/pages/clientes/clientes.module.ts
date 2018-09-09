import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { clientesRouter } from './clientes.router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { FormClienteComponent } from './form-cliente/form-cliente.component';
import { ClientesService } from '../../services/clientes.service';
import { HttpModule } from '@angular/http';
import { FormClienteModule } from './form-cliente/form-cliente.module';

export const clientesRoutes: Routes = [
  {path: '', component: ClientesComponent},
  {path: 'formCliente/:tipoForm', component: FormClienteComponent},
  {path: 'formCliente/:tipoForm/:id', component: FormClienteComponent}
];

@NgModule({
  imports: [
    clientesRouter,
    CommonModule,
    FormsModule,
    SharedModule,
    HttpModule,
    NgbModule,
    FormClienteModule,
    RouterModule.forChild(clientesRoutes)
  ],
  providers: [ClientesService],
  declarations: [
    ClientesComponent,
    FormClienteComponent
  ]
})
export class ClientesModule {}
