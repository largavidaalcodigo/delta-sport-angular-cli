webpackJsonp(["corte.module"],{

/***/ "../../../../../src/app/pages/corte/corte.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"mensaje\" class=\"alert alert-success\" role=\"alert\">\r\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n  {{mensaje}}\r\n</div>\r\n\r\n<!-- Lista  -->\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [title]=\"'Corte - Orden de trabajo'\" [classHeader]=\"false\" [blockClass]=\"'table-border-style'\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-hover\">\r\n          <thead>\r\n          <tr>\r\n            <th class=\"text-center\">#</th>\r\n            <th>Nombre Cliente</th>\r\n            <th class=\"text-center\">Fecha pedido</th>\r\n            <th class=\"text-center\">Fecha Entrega</th>\r\n            <th class=\"text-center font-weight-bold text-danger\">prendas terminadas</th>\r\n            <th class=\"text-center font-weight-bold text-success\">% avance</th>\r\n            <th>Opciones</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody *ngFor=\"let pedido of listaPedidos;let i = index\">\r\n            <tr>\r\n              <td class=\"text-center\">{{pedido.numeroPedido}}</td>\r\n              <td>{{pedido.cliente.nombresCliente}}</td>\r\n              <td class=\"text-center\">{{pedido.fechaCreacion | date: 'dd/MM/yyyy'}}</td>\r\n              <td class=\"text-center\">{{pedido.fechaEntrega | date: 'dd/MM/yyyy'}}</td>\r\n              <td class=\"font-weight-bold text-danger text-center\">{{pedido.itemsTerminadosCorte}}</td>\r\n              <td class=\"font-weight-bold text-success text-center\">{{pedido.avanceCorte}}%</td>\r\n              <td>\r\n                <button type=\"button\" class=\"btn btn-danger btn-sm\"\r\n                (click)=\"addCorte(pedido); $event.stopPropagation();\">Ver</button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/corte/corte.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorteComponent; });
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
var CorteComponent = (function () {
    function CorteComponent(route, router, pedidosService) {
        this.route = route;
        this.router = router;
        this.pedidosService = pedidosService;
    }
    CorteComponent.prototype.ngOnInit = function () {
        var _this = this;
        //lista de pedidos
        this.pedidosService.getPedidos()
            .subscribe(function (pedidos) { return _this.listaPedidos = pedidos.filter(function (item) { return item.idEstado >= 3; }); }, function (err) { return console.log(err); });
    };
    CorteComponent.prototype.addCorte = function (pedido) {
        console.log('editando corte...');
        this.router.navigate(['/corte/formCorte/', pedido.numeroPedido]);
    };
    return CorteComponent;
}());
CorteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-corte',
        template: __webpack_require__("../../../../../src/app/pages/corte/corte.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["f" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_pedidos_service__["a" /* PedidosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_pedidos_service__["a" /* PedidosService */]) === "function" && _c || Object])
], CorteComponent);

var _a, _b, _c;
//# sourceMappingURL=corte.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/corte/corte.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "corteRoutes", function() { return corteRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorteModule", function() { return CorteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_clientes_service__ = __webpack_require__("../../../../../src/app/services/clientes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pedidos_service__ = __webpack_require__("../../../../../src/app/services/pedidos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__corte_router__ = __webpack_require__("../../../../../src/app/pages/corte/corte.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__corte_component__ = __webpack_require__("../../../../../src/app/pages/corte/corte.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__form_corte_form_corte_component__ = __webpack_require__("../../../../../src/app/pages/corte/form-corte/form-corte.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__form_corte_form_corte_module__ = __webpack_require__("../../../../../src/app/pages/corte/form-corte/form-corte.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var corteRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__corte_component__["a" /* CorteComponent */] },
    { path: 'formCorte/:id', component: __WEBPACK_IMPORTED_MODULE_10__form_corte_form_corte_component__["a" /* FormCorteComponent */] }
];
var CorteModule = (function () {
    function CorteModule() {
    }
    return CorteModule;
}());
CorteModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__corte_router__["a" /* corteRouter */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["g" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_11__form_corte_form_corte_module__["a" /* FormCorteModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["g" /* RouterModule */].forChild(corteRoutes),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__services_pedidos_service__["a" /* PedidosService */],
            __WEBPACK_IMPORTED_MODULE_0__services_clientes_service__["a" /* ClientesService */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_8__corte_component__["a" /* CorteComponent */], __WEBPACK_IMPORTED_MODULE_10__form_corte_form_corte_component__["a" /* FormCorteComponent */]]
    })
], CorteModule);

//# sourceMappingURL=corte.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/corte/corte.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return corteRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__corte_component__ = __webpack_require__("../../../../../src/app/pages/corte/corte.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");


var CORTE_ROUTER = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__corte_component__["a" /* CorteComponent */] },
];
var corteRouter = __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(CORTE_ROUTER);
//# sourceMappingURL=corte.router.js.map

/***/ }),

