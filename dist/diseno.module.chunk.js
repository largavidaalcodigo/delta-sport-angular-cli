webpackJsonp(["diseno.module"],{

/***/ "../../../../../src/app/pages/diseno/diseno.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/diseno/diseno.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Lista  -->\r\n<app-lista-pedidos [modulo]=modulo></app-lista-pedidos>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/diseno/diseno.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisenoComponent; });
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

var DisenoComponent = (function () {
    function DisenoComponent() {
    }
    DisenoComponent.prototype.ngOnInit = function () {
        this.modulo = 'diseño';
    };
    return DisenoComponent;
}());
DisenoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-diseno',
        template: __webpack_require__("../../../../../src/app/pages/diseno/diseno.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/diseno/diseno.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DisenoComponent);

//# sourceMappingURL=diseno.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/diseno/diseno.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disenoRoutes", function() { return disenoRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisenoModule", function() { return DisenoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_clientes_service__ = __webpack_require__("../../../../../src/app/services/clientes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pedidos_service__ = __webpack_require__("../../../../../src/app/services/pedidos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__diseno_router__ = __webpack_require__("../../../../../src/app/pages/diseno/diseno.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__diseno_component__ = __webpack_require__("../../../../../src/app/pages/diseno/diseno.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var disenoRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__diseno_component__["a" /* DisenoComponent */] },
];
var DisenoModule = (function () {
    function DisenoModule() {
    }
    return DisenoModule;
}());
DisenoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__diseno_router__["a" /* disenoRouter */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["g" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["g" /* RouterModule */].forChild(disenoRoutes),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__services_pedidos_service__["a" /* PedidosService */],
            __WEBPACK_IMPORTED_MODULE_0__services_clientes_service__["a" /* ClientesService */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_8__diseno_component__["a" /* DisenoComponent */]]
    })
], DisenoModule);

//# sourceMappingURL=diseno.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/diseno/diseno.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return disenoRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__diseno_component__ = __webpack_require__("../../../../../src/app/pages/diseno/diseno.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
//import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';


//import { FormCorteComponent } from './form-corte/form-corte.component';
var DISENO_ROUTER = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__diseno_component__["a" /* DisenoComponent */] },
];
var disenoRouter = __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(DISENO_ROUTER);
//# sourceMappingURL=diseno.router.js.map

/***/ })

});
//# sourceMappingURL=diseno.module.chunk.js.map