import { Pedido } from './../../../model/pedido/pedido.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-pedidos',
  templateUrl: './header-pedidos.component.html',
  styleUrls: ['./header-pedidos.component.css']
})
export class HeaderPedidosComponent implements OnInit {

  @Input() pedido: any;
  @Input() titulo: string;

  constructor() { }

  ngOnInit() {
  }

}