/***/ "../../../../../src/app/pages/corte/form-corte/form-corte.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"container\" *ngIf=\"pedido.listaProductos\">\r\n    <div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <app-card>\r\n            <h4>Detalle Tallas</h4>\r\n            nombre Clientefecha, etc. estado, tipo deporte\r\n          </app-card>\r\n          <app-card>\r\n            <div id=\"acordionProductos\">\r\n              <div class=\"card\" *ngFor='let c of pedido.listaProductos; let i=index'>\r\n                <!--header fila-->\r\n                <div id=\"header{{i}}\">\r\n                  <h3>{{c.descProducto}}<br>\r\n                    [{{c.descTipoProducto}}]\r\n                    / Tallas: [{{c.descRangoPrecio}}]</h3>\r\n                </div>\r\n                <!--detalle fila-->\r\n                <div id=\"fila{{i}}\">\r\n                  <form #detallePedidoForm='ngForm' class='form-inline'>\r\n                    <table class=\"form-table-bordered\">\r\n                      <thead>\r\n                        <tr>\r\n                          <td>#</td>\r\n                          <td>Numero jugador</td>\r\n                          <td>Nombre pecho</td>\r\n                          <td>Nombre espalda</td>\r\n                          <td>Terminado?</td>\r\n                          <td>Opciones</td>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor='let d of c.listaDetalleTallas; let ii=index'>\r\n                          <td style=\"width:10px;\">{{ ii+1 }}\r\n                          </td>\r\n        <!--NUMERO JUGADOR-->\r\n                          <td style=\"width:90px;\">\r\n                            {{d.numero}}\r\n                          </td>\r\n        <!--NOMBRE PECHO-->\r\n                          <td style=\"width:140px;\">\r\n                            {{d.nombrePecho}}\r\n                          </td>\r\n        <!--NOMBRE ESPALDA-->\r\n                          <td style=\"width:140px;\">\r\n                            {{d.nombreEspalda}}\r\n                          </td>\r\n                          <td>\r\n                            <div class=\"btn-group btn-group-toggle\"\r\n                              ngbRadioGroup name='terminadoCorte{{ii}}'\r\n                              [(ngModel)]='d.terminadoCorte'>\r\n                              <label ngbButtonLabel class=\"btn btn-outline-primary btn-sm\">\r\n                                <input ngbButton type=\"radio\" [value]=\"0\">NO\r\n                              </label>\r\n                              <label ngbButtonLabel class=\"btn btn-outline-primary btn-sm\">\r\n                                <input ngbButton type=\"radio\" [value]=\"1\">SI\r\n                              </label>\r\n                            </div>\r\n                          </td>\r\n                          <td>\r\n                            <button type=\"button\" class=\"btn btn-danger btn-sm\"\r\n                            (click)=\"$event.stopPropagation();\">Notificar</button>\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n              <!-- {{detallePedido | json}} -->\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </app-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class='form-group'>\r\n    <a class=\"btn btn-primary\" routerLink='/corte'>Cancelar</a>\r\n    <button (click)='guardarPedido();' class='btn btn-primary'>{{nombreBoton}}</button>\r\n  </div>\r\n<!-- {{pedido|json}}\r\n -->\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/corte/form-corte/form-corte.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormCorteComponent; });
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






var FormCorteComponent = (function () {
    function FormCorteComponent(route, router, pedidosService, clientesService) {
        this.route = route;
        this.router = router;
        this.pedidosService = pedidosService;
        this.clientesService = clientesService;
        this.pedido = new __WEBPACK_IMPORTED_MODULE_0__model_pedido_pedido_model__["a" /* Pedido */]();
        this.nombreBoton = "Guardar";
    }
    FormCorteComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Se inicia form corte->' + this.route.snapshot.params['id']);
        this.pedidosService.getPedido(this.route.snapshot.params['id']).subscribe(function (data) {
            console.log('Editando corte->' + JSON.stringify(data));
            _this.pedido = data;
        });
    };
    FormCorteComponent.prototype.guardarPedido = function () {
        var _this = this;
        this.calculaAvanceCorte();
        this.pedidosService.putPedido(this.pedido).subscribe(function (data) {
            console.log('pedido actualizado->' + JSON.stringify(data));
            _this.pedido = data;
        });
        this.router.navigate(['/corte', '<strong>Pedido nro. [' + this.pedido.numeroPedido + ']</strong> Actualizado exitosamente']);
    };
    FormCorteComponent.prototype.calculaAvanceCorte = function () {
        var contadorCorte = 0; //sumo solo los items que esten terminados
        var contadorTotalitemsProductos = 0; //sumo todos los items que encuentre
        //Calcula % avance del pedido corte
        for (var _i = 0, _a = this.pedido.listaProductos; _i < _a.length; _i++) {
            var producto = _a[_i];
            for (var _b = 0, _c = producto.listaDetalleTallas; _b < _c.length; _b++) {
                var talla = _c[_b];
                if (talla.terminadoCorte === 1) {
                    contadorCorte++;
                }
                contadorTotalitemsProductos++;
            }
        }
        this.pedido.avanceCorte = Math.round((contadorCorte * 100) / this.pedido.totalItems);
        this.pedido.itemsTerminadosCorte = contadorCorte;
    };
    return FormCorteComponent;
}());
FormCorteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-form-corte',
        template: __webpack_require__("../../../../../src/app/pages/corte/form-corte/form-corte.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_pedidos_service__["a" /* PedidosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_pedidos_service__["a" /* PedidosService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_clientes_service__["a" /* ClientesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_clientes_service__["a" /* ClientesService */]) === "function" && _d || Object])
], FormCorteComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=form-corte.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/corte/form-corte/form-corte.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export corteRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormCorteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__corte_component__ = __webpack_require__("../../../../../src/app/pages/corte/corte.component.ts");
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
var corteRoutes = [
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_0__corte_component__["a" /* CorteComponent */] },
];
var FormCorteModule = (function () {
    function FormCorteModule() {
    }
    return FormCorteModule;
}());
FormCorteModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["g" /* RouterModule */].forChild(corteRoutes)
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_pedidos_service__["a" /* PedidosService */],
            __WEBPACK_IMPORTED_MODULE_7__services_clientes_service__["a" /* ClientesService */]
        ],
        declarations: []
    })
], FormCorteModule);

//# sourceMappingURL=form-corte.module.js.map

/***/ })

});
//# sourceMappingURL=corte.module.chunk.js.map