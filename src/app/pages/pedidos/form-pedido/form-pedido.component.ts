import { Color } from './../../../model/producto/color.model';
import { TipoProducto } from './../../../model/producto/tipoProducto.model';
import { RangoPrecioProducto } from '../../../model/producto/rangoPrecioProducto.model';
import { DetallePedido } from './../../../model/pedido/detallePedido';
import { Pedido } from '../../../model/pedido/pedido.model';
import { PedidosService } from './../../../services/pedidos.service';
import { ClientesService } from './../../../services/clientes.service';
import { NgForm } from '@angular/forms';
import {FormControl} from '@angular/forms';

import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-form-pedido',
  templateUrl: './form-pedido.component.html'
})

export class FormPedidoComponent implements OnInit {
  toppings = new FormControl();
  toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  @ViewChild('encabezadoPedidoForm') encabezadoPedidoForm: NgForm;
  @ViewChild('detallePedidoForm') detallePedidoForm: NgForm;
  @Input() verForm: boolean;
  @Input() tipoForm: string;
  @Input() pedido: Pedido; //Puede venir con datos
  @Output() public salir = new EventEmitter();

  //Lista Detalle pedido
  detallePedido: DetallePedido;
  listaDetallePedido: DetallePedido[];
  rangoPrecioProducto: RangoPrecioProducto;
  //Listas producto
  listaProductos: any;
  listaTipoProducto: TipoProducto[];
  listaRangoPrecios: RangoPrecioProducto[];
  listaColores: Color[];

  queryCliente:string;

  constructor(private pedidosService: PedidosService, private clientesService: ClientesService) {}

  ngOnInit() {
    //Lista de productos
    this.listaProductos = this.pedidosService.getProductos();
    this.detallePedido = new DetallePedido();
    this.detallePedido.llevaDiseno = 0;
    this.rangoPrecioProducto = new RangoPrecioProducto();
    this.listaColores = this.pedidosService.getColores();
  }

  getListaCliente(cadena:string) {
    return = this.clientesService.getClientes()
    .filter(item => item.idProducto == productoId);
    console.log('productoId-> ' + productoId);
    //console.log('tipos de producto->' + JSON.stringify(this.listaTipoProducto));
    //https://codeburst.io/create-a-search-pipe-to-dynamically-filter-results-with-angular-4-21fd3a5bec5c
  }

  onSelectProducto(productoId: number) {
    this.detallePedido.idProducto = productoId;
    this.listaTipoProducto = this.pedidosService.getTipoProductos()
      .filter(item => item.idProducto == productoId);
    console.log('productoId-> ' + productoId);
    //console.log('tipos de producto->' + JSON.stringify(this.listaTipoProducto));
  }

  onSelectTipoProducto(tipoProductoId: number) {
    this.detallePedido.idTipoProducto = tipoProductoId;
    this.listaRangoPrecios = this.pedidosService.getRangoPrecios()
      .filter(item => item.idTipoProducto == tipoProductoId);
      console.log('tipoProductoId->'+tipoProductoId);
    //console.log('rango de precios->' + JSON.stringify(this.listaRangoPrecios));
  }

  onSelectRangoPrecio(rangoPrecioId: number) {
    this.detallePedido.idRangoPrecio = rangoPrecioId;
    this.rangoPrecioProducto = this.listaRangoPrecios.find(item => item.id == rangoPrecioId);
    console.log('rangoPrecioId->' + rangoPrecioId);
  }

  onChangeCalculaTotal(cantidad: number) {
    this.detallePedido.total = cantidad * this.rangoPrecioProducto.valor;
  }

  onSelectSinDiseno(llevaDiseño: number){
      console.log('llevaDiseño->'+llevaDiseño);
  }

  emiteVolver() {
    //this.pedidoForm.reset();
    this.salir.emit();
  }

  onSubmit() {
    //this.pedido.rutCliente = this.pedidoForm.value.rutCliente;
    // this.pedido.estadoPedido = 1; //0= inactivo , 1=activo

    // add
    if (this.tipoForm == 'Nuevo') {
      this.pedidosService.addPedido(this.pedido).subscribe(pedido => {
        this.pedido = pedido;
        console.log('nuevo  insertado->' + pedido);
      });

      //update
    } else if (this.tipoForm == 'Ver') {
      this.pedidosService.putPedido(this.pedido).subscribe(pedido => {
        this.pedido = pedido;
        console.log('pedido actualizado->' + pedido);
      });
    }
    this.emiteVolver();
  }
}
