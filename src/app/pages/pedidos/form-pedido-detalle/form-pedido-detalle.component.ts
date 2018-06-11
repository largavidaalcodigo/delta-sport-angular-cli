import { RangoPrecioProducto } from './../../../model/rangoPrecioProducto';
import { PedidosService } from "./../../../services/pedidos.service";
import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { Pedido } from "../../../model/pedido.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-form-pedido-detalle",
  templateUrl: "./form-pedido-detalle.component.html"
})
export class FormPedidoDetalleComponent implements OnInit {
  @ViewChild("detallePedidoForm") detallePedidoForm: NgForm; //captura el valor del formulario
  listaProductos: any;
  itemProducto: RangoPrecioProducto;
  listaTipoProducto: any;
  listaRangoPrecios: any;
  cantidad: number = 1;
  total: number;
  productoSeleccionado = 0;
  tipoProductoSeleccionado = 0;
  rangoPrecioSeleccionado = 0;

/*   @Input() verForm: boolean;
  @Input() pedido: Pedido; //Puede venir con datos
  @Input() tipoForm: string;
  @Output() public salir = new EventEmitter(); */

  constructor(private pedidosService: PedidosService) {
    console.log("<<<<<< Form detalle pedido >>>>>>");

    this.itemProducto = new RangoPrecioProducto(0,0,'',0);
    //Lista de productos

    this.listaProductos = this.pedidosService.getProductos();
    console.log("listaProductos->" + this.listaProductos);
  }

  ngOnInit() {}

  onSelectProducto(productoId: number) {
    this.productoSeleccionado = productoId;
    this.listaTipoProducto = this.pedidosService
      .getTipoProductos()
      .filter(item => item.idProducto == productoId);
    console.log("tipos de producto" + JSON.stringify(this.listaTipoProducto));
  }

  onSelectTipoProducto(tipoProductoId: number) {
    this.tipoProductoSeleccionado = tipoProductoId;
    this.listaRangoPrecios = this.pedidosService.getRangoPrecios()
      .filter(item => item.idTipoProducto == tipoProductoId);
    console.log("rango de precios" + JSON.stringify(this.listaRangoPrecios));
  }

  onSelectRangoPrecio(rangoPrecioId: number) {
    console.log('rangoPrecioId->'+ rangoPrecioId);
    this.itemProducto = this.listaRangoPrecios.find(item => item.id == rangoPrecioId);
  }

  onChangeCalculaTotal(cantidad: number){
    this.total = cantidad * this.itemProducto.valor;
    console.log('cantidad->'+ cantidad + 'valor->'+ this.itemProducto.valor + '/ total->'+ this.total);
  }
}
