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
    this.chat.sendMsg('Test de prueba');

    this.chat.messages.subscribe(msg => {
        console.log(msg);
    });
  }

  sendMessage() {
    this.chat.sendMsg('Test de prueba');
  }
}
