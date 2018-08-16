import { DetallePedido } from './../../../model/pedido/detallePedido.model';
import { DetalleAdicional } from './../../../model/producto/detalleAdicional.model';
import { DetalleTalla } from '../../../model/producto/detalleTalla.model';
import { Pedido } from '../../../model/pedido/pedido.model';

import { ClientesService } from '../../../services/clientes.service';
import { PedidosService } from '../../../services/pedidos.service';
import { NgForm } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';

import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-form-corte',
  templateUrl: './form-corte.component.html'
})

export class FormCorteComponent implements OnInit {
  pedido: Pedido = new Pedido();
  detalleTallas: DetalleTalla;
  nombreBoton: string="Guardar";

  constructor(private route: ActivatedRoute,
    private router: Router,
    private pedidosService: PedidosService,
    private clientesService: ClientesService) {}

  ngOnInit() {
    console.log('Se inicia form corte->' + this.route.snapshot.params['id']);
    this.pedidosService.getPedido(this.route.snapshot.params['id']).subscribe(data => {
      console.log('Editando corte->' + JSON.stringify(data));
      this.pedido = data;
    });
  }

  guardarPedido(){
    this.calculaAvanceCorte();
    this.pedidosService.putPedido(this.pedido).subscribe(data => {
      console.log('pedido actualizado->' + JSON.stringify(data));
      this.pedido = data;
    });
    this.router.navigate(['/corte', '<strong>Pedido nro. ['+ this.pedido.numeroPedido + ']</strong> Actualizado exitosamente']);
  }

  calculaAvanceCorte(){
    let contadorCorte=0; //sumo solo los items que esten terminados
    let contadorTotalitemsProductos=0; //sumo todos los items que encuentre
    //Calcula % avance del pedido corte
    for (const producto of this.pedido.listaProductos) {
      for (const talla of producto.listaDetalleTallas) {
        if (talla.terminadoCorte === 1) {
          contadorCorte++;
        }
        contadorTotalitemsProductos++;
      }
    }
    this.pedido.avanceCorte = Math.round(( contadorCorte * 100 ) / this.pedido.totalItems);
    this.pedido.itemsTerminadosCorte = contadorCorte;
  }
}
