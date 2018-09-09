import { PedidosService } from '../../../services/pedidos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Pedido } from '../../../model/pedido/pedido.model';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent implements OnInit {

  listaPedidos: Pedido[];
  pedido: Pedido;
  mensaje: string;
  titulo: string;
  @Input() modulo: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private pedidosService: PedidosService) {
  }

  ngOnInit() {
     this.pedidosService.getPedidos('buscar', 'En proceso', '')
      .subscribe(
        pedidos => this.listaPedidos = pedidos,
        err => console.log(err),
    );

    this.titulo = this.modulo + ' Orden de trabajo';
  }

  verAvance(pedido: Pedido) {
    console.log('editando ' + this.modulo + '...');
    if (this.modulo === 'corte') {
      this.router.navigate(['/pedidos/formModulos/corte/', pedido.numeroPedido]);
    }else if (this.modulo === 'diseño') {
        this.router.navigate(['/pedidos/formModulos/diseno/', pedido.numeroPedido]);
    }else if (this.modulo === 'estampado') {
      this.router.navigate(['/pedidos/formModulos/estampado/', pedido.numeroPedido]);
    }else if (this.modulo === 'confeccion') {
      this.router.navigate(['/pedidos/formModulos/confeccion/', pedido.numeroPedido]);
    }else if (this.modulo === 'dashboard') {
      this.router.navigate(['/pedidos/formModulos/dashboard/']);
    }
  }

  verTallas(pedido: Pedido) {
    console.log('ver tallas...');
    this.router.navigate(['/pedidos/formTallas/ver/', pedido.numeroPedido]);
  }

  verFichaTecnica(pedido: Pedido) {
    console.log('ver Ficha Tecnica...');
    this.router.navigate(['/pedidos/formFichaTecnica/ver/', pedido.numeroPedido]);
  }

  verDetalle(pedido: Pedido){
    console.log('ver Dashboard...');
    this.router.navigate(['/dashboard/', pedido.numeroPedido]);
  }
}
