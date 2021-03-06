import { ChatService } from './../../../services/chat.service';
import { Mensajes } from './../../../model/mensajes.model';
import { DetalleTalla } from '../../../model/producto/detalleTalla.model';
import { Location } from "@angular/common";
import { Pedido } from '../../../model/pedido/pedido.model';
import { ClientesService } from '../../../services/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidosService } from '../../../services/pedidos.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tallas-pedidos',
  templateUrl: './tallas-pedidos.component.html',
  styleUrls: ['./tallas-pedidos.component.css']
})
export class TallasPedidosComponent implements OnInit {
  pedido: Pedido;
  tipoForm: string;
  listaDetallesTallas: any[] = new Array();
  detalleTallas: DetalleTalla;
  listaTallas: any[] = new Array();
  nombreBoton: string;
  titulo = 'Listado Tallas';

  constructor(private route: ActivatedRoute,
    private router: Router,
    private pedidosService: PedidosService,
    private location: Location,
    private chatService: ChatService) {}

  ngOnInit() {
    this.listaTallas = this.pedidosService.getTallas();
    this.tipoForm = this.route.snapshot.params['tipoForm'];

    //Obtiene pedido segun id
    this.pedidosService.getPedido(this.route.snapshot.params['id']).subscribe(data => {
      console.log('Editando tallas->' + JSON.stringify(data));
      this.pedido = data;
      this.titulo += ' - Pedido nro[' + this.pedido.numeroPedido + ']';
    });
  }
  onSubmit() {
    this.pedido.idEstado = 2; //tallas
    this.pedido.estado = 'En proceso';
    this.calculaTotalItem();

    this.pedidosService.putPedido(this.pedido).subscribe(data => {
      console.log('pedido actualizado->' + JSON.stringify(data));
      this.pedido = data;

      this.router.navigate(['/pedidos']);
      //Emite mensaje
      const msg = new Mensajes();
      msg.fecha = new Date();
      msg.usuarioOrigen = 'usuario origen';
      msg.usuarioDestino = 'usuario destino';
      msg.mensaje = 'El pedido ha sido actualizado exitosamente.';
      msg.titulo = 'Pedido # ' + this.pedido.numeroPedido + ' - Tallas';
      msg.url = window.location.href;
      this.chatService.sendMsg(msg);
      console.log('url->' + JSON.stringify(this.route));
    });
  }

  calculaTotalItem(){
    let contadorTotalitemsProductos=0; //sumo todos los items que encuentre
    //Calcula % avance del pedido corte
    for (const producto of this.pedido.listaProductos) {
      for (const talla of producto.listaDetalleTallas) {
        contadorTotalitemsProductos++;
      }
    }
    this.pedido.totalItems = contadorTotalitemsProductos;
  }

  goBack() {
    this.location.back();
  }

}
