import { DetalleAdicional } from './../producto/detalleAdicional.model';
export class DetallePedido {
  public idProducto: number;
  public idTipoProducto: number;
  public idRangoPrecio: number;
  public cantidad: number;
  public valor: number;
  public total: number;
  public llevaDiseno: number; // 0 = no / 1 = si
  public idColor: number; // solo si llevaDiseño = 0
  public listaAdicionales: DetalleAdicional[];
  public listaDetalleTallas: any;
  public comentarios: string;
  constructor() {}
}
