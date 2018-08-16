import { CorteComponent } from './corte.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const CORTE_ROUTER: Routes = [
  {path: '', component: CorteComponent},
];

export const corteRouter = RouterModule.forChild(CORTE_ROUTER);
