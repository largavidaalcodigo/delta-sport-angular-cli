import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardDefaultComponent } from './dashboard-default.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import { PedidosService } from '../../../services/pedidos.service';
import { PedidosModule } from '../../pedidos/pedidos.module';

export const DashboardDefaultRoutes: Routes = [
  {
    path: '',
    component: DashboardDefaultComponent,
    data: {
      breadcrumb: 'Default',
      icon: 'icofont-home bg-c-blue',
      status: false
    }
  },
  {path: ':id', component: DashboardDefaultComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardDefaultRoutes),
    SharedModule,
    ChartModule
  ],
  providers: [
    PedidosService
  ],
  declarations: [DashboardDefaultComponent]
})
export class DashboardDefaultModule { }
