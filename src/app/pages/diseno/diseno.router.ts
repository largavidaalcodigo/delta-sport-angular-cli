//import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { DisenoComponent } from './diseno.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
//import { FormCorteComponent } from './form-corte/form-corte.component';

const DISENO_ROUTER: Routes = [
  {path: '', component: DisenoComponent},
];

export const disenoRouter = RouterModule.forChild(DISENO_ROUTER);
