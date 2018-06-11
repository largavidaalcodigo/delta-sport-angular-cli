import { PedidosService } from "./../../services/pedidos.service";
import { Pedido } from "./../../model/pedido.model";
import { TipoProducto } from './../../model/tipoProducto.model';
  import { Producto } from './../../model/producto.model';
import { Component, OnInit} from "@angular/core";

@Component({
  selector: "app-pedidos",
  templateUrl: "./pedidos.component.html",
  styleUrls: ["./pedidos.component.css"]
})
export class PedidosComponent implements OnInit {
  listaPedidos: any;
/*   listaProductos:any;
  listaTipoProductos:any;
 */
  pedido: Pedido;
  verLista: boolean = true;
  verForm: boolean;
  tipoForm: string;

  constructor(private pedidosService: PedidosService) {}

  ngOnInit() {
    //lista de pedidos
    this.pedidosService.getPedidos().subscribe(data => {
      console.log('obteniendo lista pedidos...');
      console.log(data);
      this.listaPedidos = data;
    });

  }

  //Cierre con boton Volver
  public volver() {
    this.verForm = false;
    this.verLista = true;
  }

  //Nuevo Pedido
  nuevo() {
    this.verForm = true;
    this.verLista = false;

    this.pedido = new Pedido();
    this.tipoForm = "Nuevo";
    console.log("presiona nuevo..");
  }

  //Ver o Editar Cliente
  editarPedido(pedido: Pedido) {
    this.verForm = true;
    this.verLista = false;

    this.pedido=pedido;
    this.tipoForm = "Ver";
    console.log("Viendo ");
  }
}
