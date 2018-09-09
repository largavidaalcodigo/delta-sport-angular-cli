import { ClientesService } from '../../services/clientes.service';
import { PedidosService } from '../../services/pedidos.service';
import { SharedModule } from '../../shared/shared.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { corteRouter } from './corte.router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorteComponent } from './corte.component';
import { RouterModule, Routes } from '@angular/router';

export const corteRoutes: Routes = [
  {path: '', component: CorteComponent},
  {path: ':id', component: CorteComponent},
];

@NgModule({
  imports: [
    corteRouter,
    RouterModule,
    CommonModule,
    FormsModule,
    HttpModule,
    SharedModule,
    RouterModule.forChild(corteRoutes),
  ],
  providers: [
    PedidosService,
    ClientesService
  ],
  declarations: [
    CorteComponent,
  ]
})
export class CorteModule {}

