import { ProductosComponent } from './productos.component';
import { RouterModule, Routes } from '@angular/router';

const productos_ROUTER: Routes = [
  {path: '', component: ProductosComponent},
];

export const productosRouter = RouterModule.forChild(productos_ROUTER);
