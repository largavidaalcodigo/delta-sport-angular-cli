import { CorteComponent } from '../corte.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormCorteComponent } from './form-corte.component';
import { HttpModule } from '@angular/http';
import { PedidosService } from '../../../services/pedidos.service';
import { ClientesService } from '../../../services/clientes.service';
//import { FilterDataPipe } from './filterdata.pipe';

export const corteRoutes: Routes = [
  {path: ':id', component: CorteComponent},
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forChild(corteRoutes)
  ],
  providers: [
    PedidosService,
    ClientesService
  ],
  declarations: [
    //FilterDataPipe
  ]
})
export class FormCorteModule {}
