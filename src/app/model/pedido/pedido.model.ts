import { Cliente } from './../cliente/cliente.model';
import { DetallePedido } from './detallePedido.model';
export class Pedido {
  public numeroPedido: number; //pk
  public fechaEntrega: string;
  public listaProductos: DetallePedido[];
  public total: number;
  public cliente: Cliente; //fk
  public idUsuario: number;
  public idEstado: number;

  constructor(){}
}
