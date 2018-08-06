//import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { CorteComponent } from './corte.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
//import { FormCorteComponent } from './form-corte/form-corte.component';

const CORTE_ROUTER: Routes = [
  {path: '', component: CorteComponent},
];

export const corteRouter = RouterModule.forChild(CORTE_ROUTER);
