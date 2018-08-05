import { DetalleTalla } from '../../../model/producto/detalleTalla.model';
import { DetallePedido } from '../../../model/pedido/detallePedido.model';
import { DetalleAdicional } from '../../../model/producto/detalleAdicional.model';
import { MedioPago } from '../../../model/pedido/medioPago.model';
import { Observable } from 'rxjs';
import { Cliente } from '../../../model/cliente/cliente.model';
import { Color } from '../../../model/producto/color.model';
import { TipoProducto } from '../../../model/producto/tipoProducto.model';
import { RangoPrecioProducto } from '../../../model/producto/rangoPrecioProducto.model';
import { Pedido } from '../../../model/pedido/pedido.model';

import { ClientesService } from '../../../services/clientes.service';
import { PedidosService } from '../../../services/pedidos.service';
import { NgForm } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';

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
 /*  @ViewChild('encabezadoPedidoForm') encabezadoPedidoForm: NgForm;
  @ViewChild('detallePedidoForm') detallePedidoForm: NgForm;
  */
/*   @Input() verForm: boolean;
  @Input() tipoForm: string;
  @Input() pedido: Pedido; //Puede venir con datos
  @Output() public salir = new EventEmitter(); */
  pedido: Pedido;
  tipoForm: string;

  //Lista Detalle pedido
  detallePedido: DetallePedido;
  detalleTallas: DetalleTalla;
  medioPago: MedioPago;
  nombreBoton: string="Guardar";
  //listaDetallePedido: DetallePedido[] = new Array();
  rangoPrecioProducto: RangoPrecioProducto;

  //Listas
  listaProductos: Producto[];
  listaTipoProducto: TipoProducto[];
  listaRangoPrecios: RangoPrecioProducto[];
  listaColores: Color[];
  listaClientes: Cliente[];
  listaDetallesAdicionales: any[] = new Array();
  listaDetallesTallas: any[] = new Array();

  cantidadProductos: number;
  cantidadComentarios: number;
  queryBuscaCliente: string; //input text search del Cliente

  //Medio pago
  listaMediosPago: any[] = new Array();

  //saldoPendiente: number;
  editando: boolean = false;
  id: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private pedidosService: PedidosService,
    private clientesService: ClientesService) {}

  ngOnInit() {
    console.log('Se inicia form pedido');
    this.tipoForm = this.route.snapshot.params['tipoForm'];
/*
    let sub = this.route.params.subscribe(params => {
      console.log(params);
      this.tipoForm = params['tipoForm'];
    });
 */
    if (this.tipoForm == 'editar'){
      //Obtiene el pedido desde la bd
      this.pedidosService.getPedido(this.route.snapshot.params['id']).subscribe(data => {
        console.log('Editando pedido->' + JSON.stringify(data));
        this.pedido = data;
      });
      //this.onChangeCalculaTotal();
//      this.queryBuscaCliente = this.pedido.cliente.rutCliente + ' - ' + this.pedido.cliente.nombresCliente + ' ' + this.pedido.cliente.apellidoPaternoCliente;
      this.nombreBoton = 'Actualizar';
//      this.onChangeCalculaTotal();

    }else if (this.tipoForm == 'tallas'){
      console.log('Editando tallas');
      this.pedidosService.getPedido(this.route.snapshot.params['id']).subscribe(data => {
        console.log('Editando tallas->' + JSON.stringify(data));
        this.pedido = data;
      });
    }

    if (this.pedido == null) {
      console.log('nuevo pedido');
      this.pedido = new Pedido();
      this.pedido.idEstado = 1; //0= inactivo , 1=activo
      this.pedido.fechaCreacion = new Date();
      this.pedido.subTotal = 0;
      this.pedido.descuento = 0;
      this.pedido.listaProductos = new Array();
      this.pedido.listaMediosPago = new Array();
    }

    this.listaColores = this.pedidosService.getColores();
    this.listaMediosPago = this.pedidosService.getMediosPago();
    this.listaDetallesAdicionales = this.pedidosService.getDetallesAdicionales();

    //lista de pedidos
    this.clientesService.getClientes().subscribe(data => {
      console.log('obteniendo lista clientes...');
      console.log(data);
      this.listaClientes = data;
    });

    this.listaProductos = this.pedidosService.getProductos();

    this.detallePedido = new DetallePedido();
    this.medioPago = new MedioPago();
    this.detallePedido.listaAdicionales = new Array();
    this.detallePedido.listaDetalleTallas = new Array();
    this.rangoPrecioProducto = new RangoPrecioProducto();
  }

  addCliente(cliente: Cliente) {
    this.pedido.cliente = cliente;
    this.queryBuscaCliente = cliente.rutCliente + ' - ' + cliente.nombresCliente + ' ' + cliente.apellidoPaternoCliente;
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

/*   onSelectSinDiseno(llevaDiseño: number){
      console.log('llevaDiseño->'+llevaDiseño);
  } */

  emiteVolver() {
    //this.pedidoForm.reset();
    //this.salir.emit();
    //this.router.navigate(['/pedidos', 'Pedido creado']);

  }


  onSubmitDetalle() {
    if (this.editando){
      this.detallePedido.listaAdicionales = this.listaDetallesAdicionales.filter(item => item.checked);
    }else if (this.tipoForm == 'tallas'){

    }else{
      //this.pedido.rutCliente = this.pedidoForm.value.rutCliente;

      //setea Correlativo nro item
      this.detallePedido.id = this.pedido.listaProductos.length + 1;

      // SETEA NOMBRE DE CATEGORIA/PRODUCTO/RANGO PRECIO
      const producto: Producto = this.listaProductos.find(item => item.idProducto == this.detallePedido.idProducto);
      this.detallePedido.descProducto = producto.desc;
      this.detallePedido.descTipoProducto = this.listaTipoProducto.find(item => item.id == this.detallePedido.idTipoProducto).desc;
      this.detallePedido.descRangoPrecio = this.listaRangoPrecios.find(item => item.id == this.detallePedido.idRangoPrecio).desc;

      this.detallePedido.listaAdicionales = this.listaDetallesAdicionales.filter(item => item.checked);

      //TALLAS
      this.listaDetallesTallas = new Array();
      for (let c = 0; c < this.detallePedido.cantidad; c++) {
        this.detalleTallas = new DetalleTalla();
        this.detalleTallas.numero = '';
        this.detalleTallas.nombrePecho = '';
        this.detalleTallas.nombreEspalda = '';
        this.listaDetallesTallas.push(this.detalleTallas);
      }
      this.detallePedido.listaDetalleTallas = this.listaDetallesTallas;



      this.cantidadProductos = this.pedido.listaProductos.push(this.detallePedido);

      console.log("nuevo item->"+ JSON.stringify(this.detallePedido));
      this.detallePedido = new DetallePedido();
    }
    //Calcula el total
    this.onChangeCalculaTotal();

   //this.pedido.listaProductos = this.listaDetallePedido;
    this.detallePedido = new DetallePedido();
    this.listaDetallesAdicionales = this.pedidosService.getDetallesAdicionales();
  }

  nuevoDetalle(){
    this.detallePedido = new DetallePedido();
    this.listaDetallesAdicionales = this.pedidosService.getDetallesAdicionales();
    this.editando = false;
  }

  verProducto(detallePedido: DetallePedido) {
    this.editando = true;
    const detalle: DetallePedido = detallePedido;
    this.detallePedido = detalle;
    this.onSelectTipoProducto(this.detallePedido.idTipoProducto);
    this.onSelectRangoPrecio(this.detallePedido.idRangoPrecio);

    //this.listaDetallesAdicionales = detallePedido.listaAdicionales;
    for (let c of this.listaDetallesAdicionales) {
      c.checked = false;
      for (let d of this.detallePedido.listaAdicionales) {
        if (c.id == d.id){
          c.checked = true;
          break;
        }
      }
    }

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
    console.log('Calculando total...');
    //suma valor del detalle al pedido
    let totalPedido:number = 0;
    console.log('this.pedido.listaProductos: ', this.pedido.listaProductos);
    this.pedido.listaProductos.filter(item => {
      totalPedido += item.total;
      console.log('total item->' + item.total + ' / total pedido->' + totalPedido);
    } );
    this.pedido.subTotal = totalPedido;

    this.pedido.subTotalNeto = Math.round(this.pedido.subTotal - (this.pedido.subTotal * this.pedido.descuento)
     / 100);
    this.pedido.iva = Math.round(this.pedido.subTotalNeto * 0.19);
    this.pedido.total = Math.round(this.pedido.subTotalNeto + this.pedido.iva);

    this.pedido.totalMediosPago=0;
    for (let c of this.pedido.listaMediosPago) {
      this.pedido.totalMediosPago += c.montoPago;
    }
    console.log('this.pedido.totalMediosPago->' + this.pedido.totalMediosPago);
    this.pedido.totalPagoPendiente = this.pedido.total - this.pedido.totalMediosPago;
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

  nuevoMedioPago() {
    this.medioPago = new MedioPago();
    this.medioPago.fechaPago = new Date();
  }
  addMedioPago() {
    console.log('agregando medio pago');
    this.pedido.listaMediosPago.push(this.medioPago);
    this.pedido.totalMediosPago = 0;
    this.onChangeCalculaTotal();
  }

  guardarPedido(){
    if (this.tipoForm == 'editar' || this.tipoForm == 'tallas') {
      this.pedidosService.putPedido(this.pedido).subscribe(data => {
        console.log('pedido actualizado->' + JSON.stringify(data));
        this.pedido = data;
      });
      this.router.navigate(['/pedidos', '<strong>Pedido nro. ['+ this.pedido.numeroPedido + ']</strong> Actualizado exitosamente']);

    }else if (this.tipoForm == 'nuevo') {
      //Contador de pedidos
      this.pedidosService.countPedidos().subscribe(countPedidos => {
        this.pedido.numeroPedido = countPedidos + 1;
        console.log('countPedidos->' + countPedidos);
      });

      console.log('insertando pedido...');
      this.pedidosService.addPedido(this.pedido).subscribe(pedido => {
        this.pedido = pedido;
        console.log('nuevo  insertado->' + JSON.stringify(this.pedido));
      });
      this.router.navigate(['/pedidos', '<strong>Pedido nro. ['+ this.pedido.numeroPedido + ']</strong> Creado exitosamente']);
    }
  }

  eliminaProducto(id: number){
    this.pedido.listaProductos.splice(id, 1);
    this.cantidadProductos=this.pedido.listaProductos.length;
    this.onChangeCalculaTotal();
    console.log('eliminando producto->' + id);
  }

  eliminaMedioPago(id: number){
    this.pedido.listaMediosPago.splice(id, 1);
    this.onChangeCalculaTotal();
    console.log('eliminando medio pago->' + id);
  }

}
