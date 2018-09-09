import { ClientesService } from "../../../services/clientes.service";
import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from "@angular/core";
import { Cliente } from "../../../model/cliente/cliente.model";
import { NgForm } from "@angular/forms";
import {FormControl} from '@angular/forms';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: "app-form-cliente",
  templateUrl: "./form-cliente.component.html"
})
export class FormClienteComponent implements OnInit {

  cliente: Cliente; //Puede venir con datos
  tipoForm: string;
  titulo: string;
  nombreBoton: string="Guardar";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientesService: ClientesService) {}

  ngOnInit() {
    this.tipoForm = this.route.snapshot.params['tipoForm'];
    this.nombreBoton = 'Actualizar';

    //SI CLIENTE ES NUEVO
    if (this.tipoForm === 'nuevo') {
      this.titulo = 'Nuevo Cliente';
      this.cliente = new Cliente();

      this.cliente.idEstado = 1; //creado
      this.cliente.estado = 'Activo';

    }
    if (this.tipoForm === 'editar'){
      this.titulo = 'Editando Cliente';

      this.clientesService.getCliente(this.route.snapshot.params['id']).subscribe(data => {
        this.cliente = data;
      });

    }

  }

  guardarCliente(){
    if (this.tipoForm === 'editar') {
      this.clientesService.putCliente(this.cliente).subscribe(data => {
        console.log('cliente actualizado->' + JSON.stringify(data));
        this.cliente = data;
      });
      this.router.navigate(['/clientes', 'Cliente nro. [' + this.cliente.numeroCliente + '] actualizado exitosamente']);

    }else if (this.tipoForm === 'nuevo') {

      // Contador de clientes
      this.clientesService.countClientes().subscribe(countClientes => {
        this.cliente.numeroCliente = countClientes + 1;
        console.log('this.cliente.numeroCliente->' +  this.cliente.numeroCliente);

        // console.log('insertando cliente...');
        this.clientesService.addCliente(this.cliente).subscribe(cliente => {
          this.cliente = cliente;
          // console.log('nuevo cliente insertado->' + cliente);
          this.router.navigate(['/clientes', 'Cliente nro. [' + cliente.numeroCliente + '] Creado exitosamente']);
          //this.router.navigate(['/pedidos', 'Pedido nro. [ ] actualizado exitosamente']);

        });
      });
    }
  }
}
