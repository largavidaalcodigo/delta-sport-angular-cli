import { Producto } from '../model/producto/producto.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Pedido } from '../model/pedido/pedido.model';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonsService {

  URL: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  subirArchivos(file: File, titulo: string) {
      return new Promise((resolve, reject) => {
       const formData = new FormData();
      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/upload');
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      console.log('service file->' + file.name);
      console.log('titulo->' + titulo);
      formData.append('archivo', file);
      formData.append('titulo', titulo);
      xhr.send(formData);

      xhr.onreadystatechange = function () {
        console.log('xhr.status-> ' + xhr.status);
/*         if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
 */      };
    });

/*    var xhr = new XMLHttpRequest();
    var formData = new FormData();
    //xhr.onload = successfullyUploaded;
    xhr.open("POST", "http://localhost:3000/upload", true);
    xhr.setRequestHeader('X-Requested-With','XMLHttpRequest');
    for(var file in files) {
        formData.append("uploads", files[file].data);
    }
    xhr.send(formData);

*/


/*
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };
 */
/*       for(let file in files) {
        formData.append('uploads', file);
 */

    //}


  }

  public putPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.put<Pedido>('/api/putPedido', pedido);
  }

 /*  public deletePedido(pedido: Pedido){
    return this.http.delete<Pedido>('/api/deletePedido/' + pedido.numeroPedido);
  } */
  public getEstadosPedido() {
    return ['Creado', 'En proceso', 'Terminado', 'Eliminado'];
  }

  public getDetallesAdicionales() {
    return [
      { id: 1, desc: 'Logos insignias sublimados', valor: 550 },
      { id: 2, desc: 'Número sublimado', valor: 650 },
      { id: 3, desc: 'Logos vinilos', valor: 550 },
      { id: 4, desc: 'Números vinilos', valor: 750 },
      { id: 5, desc: 'Subliflok insignia', valor: 750 },
      { id: 6, desc: 'Cuello camisero tela', valor: 350 },
      { id: 7, desc: 'Cuello camisero tejido', valor: 800 },
      { id: 8, desc: 'Cierre polera', valor: 450 },
      { id: 9, desc: 'Broches (3)', valor: 450 },
      { id: 10, desc: 'Triángulo', valor: 550 },
      { id: 11, desc: 'Costados', valor: 500 },
      { id: 12, desc: 'Vivos', valor: 350 },
      { id: 13, desc: 'Cuellos sublimados', valor: 150 },
      { id: 14, desc: 'Cuello mao', valor: 350 },
    ];
  }

  public getColores() {
    return [
      { id: 1, desc: 'Azul', codigoHex: '#0000FF' },
      { id: 2, desc: 'Verde', codigoHex: '#008000' },
      { id: 3, desc: 'Amarillo', codigoHex: '#FFFF00' }
    ];
  }

  public getTelas() {
    return ['boston','rugby','mesh','lycra','elasticada','franela','franela elasticada','dupont','otro'];
  }

  public getTallas() {
    return ['2','4','6','8','10','12','14','16','S', 'M', 'L', 'XL', 'XXL'];
  }

  public getTipoDeporte() {
    return ['Futbol', 'Rugby', 'Volleyball', 'Tenis'];
  }
}
