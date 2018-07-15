import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente/cliente.model';

@Injectable()
export class ClientesService {
  baseUrl: string = 'http://localhost:8081';

  constructor(private http: HttpClient) {}

  public getClientes(): Observable<Cliente[]> {
    return this.http.get('/api/getClientes');
  }

  public addCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>('/api/addCliente', cliente);
  }
  public putCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(this.baseUrl + '/clientes', cliente);
  }
}
