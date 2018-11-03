import { ActivatedRoute, Router } from '@angular/router';
import { PedidosService } from '../../services/pedidos.service';
import { Pedido } from '../../model/pedido/pedido.model';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  listaPedidos: Pedido[];
  listaEstadosPedido: any[];
  pedido: Pedido;
  query = '';
  estado = '';
  checkSaldoPendiente: any;
  fechaDesde: Date;
  fechaHasta: Date;

  total: number;
  totalPendientes: number;

  //verLista: boolean = true;
  tipoForm: string; // USADO PARA DEFINIR LAS TALLAS
  mensaje: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private pedidosService: PedidosService) {

    this.route.params.subscribe(params => {
      this.mensaje = params['id'];
  });
  }

  ngOnInit() {
    //lista de pedidos
    this.fechaDesde = new Date(Date.now());
    //console.log('this.fechaDesde->' + this.fechaDesde);
    this.fechaDesde.setDate(this.fechaDesde.getDate() - 30);
    this.fechaHasta = new Date(Date.now());
    this.pedidosService.getPedidos('buscar', undefined, undefined, this.fechaDesde, this.fechaHasta)
      .subscribe(
        pedidos => this.listaPedidos = pedidos,
        err => console.log(err)
    );
    this.listaEstadosPedido = this.pedidosService.getEstadosPedido();
  }

  // Ver o Editar Cliente
  editarPedido(pedido: Pedido) {
    this.router.navigate(['/pedidos/formPedido/editar/', pedido.numeroPedido]);
  }

  eliminaPedido(pedido: Pedido){
    console.log('Elimina Pedido..');
    // Cambia el estado del pedido
    pedido.estado = 'Eliminado';
    this.pedidosService.putPedido(pedido).subscribe(data => {
      console.log('pedido eliminado->' + JSON.stringify(data));
      this.pedido = data;
    });
  }
  addTallas(pedido: Pedido){
    console.log('editando tallas...');
    this.router.navigate(['/pedidos/formTallas/', pedido.numeroPedido]);
  }

  addFichaTecnica(pedido: Pedido){
    console.log('editando Ficha Tecnica...');
    this.router.navigate(['/pedidos/formFichaTecnica/', pedido.numeroPedido]);
  }

  submitBuscador() {
    console.log('checkSaldoPendiente->' + this.checkSaldoPendiente);
    this.pedidosService.getPedidos('buscar',
    (this.estado.length === 0) ? undefined : this.estado,
    (this.query.length === 0) ? undefined : this.query,
    this.fechaDesde,
    this.fechaHasta).subscribe(data => {

      console.log('observando lista pedidos...');
      if (this.checkSaldoPendiente) {
        this.listaPedidos = data.filter(item => item.totalPagoPendiente > 0 );
      }else {
        this.listaPedidos = data;
      }

      this.total = 0;
      this.totalPendientes = 0;
      data.forEach(item => {
        this.total += item.total;
        this.totalPendientes += item.totalPagoPendiente;
      });
      console.log('this.total->' + this.total + ' / this.totalPendientes->' +this.totalPendientes);

    });

  }

}
