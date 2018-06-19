import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente/cliente.model';

@Injectable()
export class ClientesService {
  baseUrl: string = 'http://localhost:8081';

  constructor(private http: HttpClient) {
  }

  public getClientes(){
    return this.http.get(this.baseUrl + '/clientes');
  }

  public addCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.baseUrl + '/clientes', cliente);
  }

  public putCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(this.baseUrl + '/clientes', cliente);
  }
}
