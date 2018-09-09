import { NgForm, FormGroup } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { CommonsService } from '../../../services/commons.service';
import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-subir-archivos',
  templateUrl: './subir-archivos.component.html',
  styleUrls: ['./subir-archivos.component.css']
})
export class SubirArchivosComponent implements OnInit {

  @ViewChild('myForm') form: FormGroup;
  archivo: File;
  titulo: string;
  files: File;

  constructor(private commonsService: CommonsService){}

  ngOnInit() {
  }

  subirImagen(): Promise<any> {
      console.log(this.files.name);
      if (!this.archivo) {
        return;
      }
      return new Promise((resolve, reject) => {
        this.commonsService.subirArchivos(this.files, this.titulo).then((resp: any) => {
          resolve(resp);
        }).catch(error => {
            reject(error);
        });
    });
  }

  getFiles(event){
    this.files = event.target.files[0];
  }
}
