import { CommonsService } from './../../../services/commons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subir-archivos',
  templateUrl: './subir-archivos.component.html',
  styleUrls: ['./subir-archivos.component.css']
})
export class SubirArchivosComponent implements OnInit {

  constructor(private commonsService: CommonsService){}

  ngOnInit() {
  }

  subirImagen(archivo: File): Promise<any> {
    console.log(archivo.name);
    if (!archivo) {
      return;
    }
    return new Promise((resolve, reject) => {
      this.commonsService.subirArchivos(archivo).then((resp: any) => {
        resolve(resp);
      }).catch(error => {
          reject(error);
      });
  });

}
}
