webpackJsonp(["corte.module"],{

/***/ "../../../../../src/app/pages/corte/corte.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Lista  -->\r\n<app-lista-pedidos [modulo]=modulo></app-lista-pedidos>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/corte/corte.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CorteComponent = (function () {
    function CorteComponent() {
    }
    CorteComponent.prototype.ngOnInit = function () {
        this.modulo = 'corte';
    };
    return CorteComponent;
}());
CorteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-corte',
        template: __webpack_require__("../../../../../src/app/pages/corte/corte.component.html")
    }),
    __metadata("design:paramtypes", [])
], CorteComponent);

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var corteRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__corte_component__["a" /* CorteComponent */] },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_8__corte_component__["a" /* CorteComponent */] },
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
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["g" /* RouterModule */].forChild(corteRoutes),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__services_pedidos_service__["a" /* PedidosService */],
            __WEBPACK_IMPORTED_MODULE_0__services_clientes_service__["a" /* ClientesService */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__corte_component__["a" /* CorteComponent */],
        ]
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

/***/ })

});
//# sourceMappingURL=corte.module.chunk.js.map