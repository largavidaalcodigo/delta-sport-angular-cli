webpackJsonp(["estampado.module"],{

/***/ "../../../../../src/app/pages/estampado/estampado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/estampado/estampado.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"mensaje\" class=\"alert alert-success\" role=\"alert\">\r\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n  {{mensaje}}\r\n</div>\r\n\r\n<!-- Lista  -->\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n<!--     <app-card>\r\n      <h4>Filtros de busqueda</h4>\r\n      <form #encabezadoPedidoForm='ngForm' class='form-inline'>\r\n        <div class='form-group form-inline'>\r\n          Cliente\r\n          <input type='text' size=\"40\" class='form-control' name='queryClientes'>\r\n          Estado\r\n          <select class='form-control' name='queryEstado'>\r\n            <option [value]=''>[Producto]</option>\r\n            <option *ngFor='let c of listaEstadosPedido' [value]='c.id'>{{c.desc}}</option>\r\n          </select>\r\n          Fecha creación\r\n          <input class='form-control' name='fechaDesde' type=\"date\" placeholder=\"Fecha desde\">\r\n          <button type=\"reset\" class=\"btn btn-primary\">Quitar Filtro</button>\r\n        </div>\r\n      </form>\r\n    </app-card> -->\r\n\r\n    <app-card [title]=\"'Estampado - Orden de trabajo'\" [classHeader]=\"false\" [blockClass]=\"'table-border-style'\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-hover\">\r\n          <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Nombre Cliente</th>\r\n            <th>Fecha pedido</th>\r\n            <th>Fecha Entrega</th>\r\n            <th>% avance</th>\r\n            <!-- <th>Monto Total</th> -->\r\n            <!-- <th>Estado</th> -->\r\n            <th>Opciones</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody *ngFor=\"let pedido of listaPedidos;let i = index\">\r\n            <tr>\r\n              <td>{{pedido.numeroPedido}}</td>\r\n              <td>{{pedido.cliente.nombresCliente}}</td>\r\n              <td>{{pedido.fechaCreacion | date: 'dd/MM/yyyy'}}</td>\r\n              <td>{{pedido.fechaEntrega | date: 'dd/MM/yyyy'}}</td>\r\n              <td></td>\r\n              <!-- <td (click)=\"editarPedido(pedido)\">{{pedido.idEstado}}</td> -->\r\n              <td>\r\n                <button type=\"button\" class=\"btn btn-danger btn-sm\"\r\n                (click)=\"addEstampado(pedido); $event.stopPropagation();\">Ver</button>\r\n<!--BORRAR PEDIDO-->\r\n<!--                 <button type=\"button\" (click)='eliminaPedido(pedido);$event.stopPropagation();'>\r\n                  <i class=\"icofont icofont-trash\"></i>\r\n                </button>\r\n -->              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/estampado/estampado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstampadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pedidos_service__ = __webpack_require__("../../../../../src/app/services/pedidos.service.ts");
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


/* import { TipoProducto } from '../../model/producto/tipoProducto.model';
import { Producto } from '../../model/producto/producto.model';
 */ 
var EstampadoComponent = (function () {
    function EstampadoComponent(route, router, pedidosService) {
        this.route = route;
        this.router = router;
        this.pedidosService = pedidosService;
    }
    EstampadoComponent.prototype.ngOnInit = function () {
        var _this = this;
        //lista de pedidos
        this.pedidosService.getPedidos()
            .subscribe(function (pedidos) { return _this.listaPedidos = pedidos.filter(function (item) { return item.idEstado === 3; }); }, function (err) { return console.log(err); });
    };
    EstampadoComponent.prototype.addEstampado = function (pedido) {
        console.log('editando estampado...');
        this.router.navigate(['/estampado/formEstampado/', pedido.numeroPedido]);
    };
    return EstampadoComponent;
}());
EstampadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-estampado',
        template: __webpack_require__("../../../../../src/app/pages/estampado/estampado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/estampado/estampado.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["f" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_pedidos_service__["a" /* PedidosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_pedidos_service__["a" /* PedidosService */]) === "function" && _c || Object])
], EstampadoComponent);

var _a, _b, _c;
//# sourceMappingURL=estampado.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/estampado/estampado.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estampadoRoutes", function() { return estampadoRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstampadoModule", function() { return EstampadoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_clientes_service__ = __webpack_require__("../../../../../src/app/services/clientes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pedidos_service__ = __webpack_require__("../../../../../src/app/services/pedidos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__estampado_router__ = __webpack_require__("../../../../../src/app/pages/estampado/estampado.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__estampado_component__ = __webpack_require__("../../../../../src/app/pages/estampado/estampado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__form_estampado_form_estampado_component__ = __webpack_require__("../../../../../src/app/pages/estampado/form-estampado/form-estampado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__form_estampado_form_estampado_module__ = __webpack_require__("../../../../../src/app/pages/estampado/form-estampado/form-estampado.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var estampadoRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__estampado_component__["a" /* EstampadoComponent */] },
    { path: 'formEstampado/:id', component: __WEBPACK_IMPORTED_MODULE_10__form_estampado_form_estampado_component__["a" /* FormEstampadoComponent */] }
];
var EstampadoModule = (function () {
    function EstampadoModule() {
    }
    return EstampadoModule;
}());
EstampadoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__estampado_router__["a" /* estampadoRouter */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["g" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_11__form_estampado_form_estampado_module__["a" /* FormEstampadoModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["g" /* RouterModule */].forChild(estampadoRoutes),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__services_pedidos_service__["a" /* PedidosService */],
            __WEBPACK_IMPORTED_MODULE_0__services_clientes_service__["a" /* ClientesService */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_8__estampado_component__["a" /* EstampadoComponent */], __WEBPACK_IMPORTED_MODULE_10__form_estampado_form_estampado_component__["a" /* FormEstampadoComponent */]]
    })
], EstampadoModule);

