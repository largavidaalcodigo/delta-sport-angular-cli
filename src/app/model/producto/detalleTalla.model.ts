import { Comentario } from '../pedido/comentario.model';
export class DetalleTalla {
  public numero: string;
  public talla: string;
  public generoPrenda: number; // 0=Hombre / 1=Mujer
  public nombrePecho: string;
  public nombreEspalda: string;
  public terminadoCorte: number;
  public terminadoDiseno: number;
  public terminadoConfeccion: number;
  public terminadoEstampado: number;
  public listaComentarios: Comentario[]; //las notificaciones que agrega el operador

  constructor() {}
}
