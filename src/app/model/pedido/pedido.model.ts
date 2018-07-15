import { MedioPago } from './medioPago.model';
import { Cliente } from './../cliente/cliente.model';
import { DetallePedido } from './detallePedido.model';
import { Comentario } from './comentario.model';
export class Pedido {
  public numeroPedido: number; //pk
  public fechaCreacion: Date;
  public fechaEntrega: Date;
  public listaProductos: DetallePedido[];
  public cliente: Cliente; //fk
  public idUsuario: number;
  public idEstado: number;

  public subTotal: number; //en %
  public descuento: number; //en %
  public subTotalNeto: number;
  public iva: number;
  public total: number;
  public listaComentarios: Comentario[];
  public listaMediosPago: MedioPago[];
  public totalMediosPago: number = 0;

  constructor(){}
}
