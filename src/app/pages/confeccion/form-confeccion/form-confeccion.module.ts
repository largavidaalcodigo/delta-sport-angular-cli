import { ConfeccionComponent } from '../confeccion.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormConfeccionComponent } from './form-confeccion.component';
import { HttpModule } from '@angular/http';
import { PedidosService } from '../../../services/pedidos.service';
import { ClientesService } from '../../../services/clientes.service';
//import { FilterDataPipe } from './filterdata.pipe';

export const confeccionRoutes: Routes = [
  {path: ':id', component: ConfeccionComponent},
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forChild(confeccionRoutes)
  ],
  providers: [
    PedidosService,
    ClientesService
  ],
  declarations: [
    //FilterDataPipe
  ]
})
export class FormConfeccionModule {}
