import { RangoPrecioProducto } from './../../../model/producto/rangoPrecioProducto.model';
import { TipoProducto } from './../../../model/producto/tipoProducto.model';
import { Producto } from '../../../model/producto/producto.model';
import { CommonsService } from '../../../services/commons.service';
import { ProductosService } from '../../../services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'app-form-tipo-producto',
  templateUrl: './form-tipo-producto.component.html',
  styleUrls: ['./form-tipo-producto.component.css']
})
export class FormTipoProductoComponent implements OnInit, OnChanges {
  @Input()
  producto: Producto;
  @Output()
  emite = new EventEmitter<Producto>();

  addProducto: any;
  verformProducto: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductosService,
    private commonsService: CommonsService
  ) {}
  listaTipoProducto: TipoProducto[];
  tipoProducto: TipoProducto;

  //Nivel: Categoria->producto->rango precio
  ngOnInit() {
    this.tipoProducto = new TipoProducto();
    this.tipoProducto.estado = 'activo';
  }

  nuevo() {
    this.tipoProducto = new TipoProducto();
    this.tipoProducto.estado = 'activo';

    this.verformProducto = true;
    this.addProducto = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.producto != null) {
      this.listaTipoProducto = this.producto.tipoProducto;
      console.log('this.producto.tipoProducto: ', this.producto.tipoProducto);
    }
  }

  guardar() {
    if (this.addProducto === true) {
      if (this.producto.tipoProducto == null) {
        this.producto.tipoProducto = new Array();
      }
      console.log('this.tipoProducto: ', this.tipoProducto);
      this.tipoProducto.id = this.listaTipoProducto.length + 1;
      this.producto.tipoProducto.push(this.tipoProducto);
      console.log('this.producto: ', JSON.stringify(this.producto));

      this.emite.emit(this.producto);
    } else {
      this.emite.emit(this.producto);
    }
  }

  updateTipoProducto(tipoProducto: TipoProducto) {
    //this.tipoProducto = tipoProducto;
    this.emite.emit(this.producto);
  }

  verTipoProducto(item: TipoProducto) {
    this.verformProducto = false;
    this.tipoProducto = item;
    this.tipoProducto.desc = item.desc;
    this.tipoProducto.estado = item.estado;
    //console.log('this.tipoProducto: ', this.tipoProducto);
  }

  cancelar() {
    this.verformProducto = false;
    this.tipoProducto = new TipoProducto();
    this.tipoProducto.estado = 'Activo';
  }
}
