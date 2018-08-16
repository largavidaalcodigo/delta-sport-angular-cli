import { ActivatedRoute, Router } from '@angular/router';
import { PedidosService } from '../../services/pedidos.service';
import { Pedido } from '../../model/pedido/pedido.model';
/* import { TipoProducto } from '../../model/producto/tipoProducto.model';
import { Producto } from '../../model/producto/producto.model';
 */import { Component, OnInit} from '@angular/core';
 import { Observable } from "rxjs";

@Component({
  selector: 'app-corte',
  templateUrl: './corte.component.html'
})
export class CorteComponent implements OnInit {
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
        pedidos => this.listaPedidos = pedidos.filter(item => item.idEstado >= 3),
        err => console.log(err),
    );
  }

  addCorte(pedido: Pedido){
    console.log('editando corte...');
    this.router.navigate(['/corte/formCorte/', pedido.numeroPedido]);
  }
}
