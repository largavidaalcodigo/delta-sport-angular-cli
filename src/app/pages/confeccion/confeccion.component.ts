import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-confeccion',
  templateUrl: './confeccion.component.html',
  styleUrls: ['./confeccion.component.css']
})
export class ConfeccionComponent implements OnInit {
  modulo: string;
  constructor() {
  }

  ngOnInit() {
    this.modulo = 'confeccion';
  }
}
