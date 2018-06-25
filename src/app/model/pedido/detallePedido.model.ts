export class DetallePedido {
  public idProducto: number;
  public idTipoProducto: number;
  public idRangoPrecio: number;
  public cantidad: number;
  public total: number;
  public llevaDiseno: number; // 0 = no / 1 = si
  public idColor: number; // solo si lleva diseño
  public listaAdicionales: any;
  public listaDetalleTallas: any;
  constructor() {}
}
