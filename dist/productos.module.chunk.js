webpackJsonp(["productos.module"],{

/***/ "../../../../../src/app/pages/productos/form-producto/form-producto.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n  height: 200px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/productos/form-producto/form-producto.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n        <h6>Producto:</h6>\n        <app-card [title]=\"producto!=null?producto.desc:''\" [classHeader]=\"false\" [blockClass]=\"'table-border-style'\">\n<!--         <button (click)=\"nuevoProducto()\" class=\"btn btn-primary btn-sm\">Nuevo</button>\n -->\n<!--         <div class=\"container\">\n          <div class=\"row\"> -->\n            <div>\n              <button *ngIf=\"!verformProducto\" (click)=\"nuevoProducto()\" class=\"btn btn-primary btn-sm\">Nuevo</button>\n              <button *ngIf=\"!verformProducto && producto!=null\" (click)=\"verformProducto=true;\" class=\"btn btn-primary btn-sm\">Editar</button>\n              <form *ngIf=\"verformProducto==true\">\n              <div>\n                <input type='text' class='form-control' name='descripcionProducto' [(ngModel)]='descripcionProducto'\n                  placeholder='Ingrese Producto'>\n              </div>\n              <div class=\"col-sm\">\n                <select class='form-control' name='estadoProducto' *ngIf=\"!addProducto\" [(ngModel)]='estadoProducto'>\n                  <option [value]=\"'activo'\">Activo</option>\n                  <option [value]=\"'inactivo'\">Inactivo</option>\n                </select>\n                <button type=\"button\" (click)=\"cancelarProducto()\" class=\"btn btn-warn btn-sm\">Cancelar</button>\n                <button type=\"button\" (click)=\"guardarProducto()\" class=\"btn btn-primary btn-sm\">Guardar</button>\n              </div>\n            </form>\n            <table class=\"table table-hover\">\n              <thead>\n                <tr>\n                  <th>#</th>\n                  <th>Descripcion</th>\n                  <th>Estado</th>\n                  <!-- <th>Opciones</th> -->\n                </tr>\n              </thead>\n              <tbody *ngFor=\"let producto of listaProductos | paginate: { itemsPerPage: 5, currentPage: p,\n                totalItems: total };let i = index\">\n                <tr (click)=\"verProducto(producto);\">\n                  <td>{{i+1}}</td>\n                  <td>{{producto.desc}} ({{producto.tipoProducto.length}})</td>\n                  <td>{{producto.estado}}</td>\n                  <!--             <td>\n              <button type=\"button\" class=\"btn btn-primary\"\n              (click)='addProductos(producto._id);$event.stopPropagation();'>\n                Agregar Productos\n              </button>\n            </td> -->\n                </tr>\n              </tbody>\n            </table>\n            <pagination-controls\n              previousLabel=\"Atrás\"\n              nextLabel=\"Siguiente\"\n              (pageChange)=\"p = $event\">\n            </pagination-controls>\n\n          </div>\n<!--         </div>\n      </div> -->\n      </app-card>\n    </div>\n    <div class=\"col-md-8\">\n      <app-form-tipo-producto (emite)=\"updateProducto($event)\" [producto]=producto></app-form-tipo-producto>\n    </div>\n\n      {{ producto | json }}\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/productos/form-producto/form-producto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormProductoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_productos_service__ = __webpack_require__("../../../../../src/app/services/productos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_commons_service__ = __webpack_require__("../../../../../src/app/services/commons.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_producto_producto_model__ = __webpack_require__("../../../../../src/app/model/producto/producto.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormProductoComponent = (function () {
    function FormProductoComponent(route, router, productoService, commonsService) {
        this.route = route;
        this.router = router;
        this.productoService = productoService;
        this.commonsService = commonsService;
    }
    FormProductoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.producto = new __WEBPACK_IMPORTED_MODULE_4__model_producto_producto_model__["a" /* Producto */]();
        this.commonsService.getProductos().subscribe(function (productos) {
            _this.listaProductos = productos;
            console.log('productos->' + JSON.stringify(productos));
        }, function (err) {
            console.log(err);
        });
    };
    FormProductoComponent.prototype.nuevoProducto = function () {
        this.verformProducto = true;
        this.addProducto = true;
        this.producto = new __WEBPACK_IMPORTED_MODULE_4__model_producto_producto_model__["a" /* Producto */]();
        this.producto.estado = 'activo';
    };
    FormProductoComponent.prototype.editarProducto = function () {
        this.verformProducto = true;
    };
    FormProductoComponent.prototype.verProducto = function (item) {
        this.producto = item;
        this.descripcionProducto = item.desc;
        this.estadoProducto = item.estado;
        console.log('producto->' + JSON.stringify(item) + ' / this.verformProducto->' + this.verformProducto);
    };
    FormProductoComponent.prototype.cancelarProducto = function () {
        this.verformProducto = false;
        this.descripcionProducto = '';
        this.estadoProducto = '';
    };
    FormProductoComponent.prototype.guardarProducto = function () {
        var _this = this;
        this.producto.desc = this.descripcionProducto;
        if (this.addProducto === true) {
            this.producto.id = this.listaProductos.length + 1;
            this.productoService.postProducto(this.producto).subscribe(function (data) {
                console.log('producto actualizado->' + JSON.stringify(data));
                _this.producto = data;
                //Emite mensaje
                toastr.info('El producto se ha creado exitosamente', _this.producto.desc);
                _this.cancelarProducto();
            });
        }
        else {
            this.producto.estado = this.estadoProducto;
            this.productoService.putProducto(this.producto).subscribe(function (data) {
                console.log('producto actualizado->' + JSON.stringify(data));
                _this.producto = data;
                //Emite mensaje
                toastr.info('El producto se ha actualizado exitosamente', _this.producto.desc);
                _this.cancelarProducto();
            });
        }
    };
    FormProductoComponent.prototype.updateProducto = function (producto) {
        var _this = this;
        this.producto = producto;
        this.productoService.putProducto(this.producto).subscribe(function (data) {
            console.log('producto actualizado->' + JSON.stringify(data));
            _this.producto = data;
            //Emite mensaje
            toastr.info('El producto se ha actualizado exitosamente', _this.producto.desc);
            _this.cancelarProducto();
        });
    };
    FormProductoComponent.prototype.updateTipoProducto = function (tipoProducto) {
        /* this.tipoProducto = tipoProducto;
        this.producto.tipoProducto
        this.updateProducto(this.producto); */
    };
    FormProductoComponent.prototype.addProductos = function (id) {
        this.router.navigate(['/productos/categoria', id]);
    };
    return FormProductoComponent;
}());
FormProductoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-form-producto',
        template: __webpack_require__("../../../../../src/app/pages/productos/form-producto/form-producto.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/productos/form-producto/form-producto.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["f" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_productos_service__["a" /* ProductosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_productos_service__["a" /* ProductosService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_commons_service__["a" /* CommonsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_commons_service__["a" /* CommonsService */]) === "function" && _d || Object])
], FormProductoComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=form-producto.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/productos/form-rango-precio/form-rango-precio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n  height: 200px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/productos/form-rango-precio/form-rango-precio.component.html":
/***/ (function(module, exports) {

module.exports = "<h6>Rango de Precio:</h6>\n<app-card [title]='rangoPrecio.desc' [classHeader]=\"false\" [blockClass]=\"'table-border-style'\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <button (click)=\"nuevo()\" class=\"btn btn-primary btn-sm\">Nuevo</button>\n      <button *ngIf=\"rangoPrecio.desc!=null\" (click)=\"verformProducto=true;\" class=\"btn btn-primary btn-sm\">Editar</button>\n      <form *ngIf=\"verformProducto==true\">\n        <div>\n          <input type='text' class='form-control' name='desc' [(ngModel)]='rangoPrecio.desc' placeholder='Rango de tallas'>\n\n          <input type='number' class='form-control' name='valor' [(ngModel)]='rangoPrecio.valor' placeholder='Valor'>\n        </div>\n        <div class=\"col-sm\">\n          <select class='form-control' name='estado' *ngIf=\"!addProducto\" [(ngModel)]='rangoPrecio.estado'>\n            <option [value]=\"'activo'\">Activo</option>\n            <option [value]=\"'inactivo'\">Inactivo</option>\n          </select>\n          <button type=\"button\" (click)=\"cancelar()\" class=\"btn btn-warn btn-sm\">Cancelar</button>\n          <button type=\"button\" (click)=\"guardar()\" class=\"btn btn-primary btn-sm\">Guardar</button>\n        </div>\n      </form>\n    </div>\n  </div>\n  <table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th>#</th>\n        <th>Descripcion</th>\n        <th>Valor</th>\n        <th>Estado</th>\n        <!-- <th>Opciones</th> -->\n      </tr>\n    </thead>\n    <tbody *ngFor=\"let producto of listaRangoPrecioProducto | paginate: { itemsPerPage: 5, currentPage: p,\n      totalItems: total };let i = index\">\n      <tr (click)=\"verRangoPrecio(producto);\">\n        <td>{{i+1}}</td>\n        <td>{{producto.desc}}</td>\n        <td>{{producto.valor}}</td>\n        <td>{{producto.estado}}</td>\n      </tr>\n    </tbody>\n  </table>\n  <pagination-controls\n  previousLabel=\"Atrás\"\n  nextLabel=\"Siguiente\"\n  (pageChange)=\"p = $event\">\n</pagination-controls>\n\n</app-card>\n<!-- {{ tipoProducto | json }}\n--------------------------- -->\n"

/***/ }),

/***/ "../../../../../src/app/pages/productos/form-rango-precio/form-rango-precio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormRangoPrecioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_commons_service__ = __webpack_require__("../../../../../src/app/services/commons.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_productos_service__ = __webpack_require__("../../../../../src/app/services/productos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_producto_rangoPrecioProducto_model__ = __webpack_require__("../../../../../src/app/model/producto/rangoPrecioProducto.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_producto_tipoProducto_model__ = __webpack_require__("../../../../../src/app/model/producto/tipoProducto.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FormRangoPrecioComponent = (function () {
    function FormRangoPrecioComponent(route, router, productoService, commonsService) {
        this.route = route;
        this.router = router;
        this.productoService = productoService;
        this.commonsService = commonsService;
        this.emite = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FormRangoPrecioComponent.prototype.ngOnInit = function () {
        this.rangoPrecio = new __WEBPACK_IMPORTED_MODULE_4__model_producto_rangoPrecioProducto_model__["a" /* RangoPrecioProducto */]();
        console.log('this.rangoPrecio: ', this.rangoPrecio);
    };
    FormRangoPrecioComponent.prototype.nuevo = function () {
        this.rangoPrecio = new __WEBPACK_IMPORTED_MODULE_4__model_producto_rangoPrecioProducto_model__["a" /* RangoPrecioProducto */]();
        this.rangoPrecio.estado = 'activo';
        this.verformProducto = true;
        this.addProducto = true;
    };
    FormRangoPrecioComponent.prototype.ngOnChanges = function (changes) {
        if (this.tipoProducto != null) {
            this.listaRangoPrecioProducto = this.tipoProducto.rangoPrecio;
            console.log('this.tipoProducto leido : ', JSON.stringify(this.tipoProducto));
        }
    };
    FormRangoPrecioComponent.prototype.guardar = function () {
        if (this.addProducto === true) {
            //NUEVO ELEMENTO
            console.log('this.tipoProducto.rangoPrecio: ', this.tipoProducto.rangoPrecio);
            if (this.tipoProducto.rangoPrecio.length === 0) {
                this.tipoProducto.rangoPrecio = new Array();
                this.rangoPrecio.id = this.listaRangoPrecioProducto.length + 1;
                this.tipoProducto.rangoPrecio.push(this.rangoPrecio);
                console.log('this.tipoProducto.rangoPrecio: ', JSON.stringify(this.tipoProducto.rangoPrecio));
                this.emite.emit(this.tipoProducto);
                //EDITAR ELEMENTO
            }
            else {
                this.rangoPrecio.id = this.listaRangoPrecioProducto.length + 1;
                this.tipoProducto.rangoPrecio.push(this.rangoPrecio);
                this.emite.emit(this.tipoProducto);
            }
            //console.log('this.tipoProducto: ', JSON.stringify(this.tipoProducto));
        }
    };
    FormRangoPrecioComponent.prototype.verRangoPrecio = function (item) {
        this.verformProducto = false;
        this.rangoPrecio = item;
        this.rangoPrecio.desc = item.desc;
        this.rangoPrecio.estado = item.estado;
        console.log('this.rangoPrecio: ', this.rangoPrecio);
    };
    FormRangoPrecioComponent.prototype.cancelar = function () {
        this.verformProducto = false;
        this.tipoProducto = new __WEBPACK_IMPORTED_MODULE_5__model_producto_tipoProducto_model__["a" /* TipoProducto */]();
        this.tipoProducto.estado = "Activo";
    };
    return FormRangoPrecioComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__model_producto_tipoProducto_model__["a" /* TipoProducto */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__model_producto_tipoProducto_model__["a" /* TipoProducto */]) === "function" && _a || Object)
], FormRangoPrecioComponent.prototype, "tipoProducto", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FormRangoPrecioComponent.prototype, "emite", void 0);
FormRangoPrecioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-form-rango-precio',
        template: __webpack_require__("../../../../../src/app/pages/productos/form-rango-precio/form-rango-precio.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/productos/form-rango-precio/form-rango-precio.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_productos_service__["a" /* ProductosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_productos_service__["a" /* ProductosService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services_commons_service__["a" /* CommonsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_commons_service__["a" /* CommonsService */]) === "function" && _e || Object])
], FormRangoPrecioComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=form-rango-precio.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/productos/form-tipo-producto/form-tipo-producto.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n  height: 200px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/productos/form-tipo-producto/form-tipo-producto.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h6>Tipo de Producto:</h6>\n      <app-card [title]=tipoProducto.desc [classHeader]=\"false\" [blockClass]=\"'table-border-style'\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <button (click)=\"nuevo()\" class=\"btn btn-primary btn-sm\">Nuevo</button>\n            <button *ngIf=\"tipoProducto.desc!=null\" (click)=\"verformProducto=true;\" class=\"btn btn-primary btn-sm\">Editar</button>\n            <form *ngIf=\"verformProducto==true\">\n              <div>\n                <input type='text' class='form-control' name='descripcionTipoProducto' [(ngModel)]='tipoProducto.desc'\n                  placeholder='Descripción Tipo Producto'>\n              </div>\n              <div class=\"col-sm\">\n                <select class='form-control' name='estado' *ngIf=\"!addProducto\" [(ngModel)]='tipoProducto.estado'>\n                  <option [value]=\"'activo'\">Activo</option>\n                  <option [value]=\"'inactivo'\">Inactivo</option>\n                </select>\n                <button type=\"button\" (click)=\"cancelar()\" class=\"btn btn-warn btn-sm\">Cancelar</button>\n                <button type=\"button\" (click)=\"guardar()\" class=\"btn btn-primary btn-sm\">Guardar</button>\n              </div>\n            </form>\n          </div>\n        </div>\n        <table class=\"table table-hover\">\n          <thead>\n            <tr>\n              <th>#</th>\n              <th>Descripcion</th>\n              <th>Estado</th>\n              <!-- <th>Opciones</th> -->\n            </tr>\n          </thead>\n          <tbody *ngFor=\"let producto of listaTipoProducto | paginate: { itemsPerPage: 5, currentPage: p,\n            totalItems: total };let i = index\">\n            <tr (click)=\"verTipoProducto(producto);\">\n              <td>{{i+1}}</td>\n              <td>{{producto.desc}} ({{ producto.rangoPrecio.length}})</td>\n              <td>{{producto.estado}}</td>\n              <!--             <td>\n            <button type=\"button\" class=\"btn btn-primary\"\n            (click)='addProductos(producto._id);$event.stopPropagation();'>\n              Agregar Productos\n            </button>\n          </td> -->\n            </tr>\n          </tbody>\n        </table>\n        <pagination-controls\n          previousLabel=\"Atrás\"\n          nextLabel=\"Siguiente\"\n          (pageChange)=\"p = $event\">\n        </pagination-controls>\n\n      </app-card>\n    </div>\n    <div class=\"col-md-6\">\n    <app-form-rango-precio (emite)=\"updateTipoProducto($event)\" [tipoProducto]=tipoProducto></app-form-rango-precio>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/productos/form-tipo-producto/form-tipo-producto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormTipoProductoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_producto_tipoProducto_model__ = __webpack_require__("../../../../../src/app/model/producto/tipoProducto.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_producto_producto_model__ = __webpack_require__("../../../../../src/app/model/producto/producto.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_commons_service__ = __webpack_require__("../../../../../src/app/services/commons.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_productos_service__ = __webpack_require__("../../../../../src/app/services/productos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FormTipoProductoComponent = (function () {
    function FormTipoProductoComponent(route, router, productoService, commonsService) {
        this.route = route;
        this.router = router;
        this.productoService = productoService;
        this.commonsService = commonsService;
        this.emite = new __WEBPACK_IMPORTED_MODULE_5__angular_core__["EventEmitter"]();
    }
    //Nivel: Categoria->producto->rango precio
    FormTipoProductoComponent.prototype.ngOnInit = function () {
        this.tipoProducto = new __WEBPACK_IMPORTED_MODULE_0__model_producto_tipoProducto_model__["a" /* TipoProducto */]();
        this.tipoProducto.estado = 'activo';
    };
    FormTipoProductoComponent.prototype.nuevo = function () {
        this.tipoProducto = new __WEBPACK_IMPORTED_MODULE_0__model_producto_tipoProducto_model__["a" /* TipoProducto */]();
        this.tipoProducto.estado = 'activo';
        this.verformProducto = true;
        this.addProducto = true;
    };
    FormTipoProductoComponent.prototype.ngOnChanges = function (changes) {
        if (this.producto != null) {
            this.listaTipoProducto = this.producto.tipoProducto;
            console.log('this.producto.tipoProducto: ', this.producto.tipoProducto);
        }
    };
    FormTipoProductoComponent.prototype.guardar = function () {
        if (this.addProducto === true) {
            if (this.producto.tipoProducto == null) {
                this.producto.tipoProducto = new Array();
            }
            console.log('this.tipoProducto: ', this.tipoProducto);
            this.tipoProducto.id = this.listaTipoProducto.length + 1;
            this.producto.tipoProducto.push(this.tipoProducto);
            console.log('this.producto: ', JSON.stringify(this.producto));
            this.emite.emit(this.producto);
        }
        else {
            this.emite.emit(this.producto);
        }
    };
    FormTipoProductoComponent.prototype.updateTipoProducto = function (tipoProducto) {
        //this.tipoProducto = tipoProducto;
        this.emite.emit(this.producto);
    };
    FormTipoProductoComponent.prototype.verTipoProducto = function (item) {
        this.verformProducto = false;
        this.tipoProducto = item;
        this.tipoProducto.desc = item.desc;
        this.tipoProducto.estado = item.estado;
        //console.log('this.tipoProducto: ', this.tipoProducto);
    };
    FormTipoProductoComponent.prototype.cancelar = function () {
        this.verformProducto = false;
        this.tipoProducto = new __WEBPACK_IMPORTED_MODULE_0__model_producto_tipoProducto_model__["a" /* TipoProducto */]();
        this.tipoProducto.estado = 'Activo';
    };
    return FormTipoProductoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_producto_producto_model__["a" /* Producto */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_producto_producto_model__["a" /* Producto */]) === "function" && _a || Object)
], FormTipoProductoComponent.prototype, "producto", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FormTipoProductoComponent.prototype, "emite", void 0);
FormTipoProductoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'app-form-tipo-producto',
        template: __webpack_require__("../../../../../src/app/pages/productos/form-tipo-producto/form-tipo-producto.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/productos/form-tipo-producto/form-tipo-producto.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["f" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_productos_service__["a" /* ProductosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_productos_service__["a" /* ProductosService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_commons_service__["a" /* CommonsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_commons_service__["a" /* CommonsService */]) === "function" && _e || Object])
], FormTipoProductoComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=form-tipo-producto.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/productos/productos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    height: 200px;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/productos/productos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n<!--     <div class=\"col-3\">\n      <div class=\"list-group\">\n        <a *ngFor=\"let tipo of listaTipoMantenedor\" [routerLink]=\"['/productos', tipo]\" class=\"list-group-item\">{{tipo}}</a>\n      </div>\n    </div> -->\n    <div class=\"col-md\">\n      <h4>{{tipoMantenedor}}</h4>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/productos/productos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_pedidos_service__ = __webpack_require__("../../../../../src/app/services/pedidos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_commons_service__ = __webpack_require__("../../../../../src/app/services/commons.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_producto_producto_model__ = __webpack_require__("../../../../../src/app/model/producto/producto.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_productos_service__ = __webpack_require__("../../../../../src/app/services/productos.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductosComponent = (function () {
    function ProductosComponent(route, router, pedidosService, productoService, commonsService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.pedidosService = pedidosService;
        this.productoService = productoService;
        this.commonsService = commonsService;
        this.route.params.subscribe(function (params) {
            //console.log(params['id']);
            _this.tipoMantenedor = params['id'];
            console.log('leyendo id->' + _this.tipoMantenedor);
        });
    }
    ProductosComponent.prototype.ngOnInit = function () {
        this.listaTipoMantenedor = this.commonsService.getTipoMantenedor();
    };
    ProductosComponent.prototype.nuevoProducto = function () {
        this.verformProducto = true;
        this.addProducto = true;
        this.producto = new __WEBPACK_IMPORTED_MODULE_4__model_producto_producto_model__["a" /* Producto */]();
        this.producto.estado = 'activo';
    };
    ProductosComponent.prototype.verProducto = function (item) {
        this.producto = item;
        this.descripcionProducto = item.desc;
        this.estadoProducto = item.estado;
        this.verformProducto = true;
        console.log('producto->' + JSON.stringify(item) + ' / this.verformProducto->' + this.verformProducto);
    };
    ProductosComponent.prototype.cancelarProducto = function () {
        this.verformProducto = false;
        this.descripcionProducto = '';
        this.estadoProducto = '';
    };
    ProductosComponent.prototype.guardarProducto = function () {
        var _this = this;
        this.producto.desc = this.descripcionProducto;
        if (this.addProducto === true) {
            this.productoService.postProducto(this.producto).subscribe(function (data) {
                console.log('producto actualizado->' + JSON.stringify(data));
                _this.producto = data;
                //Emite mensaje
                toastr.info('El producto se ha creado exitosamente', _this.producto.desc);
                _this.cancelarProducto();
            });
        }
        else {
            this.producto.estado = this.estadoProducto;
            this.productoService.putProducto(this.producto).subscribe(function (data) {
                console.log('producto actualizado->' + JSON.stringify(data));
                _this.producto = data;
                //Emite mensaje
                toastr.info('El producto se ha actualizado exitosamente', _this.producto.desc);
                _this.cancelarProducto();
            });
        }
    };
    ProductosComponent.prototype.addProductos = function (id) {
        this.router.navigate(['/productos/categoria', id]);
    };
    return ProductosComponent;
}());
ProductosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-productos',
        template: __webpack_require__("../../../../../src/app/pages/productos/productos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/productos/productos.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_pedidos_service__["a" /* PedidosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_pedidos_service__["a" /* PedidosService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_productos_service__["a" /* ProductosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_productos_service__["a" /* ProductosService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services_commons_service__["a" /* CommonsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_commons_service__["a" /* CommonsService */]) === "function" && _e || Object])
], ProductosComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=productos.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/productos/productos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productosRoutes", function() { return productosRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosModule", function() { return ProductosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_rango_precio_form_rango_precio_component__ = __webpack_require__("../../../../../src/app/pages/productos/form-rango-precio/form-rango-precio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_tipo_producto_form_tipo_producto_component__ = __webpack_require__("../../../../../src/app/pages/productos/form-tipo-producto/form-tipo-producto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_productos_service__ = __webpack_require__("../../../../../src/app/services/productos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_pedidos_service__ = __webpack_require__("../../../../../src/app/services/pedidos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_commons_service__ = __webpack_require__("../../../../../src/app/services/commons.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__productos_router__ = __webpack_require__("../../../../../src/app/pages/productos/productos.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__productos_component__ = __webpack_require__("../../../../../src/app/pages/productos/productos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__form_producto_form_producto_component__ = __webpack_require__("../../../../../src/app/pages/productos/form-producto/form-producto.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var productosRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_15__form_producto_form_producto_component__["a" /* FormProductoComponent */],
        children: [
            {
                path: 'producto',
                component: __WEBPACK_IMPORTED_MODULE_15__form_producto_form_producto_component__["a" /* FormProductoComponent */]
            },
        ]
    },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_7__productos_component__["a" /* ProductosComponent */] },
];
var ProductosModule = (function () {
    function ProductosModule() {
    }
    return ProductosModule;
}());
ProductosModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__productos_router__["a" /* productosRouter */],
            __WEBPACK_IMPORTED_MODULE_11__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_13__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_0_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_router__["g" /* RouterModule */].forChild(productosRoutes)
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__services_commons_service__["a" /* CommonsService */],
            __WEBPACK_IMPORTED_MODULE_4__services_pedidos_service__["a" /* PedidosService */],
            __WEBPACK_IMPORTED_MODULE_3__services_productos_service__["a" /* ProductosService */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__productos_component__["a" /* ProductosComponent */],
            __WEBPACK_IMPORTED_MODULE_15__form_producto_form_producto_component__["a" /* FormProductoComponent */],
            __WEBPACK_IMPORTED_MODULE_2__form_tipo_producto_form_tipo_producto_component__["a" /* FormTipoProductoComponent */],
            __WEBPACK_IMPORTED_MODULE_1__form_rango_precio_form_rango_precio_component__["a" /* FormRangoPrecioComponent */]
        ]
    })
], ProductosModule);

//# sourceMappingURL=productos.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/productos/productos.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return productosRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form_producto_form_producto_component__ = __webpack_require__("../../../../../src/app/pages/productos/form-producto/form-producto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");


var productos_ROUTER = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__form_producto_form_producto_component__["a" /* FormProductoComponent */] },
];
var productosRouter = __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(productos_ROUTER);
//# sourceMappingURL=productos.router.js.map

/***/ })

});
//# sourceMappingURL=productos.module.chunk.js.map