import { Router, ActivatedRoute } from '@angular/router';
import { ProductosService } from './../../../services/productos.service';
import { CommonsService } from './../../../services/commons.service';
import { OnInit, Component } from '@angular/core';
import { Producto } from '../../../model/producto/producto.model';
declare var toastr: any;

@Component({
  selector: 'app-form-producto',
  templateUrl: 'form-producto.component.html',
  styleUrls: ['form-producto.component.css']
})
export class FormProductoComponent implements OnInit {

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
    private productoService: ProductosService,
    private commonsService: CommonsService) {
  }

  ngOnInit() {
    this.commonsService.getProductos().subscribe(
      productos => {
        this.listaProductos = productos;
        console.log('productos->' + JSON.stringify(productos));
      },
      err => {console.log(err)
    });
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

  updateProducto(producto: Producto) {
    this.producto = producto;
    this.productoService.putProducto(this.producto).subscribe(data => {
      console.log('producto actualizado->' + JSON.stringify(data));
      this.producto = data;

        //Emite mensaje
        toastr.info('El producto se ha actualizado exitosamente', this.producto.desc);
        this.cancelarProducto();
    });
  }

  addProductos(id) {
    this.router.navigate(['/productos/categoria', id]);
  }

}
