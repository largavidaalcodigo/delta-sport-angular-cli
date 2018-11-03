import { Mensajes } from './model/mensajes.model';
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

  constructor(private chatService: ChatService) {}

  ngOnInit () {

    //Observable.interval(6000).subscribe(() => this.sendMessage());

    //AQUI SE MUESTRAN TODAS LAS NOTIFICACIONES ENTRANTES
    this.chatService.messages.subscribe(mensa => {
      // TODO debe mostrar mensajes solo a los usuarios pertinentes
      console.log('mensaje recibido por el servidor->' + JSON.stringify(mensa));
      //let msg = ;
      console.log('mensa.text ->' + JSON.stringify(mensa.text));
      const mensaje = mensa.text;
      const datos = '<a href=\'' + mensaje.url + '\'>' + mensaje.mensaje + '</a>' ;
      this.chatService.success(datos, mensaje.titulo);
    });
  }

  sendMessage(usuarioOrigen, usuarioDestino, titulo, mensaje, url) {
    //const mensaje = new Date().toLocaleString('es-CL', {timeZone: 'America/Santiago'});
        // mensaje notificacion cambios
        const msg = new Mensajes();
        msg.fecha = new Date();
        msg.usuarioOrigen = 'usuario origen';
        msg.usuarioDestino = 'usuario destino';
        msg.mensaje = new Date().toLocaleString('es-CL', {timeZone: 'America/Santiago'});
        msg.titulo = titulo;
        msg.url = url;
        this.chatService.sendMsg(msg);
  }

  success() {
    this.chatService.success('Prueba exitosa');
  }

}
