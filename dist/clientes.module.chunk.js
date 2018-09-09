webpackJsonp(["clientes.module"],{

/***/ "../../../../../src/app/model/cliente/cliente.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cliente; });
var Cliente = (function () {
    function Cliente() {
    }
    return Cliente;
}());

//# sourceMappingURL=cliente.model.js.map

/***/ }),

/***/ "../../../../../src/app/pages/clientes/clientes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/clientes/clientes.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"mensaje\" class=\"alert alert-success\" role=\"alert\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  {{mensaje}}\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n      <a class=\"btn btn-primary\" [routerLink]=\"['/clientes/formCliente', 'nuevo']\">NUEVO</a>\n  </div>\n</div>\n\n<!-- Lista  -->\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card>\n      <h4>Filtros de busqueda</h4>\n      <form\n          #encabezadoPedidoForm='ngForm'\n          class='form-inline'\n          (ngSubmit)='submitBuscador();'>\n        <div class='form-group form-inline'>\n          Palabra clave:\n          <input type='text' size=\"20\" class='form-control' name='query' [(ngModel)]='query'>\n\n          <!-- (change)='estado = $event.target.value;' -->\n          Estado\n          <select\n            class='form-control'\n            name='estado'\n            [(ngModel)]='estado'\n          >\n            <option *ngFor='let c of listaEstadosClientes' [value]='c'>{{c}}</option>\n          </select>\n          <button type=\"submit\" class=\"btn btn-success\">Buscar</button>\n          <button type=\"reset\" class=\"btn btn-success\">Limpiar</button>\n        </div>\n      </form>\n    </app-card>\n\n    <app-card [title]=\"'Clientes'\" [classHeader]=\"false\" [blockClass]=\"'table-border-style'\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-hover\">\n          <thead>\n          <tr>\n            <th>#</th>\n            <th>Rut </th>\n            <th>Razón Social</th>\n            <th>Nombre</th>\n            <th>Estado</th>\n            <th>Opciones</th>\n        </tr>\n          </thead>\n          <tbody *ngFor=\"let cliente of listaClientes\">\n            <tr (click)=\"editarCliente(cliente)\">\n              <td>{{cliente.numeroCliente}}</td>\n              <td>{{cliente.rutCliente}}</td>\n              <td>{{cliente.razonSocialCliente}}</td>\n              <td>{{cliente.apellidoPaternoCliente + ' ' + cliente.apellidoMaternoCliente + ' ' + cliente.nombresCliente}}</td>\n              <td>{{cliente.estado}}</td>\n              <td>\n                <button type=\"button\" (click)='eliminaCliente(cliente);$event.stopPropagation();'>\n                  <i class=\"icofont icofont-trash\"></i>\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </app-card>\n  </div>\n</div>\n\n{{estado}}\n"

/***/ }),

/***/ "../../../../../src/app/pages/clientes/clientes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_clientes_service__ = __webpack_require__("../../../../../src/app/services/clientes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientesComponent = (function () {
    function ClientesComponent(route, router, clientesService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.clientesService = clientesService;
        this.query = '';
        this.route.params.subscribe(function (params) {
            _this.mensaje = params['id'];
        });
    }
    ClientesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientesService.getClientes('buscar', 'Activo', this.query).subscribe(function (data) {
            console.log('observando lista...');
            _this.listaClientes = data;
        });
        this.listaEstadosClientes = this.clientesService.getEstadosCliente();
    };
    // Ver o Editar Cliente
    ClientesComponent.prototype.editarCliente = function (cliente) {
        this.router.navigate(['/clientes/formCliente/editar/', cliente.numeroCliente]);
    };
    ClientesComponent.prototype.eliminaCliente = function (cliente) {
        var _this = this;
        console.log('Elimina Cliente..');
        // Cambia el estado del pedido
        cliente.estado = 'Inactivo';
        this.clientesService.putCliente(cliente).subscribe(function (data) {
            console.log('cliente inactivo');
            _this.cliente = data;
        });
    };
    ClientesComponent.prototype.submitBuscador = function () {
        var _this = this;
        this.clientesService.getClientes('buscar', this.estado, this.query).subscribe(function (data) {
            console.log('observando lista...');
            _this.listaClientes = data;
        });
    };
    return ClientesComponent;
}());
ClientesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-clientes',
        template: __webpack_require__("../../../../../src/app/pages/clientes/clientes.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/clientes/clientes.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["f" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_clientes_service__["a" /* ClientesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_clientes_service__["a" /* ClientesService */]) === "function" && _c || Object])
], ClientesComponent);

