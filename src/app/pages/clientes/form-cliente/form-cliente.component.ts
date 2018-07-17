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
  editando: boolean = false;

  constructor(private clientesService: ClientesService) {
  }
  ngOnInit() {

    //SI CLIENTE ES NUEVO
    if (this.cliente == null) {
      this.cliente = new Cliente();
    }
  }

  emiteVolver() {
    this.clienteForm.reset();
    this.salir.emit();
  }

  guardarCliente(){
    this.clientesService.addCliente(this.cliente).subscribe(cliente => {
      this.cliente = cliente;
      console.log('nuevo  insertado->' + cliente);
    });

    this.emiteVolver();
    this.editando = false;
  }
}
