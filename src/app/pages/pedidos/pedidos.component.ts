import { PedidosService } from './../../services/pedidos.service';
import { Pedido } from '../../model/pedido/pedido.model';
/* import { TipoProducto } from '../../model/producto/tipoProducto.model';
import { Producto } from '../../model/producto/producto.model';
 */import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  listaPedidos: any;
  pedido: Pedido;
  verLista: boolean = true;
  //verForm: boolean = false;
  tipoForm: string = 'Nuevo'; // puede ser NUEVO o EDITAR

  constructor(private pedidosService: PedidosService) {
  }

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
    //this.verForm = false;
    this.toggleLista();
  }
  public toggleLista(){
    this.verLista = !this.verLista;
    console.log('this.verLista ->'+ this.verLista);
  }

  //Nuevo Pedido
  nuevoPedido() {
    this.tipoForm = "Nuevo";
    this.pedido = new Pedido();

    this.toggleLista();
  }

  //Ver o Editar Cliente
  editarPedido(pedido: Pedido) {

    this.pedido=pedido;
    this.tipoForm = "Ver";
    this.toggleLista();
  }
}
