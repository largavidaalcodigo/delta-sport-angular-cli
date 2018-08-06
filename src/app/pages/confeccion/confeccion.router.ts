//import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { ConfeccionComponent } from './Confeccion.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
//import { FormCorteComponent } from './form-Confeccion/form-Confeccion.component';

const CONFECCION_ROUTER: Routes = [
  {path: '', component: ConfeccionComponent},
];

export const confeccionRouter = RouterModule.forChild(CONFECCION_ROUTER);
