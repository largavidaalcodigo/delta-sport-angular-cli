export class Pedido {
  public numeroPedido: number; //pk
  public fechaEntrega: string;
  public listaProductos: any;
  public listaDetalles: any;
  public total: number;
  public rutCliente: string; //fk
  public idUsuario: number;
  public idEstado: number;

  constructor(){}
  /* constructor(numeroPedido: number, fechaEntrega: string, listaProductos: any,
    listaDetalles: any, total: number, rutCliente: string, idUsuario: number, idEstado: number) {
    this.numeroPedido = numeroPedido;
    this.fechaEntrega = fechaEntrega;
    this.listaProductos = listaProductos;
    this.listaDetalles = listaDetalles;
    this.total = total;
    this.rutCliente = rutCliente;
    this.idUsuario = idUsuario;
    this.idEstado = 1; // 1 = creado
  } */
}
