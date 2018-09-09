import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from '../../model/cliente/cliente.model';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  listaClientes: any;
  cliente: Cliente;
  mensaje: string;
  listaEstadosClientes: any;
  query = '';
  estado: any;
  fechaDesde: Date;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientesService: ClientesService
  ) {

    this.route.params.subscribe(params => {
      this.mensaje = params['id'];
    });
  }

  ngOnInit() {
    this.clientesService.getClientes('buscar','Activo', this.query).subscribe(data => {
      console.log('observando lista...');
      this.listaClientes = data;
    });
    this.listaEstadosClientes = this.clientesService.getEstadosCliente();
  }

  // Ver o Editar Cliente
  editarCliente(cliente: Cliente) {
    this.router.navigate(['/clientes/formCliente/editar/', cliente.numeroCliente]);
  }

  eliminaCliente(cliente: Cliente){
    console.log('Elimina Cliente..');
    // Cambia el estado del pedido
    cliente.estado = 'Inactivo';
    this.clientesService.putCliente(cliente).subscribe(data => {
      console.log('cliente inactivo');
      this.cliente = data;
    });
  }

  submitBuscador(){
    this.clientesService.getClientes('buscar', this.estado, this.query).subscribe(data => {
      console.log('observando lista...');
      this.listaClientes = data;
    });
  }
}
