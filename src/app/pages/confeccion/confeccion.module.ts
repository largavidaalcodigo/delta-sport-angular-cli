import { ConfeccionComponent } from './confeccion.component';
import { ClientesService } from '../../services/clientes.service';
import { PedidosService } from '../../services/pedidos.service';
import { SharedModule } from '../../shared/shared.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { confeccionRouter } from './confeccion.router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

export const confeccionRoutes: Routes = [
  {path: '', component: ConfeccionComponent},
];

@NgModule({
  imports: [
    confeccionRouter,
    RouterModule,
    CommonModule,
    FormsModule,
    HttpModule,
    SharedModule,
    RouterModule.forChild(confeccionRoutes),
  ],
  providers: [
    PedidosService,
    ClientesService
  ],
  declarations: [ConfeccionComponent]
})
export class ConfeccionModule {}
