import { PedidosService } from './../../services/pedidos.service';
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

export const productosRoutes: Routes = [
  {path: '', component: ProductosComponent},
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
    PedidosService
  ],
  declarations: [
    ProductosComponent
  ]
})
export class ProductosModule {}