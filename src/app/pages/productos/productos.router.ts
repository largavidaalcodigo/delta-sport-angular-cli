import { FormProductoComponent } from './form-producto/form-producto.component';
import { ProductosComponent } from './productos.component';
import { RouterModule, Routes } from '@angular/router';

const productos_ROUTER: Routes = [
  {path: '', component: FormProductoComponent},
];

export const productosRouter = RouterModule.forChild(productos_ROUTER);
