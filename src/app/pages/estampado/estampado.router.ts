//import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { EstampadoComponent } from './estampado.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
//import { FormCorteComponent } from './form-corte/form-corte.component';

const ESTAMPADO_ROUTER: Routes = [
  {path: '', component: EstampadoComponent},
];

export const estampadoRouter = RouterModule.forChild(ESTAMPADO_ROUTER);
