import { DetallePedido } from './../../../model/pedido/detallePedido.model';
import { DetalleAdicional } from './../../../model/producto/detalleAdicional.model';
import { MedioPago } from './../../../model/pedido/medioPago.model';
import { Observable } from 'rxjs';
import { Cliente } from './../../../model/cliente/cliente.model';
import { Color } from './../../../model/producto/color.model';
import { TipoProducto } from './../../../model/producto/tipoProducto.model';
import { RangoPrecioProducto } from '../../../model/producto/rangoPrecioProducto.model';
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
import { Comentario } from '../../../model/pedido/comentario.model';

@Component({
  selector: 'app-form-pedido',
  templateUrl: './form-pedido.component.html'
})

export class FormPedidoComponent implements OnInit {
  @ViewChild('encabezadoPedidoForm') encabezadoPedidoForm: NgForm;
  @ViewChild('detallePedidoForm') detallePedidoForm: NgForm;
  @Input() verForm: boolean;
  @Input() tipoForm: string;
  @Input() pedido: Pedido; //Puede venir con datos
  @Output() public salir = new EventEmitter();

  //Lista Detalle pedido
  detallePedido: DetallePedido;
  //listaDetallePedido: DetallePedido[] = new Array();
  rangoPrecioProducto: RangoPrecioProducto;

  //Listas
  listaProductos: Producto[];
  listaTipoProducto: TipoProducto[];
  listaRangoPrecios: RangoPrecioProducto[];
  listaColores: Color[];
  listaClientes: Cliente[];
  listaDetallesAdicionales: any[] = new Array();

  cantidadProductos: number;
  cantidadComentarios: number;
  queryBuscaCliente: string; //input text search del Cliente

  //Medio pago
  listaMediosPago: any[] = new Array();

  editando: boolean = false;
  constructor(private pedidosService: PedidosService, private clientesService: ClientesService) {
  }

  ngOnInit() {

/*     this.cantidadComentarios = this.pedido.listaComentarios.push(new Comentario());
 */
     if (this.pedido == null) {
      this.pedido = new Pedido();
      this.pedido.idEstado = 1; //0= inactivo , 1=activo
      this.pedido.fechaCreacion = new Date();
      this.pedido.subTotal = 0;
      this.pedido.descuento = 0;
      this.pedido.listaProductos = new Array();
      }

    this.listaColores = this.pedidosService.getColores();
    this.listaMediosPago = this.pedidosService.getMediosPago();
    this.listaDetallesAdicionales = this.pedidosService.getDetallesAdicionales();
    this.listaClientes = this.clientesService.getClientes();
    this.listaProductos = this.pedidosService.getProductos();

    this.detallePedido = new DetallePedido();
    this.detallePedido.listaAdicionales = new Array();
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
    //this.detallePedido.idProducto = productoId;
    this.listaTipoProducto = this.pedidosService.getTipoProductos()
      .filter(item => item.idProducto == productoId);
    console.log('productoId-> ' + productoId);
    //console.log('tipos de producto->' + JSON.stringify(this.listaTipoProducto));
  }

  onSelectTipoProducto(tipoProductoId: number) {
    //this.detallePedido.idTipoProducto = tipoProductoId;
    this.listaRangoPrecios = this.pedidosService.getRangoPrecios()
      .filter(item => item.idTipoProducto == tipoProductoId);
      console.log('onSelectTipoProducto tipoProductoId->' + tipoProductoId);
    }

  onSelectRangoPrecio(rangoPrecioId: number) {
    this.rangoPrecioProducto = this.listaRangoPrecios.find(item => item.id == rangoPrecioId);
    //this.detallePedido.idRangoPrecio = this.rangoPrecioProducto.id;
    this.detallePedido.valor  = this.rangoPrecioProducto.valor;
    this.onChangeCalculaTotalDetalle();
    console.log('onSelectRangoPrecio rangoPrecioId->' + rangoPrecioId);
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

    //setea Correlativo nro item
    this.detallePedido.id = this.pedido.listaProductos.length + 1;

    // SETEA NOMBRE DE CATEGORIA/PRODUCTO/RANGO PRECIO
    const producto: Producto = this.listaProductos.find(item => item.idProducto == this.detallePedido.idProducto);
    this.detallePedido.descProducto = producto.desc;
    this.detallePedido.descTipoProducto = this.listaTipoProducto.find(item => item.id == this.detallePedido.idTipoProducto).desc;
    this.detallePedido.descRangoPrecio = this.listaRangoPrecios.find(item => item.id == this.detallePedido.idRangoPrecio).desc;

    this.detallePedido.listaAdicionales = this.listaDetallesAdicionales.filter(item => item.checked);

    this.cantidadProductos = this.pedido.listaProductos.push(this.detallePedido);
    console.log("nuevo item->"+ JSON.stringify(this.detallePedido));

    //Calcula el total
    this.onChangeCalculaTotal();

    //this.pedido.listaProductos = this.listaDetallePedido;
    this.detallePedido = new DetallePedido();
    this.listaDetallesAdicionales = this.pedidosService.getDetallesAdicionales();
}

  nuevoDetalle(){
    this.detallePedido = new DetallePedido();
  }

  verProducto(detallePedido: DetallePedido) {
    this.editando = true;
    const detalle: DetallePedido = detallePedido;
    this.detallePedido = detalle;
    this.onSelectTipoProducto(this.detallePedido.idTipoProducto);
    this.onSelectRangoPrecio(this.detallePedido.idRangoPrecio);

    //this.listaDetallesAdicionales = detallePedido.listaAdicionales;

    console.log('detallePedido->' + JSON.stringify(detallePedido));
  }

  // CALCULA EL TOTAL DEL ITEM CUANDO CAMBIA LA CANTIDAD O EL VALOR
  onChangeCalculaTotalDetalle() {
    this.detallePedido.subTotal = (this.detallePedido.cantidad * this.detallePedido.valor);
    this.detallePedido.total = this.detallePedido.subTotal + this.detallePedido.totalAdicionales;
    console.log('total detalle->'+this.detallePedido.total);
  }

  // CUANDO CAMBIA EL DESCUENTO DEL PEDIDO
  onChangeCalculaTotal() {
    //suma valor del detalle al pedido
    let totalPedido:number = 0;
    this.pedido.listaProductos.filter(item => {
      totalPedido += item.total;
      console.log('total item->' + item.total + ' / total pedido->' + totalPedido);
    } );
    this.pedido.subTotal = totalPedido;

    this.pedido.subTotalNeto = Math.round(this.pedido.subTotal - (this.pedido.subTotal * this.pedido.descuento) / 100);
    this.pedido.iva = Math.round(this.pedido.subTotalNeto * 0.19);
    this.pedido.total = Math.round(this.pedido.subTotalNeto + this.pedido.iva);

  }

  // CUANDO AGREGO UN DETALLE ADICIONAL
  addDetalleAdicional(){
    let totalAdicionales:number = 0;
    this.detallePedido.listaAdicionales = this.listaDetallesAdicionales.filter(item => {
      if (item.checked){
        totalAdicionales += item.valor;
        //console.log('item->'+ JSON.stringify(item));
      }
    } );
    this.detallePedido.totalAdicionales = totalAdicionales;
    this.onChangeCalculaTotalDetalle();
    //console.log('this.detallePedido.totalAdicionales-> ' + this.detallePedido.totalAdicionales);
  }

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
    this.editando = false;
 */
}
