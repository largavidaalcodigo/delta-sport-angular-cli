import { DisenoComponent } from '../diseno.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormDisenoComponent } from './form-diseno.component';
import { HttpModule } from '@angular/http';
import { PedidosService } from '../../../services/pedidos.service';
import { ClientesService } from '../../../services/clientes.service';
//import { FilterDataPipe } from './filterdata.pipe';

export const disenoRoutes: Routes = [
  {path: ':id', component: DisenoComponent},
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forChild(disenoRoutes)
  ],
  providers: [
    PedidosService,
    ClientesService
  ],
  declarations: [
    //FilterDataPipe
  ]
})
export class FormDisenoModule {}
