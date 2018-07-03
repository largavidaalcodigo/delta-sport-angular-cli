import { DetalleAdicional } from './../producto/detalleAdicional.model';
export class DetallePedido {
  public id: number;
  public idProducto: number;
  public descProducto: string;
  public idTipoProducto: number;
  public descTipoProducto: string;
  public idRangoPrecio: number;
  public descRangoPrecio: string;
  public cantidad: number = 1;
  public valor: number;
  public total: number;
  public llevaDiseno: number = 1; // 0 = no / 1 = si
  public idColor: number; // solo si llevaDiseño = 0
  public listaAdicionales: DetalleAdicional[];
  public totalAdicionales: number;
  public listaDetalleTallas: any;
  constructor() {}
}
