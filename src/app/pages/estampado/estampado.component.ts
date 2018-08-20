import { ActivatedRoute, Router } from '@angular/router';
import { PedidosService } from '../../services/pedidos.service';
import { Pedido } from '../../model/pedido/pedido.model';
import { Component, OnInit} from '@angular/core';
 import { Observable } from "rxjs";

@Component({
  selector: 'app-estampado',
  templateUrl: './estampado.component.html',
  styleUrls: ['./estampado.component.css']
})
export class EstampadoComponent implements OnInit {
  modulo: string;
  constructor() {
  }

  ngOnInit() {
    this.modulo = 'estampado';
  }
}
