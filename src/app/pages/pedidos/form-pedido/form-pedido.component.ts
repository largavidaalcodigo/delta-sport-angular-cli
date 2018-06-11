import { RangoPrecioProducto } from './../../../model/rangoPrecioProducto';
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
  listaDetallePedido: any[];
  itemProducto: RangoPrecioProducto;
  totalPedido: number;

  @Input() verForm: boolean;
  @Input() pedido: Pedido; //Puede venir con datos
  @Input() tipoForm: string;
  @Output() public salir = new EventEmitter();

  constructor(private pedidosService: PedidosService) {
    console.log("<<<<<< Form pedido >>>>>>");
    console.log("tipoForm->" + this.tipoForm);
  }

  ngOnInit() {}

  emiteVolver() {
    this.pedidoForm.reset();
    this.salir.emit();
  }
  addDetallePedido(){
    this.itemProducto = new RangoPrecioProducto(0,0,'',0);
    this.listaDetallePedido.push(this.itemProducto);
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
