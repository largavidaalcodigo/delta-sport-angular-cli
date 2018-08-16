import { ConfeccionComponent } from './confeccion.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const CONFECCION_ROUTER: Routes = [
  {path: '', component: ConfeccionComponent},
];

export const confeccionRouter = RouterModule.forChild(CONFECCION_ROUTER);
