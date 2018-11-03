import { Producto } from './../../../model/producto/producto.model';
import { CommonsService } from './../../../services/commons.service';
import { ProductosService } from './../../../services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-rango-precio',
  templateUrl: './form-rango-precio.component.html',
  styleUrls: ['./form-rango-precio.component.css']
})
export class FormRangoPrecioComponent implements OnInit {
  @Input() producto: Producto;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductosService,
    private commonsService: CommonsService) {
  }
  listaProductos: any;

  //Nivel: Categoria->prod  ucto->rango precio
  ngOnInit() {
    this.commonsService.getProductos().subscribe(
      productos => {
        this.listaProductos = productos;
        console.log('productos->' + JSON.stringify(productos));
      },
      err => {console.log(err);
      });
  }



}
