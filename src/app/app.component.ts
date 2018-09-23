import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';
import { ChatService } from './services/chat.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet><app-spinner></app-spinner></router-outlet>',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private chat: ChatService) {}

  ngOnInit () {
    Observable.interval(6000).subscribe(() => this.sendMessage());


    this.chat.messages.subscribe(msg => {
      console.log('mensaje recibido por el servidor->' + JSON.stringify(msg));
      this.chat.success(msg.text, 'Nuevo mensaje');
    });
  }

  sendMessage() {
    const mensaje = new Date().getTime();
    this.chat.sendMsg(mensaje);

  }

  success() {
    this.chat.success('Prueba exitosa');
  }

}
