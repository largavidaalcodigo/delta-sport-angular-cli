import { EstampadoComponent } from '../estampado.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormEstampadoComponent } from './form-estampado.component';
import { HttpModule } from '@angular/http';
import { PedidosService } from '../../../services/pedidos.service';
import { ClientesService } from '../../../services/clientes.service';
//import { FilterDataPipe } from './filterdata.pipe';

export const estampadoRoutes: Routes = [
  {path: ':id', component: EstampadoComponent},
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forChild(estampadoRoutes)
  ],
  providers: [
    PedidosService,
    ClientesService
  ],
  declarations: [
    //FilterDataPipe
  ]
})
export class FormEstampadoModule {}
