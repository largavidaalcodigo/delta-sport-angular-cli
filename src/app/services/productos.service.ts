import { Producto } from '../model/producto/producto.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Pedido } from '../model/pedido/pedido.model';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductosService {

  constructor(private http: HttpClient) {}

  public getProductos(): Observable<Producto[]> {
    return this.http.get('/api/productos/');
  }

  public postProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>('/api/productos', producto);
  }

  public putProducto(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>('/api/productos/', producto);
  }
}
