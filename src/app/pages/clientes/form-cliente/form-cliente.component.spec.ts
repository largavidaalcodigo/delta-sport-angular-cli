import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ClientesService } from './../../../services/clientes.service';
import { FormClienteComponent } from './form-cliente.component';

describe('FormClienteComponent', () => {
    let comp: FormClienteComponent;
    let fixture: ComponentFixture<FormClienteComponent>;

    beforeEach(() => {
        const clientesServiceStub = {
            addCliente: () => ({
                subscribe: () => ({})
            }),
            putCliente: () => ({
                subscribe: () => ({})
            })
        };
        TestBed.configureTestingModule({
            declarations: [ FormClienteComponent ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: ClientesService, useValue: clientesServiceStub }
            ]
        });
        fixture = TestBed.createComponent(FormClienteComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    describe('onSubmit', () => {
        it('makes expected calls', () => {
            const clientesServiceStub: ClientesService = fixture.debugElement.injector.get(ClientesService);
            spyOn(comp, 'emiteVolver');
            spyOn(clientesServiceStub, 'addCliente');
            spyOn(clientesServiceStub, 'putCliente');
            comp.onSubmit();
            expect(comp.emiteVolver).toHaveBeenCalled();
            expect(clientesServiceStub.addCliente).toHaveBeenCalled();
            expect(clientesServiceStub.putCliente).toHaveBeenCalled();
        });
    });

});
