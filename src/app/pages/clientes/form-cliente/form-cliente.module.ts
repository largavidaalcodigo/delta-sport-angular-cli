import { ClientesComponent } from '../clientes.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ClientesService } from '../../../services/clientes.service';

export const clientesRoutes: Routes = [
  {path: ':id', component: ClientesComponent},
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forChild(clientesRoutes)
  ],
  providers: [
    ClientesService
  ]
})
export class FormClienteModule {}
