import { DetalleTipoProducto } from './../../model/producto/detalleTipoProducto.model';
import { PedidosService } from './../../services/pedidos.service';
import { Productos } from './../../model/producto/productos.model';
import { CommonsService } from '../../services/commons.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from '../../model/cliente/cliente.model';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  listaTipoMantenedor: any[];
  tipoMantenedor: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pedidosService: PedidosService,
    private commonsService: CommonsService) {

     this.route.params.subscribe(params => {
      //console.log(params['id']);
      this.tipoMantenedor = params['id'];
      console.log('leyendo id->'+ this.tipoMantenedor);
      this.commonsService.getProductos(this.tipoMantenedor);
    });
  }

  ngOnInit() {
    this.listaTipoMantenedor = this.commonsService.getTipoMantenedor();

      const detalleTipoProducto = new DetalleTipoProducto;
      detalleTipoProducto.descripcion = 'Telas';
      detalleTipoProducto.tipoProducto = new Array();
      for(let i of this.pedidosService.getTelas()){
        console.log('add telas->'+i);
        detalleTipoProducto.tipoProducto.push(i);
      }
      const productos = new Productos();
      productos.listaTipoProducto = new Array();
      productos.listaTipoProducto.push(detalleTipoProducto);

      this.commonsService.addProducto(productos);

  }


}
