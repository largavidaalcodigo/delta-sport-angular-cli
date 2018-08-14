import { ClientesService } from '../../services/clientes.service';
import { PedidosService } from '../../services/pedidos.service';
import { SharedModule } from '../../shared/shared.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { pedidosRouter } from './pedidos.router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosComponent } from './pedidos.component';
import { RouterModule, Routes } from '@angular/router';
import { FormPedidoComponent } from './form-pedido/form-pedido.component';
import { FileUploadComponent } from '../../file-upload/file-upload.component';
import { FormPedidoModule } from './form-pedido/form-pedido.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

export const pedidosRoutes: Routes = [
  {path: '', component: PedidosComponent},
  {path: 'formPedido/:tipoForm', component: FormPedidoComponent},
  {path: 'formPedido/:tipoForm/:id', component: FormPedidoComponent}
];

@NgModule({
  imports: [
    pedidosRouter,
    RouterModule,
    CommonModule,
    FormsModule,
    HttpModule,
    SharedModule,
    FormPedidoModule,
    NgbModule,
    RouterModule.forChild(pedidosRoutes),
  ],
  providers: [
    PedidosService,
    ClientesService
  ],
  declarations: [PedidosComponent, FormPedidoComponent, FileUploadComponent]
})
export class PedidosModule {}

