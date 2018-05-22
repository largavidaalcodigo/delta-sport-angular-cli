import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-pedido',
  templateUrl: './form-pedido.component.html',
  styleUrls: ['./form-pedido.component.css']
})
export class FormPedidoComponent implements OnInit {

  today = Date.now();
  constructor() { }

  ngOnInit() {
  }

}
