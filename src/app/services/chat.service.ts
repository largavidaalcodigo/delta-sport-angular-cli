import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Observable, Subject } from 'rxjs/Rx';
declare var toastr: any;

@Injectable()
export class ChatService {

  messages: Subject<any>;

  // Our constructor calls our wsService connect method
  constructor(private wsService: WebsocketService) {

    this.settings();

    this.messages = <Subject<any>>wsService
      .connect()
      .map((response: any): any => {
        return response;
      });

   }

  // Our simplified interface for sending
  // messages back to our socket.io server
  sendMsg(msg) {
    this.messages.next(msg);
  }

  success(title: string, message?: string) {
    toastr.success(title, message);
  }

/*   Warning(title: string, message?: string) {
    toastr.warning(title, message);
  }

  Error(title: string, message?: string) {
    toastr.error(title, message);
  }

  Info(title: string, message?: string) {
    toastr.info(title, message);
  }
 */
  settings() {
    toastr.options = {
      'closeButton': true,
      'debug': false,
      'newestOnTop': false,
      'progressBar': true,
      'positionClass': 'toast-top-right',
      'preventDuplicates': true,
      'showDuration': '300',
      'hideDuration': '1000',
      'timeOut': '10000',
      'extendedTimeOut': '1000',
      'showEasing': 'swing',
      'hideEasing': 'linear',
      'showMethod': 'fadeIn',
      'hideMethod': 'fadeOut'
    }
  }
}
