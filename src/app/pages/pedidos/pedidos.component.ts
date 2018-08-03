import { ActivatedRoute, Router } from '@angular/router';
import { PedidosService } from '../../services/pedidos.service';
import { Pedido } from '../../model/pedido/pedido.model';
/* import { TipoProducto } from '../../model/producto/tipoProducto.model';
import { Producto } from '../../model/producto/producto.model';
 */import { Component, OnInit} from '@angular/core';
 import { Observable } from "rxjs";


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  listaPedidos: Pedido[];
  listaEstadosPedido: any[];
  pedido: Pedido;
  verLista: boolean = true;
  tipoForm: string; // USADO PARA DEFINIR LAS TALLAS
  mensaje: string;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private pedidosService: PedidosService) {
    let sub = this.route.params.subscribe(params => {
      this.mensaje = params['id']; // (+) converts string 'id' to a number
      //console.log('mensaje->'+ mensaje);
    });
  }

  ngOnInit() {
    this.verLista = true;

    //lista de pedidos
    this.pedidosService.getPedidos()
      .subscribe(
        pedidos => this.listaPedidos = pedidos,
        err => console.log(err)
    );
    this.listaEstadosPedido = this.pedidosService.getEstadosPedido();
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

  //Ver o Editar Cliente
  editarPedido(pedido: Pedido) {
    this.router.navigate(['/pedidos/formPedido/editar/', pedido.numeroPedido]);
  }

  eliminaPedido(pedido: Pedido){
      console.log('editando tallas...');
    this.pedidosService.deletePedido(pedido);
  }
  addTallas(pedido: Pedido){
    console.log('editando tallas...');
    this.tipoForm = "tallas";
    this.pedido=pedido;
    this.toggleLista();
  }
}
