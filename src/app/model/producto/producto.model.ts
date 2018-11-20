import { TipoProducto } from './tipoProducto.model';
export class Producto {
  public id: number;
  public desc: string;
  public estado: string;
  public tipoProducto: TipoProducto[];
  constructor() {
  }
}
