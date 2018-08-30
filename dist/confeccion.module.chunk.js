webpackJsonp(["confeccion.module"],{

/***/ "../../../../../src/app/pages/confeccion/confeccion.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/confeccion/confeccion.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Lista  -->\r\n<app-lista-pedidos [modulo]=modulo></app-lista-pedidos>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/confeccion/confeccion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfeccionComponent; });
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

var ConfeccionComponent = (function () {
    function ConfeccionComponent() {
    }
    ConfeccionComponent.prototype.ngOnInit = function () {
        this.modulo = 'confeccion';
    };
    return ConfeccionComponent;
}());
ConfeccionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-confeccion',
        template: __webpack_require__("../../../../../src/app/pages/confeccion/confeccion.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/confeccion/confeccion.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ConfeccionComponent);

//# sourceMappingURL=confeccion.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/confeccion/confeccion.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confeccionRoutes", function() { return confeccionRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfeccionModule", function() { return ConfeccionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__confeccion_component__ = __webpack_require__("../../../../../src/app/pages/confeccion/confeccion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_clientes_service__ = __webpack_require__("../../../../../src/app/services/clientes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pedidos_service__ = __webpack_require__("../../../../../src/app/services/pedidos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__confeccion_router__ = __webpack_require__("../../../../../src/app/pages/confeccion/confeccion.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var confeccionRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__confeccion_component__["a" /* ConfeccionComponent */] },
];
var ConfeccionModule = (function () {
    function ConfeccionModule() {
    }
    return ConfeccionModule;
}());
ConfeccionModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__confeccion_router__["a" /* confeccionRouter */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["g" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["g" /* RouterModule */].forChild(confeccionRoutes),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__services_pedidos_service__["a" /* PedidosService */],
            __WEBPACK_IMPORTED_MODULE_1__services_clientes_service__["a" /* ClientesService */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_0__confeccion_component__["a" /* ConfeccionComponent */]]
    })
], ConfeccionModule);

//# sourceMappingURL=confeccion.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/confeccion/confeccion.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return confeccionRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__confeccion_component__ = __webpack_require__("../../../../../src/app/pages/confeccion/confeccion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");


var CONFECCION_ROUTER = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__confeccion_component__["a" /* ConfeccionComponent */] },
];
var confeccionRouter = __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(CONFECCION_ROUTER);
//# sourceMappingURL=confeccion.router.js.map

/***/ })

});
//# sourceMappingURL=confeccion.module.chunk.js.map