import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Pedido } from "../model/pedido.model";

@Injectable()
export class PedidosService {
  baseUrl: string = "http://localhost:8081";

  constructor(private http: HttpClient) {}

  public getProductos() {
    //return this.http.get("./assets/data/productos/productos.json");
    return [
      { idProducto: 1, desc: "Polera Tela color cire" },
      { idProducto: 2, desc: "Polera sublimacion 100% cire" },
      { idProducto: 3, desc: "Polera sublimacion 100% rugby" },
      { idProducto: 4, desc: "Polera sublimacion 100% elasticada" },
      { idProducto: 5, desc: "Calzas" },
      { idProducto: 6, desc: "Pantalon buzo" },
      { idProducto: 7, desc: "Polerón con cierre" }
    ];
  }
  public getTipoProductos() {
    //return this.http.get('./assets/data/productos/tipos-productos.json');
    return [
      { id: 1, idProducto: 1, desc: "Molde recto" },
      { id: 2, idProducto: 1, desc: "raglan tela color" },
      { id: 3, idProducto: 1, desc: "manga larga recta" },
      { id: 4, idProducto: 1, desc: "manga larga raglan" },
      { id: 5, idProducto: 1, desc: "sin manga" },
      { id: 6, idProducto: 2, desc: "molde recto m/c" },
      { id: 7, idProducto: 2, desc: "molde raglan m/c" },
      { id: 8, idProducto: 2, desc: "molde recto m/L" },
      { id: 9, idProducto: 2, desc: "molde raglan m/L" },
      { id: 10, idProducto: 2, desc: "pecho/espalda recta" },
      { id: 11, idProducto: 2, desc: "pecho/espalda raglan" },
      { id: 12, idProducto: 2, desc: "sin manga" },
      { id: 13, idProducto: 3, desc: "molde recto m/c" },
      { id: 14, idProducto: 3, desc: "molde raglan m/c" },
      { id: 15, idProducto: 3, desc: "molde recto m/L" },
      { id: 16, idProducto: 3, desc: "molde raglan m/L" },
      { id: 17, idProducto: 3, desc: "pecho/espalda recta" },
      { id: 18, idProducto: 3, desc: "pecho/espalda raglan" },
      { id: 19, idProducto: 3, desc: "sin manga" }
      ];
    }

  public getPedidos() {
    return this.http.get(this.baseUrl + "/pedidos");
  }

  public addPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(this.baseUrl + "/pedidos", pedido);
  }

  public putPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.put<Pedido>(this.baseUrl + "/pedidos", pedido);
  }
}
