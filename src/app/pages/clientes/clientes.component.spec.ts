import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from '../../model/cliente/cliente.model';
import { ClientesComponent } from './clientes.component';

describe('ClientesComponent', () => {
    let comp: ClientesComponent;
    let fixture: ComponentFixture<ClientesComponent>;

    beforeEach(() => {
        const clientesServiceStub = {
            getClientes: () => ({
                subscribe: () => ({})
            })
        };
        const clienteStub = {
            rutCliente: {}
        };
        TestBed.configureTestingModule({
            declarations: [ ClientesComponent ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: ClientesService, useValue: clientesServiceStub },
                { provide: Cliente, useValue: clienteStub }
            ]
        });
        fixture = TestBed.createComponent(ClientesComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    it('verLista defaults to: true', () => {
        expect(comp.verLista).toEqual(true);
    });

    describe('ngOnInit', () => {
        it('makes expected calls', () => {
            const clientesServiceStub: ClientesService = fixture.debugElement.injector.get(ClientesService);
            spyOn(clientesServiceStub, 'getClientes');
            comp.ngOnInit();
            expect(clientesServiceStub.getClientes).toHaveBeenCalled();
        });
    });

});
