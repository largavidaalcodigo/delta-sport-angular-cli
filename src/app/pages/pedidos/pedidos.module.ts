import { FormModulosComponent } from './form-modulos/form-modulos.component';
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
import { TallasPedidosComponent } from './tallas-pedidos/tallas-pedidos.component';
import { FtPedidosComponent } from './ft-pedidos/ft-pedidos.component';
/* import {AccordionLinkDirective} from '../../shared/accordion/accordionlink.directive';
import {AccordionDirective} from '../../shared/accordion/accordion.directive';
import {AccordionAnchorDirective} from '../../shared/accordion/accordionanchor.directive';
 */
export const pedidosRoutes: Routes = [
  {path: '', component: PedidosComponent},
  {path: 'formPedido/:tipoForm', component: FormPedidoComponent},
  {path: 'formPedido/:tipoForm/:id', component: FormPedidoComponent},
  {path: 'formTallas/:id', component: TallasPedidosComponent},
  {path: 'formTallas/:tipoForm/:id', component: TallasPedidosComponent},
  {path: 'formFichaTecnica/:id', component: FtPedidosComponent},
  {path: 'formFichaTecnica/:tipoForm/:id', component: FtPedidosComponent},
  {path: 'formModulos/:modulo/:id', component: FormModulosComponent},
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
  declarations: [
    PedidosComponent,
    FormPedidoComponent,
    FileUploadComponent,
    TallasPedidosComponent,
    FtPedidosComponent,
    FormModulosComponent,

/*     AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
 */]
})
export class PedidosModule {}

