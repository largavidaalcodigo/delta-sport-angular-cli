import { ClientesService } from '../../services/clientes.service';
import { PedidosService } from '../../services/pedidos.service';
import { SharedModule } from '../../shared/shared.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { disenoRouter } from './diseno.router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisenoComponent } from './diseno.component';
import { RouterModule, Routes } from '@angular/router';
import { FormDisenoComponent } from './form-diseno/form-diseno.component';
import { FormDisenoModule } from './form-diseno/form-diseno.module';

export const disenoRoutes: Routes = [
  {path: '', component: DisenoComponent},
  {path: 'formDiseno/:id', component: FormDisenoComponent}
];

@NgModule({
  imports: [
    disenoRouter,
    RouterModule,
    CommonModule,
    FormsModule,
    HttpModule,
    SharedModule,
    FormDisenoModule,
    RouterModule.forChild(disenoRoutes),
  ],
  providers: [
    PedidosService,
    ClientesService
  ],
  declarations: [DisenoComponent, FormDisenoComponent]
})
export class DisenoModule {}

