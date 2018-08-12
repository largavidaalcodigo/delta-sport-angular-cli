import { ImgFT } from './imgFT.model';
import { Comentario } from '../pedido/comentario.model';
import { TipoProductoFT } from './tipoProductoFT.model';
import { TipoCuelloFT } from './tipoCuelloFT.model';
export class FichaTecnica{
  public listaTipoProducto: TipoProductoFT[];
  public listaTipoCuello: TipoCuelloFT[];
  public listaTerminacion: string[]; //obtiene de lista de tipo de Terminacion
  public listaEstampado: string[]; //obtiene de lista de tipo de Estampado
  public listaImg: ImgFT[];
  public listaComentarios: Comentario[];
  constructor() {}
}
