import { Producto } from './../producto/producto.model';
import { FichaTecnica } from '../producto/fichaTecnica.model';
import { DetalleTalla } from '../producto/detalleTalla.model';
import { DetalleAdicional } from '../producto/detalleAdicional.model';
export class DetallePedido {
  public id: number;
  public producto: Producto;
/*   public idProducto: number;
  public descProducto: string;
  public idTipoProducto: number;
  public descTipoProducto: string;
  public idRangoPrecio: number;
  public descRangoPrecio: string;
 */
  public cantidad: number = 1;
  public valor: number;
  public subTotal: number;
  public llevaDiseno: number = 1; // 0 = no / 1 = si
  public idColor: number; // solo si llevaDiseño = 0
  public listaAdicionales: DetalleAdicional[];
  public totalAdicionales: number = 0;
  public listaDetalleTallas: DetalleTalla[];
  public total: number = 0;
  public tipoJugador: string;
  //Ficha Tecnica
  public fichaTecnica: FichaTecnica;
  constructor() {}
}
