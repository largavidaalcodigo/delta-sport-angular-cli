import { FormRangoPrecioComponent } from './form-rango-precio/form-rango-precio.component';
import { FormTipoProductoComponent } from './form-tipo-producto/form-tipo-producto.component';
import { ProductosService } from './../../services/productos.service';
import { PedidosService } from '../../services/pedidos.service';
import { CommonsService } from '../../services/commons.service';
import { productosRouter } from './productos.router';
import { ProductosComponent } from './productos.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ClientesService } from '../../services/clientes.service';
import { HttpModule } from '@angular/http';
import { FormProductoComponent } from './form-producto/form-producto.component';

export const productosRoutes: Routes = [
  {
    path: '', component: ProductosComponent,
    children: [ // rutas hijas, se verán dentro del componente padre
      {
        path: 'producto', // la ruta real es movimientos/nuevo
        component: FormProductoComponent
      },
/*       {
        path: 'categoria/:id', // la ruta real es movimientos/nuevo
        component: CategoriaComponent
      } */
    ]
  },
  {path: ':id', component: ProductosComponent},
];

@NgModule({
  imports: [
    productosRouter,
    CommonModule,
    FormsModule,
    SharedModule,
    HttpModule,
    NgbModule,
    RouterModule.forChild(productosRoutes)
  ],
  providers: [
    CommonsService,
    PedidosService,
    ProductosService
  ],
  declarations: [
    ProductosComponent,
    FormProductoComponent,
    FormTipoProductoComponent,
    FormRangoPrecioComponent
  ]
})
export class ProductosModule {}
