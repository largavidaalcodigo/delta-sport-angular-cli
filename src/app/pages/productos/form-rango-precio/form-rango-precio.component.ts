import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Output } from '@angular/core';
import { Producto } from './../../../model/producto/producto.model';
import { CommonsService } from './../../../services/commons.service';
import { ProductosService } from './../../../services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { RangoPrecioProducto } from '../../../model/producto/rangoPrecioProducto.model';
import { TipoProducto } from '../../../model/producto/tipoProducto.model';

@Component({
  selector: 'app-form-rango-precio',
  templateUrl: './form-rango-precio.component.html',
  styleUrls: ['./form-rango-precio.component.css']
})
export class FormRangoPrecioComponent implements OnInit, OnChanges {
  @Input() tipoProducto: TipoProducto;
  @Output() emite = new EventEmitter<TipoProducto>();

  listaRangoPrecioProducto: RangoPrecioProducto[];
  rangoPrecio: RangoPrecioProducto;

  addProducto: any;
  verformProducto: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductosService,
    private commonsService: CommonsService) {
  }

  ngOnInit() {
    this.rangoPrecio = new RangoPrecioProducto();
    console.log('this.rangoPrecio: ', this.rangoPrecio);
  }

  nuevo() {
    this.rangoPrecio  = new RangoPrecioProducto();
    this.rangoPrecio.estado = 'activo';

    this.verformProducto = true;
    this.addProducto = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.tipoProducto != null) {
      this.listaRangoPrecioProducto = this.tipoProducto.rangoPrecio;
      console.log('this.tipoProducto leido : ', JSON.stringify(this.tipoProducto));
    }
  }

  guardar() {
    if (this.addProducto === true) {
      //NUEVO ELEMENTO
      console.log('this.tipoProducto.rangoPrecio: ', this.tipoProducto.rangoPrecio);
      if (this.tipoProducto.rangoPrecio.length === 0) {
        this.tipoProducto.rangoPrecio = new Array();
        this.rangoPrecio.id = this.listaRangoPrecioProducto.length + 1;
        this.tipoProducto.rangoPrecio.push(this.rangoPrecio);
        console.log('this.tipoProducto.rangoPrecio: ', JSON.stringify(this.tipoProducto.rangoPrecio));


        this.emite.emit(this.tipoProducto);
        //EDITAR ELEMENTO
      } else {
        this.rangoPrecio.id = this.listaRangoPrecioProducto.length + 1;
        this.tipoProducto.rangoPrecio.push(this.rangoPrecio);
        this.emite.emit(this.tipoProducto);
      }
      //console.log('this.tipoProducto: ', JSON.stringify(this.tipoProducto));

    }
  }

  verRangoPrecio(item: RangoPrecioProducto) {
    this.verformProducto = false;

    this.rangoPrecio = item;
    this.rangoPrecio.desc = item.desc;
    this.rangoPrecio.estado = item.estado;
    console.log('this.rangoPrecio: ', this.rangoPrecio);

  }

  cancelar() {
    this.verformProducto = false;
    this.tipoProducto = new TipoProducto();
    this.tipoProducto.estado = "Activo";
  }
}
