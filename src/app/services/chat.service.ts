import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Observable, Subject } from 'rxjs';
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
    toastr.info(title, message);
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
      'debug': true,
      'newestOnTop': false,
      'progressBar': false,
      'positionClass': 'toast-top-right',
      'preventDuplicates': false,
      'showDuration': '300',
      'hideDuration': '1000',
      'timeOut': '30000',
      'extendedTimeOut': '15000',
      'showEasing': 'swing',
      'hideEasing': 'linear',
      'showMethod': 'fadeIn',
      'hideMethod': 'fadeOut'
    }
  }
}
