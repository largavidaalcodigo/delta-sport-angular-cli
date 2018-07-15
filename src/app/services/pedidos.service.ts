import { Producto } from "./../model/producto/producto.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Pedido } from "../model/pedido/pedido.model";

@Injectable()
export class PedidosService {
  //baseUrl: string = "http://localhost:8081";

  constructor(private http: HttpClient) {}

  public getPedidos(): Observable<Pedido[]> {
    return this.http.get('/api/getPedidos');
  }

  public addPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>('/api/addPedido', pedido);
  }

  public putPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.put<Pedido>("/pedidos", pedido);
  }

  public getDetallesAdicionales() {
    return [
      { id: 1, desc: "Logos insignias sublimados", valor: 550 },
      { id: 2, desc: "Número sublimado", valor: 650 },
      { id: 3, desc: "Logos vinilos", valor: 550 },
      { id: 4, desc: "Números vinilos", valor: 750 },
      { id: 5, desc: "Subliflok insignia", valor: 750 },
      { id: 6, desc: "Cuello camisero tela", valor: 350 },
      { id: 7, desc: "Cuello camisero tejido", valor: 800 },
      { id: 8, desc: "Cierre polera", valor: 450 },
      { id: 9, desc: "Broches (3)", valor: 450 },
      { id: 10, desc: "Triángulo", valor: 550 },
      { id: 11, desc: "Costados", valor: 500 },
      { id: 12, desc: "Vivos", valor: 350 },
      { id: 13, desc: "Cuellos sublimados", valor: 150 },
      { id: 14, desc: "Cuello mao", valor: 350 },
    ];
  }

  public getColores() {
    return [
      { id: 1, desc: "Azul", codigoHex: "#0000FF" },
      { id: 2, desc: "Verde", codigoHex: "#008000" },
      { id: 3, desc: "Amarillo", codigoHex: "#FFFF00" }
    ];
  }

  public getMediosPago() {
    return [
      { id: 1, desc: "Efectivo"},
      { id: 2, desc: "Transferencia"},
      { id: 3, desc: "Cheque"}
    ];
  }
  //   public getProductos():Observable<Producto[]> {
  public getProductos(): Producto[] {
    //return this.http.get('./assets/data/productos/productos.json');
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
      { id: 6, idProducto: 2, desc: "molde rect o m/c" },
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

  public getRangoPrecios() {
    return [
      { id: 1, idTipoProducto: 1, desc: "4 a 14", valor: 3500 },
      { id: 10, idTipoProducto: 1, desc: "XL - xxl", valor: 4500 },
      { id: 5, idTipoProducto: 1, desc: " 16 a L", valor: 4000 },

      { id: 2, idTipoProducto: 2, desc: "4 a 14", valor: 3700 },
      { id: 6, idTipoProducto: 2, desc: " 16 a L", valor: 4200 },
      { id: 11, idTipoProducto: 2, desc: "XL - xxl", valor: 4700 },

      { id: 3, idTipoProducto: 3, desc: "4 a 14", valor: 4500 },
      { id: 7, idTipoProducto: 3, desc: " 16 a L", valor: 5500 },
      { id: 12, idTipoProducto: 3, desc: "XL - xxl", valor: 6000 },

      { id: 4, idTipoProducto: 4, desc: "4 a 14", valor: 4700 },
      { id: 8, idTipoProducto: 4, desc: " 16 a L", valor: 5700 },
      { id: 13, idTipoProducto: 4, desc: "XL - xxl", valor: 6700 },

      { id: 9, idTipoProducto: 5, desc: " 16 a L", valor: 3800 },
      { id: 14, idTipoProducto: 5, desc: "XL - xxl", valor: 4200 }
    ];
  }
}
