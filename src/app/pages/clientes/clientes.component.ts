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
  verLista: boolean = true;
  verForm: boolean;
  tipoForm: string;

  constructor(private clientesService: ClientesService) {}

  ngOnInit() {
    this.clientesService.getClientes().subscribe(data => {
      console.log(data);
      this.listaClientes = data;
    });

  }

  //Cierre con boton Volver
  public volver() {
    this.verForm = false;
    this.verLista = true;
  }

  //Nuevo Cliente
  nuevo() {
    this.verForm = true;
    this.verLista = false;

    this.cliente = new Cliente();
    this.tipoForm = "Nuevo";
    console.log("presiona nuevo..");
  }

  //Ver o Editar Cliente
  editarCliente(cliente: Cliente) {
    this.verForm = true;
    this.verLista = false;

    this.cliente=cliente;
    this.tipoForm = "Ver";
    console.log("Viendo " + cliente.rutCliente);
  }
}
