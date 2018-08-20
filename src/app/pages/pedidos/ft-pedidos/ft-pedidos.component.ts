import { NgForm } from '@angular/forms';
import { DetallePedido } from './../../../model/pedido/detallePedido.model';
import { ImgFT } from './../../../model/producto/imgFT.model';
import { TipoCuelloFT } from './../../../model/producto/tipoCuelloFT.model';
import { TipoProductoFT } from './../../../model/producto/tipoProductoFT.model';
import { FichaTecnica } from './../../../model/producto/fichaTecnica.model';
import { Color } from './../../../model/producto/color.model';
import { Pedido } from './../../../model/pedido/pedido.model';
import { ClientesService } from './../../../services/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidosService } from './../../../services/pedidos.service';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-ft-pedidos',
  templateUrl: './ft-pedidos.component.html',
  styleUrls: ['./ft-pedidos.component.css']
})
export class FtPedidosComponent implements OnInit {
  tipoForm: string;
  pedido: Pedido;
  listaColores: Color[];
  listaTelas: any[] = new Array();
  nombreBoton: string;
  detalleFichaTecnica: FichaTecnica;
  listaTipoProductoFT: TipoProductoFT[];
    tipoProductoFT: TipoProductoFT;
  listaTipoCuelloFT: TipoCuelloFT[];
    tipoCuelloFT: TipoCuelloFT;
  listaTerminacionFT: string[];
    terminacionFT: string;
  listaEstampadoFT: string[];
    estampadoFT: string;
  listaImgFT: ImgFT[];
    imgFT: ImgFT;

  titulo = 'Ficha Técnica';

  constructor(private route: ActivatedRoute,
    private router: Router,
    private pedidosService: PedidosService,
    private location: Location,
    private clientesService: ClientesService) {}

  ngOnInit() {
    this.tipoForm = this.route.snapshot.params['tipoForm'];

    this.listaEstampadoFT = this.pedidosService.getEstampado();
    this.listaTerminacionFT = this.pedidosService.getTerminacion();
    this.listaColores = this.pedidosService.getColores();
    this.listaTelas = this.pedidosService.getTelas();

    this.detalleFichaTecnica = new FichaTecnica();
    this.tipoProductoFT = new TipoProductoFT();
    this.listaTipoProductoFT = new Array();
    this.listaTipoCuelloFT = new Array();
    this.tipoCuelloFT = new TipoCuelloFT();

    //Obtiene pedido segun id
    this.pedidosService.getPedido(this.route.snapshot.params['id']).subscribe(data => {
      console.log('Editando ft->' + JSON.stringify(data));
      this.pedido = data;
      this.titulo += ' - Pedido nro[' + this.pedido.numeroPedido + ']';
    });

  }

  onSubmit() {
    this.pedido.idEstado = 3; //ficha tecnica
    this.pedido.estado = 'En proceso';

    this.pedidosService.putPedido(this.pedido).subscribe(data => {
      console.log('pedido actualizado->' + JSON.stringify(data));
      this.pedido = data;
    });
    this.router.navigate(['/pedidos', '<strong>Pedido nro. ['+ this.pedido.numeroPedido + ']</strong> Actualizado exitosamente']);
  }

  addTipoProductoFT(detalle: DetallePedido, form: NgForm) {
    console.log('agregando tipo producto FT');
    detalle.fichaTecnica.listaTipoProducto.push(this.tipoProductoFT);
    this.tipoProductoFT = new TipoProductoFT();
    form.resetForm();
  }

  addTipoCuelloFT(detalle: DetallePedido, form: NgForm) {
    console.log('agregando tipo cuello FT');
    detalle.fichaTecnica.listaTipoCuello.push(this.tipoCuelloFT);
    this.tipoCuelloFT = new TipoCuelloFT();
    form.resetForm();
  }

  addTerminacionFT(detalle: DetallePedido, form: NgForm) {
    console.log('agregando Terminacion FT');
    detalle.fichaTecnica.listaTerminacion.push(this.terminacionFT);
    this.terminacionFT = '';
    form.resetForm();
  }

  addEstampadoFT(detalle: DetallePedido, form: NgForm) {
    console.log('agregando Estampado FT');
    detalle.fichaTecnica.listaEstampado.push(this.estampadoFT);
    this.estampadoFT = '';
    form.resetForm();
  }

  eliminaTipoProductoFT(detalle: DetallePedido, id: number) {
    detalle.fichaTecnica.listaTipoProducto.splice(id, 1);
    console.log('eliminando Tipo Producto Tela FT ->' + id);
  }

  eliminaTipoCuelloFT(detalle: DetallePedido, id: number) {
    detalle.fichaTecnica.listaTipoCuello.splice(id, 1);
    console.log('eliminando Tipo Cuello FT ->' + id);
  }

  eliminaTerminacionFT(detalle: DetallePedido, id: number) {
    detalle.fichaTecnica.listaTerminacion.splice(id, 1);
    console.log('eliminando Terminacion FT ->' + id);
  }

  eliminaEstampadoFT(detalle: DetallePedido, id: number) {
    detalle.fichaTecnica.listaEstampado.splice(id, 1);
    console.log('eliminando Estampado FT ->' + id);
  }

  goBack() {
    this.location.back();
  }

}
