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
  selector: 'app-form-diseno',
  templateUrl: './form-diseno.component.html'
})

export class FormDisenoComponent implements OnInit {
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
    this.pedidosService.putPedido(this.pedido).subscribe(data => {
      console.log('pedido actualizado->' + JSON.stringify(data));
      this.pedido = data;
    });
    this.router.navigate(['/diseno', '<strong>Pedido nro. ['+ this.pedido.numeroPedido + ']</strong> Actualizado exitosamente']);
  }
}