var _a, _b, _c;
//# sourceMappingURL=clientes.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/clientes/clientes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientesRoutes", function() { return clientesRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesModule", function() { return ClientesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clientes_router__ = __webpack_require__("../../../../../src/app/pages/clientes/clientes.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__clientes_component__ = __webpack_require__("../../../../../src/app/pages/clientes/clientes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__form_cliente_form_cliente_component__ = __webpack_require__("../../../../../src/app/pages/clientes/form-cliente/form-cliente.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_clientes_service__ = __webpack_require__("../../../../../src/app/services/clientes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__form_cliente_form_cliente_module__ = __webpack_require__("../../../../../src/app/pages/clientes/form-cliente/form-cliente.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var clientesRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__clientes_component__["a" /* ClientesComponent */] },
    { path: 'formCliente/:tipoForm', component: __WEBPACK_IMPORTED_MODULE_8__form_cliente_form_cliente_component__["a" /* FormClienteComponent */] },
    { path: 'formCliente/:tipoForm/:id', component: __WEBPACK_IMPORTED_MODULE_8__form_cliente_form_cliente_component__["a" /* FormClienteComponent */] }
];
var ClientesModule = (function () {
    function ClientesModule() {
    }
    return ClientesModule;
}());
ClientesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__clientes_router__["a" /* clientesRouter */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_11__form_cliente_form_cliente_module__["a" /* FormClienteModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["g" /* RouterModule */].forChild(clientesRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_clientes_service__["a" /* ClientesService */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__clientes_component__["a" /* ClientesComponent */],
            __WEBPACK_IMPORTED_MODULE_8__form_cliente_form_cliente_component__["a" /* FormClienteComponent */]
        ]
    })
], ClientesModule);

//# sourceMappingURL=clientes.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/clientes/clientes.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clientesRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clientes_component__ = __webpack_require__("../../../../../src/app/pages/clientes/clientes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");


var CLIENTES_ROUTER = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__clientes_component__["a" /* ClientesComponent */], pathMatch: 'full' },
];
var clientesRouter = __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(CLIENTES_ROUTER);
//# sourceMappingURL=clientes.router.js.map

/***/ }),

