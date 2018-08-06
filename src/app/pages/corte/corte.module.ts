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
import { FormCorteComponent } from './form-corte/form-corte.component';
import { FormCorteModule } from './form-corte/form-corte.module';

export const corteRoutes: Routes = [
  {path: '', component: CorteComponent},
  {path: 'formCorte/:id', component: FormCorteComponent}
];

@NgModule({
  imports: [
    corteRouter,
    RouterModule,
    CommonModule,
    FormsModule,
    HttpModule,
    SharedModule,
    FormCorteModule,
    RouterModule.forChild(corteRoutes),
  ],
  providers: [
    PedidosService,
    ClientesService
  ],
  declarations: [CorteComponent, FormCorteComponent]
})
export class CorteModule {}

