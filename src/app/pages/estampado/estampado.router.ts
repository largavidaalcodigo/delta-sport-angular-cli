import { EstampadoComponent } from './estampado.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const ESTAMPADO_ROUTER: Routes = [
  {path: '', component: EstampadoComponent},
];

export const estampadoRouter = RouterModule.forChild(ESTAMPADO_ROUTER);
