import { ActivatedRoute, Router } from '@angular/router';
import { PedidosService } from '../../services/pedidos.service';
import { Pedido } from '../../model/pedido/pedido.model';
import { Component, OnInit} from '@angular/core';
import { Observable } from "rxjs";

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  listaPedidos: Pedido[];
  listaEstadosPedido: any[];
  pedido: Pedido;
  query = '';
  estado: any;

  //verLista: boolean = true;
  tipoForm: string; // USADO PARA DEFINIR LAS TALLAS
  mensaje: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private pedidosService: PedidosService) {

    this.route.params.subscribe(params => {
      this.mensaje = params['id'];
  });
  }

  ngOnInit() {
/*     this.verLista = true;
 */
    //lista de pedidos
    this.pedidosService.getPedidos('buscar', 'Creado', '')
      .subscribe(
        pedidos => this.listaPedidos = pedidos,
        err => console.log(err)
    );
    this.listaEstadosPedido = this.pedidosService.getEstadosPedido();
  }
/*
  //Cierre con boton Volver
  public volver() {
    //this.verForm = false;
    this.toggleLista();
  }
  public toggleLista(){
    this.verLista = !this.verLista;
    console.log('this.verLista ->'+ this.verLista);
  }
 */
  //Ver o Editar Cliente
  editarPedido(pedido: Pedido) {
    this.router.navigate(['/pedidos/formPedido/editar/', pedido.numeroPedido]);
  }

  eliminaPedido(pedido: Pedido){
    console.log('Elimina Pedido..');
    //Cambia el estado del pedido
    pedido.estado = 'Eliminado';
    this.pedidosService.putPedido(pedido).subscribe(data => {
      console.log('pedido eliminado->' + JSON.stringify(data));
      this.pedido = data;
    });
  }
  addTallas(pedido: Pedido){
    console.log('editando tallas...');
    this.router.navigate(['/pedidos/formTallas/', pedido.numeroPedido]);
  }

  addFichaTecnica(pedido: Pedido){
    console.log('editando Ficha Tecnica...');
    this.router.navigate(['/pedidos/formFichaTecnica/', pedido.numeroPedido]);
  }

  submitBuscador(){
    this.pedidosService.getPedidos('buscar', this.estado, this.query).subscribe(data => {
      console.log('observando lista pedidos...');
      this.listaPedidos = data;
    });
  }

}