//# sourceMappingURL=estampado.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/estampado/estampado.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return estampadoRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__estampado_component__ = __webpack_require__("../../../../../src/app/pages/estampado/estampado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
//import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';


//import { FormCorteComponent } from './form-corte/form-corte.component';
var ESTAMPADO_ROUTER = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__estampado_component__["a" /* EstampadoComponent */] },
];
var estampadoRouter = __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(ESTAMPADO_ROUTER);
//# sourceMappingURL=estampado.router.js.map

/***/ }),

/***/ "../../../../../src/app/pages/estampado/form-estampado/form-estampado.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"container\" *ngIf=\"pedido.listaProductos\">\r\n    <div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <app-card>\r\n            <h4>Detalle Tallas</h4>\r\n            nombre Clientefecha, etc. estado, tipo deporte\r\n          </app-card>\r\n          <app-card>\r\n            <div id=\"acordionProductos\">\r\n              <div class=\"card\" *ngFor='let c of pedido.listaProductos; let i=index'>\r\n                <!--header fila-->\r\n                <div id=\"header{{i}}\">\r\n                  <h3>{{c.descProducto}}<br>\r\n                    [{{c.descTipoProducto}}]\r\n                    / Tallas: [{{c.descRangoPrecio}}]</h3>\r\n                </div>\r\n                <!--detalle fila-->\r\n                <div id=\"fila{{i}}\">\r\n                  <form #detallePedidoForm='ngForm' (ngSubmit)=\"onSubmitDetalle(detallePedido);\" class='form-inline'>\r\n                    <table class=\"form-table-bordered\">\r\n                      <thead>\r\n                        <tr>\r\n                          <td>#</td>\r\n                          <td>Numero jugador</td>\r\n                          <td>Nombre pecho</td>\r\n                          <td>Nombre espalda</td>\r\n                          <td>Terminado?</td>\r\n                          <td>Opciones</td>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor='let d of c.listaDetalleTallas; let ii=index'>\r\n                          <td style=\"width:10px;\">{{ ii+1 }}\r\n                          </td>\r\n        <!--NUMERO JUGADOR-->\r\n                          <td style=\"width:90px;\">\r\n                            {{d.numero}}\r\n                          </td>\r\n        <!--NOMBRE PECHO-->\r\n                          <td style=\"width:140px;\">\r\n                            {{d.nombrePecho}}\r\n                          </td>\r\n        <!--NOMBRE ESPALDA-->\r\n                          <td style=\"width:140px;\">\r\n                            {{d.nombreEspalda}}\r\n                          </td>\r\n                          <td>\r\n                            <div class=\"btn-group btn-group-toggle\"\r\n                              ngbRadioGroup name='terminadoCorte{{ii}}' [(ngModel)]='d.terminadoCorte'>\r\n                              <label ngbButtonLabel class=\"btn btn-outline-primary btn-sm\">\r\n                                <input ngbButton type=\"radio\" [value]=\"0\">NO\r\n                              </label>\r\n                              <label ngbButtonLabel class=\"btn btn-outline-primary btn-sm\">\r\n                                <input ngbButton type=\"radio\" [value]=\"1\">SI\r\n                              </label>\r\n                            </div>\r\n                          </td>\r\n                          <td>\r\n                            <button type=\"button\" class=\"btn btn-danger btn-sm\"\r\n                            (click)=\"$event.stopPropagation();\">Notificar</button>\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n              <!-- {{detallePedido | json}} -->\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </app-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class='form-group'>\r\n    <a class=\"btn btn-primary\" routerLink='/estampado'>Cancelar</a>\r\n    <button (click)='guardarPedido();' class='btn btn-primary'>{{nombreBoton}}</button>\r\n  </div>\r\n<!-- {{pedido|json}}\r\n -->\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/estampado/form-estampado/form-estampado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormEstampadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_pedido_pedido_model__ = __webpack_require__("../../../../../src/app/model/pedido/pedido.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_clientes_service__ = __webpack_require__("../../../../../src/app/services/clientes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pedidos_service__ = __webpack_require__("../../../../../src/app/services/pedidos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FormEstampadoComponent = (function () {
    function FormEstampadoComponent(route, router, pedidosService, clientesService) {
        this.route = route;
        this.router = router;
        this.pedidosService = pedidosService;
        this.clientesService = clientesService;
        this.pedido = new __WEBPACK_IMPORTED_MODULE_0__model_pedido_pedido_model__["a" /* Pedido */]();
        this.nombreBoton = "Guardar";
    }
    FormEstampadoComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Se inicia form estampado->' + this.route.snapshot.params['id']);
        this.pedidosService.getPedido(this.route.snapshot.params['id']).subscribe(function (data) {
            console.log('Editando estampado->' + JSON.stringify(data));
            _this.pedido = data;
        });
    };
    FormEstampadoComponent.prototype.guardarPedido = function () {
        var _this = this;
        this.pedidosService.putPedido(this.pedido).subscribe(function (data) {
            console.log('pedido estampado actualizado->' + JSON.stringify(data));
            _this.pedido = data;
        });
        this.router.navigate(['/estampado', '<strong>Pedido nro. [' + this.pedido.numeroPedido + ']</strong> Actualizado exitosamente']);
    };
    return FormEstampadoComponent;
}());
FormEstampadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-form-estampado',
        template: __webpack_require__("../../../../../src/app/pages/estampado/form-estampado/form-estampado.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_pedidos_service__["a" /* PedidosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_pedidos_service__["a" /* PedidosService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_clientes_service__["a" /* ClientesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_clientes_service__["a" /* ClientesService */]) === "function" && _d || Object])
], FormEstampadoComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=form-estampado.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/estampado/form-estampado/form-estampado.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export estampadoRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormEstampadoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__estampado_component__ = __webpack_require__("../../../../../src/app/pages/estampado/estampado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_pedidos_service__ = __webpack_require__("../../../../../src/app/services/pedidos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_clientes_service__ = __webpack_require__("../../../../../src/app/services/clientes.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//import { FilterDataPipe } from './filterdata.pipe';
var estampadoRoutes = [
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_0__estampado_component__["a" /* EstampadoComponent */] },
];
var FormEstampadoModule = (function () {
    function FormEstampadoModule() {
    }
    return FormEstampadoModule;
}());
FormEstampadoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["g" /* RouterModule */].forChild(estampadoRoutes)
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_pedidos_service__["a" /* PedidosService */],
            __WEBPACK_IMPORTED_MODULE_7__services_clientes_service__["a" /* ClientesService */]
        ],
        declarations: []
    })
], FormEstampadoModule);

//# sourceMappingURL=form-estampado.module.js.map

/***/ })

});
//# sourceMappingURL=estampado.module.chunk.js.map