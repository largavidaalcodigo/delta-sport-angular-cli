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

export const estampadoRoutes: Routes = [
  {path: '', component: EstampadoComponent},
  {path: ':id', component: EstampadoComponent},
];

@NgModule({
  imports: [
    estampadoRouter,
    RouterModule,
    CommonModule,
    FormsModule,
    HttpModule,
    SharedModule,
    RouterModule.forChild(estampadoRoutes),
  ],
  providers: [
    PedidosService,
    ClientesService
  ],
  declarations: [EstampadoComponent]
})
export class EstampadoModule {}

