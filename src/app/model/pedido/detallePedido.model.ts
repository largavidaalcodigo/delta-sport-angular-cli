export class DetallePedido {
  public idProducto: number;
  public idTipoProducto: number;
  public idRangoPrecio: number;
  public cantidad: number;
  public total: number;
  public llevaDiseno: number; // 0 = no / 1 = si
  public idColor: number; // solo si llevaDiseño = 0
  public listaAdicionales: any;
  public listaDetalleTallas: any;
  public comentarios: string;
  constructor() {}
}
