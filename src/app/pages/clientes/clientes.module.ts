import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ClientesComponent } from "./clientes.component";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { FormClienteComponent } from "./form-cliente/form-cliente.component";
import { ClientesService } from "../../services/clientes.service";
import { HttpModule } from "@angular/http";

export const clientesRoutes: Routes = [
  {
    path: '',
    component: ClientesComponent
  },
  {
    path: '/nuevo',
    component: FormClienteComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(clientesRoutes),
    SharedModule
  ],
  providers: [ClientesService],
  declarations: [ClientesComponent, FormClienteComponent]
})
export class ClientesModule {}
