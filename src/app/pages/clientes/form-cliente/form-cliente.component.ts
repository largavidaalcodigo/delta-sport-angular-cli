import { ClientesService } from "./../../../services/clientes.service";
import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from "@angular/core";
import { Cliente } from "../../../model/cliente/cliente.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-form-cliente",
  templateUrl: "./form-cliente.component.html"
})
export class FormClienteComponent implements OnInit {

  @ViewChild("clienteForm") clienteForm: NgForm; //captura el valor del formulario
  @Input() verForm: boolean;
  @Input() cliente: Cliente; //Puede venir con datos
  @Input() tipoForm: string;

  @Output() public salir = new EventEmitter();

  constructor(private clientesService: ClientesService) {
  }
  ngOnInit() {
    console.log('tipoForm->'+ this.tipoForm);
    console.log('cliente->'+ this.cliente);
  }

  emiteVolver() {
    this.clienteForm.reset();
    this.salir.emit();
  }

   onSubmit() {
    this.cliente.rutCliente = this.clienteForm.value.rutCliente;
    this.cliente.razonSocialCliente = this.clienteForm.value.razonSocialCliente;
    this.cliente.nombresCliente = this.clienteForm.value.nombresCliente;
    this.cliente.apellidoPaternoCliente = this.clienteForm.value.apellidoPaternoCliente;
    this.cliente.apellidoMaternoCliente = this.clienteForm.value.apellidoMaternoCliente;
    this.cliente.direccionCliente = this.clienteForm.value.direccionCliente;
    this.cliente.comunaCliente = this.clienteForm.value.comunaCliente;
    this.cliente.fonoCliente = this.clienteForm.value.fonoCliente;
    this.cliente.emailCliente = this.clienteForm.value.emailCliente;
    this.cliente.estadoCliente = 1; //0= inactivo , 1=activo

    //add
    if (this.tipoForm == 'Nuevo'){
      this.clientesService.addCliente(this.cliente).subscribe(cliente => {
        this.cliente=cliente;
        console.log('nuevo cliente insertado->' + cliente);
      });

    //update
    }else if (this.tipoForm == 'Ver'){
      this.clientesService.putCliente(this.cliente).subscribe(cliente => {
        this.cliente=cliente;
        console.log('cliente actualizado->' + cliente);
      });

    }

    this.emiteVolver();
  }



}
