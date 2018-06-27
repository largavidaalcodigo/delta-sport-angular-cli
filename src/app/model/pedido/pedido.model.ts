import { Cliente } from './../cliente/cliente.model';
import { DetallePedido } from './detallePedido.model';
export class Pedido {
  public numeroPedido: number; //pk
  public fechaCreacion: Date;
  public fechaEntrega: Date;
  public listaProductos: DetallePedido[];
  public total: number;
  public cliente: Cliente; //fk
  public idUsuario: number;
  public idEstado: number;

  constructor(){}
}
