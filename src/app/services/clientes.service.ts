import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente/cliente.model';

@Injectable()
export class ClientesService {
  //baseUrl: string = 'http://localhost:8081';

  constructor(private http: HttpClient) {}

  public getClientes(tipo: string, estado: string, query: string): Observable<any[]> {
    if (query!=null)
      return this.http.get('/api/clientes/' + tipo + '/' + estado + '/' + query);
    else
      return this.http.get('/api/clientes/' +tipo + '/' + estado);
  }

  public addCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>('/api/clientes', cliente);
  }

  public putCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>('/api/clientes', cliente);
  }

  public getCliente(numeroCliente: any): Observable<any> {
    return this.http.get('/api/clientes/editar/' + numeroCliente)
       .map(response => response as Cliente)
      .catch((error: any) => Observable.throw('Server error'));
  }

  public countClientes(): any {
    return this.http.get('/api/countClientes');
  }

  public getEstadosCliente() {
    return ['Activo', 'Inactivo'];
  }

}
