import { DetalleAdicional } from './../../../model/producto/detalleAdicional.model';
import { MedioPago } from './../../../model/pedido/medioPago.model';
import { Observable } from 'rxjs';
import { Cliente } from './../../../model/cliente/cliente.model';
import { Color } from './../../../model/producto/color.model';
import { TipoProducto } from './../../../model/producto/tipoProducto.model';
import { RangoPrecioProducto } from '../../../model/producto/rangoPrecioProducto.model';
import { DetallePedido } from '../../../model/pedido/detallePedido.model';
import { Pedido } from '../../../model/pedido/pedido.model';

import { ClientesService } from './../../../services/clientes.service';
import { PedidosService } from './../../../services/pedidos.service';
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
import { Producto } from '../../../model/producto/producto.model';

@Component({
  selector: 'app-form-pedido',
  templateUrl: './form-pedido.component.html'
})

export class FormPedidoComponent implements OnInit {
/*   toppings = new FormControl();
  toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
 */
  @ViewChild('encabezadoPedidoForm') encabezadoPedidoForm: NgForm;
  @ViewChild('detallePedidoForm') detallePedidoForm: NgForm;
  @Input() verForm: boolean;
  @Input() tipoForm: string;
  @Input() pedido: Pedido; //Puede venir con datos
  @Output() public salir = new EventEmitter();

  //Lista Detalle pedido
  detallePedido: DetallePedido;
  listaDetallePedido: DetallePedido[] = new Array();
  rangoPrecioProducto: RangoPrecioProducto;

  //Listas
  listaProductos: Producto[];
  listaTipoProducto: TipoProducto[];
  listaRangoPrecios: RangoPrecioProducto[];
  listaColores: Color[];
  listaClientes: Cliente[];
  listaDetallesAdicionales: DetalleAdicional[];

  cantidadProductos:number;
  queryBuscaCliente: string; //input text search del Cliente

  //Medio pago
  listaMediosPago: any[] = new Array();

  constructor(private pedidosService: PedidosService, private clientesService: ClientesService) {
  }

  ngOnInit() {
     if (this.pedido == null) {
      this.pedido = new Pedido();
    }

    this.listaColores = this.pedidosService.getColores();
    this.listaMediosPago = this.pedidosService.getMediosPago();
    this.listaDetallesAdicionales = this.pedidosService.getDetallesAdicionales();

    this.pedido.fechaCreacion = new Date();
    this.pedido.subTotal = 0;
    this.pedido.descuento = 0;

    //Lista de clientes
    this.listaClientes = this.clientesService.getClientes();
    //Lista de productos
    this.listaProductos = this.pedidosService.getProductos();
    this.detallePedido = new DetallePedido();
    this.detallePedido.llevaDiseno = 1;

    //this.pedido.listaProductos.push(this.detallePedido);
    this.rangoPrecioProducto = new RangoPrecioProducto();
  }

  verCliente(cliente: any) {
    this.queryBuscaCliente = cliente.desc;
    //TODO asignar el objeto cliente al pedido

      console.log('cliente->' + cliente.desc);
  }

  getListaCliente(cadena:string) {
    /* = this.clientesService.getClientes()
    .filter(item => item.idProducto == productoId);
    console.log('productoId-> ' + productoId); */
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

  onChangeCalculaTotalDetalle(cantidad: number) {
    this.detallePedido.total = cantidad * this.rangoPrecioProducto.valor;
  }

  onChangeCalculaTotal() {
    this.pedido.subTotalNeto = this.pedido.subTotal - (this.pedido.subTotal * this.pedido.descuento) / 100;
    this.pedido.iva = this.pedido.subTotalNeto*0.19;
    this.pedido.total = this.pedido.subTotalNeto + this.pedido.iva;
  }


  onSelectSinDiseno(llevaDiseño: number){
      console.log('llevaDiseño->'+llevaDiseño);
  }

  emiteVolver() {
    //this.pedidoForm.reset();
    this.salir.emit();
  }

  onSubmitDetalle() {
    //this.pedido.rutCliente = this.pedidoForm.value.rutCliente;
    this.pedido.idEstado = 1; //0= inactivo , 1=activo
    this.cantidadProductos = this.listaDetallePedido.push(this.detallePedido);

    //Calcula el total
    this.pedido.subTotal += this.detallePedido.total;
    this.onChangeCalculaTotal();

    this.pedido.listaProductos = this.listaDetallePedido;
    this.detallePedido = new DetallePedido();
    // add
/*     if (this.tipoForm == 'Nuevo') {
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
 */
  }
}
