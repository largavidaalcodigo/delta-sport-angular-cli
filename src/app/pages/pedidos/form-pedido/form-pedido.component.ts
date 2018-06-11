import { RangoPrecioProducto } from "./../../../model/rangoPrecioProducto";
import { TipoProducto } from "./../../../model/tipoProducto.model";
import { Producto } from "./../../../model/producto.model";
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
  selector: "app-form-pedido",
  templateUrl: "./form-pedido.component.html"
})
export class FormPedidoComponent implements OnInit {
  @ViewChild("pedidoForm") pedidoForm: NgForm; //captura el valor del formulario
  @Input() verForm: boolean;
  @Input() tipoForm: string;
  @Input() pedido: Pedido; //Puede venir con datos
  @Output() public salir = new EventEmitter();

  //Listas producto
  listaProductos: any;
  listaTipoProducto: any;
  listaRangoPrecios: any;

  //Detalle producto
  itemProducto: RangoPrecioProducto;
  cantidad: number = 1;
  total: number;

  //Detalle Pedido
  fechaPedido: string;
  totalPedido: number;

  //Valores seleccionados
  productoSeleccionado = 0;
  tipoProductoSeleccionado = 0;
  rangoPrecioSeleccionado = 0;

  constructor(private pedidosService: PedidosService) {
    //Lista de productos
    this.listaProductos = this.pedidosService.getProductos();

    console.log("<<<<<< Form pedido >>>>>>");
    console.log("tipoForm->" + this.tipoForm);
  }

  ngOnInit() {
    this.itemProducto = new RangoPrecioProducto(0, 0, '', 0);
  }

  onSelectProducto(productoId: number) {
    this.productoSeleccionado = productoId;
    this.listaTipoProducto = this.pedidosService
      .getTipoProductos()
      .filter(item => item.idProducto == productoId);
    console.log("tipos de producto" + JSON.stringify(this.listaTipoProducto));
  }

  onSelectTipoProducto(tipoProductoId: number) {
    this.tipoProductoSeleccionado = tipoProductoId;
    this.listaRangoPrecios = this.pedidosService
      .getRangoPrecios()
      .filter(item => item.idTipoProducto == tipoProductoId);
    console.log("rango de precios" + JSON.stringify(this.listaRangoPrecios));
  }

  onSelectRangoPrecio(rangoPrecioId: number) {
    console.log("rangoPrecioId->" + rangoPrecioId);
    this.itemProducto = this.listaRangoPrecios.find(
      item => item.id == rangoPrecioId
    );
  }

  onChangeCalculaTotal(cantidad: number) {
    this.total = cantidad * this.itemProducto.valor;
    console.log(
      "cantidad->" +
        cantidad +
        "valor->" +
        this.itemProducto.valor +
        "/ total->" +
        this.total
    );
  }

  emiteVolver() {
    this.pedidoForm.reset();
    this.salir.emit();
  }

  onSubmit() {
    this.pedido.rutCliente = this.pedidoForm.value.rutCliente;
    // this.pedido.estadoPedido = 1; //0= inactivo , 1=activo

    // add
    if (this.tipoForm == "Nuevo") {
      this.pedidosService.addPedido(this.pedido).subscribe(pedido => {
        this.pedido = pedido;
        console.log("nuevo  insertado->" + pedido);
      });

      //update
    } else if (this.tipoForm == "Ver") {
      this.pedidosService.putPedido(this.pedido).subscribe(pedido => {
        this.pedido = pedido;
        console.log("pedido actualizado->" + pedido);
      });
    }
    this.emiteVolver();
  }
}
