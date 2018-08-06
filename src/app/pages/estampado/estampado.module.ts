import { ClientesService } from '../../services/clientes.service';
import { PedidosService } from '../../services/pedidos.service';
import { SharedModule } from '../../shared/shared.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { estampadoRouter } from './estampado.router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstampadoComponent } from './estampado.component';
import { RouterModule, Routes } from '@angular/router';
import { FormEstampadoComponent } from './form-estampado/form-estampado.component';
import { FormEstampadoModule } from './form-estampado/form-estampado.module';

export const estampadoRoutes: Routes = [
  {path: '', component: EstampadoComponent},
  {path: 'formEstampado/:id', component: FormEstampadoComponent}
];

@NgModule({
  imports: [
    estampadoRouter,
    RouterModule,
    CommonModule,
    FormsModule,
    HttpModule,
    SharedModule,
    FormEstampadoModule,
    RouterModule.forChild(estampadoRoutes),
  ],
  providers: [
    PedidosService,
    ClientesService
  ],
  declarations: [EstampadoComponent, FormEstampadoComponent]
})
export class EstampadoModule {}

