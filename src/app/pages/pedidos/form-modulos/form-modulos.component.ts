import { Mensajes } from '../../../model/mensajes.model';
import { ChatService } from '../../../services/chat.service';
import { DetalleTalla } from '../../../model/producto/detalleTalla.model';
import { ClientesService } from '../../../services/clientes.service';
import { PedidosService } from '../../../services/pedidos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from '../../../model/pedido/pedido.model';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-modulos',
  templateUrl: './form-modulos.component.html',
  styleUrls: ['./form-modulos.component.css']
})
export class FormModulosComponent implements OnInit {
  pedido: Pedido = new Pedido();
  detalleTallas: DetalleTalla;
  modulo: string;
  titulo = 'Avances orden de trabajo';

  constructor(private chatService: ChatService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private pedidosService: PedidosService,
    private clientesService: ClientesService) {}

  ngOnInit() {
    this.modulo = this.route.snapshot.params['modulo'];
    console.log('Se inicia form->' + this.modulo);
    this.pedidosService.getPedido(this.route.snapshot.params['id']).subscribe(data => {
      console.log('Editando->' + JSON.stringify(data));
      this.pedido = data;
    });
  }

  guardarPedido(){
    this.calculaAvance();
    this.pedidosService.putPedido(this.pedido).subscribe(data => {
      console.log('pedido actualizado->' + JSON.stringify(data));
      this.pedido = data;
    });
    let contadorMensaje: number;
    this.router.navigate(['/' + this.modulo]);
    switch (this.modulo) {
      case 'corte':
        contadorMensaje = this.pedido.avanceCorte;
        break;
      case 'confeccion':
        contadorMensaje = this.pedido.avanceConfeccion;
      break;
      case 'estampado':
        contadorMensaje = this.pedido.avanceEstampado;
        break;
      case 'diseño':
        contadorMensaje = this.pedido.avanceDiseno;
        break;
      default:
        break;
    }

    const mensaje = '[' + this.modulo + '] Nuevo avance [' + contadorMensaje + ']%';
    const titulo = 'Pedido [' + this.pedido.numeroPedido + '] / ' +
    (this.pedido.cliente.razonSocialCliente != null ? this.pedido.cliente.razonSocialCliente : this.pedido.cliente.nombresCliente);

    // mensaje notificacion cambios
    const msg = new Mensajes();
    msg.fecha = new Date();
    msg.usuarioOrigen = 'usuario origen';
    msg.usuarioDestino = 'usuario destino';
    msg.mensaje = mensaje;
    msg.titulo = titulo;
    msg.url = this.router.url;
    this.chatService.sendMsg(msg);
  }

  calculaAvance(){
    let contadorCorte = 0; //sumo solo los items que esten terminados
    let contadorDiseno = 0; //sumo solo los items que esten terminados
    let contadorConfeccion = 0; //sumo solo los items que esten terminados
    let contadorEstampado = 0; //sumo solo los items que esten terminados

    let contadorTotalitemsProductos=0; //sumo todos los items que encuentre
    //Calcula % avance del pedido corte
    for (const producto of this.pedido.listaProductos) {
      for (const talla of producto.listaDetalleTallas) {
        if (talla.terminadoCorte === 1) {
          contadorCorte++;
        }else if (talla.terminadoDiseno === 1) {
            contadorDiseno++;
        }else if (talla.terminadoEstampado === 1) {
          contadorEstampado++;
        }else if (talla.terminadoConfeccion === 1) {
          contadorConfeccion++;
        }
        contadorTotalitemsProductos++;
      }
    }
    this.pedido.avanceCorte = Math.round(( contadorCorte * 100 ) / this.pedido.totalItems);
    this.pedido.avanceDiseno = Math.round(( contadorDiseno * 100 ) / this.pedido.totalItems);
    this.pedido.avanceConfeccion = Math.round(( contadorConfeccion * 100 ) / this.pedido.totalItems);
    this.pedido.avanceEstampado = Math.round(( contadorEstampado * 100 ) / this.pedido.totalItems);

    this.pedido.itemsTerminadosCorte = contadorCorte;
    this.pedido.itemsTerminadosDiseno = contadorDiseno;
    this.pedido.itemsTerminadosConfeccion = contadorConfeccion;
    this.pedido.itemsTerminadosEstampado = contadorEstampado;
  }

  goBack() {
    this.location.back();
  }

}
