import { ClientesService } from '../../services/clientes.service';
import { PedidosService } from '../../services/pedidos.service';
import { SharedModule } from '../../shared/shared.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { confeccionRouter } from './confeccion.router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfeccionComponent } from './Confeccion.component';
import { RouterModule, Routes } from '@angular/router';
import { FormConfeccionComponent } from './form-confeccion/form-confeccion.component';
import { FormConfeccionModule } from './form-confeccion/form-confeccion.module';

export const confeccionRoutes: Routes = [
  {path: '', component: ConfeccionComponent},
  {path: 'formConfeccion/:id', component: FormConfeccionComponent}
];

@NgModule({
  imports: [
    confeccionRouter,
    RouterModule,
    CommonModule,
    FormsModule,
    HttpModule,
    SharedModule,
    FormConfeccionModule,
    RouterModule.forChild(confeccionRoutes),
  ],
  providers: [
    PedidosService,
    ClientesService
  ],
  declarations: [ConfeccionComponent, FormConfeccionComponent]
})
export class ConfeccionModule {}

