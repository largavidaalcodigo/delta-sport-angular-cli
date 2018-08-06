import { ActivatedRoute, Router } from '@angular/router';
import { PedidosService } from '../../services/pedidos.service';
import { Pedido } from '../../model/pedido/pedido.model';
/* import { TipoProducto } from '../../model/producto/tipoProducto.model';
import { Producto } from '../../model/producto/producto.model';
 */import { Component, OnInit} from '@angular/core';
 import { Observable } from "rxjs";

@Component({
  selector: 'app-confeccion',
  templateUrl: './confeccion.component.html',
  styleUrls: ['./confeccion.component.css']
})
export class ConfeccionComponent implements OnInit {
  listaPedidos: Pedido[];
  pedido: Pedido;
  mensaje: string;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private pedidosService: PedidosService) {
  }

  ngOnInit() {
    //lista de pedidos
     this.pedidosService.getPedidos()
      .subscribe(
        pedidos => this.listaPedidos = pedidos.filter(item => item.idEstado === 3),
        err => console.log(err),
    );
  }

  addConfeccion(pedido: Pedido){
    console.log('editando confeccion...');
    this.router.navigate(['/confeccion/formConfeccion/', pedido.numeroPedido]);
  }
}
