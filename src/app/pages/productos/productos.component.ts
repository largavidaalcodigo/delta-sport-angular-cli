import { DetalleTipoProducto } from '../../model/producto/detalleTipoProducto.model';
import { PedidosService } from '../../services/pedidos.service';
import { Productos } from '../../model/producto/productos.model';
import { CommonsService } from '../../services/commons.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from '../../model/cliente/cliente.model';
import { Component, OnInit} from '@angular/core';
import { Producto } from '../../model/producto/producto.model';
import { ProductosService } from '../../services/productos.service';
import { TipoProducto } from '../../model/producto/tipoProducto.model';
declare var toastr: any;

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  addProducto: any;
  verformProducto: any;
  listaTipoMantenedor: any[];
  tipoMantenedor: any;
  listaProductos: Producto[];
  producto: Producto;
  descripcionProducto: string;
  estadoProducto: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pedidosService: PedidosService,
    private productoService: ProductosService,
    private commonsService: CommonsService) {

     this.route.params.subscribe(params => {
      //console.log(params['id']);
      this.tipoMantenedor = params['id'];
      console.log('leyendo id->'+ this.tipoMantenedor);


    });
  }

  ngOnInit() {
    this.listaTipoMantenedor = this.commonsService.getTipoMantenedor();
  }

  nuevoProducto(){
    this.verformProducto = true;
    this.addProducto = true;
    this.producto = new Producto();
    this.producto.estado = 'activo';
  }

  verProducto(item: Producto) {
    this.producto = item;
    this.descripcionProducto = item.desc;
    this.estadoProducto = item.estado;
    this.verformProducto = true;
    console.log('producto->' + JSON.stringify(item) + ' / this.verformProducto->' + this.verformProducto);
  }

  cancelarProducto() {
    this.verformProducto = false;
    this.descripcionProducto = '';
    this.estadoProducto = '';
  }

  guardarProducto() {
    this.producto.desc = this.descripcionProducto;

    if (this.addProducto === true) {
      this.productoService.postProducto(this.producto).subscribe(data => {
        console.log('producto actualizado->' + JSON.stringify(data));
        this.producto = data;

          //Emite mensaje
          toastr.info('El producto se ha creado exitosamente', this.producto.desc);
          this.cancelarProducto();
      });
    } else {
      this.producto.estado = this.estadoProducto;

      this.productoService.putProducto(this.producto).subscribe(data => {
        console.log('producto actualizado->' + JSON.stringify(data));
        this.producto = data;

          //Emite mensaje
          toastr.info('El producto se ha actualizado exitosamente', this.producto.desc);
          this.cancelarProducto();
      });

    }
  }

  addProductos(id) {
    this.router.navigate(['/productos/categoria', id]);
  }

}
