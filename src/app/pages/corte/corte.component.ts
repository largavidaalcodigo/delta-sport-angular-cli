import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-corte',
  templateUrl: './corte.component.html'
})
export class CorteComponent implements OnInit {
  modulo: string;
  constructor() {
  }

  ngOnInit() {
    this.modulo = 'corte';
  }

}