/***/ "../../../../../src/app/pages/clientes/form-cliente/form-cliente.component.html":
/***/ (function(module, exports) {

module.exports = "<app-card *ngIf='cliente'>\n  <!--<form class=\"form-horizontal\">-->\n    <form #clienteForm=\"ngForm\" class=\"form-horizontal\">\n    <div class=\"form-group row\">\n      <div class=\"col-sm-3\">\n        <h2>{{tipoForm}} Cliente</h2>\n      </div>\n    <app-card>\n      <h4>Datos Cliente</h4>\n      <div class=\"form-group row\">\n        <div class=\"col-sm-2\">\n          <label>Rut</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cliente.rutCliente\" name=\"rutCliente\" required>\n        </div>\n        <div class=\"col-sm-4\">\n          <label>Razón social</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cliente.razonSocialCliente\" name=\"razonSocialCliente\">\n        </div>\n        <div class=\"col-sm-4\">\n          <label>Nombres</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cliente.nombresCliente\" name=\"nombresCliente\">\n        </div>\n        <div class=\"col-sm-4\">\n          <label>Ap. paterno</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cliente.apellidoPaternoCliente\" name=\"apellidoPaternoCliente\">\n        </div>\n        <div class=\"col-sm-4\">\n          <label>Ap. Materno</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cliente.apellidoMaternoCliente\" name=\"apellidoMaternoCliente\">\n        </div>\n        <div class=\"col-sm-4\">\n          <label>Email</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cliente.emailCliente\" name=\"emailCliente\">\n        </div>\n        <div class=\"col-sm-4\">\n          <label>Direccion</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cliente.direccionCliente\" name=\"direccionCliente\">\n        </div>\n        <div class=\"col-sm-2\">\n          <label>Comuna</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cliente.comunaCliente\" name=\"comunaCliente\">\n        </div>\n        <div class=\"col-sm-2\">\n          <label>Telefono</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cliente.fonoCliente\" name=\"fonoCliente\">\n        </div>\n      </div>\n    </app-card>\n  </div>\n  <div class='form-group'>\n    <a class=\"btn btn-primary\" routerLink='/clientes'>Cancelar</a>\n    <button (click)='guardarCliente();' class='btn btn-primary'>Guardar</button>\n  </div>\n  </form>\n  {{cliente|json}}\n</app-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/clientes/form-cliente/form-cliente.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormClienteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_clientes_service__ = __webpack_require__("../../../../../src/app/services/clientes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_cliente_cliente_model__ = __webpack_require__("../../../../../src/app/model/cliente/cliente.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormClienteComponent = (function () {
    function FormClienteComponent(route, router, clientesService) {
        this.route = route;
        this.router = router;
        this.clientesService = clientesService;
        this.nombreBoton = "Guardar";
    }
    FormClienteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tipoForm = this.route.snapshot.params['tipoForm'];
        this.nombreBoton = 'Actualizar';
        //SI CLIENTE ES NUEVO
        if (this.tipoForm === 'nuevo') {
            this.titulo = 'Nuevo Cliente';
            this.cliente = new __WEBPACK_IMPORTED_MODULE_2__model_cliente_cliente_model__["a" /* Cliente */]();
            this.cliente.idEstado = 1; //creado
            this.cliente.estado = 'Activo';
        }
        if (this.tipoForm === 'editar') {
            this.titulo = 'Editando Cliente';
            this.clientesService.getCliente(this.route.snapshot.params['id']).subscribe(function (data) {
                _this.cliente = data;
            });
        }
    };
    FormClienteComponent.prototype.guardarCliente = function () {
        var _this = this;
        if (this.tipoForm === 'editar') {
            this.clientesService.putCliente(this.cliente).subscribe(function (data) {
                console.log('cliente actualizado->' + JSON.stringify(data));
                _this.cliente = data;
            });
            this.router.navigate(['/clientes', 'Cliente nro. [' + this.cliente.numeroCliente + '] actualizado exitosamente']);
        }
        else if (this.tipoForm === 'nuevo') {
            // Contador de clientes
            this.clientesService.countClientes().subscribe(function (countClientes) {
                _this.cliente.numeroCliente = countClientes + 1;
                console.log('this.cliente.numeroCliente->' + _this.cliente.numeroCliente);
                // console.log('insertando cliente...');
                _this.clientesService.addCliente(_this.cliente).subscribe(function (cliente) {
                    _this.cliente = cliente;
                    // console.log('nuevo cliente insertado->' + cliente);
                    _this.router.navigate(['/clientes', 'Cliente nro. [' + cliente.numeroCliente + '] Creado exitosamente']);
                    //this.router.navigate(['/pedidos', 'Pedido nro. [ ] actualizado exitosamente']);
                });
            });
        }
    };
    return FormClienteComponent;
}());
FormClienteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: "app-form-cliente",
        template: __webpack_require__("../../../../../src/app/pages/clientes/form-cliente/form-cliente.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_clientes_service__["a" /* ClientesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_clientes_service__["a" /* ClientesService */]) === "function" && _c || Object])
], FormClienteComponent);

var _a, _b, _c;
//# sourceMappingURL=form-cliente.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/clientes/form-cliente/form-cliente.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export clientesRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormClienteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clientes_component__ = __webpack_require__("../../../../../src/app/pages/clientes/clientes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_clientes_service__ = __webpack_require__("../../../../../src/app/services/clientes.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var clientesRoutes = [
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_0__clientes_component__["a" /* ClientesComponent */] },
];
var FormClienteModule = (function () {
    function FormClienteModule() {
    }
    return FormClienteModule;
}());
FormClienteModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["g" /* RouterModule */].forChild(clientesRoutes)
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_clientes_service__["a" /* ClientesService */]
        ]
    })
], FormClienteModule);

//# sourceMappingURL=form-cliente.module.js.map

/***/ })

});
//# sourceMappingURL=clientes.module.chunk.js.map