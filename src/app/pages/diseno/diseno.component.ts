import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-diseno',
  templateUrl: './diseno.component.html',
  styleUrls: ['./diseno.component.css']
})
export class DisenoComponent implements OnInit {
  modulo: string;
  constructor() {
  }

  ngOnInit() {
    this.modulo = 'diseño';
  }
}
