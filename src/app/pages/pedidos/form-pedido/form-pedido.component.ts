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
  listaProductos: any;
  listaTipoProducto: any;
  productoSeleccionado = 0;
  tipoProductoSeleccionado = 0;

  @Input() verForm: boolean;
  @Input() pedido: Pedido; //Puede venir con datos
  @Input() tipoForm: string;

  @Output() public salir = new EventEmitter();

  constructor(private pedidosService: PedidosService) {
    console.log("<<<<<< Form pedido >>>>>>");
    console.log("tipoForm->" + this.tipoForm);
    console.log("pedido->" + this.pedido);

    //Lista de productos
    this.listaProductos = this.pedidosService.getProductos();
    console.log('listaProductos->' + this.listaProductos);
    /*     this.pedidosService.getProductos().subscribe(productos => {
      console.log("obteniendo lista productos...");
      this.listaProductos = productos;

    });
 */
    //Lista tipo de productos
/*     this.pedidosService.getTipoProductos().subscribe(data => {
      console.log("obteniendo lista tipo de productos...");
      this.listaTipoProducto = data;
      console.log(this.listaTipoProducto);
    });
 */  }

  ngOnInit() {
  }

  onSelect(productoId: number) {
    this.productoSeleccionado = productoId;
    this.listaTipoProducto = this.pedidosService.getTipoProductos()
    .filter((item) => item.idProducto == productoId);

    //console.log('lista tipo producto->' + JSON.stringify(this.listaTipoProducto));

    /* .filter(<Producto>(item) => item.id == productoId);
*/
    console.log("producto seleccionado ->" + this.productoSeleccionado);
    console.log('tipos de producto'+ JSON.stringify(this.listaTipoProducto));
  }

  emiteVolver() {
    this.pedidoForm.reset();
    this.salir.emit();
  }

  onSubmit() {
    this.pedido.rutCliente = this.pedidoForm.value.rutCliente;
    //this.pedido.estadoPedido = 1; //0= inactivo , 1=activo

    //add
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
