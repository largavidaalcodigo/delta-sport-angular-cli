import { DetallePedido } from './detallePedido';
export class Pedido {
  public numeroPedido: number; //pk
  public fechaEntrega: string;
  public listaProductos: DetallePedido[];
  public total: number;
  public rutCliente: string; //fk
  public idUsuario: number;
  public idEstado: number;

  constructor(){}
}
