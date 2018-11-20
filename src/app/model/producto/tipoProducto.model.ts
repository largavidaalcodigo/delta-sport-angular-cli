import { RangoPrecioProducto } from './rangoPrecioProducto.model';
export class TipoProducto {
  public id: number;
  public desc: string;
  public estado: string;
  public rangoPrecio: RangoPrecioProducto[];
  constructor() {
  }
}
