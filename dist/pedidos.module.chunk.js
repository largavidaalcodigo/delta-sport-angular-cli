webpackJsonp(["pedidos.module"],{

/***/ "../../../../../src/app/file-upload/file-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container\">\r\n  <div class=\"navbar navbar-default\">\r\n      <div class=\"navbar-header\">\r\n          <a class=\"navbar-brand\" href>Angular2 File Upload</a>\r\n      </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n      <h3>Select files</h3>\r\n       <div ng2FileDrop\r\n            [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\r\n            (fileOver)=\"fileOverBase($event)\"\r\n            [uploader]=\"uploader\"\r\n            class=\"well my-drop-zone\">\r\n          Base drop zone\r\n      </div>\r\n\r\n      <div ng2FileDrop\r\n            [ngClass]=\"{'another-file-over-class': hasAnotherDropZoneOver}\"\r\n            (fileOver)=\"fileOverAnother($event)\"\r\n            [uploader]=\"uploader\"\r\n            class=\"well my-drop-zone\">\r\n          Another drop zone\r\n      </div>\r\n      Multiple\r\n      <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple/><br/>\r\n\r\n       Single\r\n      <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\r\n    </div>\r\n\r\n    <div class=\"col-md-9\" style=\"margin-bottom: 40px\">\r\n\r\n      <h3>Upload queue</h3>\r\n       <p>Queue length: {{ uploader?.queue?.length }}</p>\r\n\r\n       <table class=\"table\">\r\n          <thead>\r\n          <tr>\r\n              <th width=\"50%\">Name</th>\r\n              <th>Size</th>\r\n              <th>Progress</th>\r\n              <th>Status</th>\r\n              <th>Actions</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let item of uploader.queue\">\r\n              <td><strong>{{ item?.file?.name }}</strong></td>\r\n              <td *ngIf=\"uploader.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\r\n              <td *ngIf=\"uploader.isHTML5\">\r\n                  <div class=\"progress\" style=\"margin-bottom: 0;\">\r\n                      <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\r\n                  </div>\r\n              </td>\r\n              <td class=\"text-center\">\r\n                  <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\r\n                  <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\r\n                  <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\r\n              </td>\r\n              <td nowrap>\r\n                  <button type=\"button\" class=\"btn btn-success btn-xs\"\r\n                          (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\r\n                      <span class=\"glyphicon glyphicon-upload\"></span> Upload\r\n                  </button>\r\n                  <button type=\"button\" class=\"btn btn-warning btn-xs\"\r\n                          (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\r\n                      <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\r\n                  </button>\r\n                  <button type=\"button\" class=\"btn btn-danger btn-xs\"\r\n                          (click)=\"item.remove()\">\r\n                      <span class=\"glyphicon glyphicon-trash\"></span> Remove\r\n                  </button>\r\n              </td>\r\n          </tr>\r\n          </tbody>\r\n      </table>\r\n\r\n      <div>\r\n          <div>\r\n              Queue progress:\r\n              <div class=\"progress\" style=\"\">\r\n                  <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\r\n              </div>\r\n          </div>\r\n          <button type=\"button\" class=\"btn btn-success btn-s\"\r\n                  (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n              <span class=\"glyphicon glyphicon-upload\"></span> Upload all\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-warning btn-s\"\r\n                  (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\r\n              <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-danger btn-s\"\r\n                  (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\r\n              <span class=\"glyphicon glyphicon-trash\"></span> Remove all\r\n          </button>\r\n      </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n-->\r\n"

/***/ }),

/***/ "../../../../../src/app/file-upload/file-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/* import {NgClass, NgStyle} from '@angular/common';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle} from '@angular/common';
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from 'ng2-file-upload';
 */
var URL = '/api/';
var FileUploadComponent = (function () {
    function FileUploadComponent() {
    }
    return FileUploadComponent;
}());
FileUploadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-file-upload',
        template: __webpack_require__("../../../../../src/app/file-upload/file-upload.component.html"),
    })
], FileUploadComponent);

//# sourceMappingURL=file-upload.component.js.map

/***/ }),

/***/ "../../../../../src/app/model/pedido/detallePedido.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallePedido; });
var DetallePedido = (function () {
    function DetallePedido() {
        this.cantidad = 1;
        this.llevaDiseno = 1; // 0 = no / 1 = si
        this.totalAdicionales = 0;
        this.total = 0;
    }
    return DetallePedido;
}());

//# sourceMappingURL=detallePedido.model.js.map

/***/ }),

/***/ "../../../../../src/app/model/pedido/medioPago.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedioPago; });
var MedioPago = (function () {
    function MedioPago() {
    }
    return MedioPago;
}());

//# sourceMappingURL=medioPago.model.js.map

/***/ }),

/***/ "../../../../../src/app/model/producto/detalleTalla.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleTalla; });
var DetalleTalla = (function () {
    function DetalleTalla() {
    }
    return DetalleTalla;
}());

//# sourceMappingURL=detalleTalla.model.js.map

/***/ }),

/***/ "../../../../../src/app/model/producto/fichaTecnica.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FichaTecnica; });
var FichaTecnica = (function () {
    function FichaTecnica() {
    }
    return FichaTecnica;
}());

//# sourceMappingURL=fichaTecnica.model.js.map

/***/ }),

/***/ "../../../../../src/app/model/producto/rangoPrecioProducto.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangoPrecioProducto; });
var RangoPrecioProducto = (function () {
    function RangoPrecioProducto() {
    }
    return RangoPrecioProducto;
}());

//# sourceMappingURL=rangoPrecioProducto.model.js.map

/***/ }),

/***/ "../../../../../src/app/model/producto/tipoCuelloFT.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipoCuelloFT; });
var TipoCuelloFT = (function () {
    function TipoCuelloFT() {
    }
    return TipoCuelloFT;
}());

//# sourceMappingURL=tipoCuelloFT.model.js.map

/***/ }),

/***/ "../../../../../src/app/model/producto/tipoProductoFT.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipoProductoFT; });
var TipoProductoFT = (function () {
    function TipoProductoFT() {
    }
    return TipoProductoFT;
}());

//# sourceMappingURL=tipoProductoFT.model.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pedidos/form-pedido/filterdata.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterDataPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterDataPipe = (function () {
    function FilterDataPipe() {
    }
    FilterDataPipe.prototype.transform = function (items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.toLowerCase().includes(searchText);
        });
    };
    return FilterDataPipe;
}());
FilterDataPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'filterdata' })
], FilterDataPipe);

//# sourceMappingURL=filterdata.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pedidos/form-pedido/form-pedido.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"container\">\r\n      <app-file-upload></app-file-upload>\r\n<!--FORM TALLAS -->\r\n    <div *ngIf=\"tipoForm==='tallas' || tipoForm==='ft'; else formPedido\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <app-card>\r\n            <h4 *ngIf=\"tipoForm==='tallas'\">Detalle Tallas</h4>\r\n            <h4 *ngIf=\"tipoForm==='ft'\">Detalle Ficha Técnica</h4>\r\n\r\n            <div class=\"d-inline-block\">\r\n              <div class=\"col-4 d-inline-block border\">\r\n                <p class=\"font-weight-bold\">Cliente</p>\r\n                <span *ngIf=\"pedido.cliente\">\r\n                  {{pedido.cliente.nombresCliente}} {{pedido.cliente.apellidoPaternoCliente}}\r\n                </span>\r\n              </div>\r\n              <div class=\"col-2 d-inline-block border\">\r\n                  <p class=\"font-weight-bold\">Fecha creación</p>\r\n                  <span>{{pedido.fechaCreacion | date:'yyyy-MM-dd'}}</span>\r\n              </div>\r\n              <div class=\"col-2 d-inline-block border\">\r\n                  <p class=\"font-weight-bold\">Fecha entrega</p>\r\n                  <span>{{pedido.fechaEntrega | date:'yyyy-MM-dd'}}</span>\r\n              </div>\r\n              <div class=\"col-2 d-inline-block border\">\r\n                  <p class=\"font-weight-bold\">Tipo de deporte</p>\r\n                  <span>{{pedido.tipoDeporte}}</span>\r\n              </div>\r\n            </div>\r\n          </app-card>\r\n          <app-card>\r\n            <div *ngFor='let c of pedido.listaProductos; let i=index'>\r\n              <!--header fila-->\r\n              <div class=\"col-12 d-inline-block\" id=\"header{{i}}\">\r\n                <div class=\"col-7 d-inline-block bg-danger\">\r\n                  <h4>[#{{i+1}}] {{c.descProducto}}\r\n                    [{{c.descTipoProducto}}]\r\n                    / Rango Tallas: [{{c.descRangoPrecio}}]\r\n                  </h4>\r\n                </div>\r\n                <div class=\"col-4 d-inline-block bg-danger\">\r\n                  <h4>Tipo jugador: {{c.tipoJugador}}</h4>\r\n                </div>\r\n              </div>\r\n\r\n<!--DETALLE TIPO PRODUCTO FICHA TECNICA-->\r\n              <app-card>\r\n                <div class=\"d-inline-block\" id=\"filaTipoProductoFT{{i}}\" *ngIf=\"tipoForm==='ft'\">\r\n                  <span class=\"btn-group\">\r\n                  <h4>Producto</h4>\r\n            <!-- DESCRIPCION TELA -->\r\n                  <form #formTipoProductoFT=\"ngForm\">\r\n                    <div class=\"row\" >\r\n                      <div class=\"col-4\">\r\n                        <h5>Descripción tela</h5>\r\n                        <input type='text' class='form-control' name='tipoProductoFTDescTela{{i}}'\r\n                        (change)='tipoProductoFT.descTela = $event.target.value;'>\r\n                      </div>\r\n                      <div class=\"col-2\">\r\n                          <h5>Color tela</h5>\r\n                          <select class='form-control' name='tipoProductoFTcolorTela{{i}}'\r\n                            (change)='tipoProductoFT.colorTela = $event.target.value;'>\r\n                            <option [value]=''>[Seleccione...]</option>\r\n                            <option *ngFor='let color of listaColores' [value]='color.id'>{{color.desc}}</option>\r\n                          </select>\r\n                        </div>\r\n                        <div class=\"col-2\">\r\n                          <h5>Tipo tela</h5>\r\n                          <select class='form-control' name='tipoProductoFTtipoTela{{i}}'\r\n                            (change)='tipoProductoFT.tipoTela = $event.target.value;'>\r\n                            <option [value]=''>[Seleccione...]</option>\r\n                            <option *ngFor='let tela of listaTelas' [value]='tela'>{{tela}}</option>\r\n                          </select>\r\n                        </div>\r\n                        <div class=\"col-4\">\r\n                          <br>\r\n                          <button type=\"button\" class=\"btn btn-primary btn-sm\"\r\n                            (click)=\"addTipoProductoFT(c, formTipoProductoFT);\">\r\n                            Guardar\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </form>\r\n                    <div class=\"d-inline-block border\">\r\n            <!--TITULO-->\r\n                          <table width=\"100%\" class=\"table-bordered\">\r\n                            <tr *ngIf=\"c.fichaTecnica.listaTipoProducto.length>0\">\r\n                                <th class=\"text-center\">#</th>\r\n                                <th class=\"text-center\">Descripción</th>\r\n                                <th class=\"text-center\">Color</th>\r\n                                <th class=\"text-center\">Tipo tela</th>\r\n                                <th>&nbsp;</th>\r\n                            </tr>\r\n                            <!--LISTA DE MEDIOS DE PAGO-->\r\n                            <tr *ngFor=\"let item of c.fichaTecnica.listaTipoProducto; let i = index;\">\r\n                              <td class=\"text-center\">\r\n                                  <h5>{{i + 1}}</h5>\r\n                              </td>\r\n                              <td class=\"text-left\">\r\n                                  <h5>{{item.descTela}}</h5>\r\n                              </td>\r\n                              <td class=\"text-left\">\r\n                                <h5>{{item.colorTela}}</h5>\r\n                              </td>\r\n                              <td class=\"text-left\">\r\n                                <h5>{{item.tipoTela}}</h5>\r\n                              </td>\r\n                              <td>\r\n                                <div style=\"text-align:center\">\r\n                                  <button type=\"button\" (click)='eliminaTipoProductoFT(c, i);'>\r\n                                    <i class=\"icofont icofont-trash\"></i>\r\n                                  </button>\r\n                                </div>\r\n                              </td>\r\n                            </tr>\r\n                          </table>\r\n                        </div>\r\n                      </span>\r\n                  </div>\r\n                </app-card>\r\n<!--DETALLE TIPO CUELLO FICHA TECNICA-->\r\n                <app-card>\r\n                  <div class=\"d-inline-block\" id=\"filaTipoCuelloFT{{i}}\" *ngIf=\"tipoForm==='ft'\">\r\n                    <span class=\"btn-group\">\r\n                    <h4>Tipo Cuello</h4>\r\n                <!-- DESCRIPCION TELA -->\r\n                    <form #formTipoCuelloFT=\"ngForm\">\r\n                      <div class=\"row\" >\r\n                        <div class=\"col-3\">\r\n                          <h5>Color tela</h5>\r\n                          <select class='form-control' name='tipoCuelloFTcolorTela{{i}}'\r\n                            (change)='tipoCuelloFT.colorTela = $event.target.value;'>\r\n                            <option [value]=''>[Seleccione...]</option>\r\n                            <option *ngFor='let color of listaColores' [value]='color.id'>{{color.desc}}</option>\r\n                          </select>\r\n                        </div>\r\n                        <div class=\"col-3\">\r\n                          <h5>Tipo tela</h5>\r\n                          <select class='form-control' name='tipoCuelloFTtipoTela{{i}}'\r\n                            (change)='tipoCuelloFT.tipoTela = $event.target.value;'>\r\n                            <option [value]=''>[Seleccione...]</option>\r\n                            <option *ngFor='let tela of listaTelas' [value]='tela'>{{tela}}</option>\r\n                          </select>\r\n                        </div>\r\n                        <div class=\"col-4\">\r\n                          <br>\r\n                          <button type=\"button\" class=\"btn btn-primary btn-sm\"\r\n                            (click)=\"addTipoCuelloFT(c, formTipoCuelloFT);\">\r\n                            Guardar\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </form>\r\n                    <div class=\"d-inline-block border\">\r\n                <!--TITULO-->\r\n                      <table width=\"100%\" class=\"table-bordered\">\r\n                        <tr *ngIf=\"c.fichaTecnica.listaTipoCuello.length>0\">\r\n                            <th class=\"text-center\">#</th>\r\n                            <th class=\"text-center\">Color</th>\r\n                            <th class=\"text-center\">Tipo tela</th>\r\n                            <th>&nbsp;</th>\r\n                        </tr>\r\n                        <!--LISTA DE MEDIOS DE PAGO-->\r\n                        <tr *ngFor=\"let item of c.fichaTecnica.listaTipoCuello; let i = index;\">\r\n                          <td class=\"text-center\">\r\n                              <h5>{{i + 1}}</h5>\r\n                          </td>\r\n                          <td class=\"text-left\">\r\n                            <h5>{{item.colorTela}}</h5>\r\n                          </td>\r\n                          <td class=\"text-left\">\r\n                            <h5>{{item.tipoTela}}</h5>\r\n                          </td>\r\n                          <td>\r\n                            <div style=\"text-align:center\">\r\n                              <button type=\"button\" (click)='eliminaTipoCuelloFT(c, i);'>\r\n                                <i class=\"icofont icofont-trash\"></i>\r\n                              </button>\r\n                            </div>\r\n                          </td>\r\n                        </tr>\r\n                      </table>\r\n                    </div>\r\n                  </span>\r\n                </div>\r\n              </app-card>\r\n<!--DETALLE TALLAS-->\r\n                <div id=\"fila{{i}}\" *ngIf=\"tipoForm==='tallas'\">\r\n                  <form #detallePedidoForm='ngForm' (ngSubmit)=\"onSubmitDetalle(detallePedido);\" class='form-inline'>\r\n                    <table class=\"form-table-bordered\">\r\n                      <thead>\r\n                        <tr>\r\n                          <td>#</td>\r\n                          <td>Talla</td>\r\n                          <td>Sexo prenda</td>\r\n                          <td>Numero jugador</td>\r\n                          <td>Nombre pecho</td>\r\n                          <td>Nombre espalda</td>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor='let d of c.listaDetalleTallas; let ii=index'>\r\n                          <td>{{ ii+1 }}\r\n                          </td>\r\n        <!--TALLA-->\r\n                          <td style=\"width:90px;\">\r\n                            <select class='form-control' name='listaTallas{{ii}}' [(ngModel)]='d.talla'>\r\n                              <option [value]=''>[Seleccione...]</option>\r\n                              <option *ngFor='let talla of listaTallas' [value]='talla'>{{talla}}</option>\r\n                            </select>\r\n                          </td>\r\n        <!--SEXO PRENDA-->\r\n                          <td>\r\n                            <div class=\"btn-group btn-group-toggle\"\r\n                            ngbRadioGroup name='sexoPrenda{{ii}}' [(ngModel)]='d.generoPrenda'>\r\n\r\n                            <label ngbButtonLabel class=\"btn btn-outline-primary btn-sm\">\r\n                              <input ngbButton type=\"radio\" [value]='0'>Hombre\r\n                            </label>\r\n                            <label ngbButtonLabel class=\"btn btn-outline-primary btn-sm\">\r\n                              <input ngbButton type=\"radio\" [value]='1'>Mujer\r\n                            </label>\r\n                          </div>\r\n                        </td>\r\n        <!--NUMERO JUGADOR-->\r\n                          <td style=\"width:90px;\">\r\n                            <input type='number' class='form-control' name='numero{{ii}}'\r\n                             [(ngModel)]=\"d.numero\" placeholder='Numero jugador'>\r\n                          </td>\r\n        <!--NOMBRE PECHO-->\r\n                          <td style=\"width:140px;\">\r\n                            <input type='text' class='form-control' name='nombrePecho{{ii}}'\r\n                            [(ngModel)]=\"d.nombrePecho\" placeholder='Nombre pecho'>\r\n                          </td>\r\n        <!--NOMBRE ESPALDA-->\r\n                          <td style=\"width:140px;\">\r\n                            <input type='text' class='form-control' name='nombreEspalda{{ii}}'\r\n                            [(ngModel)]=\"d.nombreEspalda\" placeholder='Nombre espalda'>\r\n                            <br>\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n          </app-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n<!--FORM PEDIDO / ACTUALIZAR O CREAR -->\r\n    <ng-template #formPedido>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <app-card>\r\n            <h4>Datos de pedido<span *ngIf=\"pedido.numeroPedido\">[ Nro.{{pedido.numeroPedido}}]</span></h4>\r\n            <form #encabezadoPedidoForm='ngForm'>\r\n              <div class='form-group'><!--  border border-primary'> -->\r\n  <!-- SELECCICONA CLIENTE-->\r\n                <div class=\"col-7 d-inline-block\">\r\n                  <div class=\"d-inline-block\">\r\n                    Cliente\r\n                    <input *ngIf=\"!pedido.cliente\" type='text' size=\"45\" class='form-control' name='query' [(ngModel)]=\"queryBuscaCliente\"\r\n                    placeholder='Seleccione Cliente...'>\r\n\r\n                    <span *ngIf=\"pedido.cliente\">\r\n                      <input type='text' size=\"45\" class='form-control' name='query' [(ngModel)]=\"pedido.cliente.nombresCliente\">\r\n                    </span>\r\n                  </div>\r\n  <!--BOTON CARGAR CLIENTE-->\r\n                  <div class=\"d-inline-block\">\r\n                    <button *ngIf=\"!pedido.cliente\" type=\"button\" (click)=\"cargarCliente();\" class=\"btn btn-primary\">Cargar</button>\r\n                    <button *ngIf=\"pedido.cliente\" type=\"button\" (click)=\"cambiarCliente();\" class=\"btn btn-primary\">Cambiar</button>\r\n                  </div>\r\n                </div>\r\n\r\n              <!--FECHA ENTREGA -->\r\n                <div class=\"col-3 d-inline-block\">\r\n                  Fecha de Entrega\r\n                  <input size=\"20\" class='form-control' name='fechaEntrega'\r\n                  [ngModel]=\"pedido.fechaEntrega | date:'yyyy-MM-dd'\"\r\n                  (ngModelChange)=\"pedido.fechaEntrega = $event\"\r\n                  type=\"date\" placeholder=\"Fecha entrega\">\r\n                </div>\r\n\r\n              <!--TIPO DEPORTE -->\r\n                <div class=\"col-2 d-inline-block\">\r\n                  Tipo de deporte\r\n                  <select class='form-control' name='tipoDeporte' [(ngModel)]='pedido.tipoDeporte'>\r\n                    <option [value]=''>Seleccione...</option>\r\n                    <option *ngFor='let c of listaTipoDeporte' [value]='c'>{{c}}</option>\r\n                  </select>\r\n                </div>\r\n\r\n<!-- LISTADO BUSQUEDA CLIENTES-->\r\n                <div id=\"toggle\" onfocusout=\"\" class='list-group col-8'\r\n                  style='position:fixed; z-index:1000;' *ngIf='queryBuscaCliente'>\r\n                  <button type=\"button\" class=\"btn btn-primary\"\r\n                    *ngFor='let c of listaClientes | dataFilter: queryBuscaCliente : \"nombresCliente\"'\r\n                    (click)='addCliente(c)'>{{c.rutCliente}} - {{c.nombresCliente}}\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </app-card>\r\n        </div>\r\n      </div>\r\n\r\n\r\n  <!--SELECCIONA PRODUCTO-->\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <app-card>\r\n            <span class=\"btn-group\">\r\n              <h4><span>Seleccione Producto</span>\r\n                <div style=\"position:absolute;top:0px;left:230px;\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-sm\"\r\n                  (click)=\"nuevoDetalle()\">Nuevo</button>\r\n                </div>\r\n              </h4>\r\n            </span>\r\n  <!-- Formulario detalle Pedido -->\r\n            <form #detallePedidoForm='ngForm' (ngSubmit)=\"onSubmitDetalle(detallePedido);\"\r\n              class='form-horizontal'>\r\n              <table class=\"form-table-bordered\">\r\n                <thead class=\"thead-light\">\r\n                  <tr>\r\n                    <td>Categoria</td>\r\n                    <td>Producto</td>\r\n                    <td>Talla</td>\r\n                    <td>Cantidad</td>\r\n                    <td>Valor</td>\r\n                    <td><b>SubTotal</b></td>\r\n                    <td>Tipo Jugador</td>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n  <!--CATEGORIA-->\r\n                    <td class=\"col-xs-1\" style=\"width:140px;\">\r\n                      <select class='form-control' name='producto' [(ngModel)]='detallePedido.idProducto'\r\n                      (change)='onSelectProducto($event.target.value)'>\r\n                        <option [value]=''>[Producto]</option>\r\n                        <option *ngFor='let producto of listaProductos' [value]='producto.idProducto'>{{producto.desc}}</option>\r\n                      </select>\r\n                    </td>\r\n  <!--PRODUCTO-->\r\n                    <td style=\"width:140px;\">\r\n                      <select class='form-control' name='tipoProducto'\r\n                      [(ngModel)]='detallePedido.idTipoProducto'\r\n                      (change)='onSelectTipoProducto($event.target.value)'\r\n                      placeholder=\"[Tipo Producto]\">\r\n                        <option [value]=''>[Tipo Producto]</option>\r\n                        <option *ngFor='let tipoProducto of listaTipoProducto' [value]='tipoProducto.id'>{{tipoProducto.desc}}</option>\r\n                      </select>\r\n                    </td>\r\n  <!--RANGO PRECIO-->\r\n                    <td style=\"width:90px;\">\r\n                      <select class='form-control' name='rangoPrecio'\r\n                      [(ngModel)]='detallePedido.idRangoPrecio'\r\n                      (change)='onSelectRangoPrecio($event.target.value)'>\r\n                        <option [value]=''>[Talla]</option>\r\n                        <option *ngFor='let rangoPrecio of listaRangoPrecios' [value]='rangoPrecio.id'>{{rangoPrecio.desc}}</option>\r\n                      </select>\r\n                    </td>\r\n  <!--CANTIDAD-->\r\n                    <td style=\"width:90px;\">\r\n                      <input type='number' class='form-control' name='cantidad'\r\n                      [(ngModel)]='detallePedido.cantidad' placeholder='Cantidad' (input)='onChangeCalculaTotalDetalle()'>\r\n                    </td>\r\n  <!--VALOR-->\r\n                    <td style=\"width:100px;\">\r\n                      <input type='text' readonly class='form-control-plaintext form-control'\r\n                      name='valor' [ngModel]='detallePedido.valor'\r\n                        [ngModelOptions]='{standalone: true}'\r\n                        (change)=\"onChangeCalculaTotalDetalle()\">\r\n                    </td>\r\n  <!--SUBTOTAL-->\r\n                    <td style=\"width:100px;\">\r\n                      <input type='text' readonly class='form-control-plaintext form-control' name='subtotal'\r\n                      [ngModel]='detallePedido.subTotal' [ngModelOptions]='{standalone: true}'>\r\n                    </td>\r\n<!-- TIPO JUGADOR -->\r\n                    <td colspan=\"2\">\r\n                      <input type='text' class='form-control-plaintext form-control'\r\n                        name='valor' [(ngModel)]='detallePedido.tipoJugador'\r\n                        [ngModelOptions]='{standalone: true}'>\r\n                    </td>\r\n                  </tr>\r\n                  </tbody>\r\n                <tfoot>\r\n                  <tr>\r\n                    <td colspan=\"4\">\r\n                      <!--BOTONERA ITEM PRODUCTO-->\r\n                      <div *ngIf=\"editando; else nuevoItem\">\r\n                        <button type=\"submit\" class=\"btn btn-primary\">Editar</button>\r\n                        <button type=\"button\" class=\"btn btn-primary\"\r\n                        (click)=\"nuevoDetalle()\">Cancelar</button>\r\n                      </div>\r\n                      <ng-template #nuevoItem>\r\n                        <button type=\"submit\" class=\"btn btn-primary\">Añadir</button>\r\n                        <button type=\"reset\" class=\"btn btn-primary\">Limpiar</button>\r\n                      </ng-template>\r\n                      <button type=\"button\" (click)=\"isCollapsed = !isCollapsed\"\r\n                        [attr.aria-expanded]=\"!isCollapsed\"\r\n                        class=\"btn btn-outline-primary\"\r\n                        aria-control=\"detallesAdicionales\">Extras\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </tfoot>\r\n              </table>\r\n        <!-- {{detallePedido | json}} -->\r\n            </form>\r\n  <!--COLLAPSE DETALLES ADICIONALES-->\r\n            <div id=\"detallesAdicionales\" [ngbCollapse]=\"!isCollapsed\">\r\n              <span>\r\n                <h4><span>Detalles adicionales</span></h4>\r\n              </span>\r\n              <div class=\"container\">\r\n                <div class=\"row\">\r\n    <!--LISTADO ADICIONALES-->\r\n                  <div class=\"col-sm-9 border\">\r\n                    <label for=\"checkAdicionales{{i}}\" class=\"badge badge-pill badge-success btn-sm\"\r\n                    *ngFor=\"let c of listaDetallesAdicionales;let i = index\"\r\n                      [style.background-color] = \"c.checked ? 'blue' : 'green'\">\r\n                      {{c.desc}}\r\n                      <span>${{c.valor}}</span>\r\n                        <input type=\"checkbox\" id=\"checkAdicionales{{i}}\" [(ngModel)]=\"c.checked\" data-toggle=\"toggle\"\r\n                        (change)=\"addDetalleAdicional()\">\r\n    <!--                   <ng-template #noChecked>\r\n                          <input ng-checked=\"false\" type=\"checkbox\" id=\"checkAdicionales{{i}}\" [(ngModel)]=\"c.checked\" data-toggle=\"toggle\"\r\n                          (change)=\"addDetalleAdicional()\">\r\n                      </ng-template>\r\n    -->                </label>\r\n                  </div>\r\n    <!--TOTAL ADICIONALES-->\r\n                  <div class=\"col-sm-3 border\">\r\n                    <span>Total Adicionales:</span>\r\n                    <div class=\"input-group\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\">$</span>\r\n                      </div>\r\n                      <input type='text' readonly class='form-control-plaintext form-control' name='totalAdicionales'\r\n                      [(ngModel)]='detallePedido.totalAdicionales'>\r\n                    </div>\r\n                    <!--BOTONERA ITEM PRODUCTO-->\r\n    <!--                 <button type=\"button\" class=\"btn btn-primary\"\r\n                    (click)=\"addDetalleAdicional()\"\r\n                    >Añadir</button>\r\n                    <button type=\"button\" class=\"btn btn-primary\">Cancelar</button> -->\r\n                  </div>\r\n                </div>\r\n                <!-- {{listaDetallesAdicionales|json}} -->\r\n              </div>\r\n            </div>\r\n          </app-card>\r\n        </div>\r\n      </div>\r\n  <!--     {{ listaDetallesAdicionales | json }}\r\n  -->\r\n  <!--LISTA PRODUCTOS-->\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <app-card>\r\n            <h4 style=\"display:inline;\">Lista de productos&nbsp;\r\n                <span *ngIf=\"cantidadProductos\"\r\n                class=\"badge badge-danger\">{{cantidadProductos}}</span>\r\n            </h4>\r\n            <!-- <span style=\"display:inline;\" class=\"badge badge-success\">Eliminar todo</span> -->\r\n            <div class=\"container\">\r\n              <div class=\"row\">\r\n                <table class=\"table table-bordered\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th scope=\"col\" style=\"width:45%\">Descripción</th>\r\n                      <th scope=\"col\">Subtotal</th>\r\n                      <th scope=\"col\">Diseño</th>\r\n                      <th scope=\"col\">Total adicionales</th>\r\n                      <th scope=\"col\">Monto Total</th>\r\n                      <th>&nbsp;</th>\r\n                    </tr>\r\n                  </thead>\r\n                <tbody>\r\n                  <tr *ngFor='let c of pedido.listaProductos; let i=index'>\r\n  <!--DESCRIPCION-->\r\n                    <td class=\"fila\" style=\"padding:1px;\">\r\n                        <button type=\"button\" (click)=\"verProducto(c)\"\r\n                          class=\"btn btn-outline-success text-left\"\r\n                          aria-pressed=\"true\"\r\n                          style=\"width:100%;\">\r\n                              {{c.descProducto}}<br>\r\n                                [{{c.descTipoProducto}}]\r\n                              / Tallas: [{{c.descRangoPrecio}}]\r\n                        </button>\r\n                    </td>\r\n  <!--  GRUPO SUBTOTAL ITEM -->\r\n                    <td class=\"text-center\" style=\"padding:1px;width:15%\">\r\n                      <h1 class=\"badge badge-success\">${{c.valor}}</h1>\r\n                      x {{c.cantidad}}<br>\r\n                      <h3 >${{c.subTotal}}</h3>\r\n                    </td>\r\n                    <td class=\"text-center\" style=\"padding:1px;width:15%\">\r\n  <!--  GRUPO BOTONES DISEÑO -->\r\n                      <div class=\"btn-group btn-group-toggle\"\r\n                        ngbRadioGroup name='llevaDiseno' [(ngModel)]='c.llevaDiseno'>\r\n\r\n                        <label ngbButtonLabel class=\"btn btn-outline-primary btn-sm\">\r\n                          <input ngbButton type=\"radio\" [value]=\"0\">NO\r\n                        </label>\r\n                        <label ngbButtonLabel class=\"btn btn-outline-primary btn-sm\">\r\n                          <input ngbButton type=\"radio\" [value]=\"1\">SI\r\n                        </label>\r\n                      </div>\r\n  <!--  SELECT DISEÑO -->\r\n                      <select class='form-control' name='color' [(ngModel)]='c.idColor'\r\n                        *ngIf='c.llevaDiseno==0'>\r\n                        <option [value]=''>[Color]</option>\r\n                        <option *ngFor='let color of listaColores' [value]='color.id'>{{color.desc}}</option>\r\n                      </select>\r\n                    </td>\r\n  <!--TOTAL DETALLES ADICIONALES-->\r\n                    <td class=\"text-center\" style=\"padding:1px;width:15%\">\r\n                      <h3 >${{c.totalAdicionales}}</h3>\r\n                    </td>\r\n  <!--SUBTOTAL-->\r\n                    <td class=\"text-center\" style=\"padding:1px;width:15%\">\r\n                      <h3 >${{c.total}}</h3>\r\n                    </td>\r\n  <!--OPCION ELIMINAR-->\r\n                    <td>\r\n                        <div style=\"text-align:center\">\r\n                          <button type=\"button\" (click)='eliminaProducto(\"$index\");'>\r\n                            <i class=\"icofont icofont-trash\"></i>\r\n                          </button>\r\n                        </div>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            </div>\r\n          </app-card>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-7\">\r\n  <!--COMENTARIOS-->\r\n          <app-card>\r\n            <span class=\"btn-group\">\r\n              <h4><span>Comentarios</span>\r\n                <div style=\"position:absolute;top:0px;right:30px;\">\r\n                  <a class=\"btn btn-primary btn-sm\" href=\"#\">Añadir</a>\r\n                </div>\r\n              </h4>\r\n            </span>\r\n            <div class=\"container\" *ngFor=\"let item of pedido.listaComentarios\">\r\n              <ul>\r\n                <li class=\"list-group-item table-bordered\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-3 text-right\">\r\n                      {{item.fechaCreacion}}\r\n                    </div>\r\n                    <div class=\"col-sm-8 text-right\">\r\n                      {{item.desc}}\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </app-card>\r\n  <!--FORMAS DE PAGO-->\r\n          <app-card>\r\n            <span class=\"btn-group\">\r\n              <h4>\r\n                <span>Forma de pago</span>\r\n  <!-- BOTONERA FORMAS DE PAGO -->\r\n                <div style=\"position:absolute;top:0px;right:30px;\"\r\n                  [ngbCollapse]=\"botoneraFormaPagoisCollapsed\" >\r\n                  <button type=\"button\" class=\"btn btn-primary btn-sm\"\r\n                    (click)=\"nuevoMedioPago();botoneraFormaPagoisCollapsed=!botoneraFormaPagoisCollapsed\" [attr.aria-expanded]=\"!botoneraFormaPagoisCollapsed\">\r\n                    Añadir\r\n                  </button>\r\n                </div>\r\n                <div style=\"position:absolute;top:0px;right:50px;\"\r\n                  [ngbCollapse]=\"!botoneraFormaPagoisCollapsed\" >\r\n                  <button type=\"button\" class=\"btn btn-primary btn-sm\"\r\n                    (click)=\"addMedioPago();botoneraFormaPagoisCollapsed=!botoneraFormaPagoisCollapsed\"\r\n                    [attr.aria-expanded]=\"!botoneraFormaPagoisCollapsed\">\r\n                    Guardar\r\n                  </button>\r\n                  <button type=\"button\" class=\"btn btn-primary btn-sm\"\r\n                    (click)=\"botoneraFormaPagoisCollapsed=!botoneraFormaPagoisCollapsed\"\r\n                    [attr.aria-expanded]=\"!botoneraFormaPagoisCollapsed\">\r\n                    Cancelar\r\n                  </button>\r\n                </div>\r\n\r\n              </h4>\r\n              <div [ngbCollapse]=\"!botoneraFormaPagoisCollapsed\">\r\n                <ul>\r\n                  <li class=\"list-group-item table-bordered\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-5 text-right\">\r\n                        <h5>Ingrese monto</h5>\r\n                      </div>\r\n                      <div class=\"col-sm-6 text-right\">\r\n                        <select class='form-control' name='tipoPago' [(ngModel)]='medioPago.tipoPago'>\r\n                          <option value='efectivo'>Efectivo</option>\r\n                          <option value='transferencia'>Transferencia</option>\r\n                          <option value='cheque'>Cheque</option>\r\n                        </select>\r\n                        <input type='number' class='form-control' name='montoPago' [(ngModel)]='medioPago.montoPago' placeholder='Monto Pagado'>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"container\">\r\n  <!--TITULO-->\r\n                <table width=\"100%\" class=\"table-bordered\">\r\n                  <tr *ngIf=\"pedido.listaMediosPago.length>0\">\r\n                      <th class=\"text-center\">Fecha Pago</th>\r\n                      <th class=\"text-center\">Medio Pago</th>\r\n                      <th class=\"text-center\">Monto</th>\r\n                      <th>&nbsp;</th>\r\n                  </tr>\r\n                  <!--LISTA DE MEDIOS DE PAGO-->\r\n                  <tr *ngFor=\"let item of pedido.listaMediosPago; let i = index;\">\r\n                    <td class=\"text-center\">\r\n                        <h5>{{item.fechaPago | date: 'dd/MM/yyyy' }}</h5>\r\n                    </td>\r\n                    <td class=\"text-left\">\r\n                      <h5>{{item.tipoPago}}</h5>\r\n                    </td>\r\n                    <td class=\"text-right\">\r\n                      <h4>${{item.montoPago}}</h4>\r\n                    </td>\r\n                    <td>\r\n                      <div style=\"text-align:center\">\r\n                        <button type=\"button\" (click)='eliminaMedioPago(\"$i\");'>\r\n                          <i class=\"icofont icofont-trash\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </td>\r\n\r\n                  </tr>\r\n                  <!--LISTA DE MEDIOS DE PAGO-->\r\n                  <tr>\r\n                    <td colspan=\"2\" class=\"text-right\">\r\n                      Saldo Pendiente:\r\n                    </td>\r\n                    <td class=\"text-right text-danger\">\r\n                      <h4>${{pedido.totalPagoPendiente}}</h4>\r\n                    </td>\r\n                  </tr>\r\n                  <!--LISTA DE MEDIOS DE PAGO-->\r\n                  <tr>\r\n                    <td colspan=\"2\" class=\"text-right\">\r\n                      Monto cancelado:\r\n                    </td>\r\n                    <td class=\"text-right\">\r\n                      <h4><b>${{pedido.totalMediosPago}}</b></h4>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n            </span>\r\n          </app-card>\r\n        </div>\r\n  <!--TOTALES PEDIDO-->\r\n        <div class=\"col-sm-5\">\r\n          <app-card>\r\n            <h4>Total Pedido</h4>\r\n            <div class=\"container\">\r\n              <ul class=\"list-group\">\r\n                <li class=\"list-group-item\">\r\n                  <div class=\"row\">\r\n                    <div class=\"text-right col-sm-5\">\r\n                      <h5>Subtotal</h5>\r\n                    </div>\r\n                    <div class=\"text-right col-sm-6\">\r\n                      <h4>${{pedido.subTotal}}</h4>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"list-group-item\">\r\n                  <div class=\"row\">\r\n                    <div class=\"text-right col-sm-5\">\r\n                      <h5>Descuento %</h5>\r\n                    </div>\r\n                    <div class=\"text-right col-sm-6\">\r\n                      <h4>\r\n                        <input type='number' class='form-control' name='descuento' [(ngModel)]='pedido.descuento' placeholder='Descuento' (input)='onChangeCalculaTotal()'>\r\n                      </h4>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"list-group-item\">\r\n                  <div class=\"row\">\r\n                    <div class=\"text-right col-sm-5\">\r\n                      <h5>Valor Neto</h5>\r\n                    </div>\r\n                    <div class=\"text-right col-sm-6\">\r\n                      <h4>${{pedido.subTotalNeto}}</h4>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"list-group-item\">\r\n                  <div class=\"row\">\r\n                    <div class=\"text-right col-sm-5\">\r\n                      <h5>Iva 19%</h5>\r\n                    </div>\r\n                    <div class=\"text-right col-sm-6\">\r\n                      <h4>${{pedido.iva}}</h4>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"list-group-item\">\r\n                  <div class=\"row\">\r\n                    <div class=\"text-right col-sm-5\">\r\n                      <h5><b>Monto Total</b></h5>\r\n                    </div>\r\n                    <div class=\"text-right col-sm-6\">\r\n                      <h4><b>${{pedido.total}}</b></h4>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </app-card>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n  <div class='form-group'>\r\n    <a class=\"btn btn-primary\" routerLink='/pedidos'>Cancelar</a>\r\n    <button (click)='guardarPedido();' class='btn btn-primary'>{{nombreBoton}}</button>\r\n  </div>\r\n<!-- {{pedido|json}} -->\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/pedidos/form-pedido/form-pedido.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPedidoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_producto_tipoCuelloFT_model__ = __webpack_require__("../../../../../src/app/model/producto/tipoCuelloFT.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_producto_tipoProductoFT_model__ = __webpack_require__("../../../../../src/app/model/producto/tipoProductoFT.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_producto_fichaTecnica_model__ = __webpack_require__("../../../../../src/app/model/producto/fichaTecnica.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_producto_detalleTalla_model__ = __webpack_require__("../../../../../src/app/model/producto/detalleTalla.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_pedido_detallePedido_model__ = __webpack_require__("../../../../../src/app/model/pedido/detallePedido.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_pedido_medioPago_model__ = __webpack_require__("../../../../../src/app/model/pedido/medioPago.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_producto_rangoPrecioProducto_model__ = __webpack_require__("../../../../../src/app/model/producto/rangoPrecioProducto.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_pedido_pedido_model__ = __webpack_require__("../../../../../src/app/model/pedido/pedido.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_clientes_service__ = __webpack_require__("../../../../../src/app/services/clientes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_pedidos_service__ = __webpack_require__("../../../../../src/app/services/pedidos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var FormPedidoComponent = (function () {
    function FormPedidoComponent(route, router, pedidosService, clientesService) {
        this.route = route;
        this.router = router;
        this.pedidosService = pedidosService;
        this.clientesService = clientesService;
        this.nombreBoton = "Guardar";
        this.listaDetallesAdicionales = new Array();
        this.listaDetallesTallas = new Array();
        this.listaTipoDeporte = new Array();
        this.listaTallas = new Array();
        this.listaTelas = new Array();
        //Medio pago
        this.listaMediosPago = new Array();
        //saldoPendiente: number;
        this.editando = false;
    }
    FormPedidoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tipoForm = this.route.snapshot.params['tipoForm'];
        console.log('Se inicia form pedido->' + this.tipoForm);
        //TALLAS
        if (this.tipoForm === 'tallas' || this.tipoForm === 'ft' || this.tipoForm === 'editar') {
            this.listaTallas = this.pedidosService.getTallas();
            this.pedidosService.getPedido(this.route.snapshot.params['id']).subscribe(function (data) {
                console.log('Editando tallas->' + JSON.stringify(data));
                _this.pedido = data;
            });
            this.nombreBoton = 'Actualizar';
        }
        if (this.tipoForm === 'ft') {
            this.listaTelas = this.pedidosService.getTelas();
            this.detalleFichaTecnica = new __WEBPACK_IMPORTED_MODULE_2__model_producto_fichaTecnica_model__["a" /* FichaTecnica */]();
            this.tipoProductoFT = new __WEBPACK_IMPORTED_MODULE_1__model_producto_tipoProductoFT_model__["a" /* TipoProductoFT */]();
            this.listaTipoProductoFT = new Array();
            this.listaTipoCuelloFT = new Array();
            this.tipoCuelloFT = new __WEBPACK_IMPORTED_MODULE_0__model_producto_tipoCuelloFT_model__["a" /* TipoCuelloFT */]();
        }
        //NUEVO
        if (this.pedido == null) {
            console.log('nuevo pedido');
            this.pedido = new __WEBPACK_IMPORTED_MODULE_7__model_pedido_pedido_model__["a" /* Pedido */]();
            this.pedido.idEstado = 1; //0= inactivo , 1=activo
            this.pedido.fechaCreacion = new Date();
            this.pedido.subTotal = 0;
            this.pedido.descuento = 0;
            this.pedido.avanceConfeccion = 0;
            this.pedido.itemsTerminadosConfeccion = 0;
            this.pedido.avanceCorte = 0;
            this.pedido.itemsTerminadosCorte = 0;
            this.pedido.avanceDiseno = 0;
            this.pedido.itemsTerminadosDiseno = 0;
            this.pedido.avanceEstampado = 0;
            this.pedido.itemsTerminadosEstampado = 0;
            this.pedido.totalItems = 0;
            this.pedido.listaProductos = new Array();
            this.pedido.listaMediosPago = new Array();
        }
        this.listaColores = this.pedidosService.getColores();
        this.listaMediosPago = this.pedidosService.getMediosPago();
        this.listaDetallesAdicionales = this.pedidosService.getDetallesAdicionales();
        this.listaTipoDeporte = this.pedidosService.getTipoDeporte();
        //lista de pedidos
        this.clientesService.getClientes().subscribe(function (data) {
            console.log('obteniendo lista clientes...');
            console.log(data);
            _this.listaClientes = data;
        });
        this.listaProductos = this.pedidosService.getProductos();
        this.detallePedido = new __WEBPACK_IMPORTED_MODULE_4__model_pedido_detallePedido_model__["a" /* DetallePedido */]();
        this.medioPago = new __WEBPACK_IMPORTED_MODULE_5__model_pedido_medioPago_model__["a" /* MedioPago */]();
        this.detallePedido.listaAdicionales = new Array();
        this.detallePedido.listaDetalleTallas = new Array();
        this.rangoPrecioProducto = new __WEBPACK_IMPORTED_MODULE_6__model_producto_rangoPrecioProducto_model__["a" /* RangoPrecioProducto */]();
    };
    FormPedidoComponent.prototype.getListaCliente = function (cadena) {
        /* = this.clientesService.getClientes()
        .filter(item => item.idProducto == productoId);
        console.log('productoId-> ' + productoId); */
        //console.log('tipos de producto->' + JSON.stringify(this.listaTipoProducto));
        //https://codeburst.io/create-a-search-pipe-to-dynamically-filter-results-with-angular-4-21fd3a5bec5c
    };
    FormPedidoComponent.prototype.onSelectProducto = function (productoId) {
        //this.detallePedido.idProducto = productoId;
        this.listaTipoProducto = this.pedidosService.getTipoProductos()
            .filter(function (item) { return item.idProducto == productoId; });
        console.log('productoId-> ' + productoId);
        //console.log('tipos de producto->' + JSON.stringify(this.listaTipoProducto));
    };
    FormPedidoComponent.prototype.onSelectTipoProducto = function (tipoProductoId) {
        //this.detallePedido.idTipoProducto = tipoProductoId;
        this.listaRangoPrecios = this.pedidosService.getRangoPrecios()
            .filter(function (item) { return item.idTipoProducto == tipoProductoId; });
        console.log('onSelectTipoProducto tipoProductoId->' + tipoProductoId);
    };
    FormPedidoComponent.prototype.onSelectRangoPrecio = function (rangoPrecioId) {
        this.rangoPrecioProducto = this.listaRangoPrecios.find(function (item) { return item.id == rangoPrecioId; });
        //this.detallePedido.idRangoPrecio = this.rangoPrecioProducto.id;
        this.detallePedido.valor = this.rangoPrecioProducto.valor;
        this.onChangeCalculaTotalDetalle();
        console.log('onSelectRangoPrecio rangoPrecioId->' + rangoPrecioId);
    };
    /*   onSelectSinDiseno(llevaDiseño: number){
          console.log('llevaDiseño->'+llevaDiseño);
      } */
    FormPedidoComponent.prototype.emiteVolver = function () {
        //this.pedidoForm.reset();
        //this.salir.emit();
        //this.router.navigate(['/pedidos', 'Pedido creado']);
    };
    FormPedidoComponent.prototype.onSubmitDetalle = function () {
        var _this = this;
        if (this.editando) {
            this.detallePedido.listaAdicionales = this.listaDetallesAdicionales.filter(function (item) { return item.checked; });
            this.addTallasProducto();
        }
        else if (this.tipoForm == 'tallas') {
        }
        else if (this.tipoForm == 'nuevo') {
            //this.pedido.rutCliente = this.pedidoForm.value.rutCliente;
            //setea Correlativo nro item
            this.detallePedido.id = this.pedido.listaProductos.length + 1;
            // SETEA NOMBRE DE CATEGORIA/PRODUCTO/RANGO PRECIO
            var producto = this.listaProductos.find(function (item) { return item.idProducto == _this.detallePedido.idProducto; });
            this.detallePedido.descProducto = producto.desc;
            this.detallePedido.descTipoProducto = this.listaTipoProducto.find(function (item) { return item.id == _this.detallePedido.idTipoProducto; }).desc;
            this.detallePedido.descRangoPrecio = this.listaRangoPrecios.find(function (item) { return item.id == _this.detallePedido.idRangoPrecio; }).desc;
            this.detallePedido.listaAdicionales = this.listaDetallesAdicionales.filter(function (item) { return item.checked; });
            this.addTallasProducto();
            this.cantidadProductos = this.pedido.listaProductos.push(this.detallePedido);
            console.log("nuevo item->" + JSON.stringify(this.detallePedido));
            this.detallePedido = new __WEBPACK_IMPORTED_MODULE_4__model_pedido_detallePedido_model__["a" /* DetallePedido */]();
        }
        //Calcula el total
        this.onChangeCalculaTotal();
        //this.pedido.listaProductos = this.listaDetallePedido;
        this.detallePedido = new __WEBPACK_IMPORTED_MODULE_4__model_pedido_detallePedido_model__["a" /* DetallePedido */]();
        this.listaDetallesAdicionales = this.pedidosService.getDetallesAdicionales();
    };
    FormPedidoComponent.prototype.addTallasProducto = function () {
        //TALLAS
        this.listaDetallesTallas = new Array();
        for (var c = 0; c < this.detallePedido.cantidad; c++) {
            this.detalleTallas = new __WEBPACK_IMPORTED_MODULE_3__model_producto_detalleTalla_model__["a" /* DetalleTalla */]();
            this.detalleTallas.numero = '';
            this.detalleTallas.nombrePecho = '';
            this.detalleTallas.nombreEspalda = '';
            this.detalleTallas.terminadoConfeccion = 0;
            this.detalleTallas.terminadoCorte = 0;
            this.detalleTallas.terminadoEstampado = 0;
            this.detalleTallas.terminadoDiseno = 0;
            //this.detalleTallas.generoPrenda = 0;
            this.listaDetallesTallas.push(this.detalleTallas);
        }
        this.detallePedido.listaDetalleTallas = this.listaDetallesTallas;
        this.detallePedido.fichaTecnica = new __WEBPACK_IMPORTED_MODULE_2__model_producto_fichaTecnica_model__["a" /* FichaTecnica */]();
    };
    FormPedidoComponent.prototype.nuevoDetalle = function () {
        this.detallePedido = new __WEBPACK_IMPORTED_MODULE_4__model_pedido_detallePedido_model__["a" /* DetallePedido */]();
        this.listaDetallesAdicionales = this.pedidosService.getDetallesAdicionales();
        this.editando = false;
    };
    FormPedidoComponent.prototype.verProducto = function (detallePedido) {
        this.editando = true;
        var detalle = detallePedido;
        this.detallePedido = detalle;
        this.onSelectTipoProducto(this.detallePedido.idTipoProducto);
        this.onSelectRangoPrecio(this.detallePedido.idRangoPrecio);
        //this.listaDetallesAdicionales = detallePedido.listaAdicionales;
        for (var _i = 0, _a = this.listaDetallesAdicionales; _i < _a.length; _i++) {
            var c = _a[_i];
            c.checked = false;
            for (var _b = 0, _c = this.detallePedido.listaAdicionales; _b < _c.length; _b++) {
                var d = _c[_b];
                if (c.id == d.id) {
                    c.checked = true;
                    break;
                }
            }
        }
        console.log('detallePedido->' + JSON.stringify(detallePedido));
    };
    // CALCULA EL TOTAL DEL ITEM CUANDO CAMBIA LA CANTIDAD O EL VALOR
    FormPedidoComponent.prototype.onChangeCalculaTotalDetalle = function () {
        this.detallePedido.subTotal = (this.detallePedido.cantidad * this.detallePedido.valor);
        this.detallePedido.total = this.detallePedido.subTotal + this.detallePedido.totalAdicionales;
        console.log('total detalle->' + this.detallePedido.total);
    };
    // CUANDO CAMBIA EL DESCUENTO DEL PEDIDO
    FormPedidoComponent.prototype.onChangeCalculaTotal = function () {
        console.log('Calculando total...');
        //suma valor del detalle al pedido
        var totalPedido = 0;
        console.log('this.pedido.listaProductos: ', this.pedido.listaProductos);
        this.pedido.listaProductos.filter(function (item) {
            totalPedido += item.total;
            console.log('total item->' + item.total + ' / total pedido->' + totalPedido);
        });
        this.pedido.subTotal = totalPedido;
        this.pedido.subTotalNeto = Math.round(this.pedido.subTotal - (this.pedido.subTotal * this.pedido.descuento)
            / 100);
        this.pedido.iva = Math.round(this.pedido.subTotalNeto * 0.19);
        this.pedido.total = Math.round(this.pedido.subTotalNeto + this.pedido.iva);
        this.pedido.totalMediosPago = 0;
        for (var _i = 0, _a = this.pedido.listaMediosPago; _i < _a.length; _i++) {
            var c = _a[_i];
            this.pedido.totalMediosPago += c.montoPago;
        }
        console.log('this.pedido.totalMediosPago->' + this.pedido.totalMediosPago);
        this.pedido.totalPagoPendiente = this.pedido.total - this.pedido.totalMediosPago;
    };
    // CUANDO AGREGO UN DETALLE ADICIONAL
    FormPedidoComponent.prototype.addDetalleAdicional = function () {
        var totalAdicionales = 0;
        this.detallePedido.listaAdicionales = this.listaDetallesAdicionales.filter(function (item) {
            if (item.checked) {
                totalAdicionales += item.valor;
                //console.log('item->'+ JSON.stringify(item));
            }
        });
        this.detallePedido.totalAdicionales = totalAdicionales;
        this.onChangeCalculaTotalDetalle();
        //console.log('this.detallePedido.totalAdicionales-> ' + this.detallePedido.totalAdicionales);
    };
    FormPedidoComponent.prototype.guardarPedido = function () {
        var _this = this;
        if (this.tipoForm === 'editar' || this.tipoForm === 'tallas' || this.tipoForm === 'ft') {
            //SE DEFINE ESTE ESTADO CUANDO SE INGRESAN LAS TALLAS
            if (this.tipoForm === 'tallas') {
                this.pedido.idEstado = 3;
            }
            else if (this.tipoForm === 'ft') {
                this.pedido.idEstado = 4;
            }
            this.calculaTotalItem();
            this.pedidosService.putPedido(this.pedido).subscribe(function (data) {
                console.log('pedido actualizado->' + JSON.stringify(data));
                _this.pedido = data;
            });
            this.router.navigate(['/pedidos', '<strong>Pedido nro. [' + this.pedido.numeroPedido + ']</strong> Actualizado exitosamente']);
        }
        else if (this.tipoForm === 'nuevo') {
            this.calculaTotalItem();
            //Contador de pedidos
            this.pedidosService.countPedidos().subscribe(function (countPedidos) {
                _this.pedido.numeroPedido = countPedidos + 1;
                console.log('this.pedido.numeroPedido->' + _this.pedido.numeroPedido);
                console.log('insertando pedido...');
                _this.pedidosService.addPedido(_this.pedido).subscribe(function (pedido) {
                    _this.pedido = pedido;
                    console.log('nuevo  insertado->' + JSON.stringify(_this.pedido));
                    _this.router.navigate(['/pedidos', 'Pedido nro. [' + _this.pedido.numeroPedido + '] Creado exitosamente']);
                });
            });
        }
    };
    FormPedidoComponent.prototype.eliminaProducto = function (id) {
        this.pedido.listaProductos.splice(id, 1);
        this.cantidadProductos = this.pedido.listaProductos.length;
        this.onChangeCalculaTotal();
        console.log('eliminando producto->' + id);
    };
    /* MEDIOS DE PAGO */
    FormPedidoComponent.prototype.nuevoMedioPago = function () {
        this.medioPago = new __WEBPACK_IMPORTED_MODULE_5__model_pedido_medioPago_model__["a" /* MedioPago */]();
        this.medioPago.fechaPago = new Date();
    };
    FormPedidoComponent.prototype.addMedioPago = function () {
        console.log('agregando medio pago');
        this.pedido.listaMediosPago.push(this.medioPago);
        this.pedido.totalMediosPago = 0;
        this.onChangeCalculaTotal();
    };
    FormPedidoComponent.prototype.eliminaMedioPago = function (id) {
        this.pedido.listaMediosPago.splice(id, 1);
        this.onChangeCalculaTotal();
        console.log('eliminando medio pago->' + id);
    };
    /* FICHA TECNICA */
    FormPedidoComponent.prototype.addTipoProductoFT = function (detalle, form) {
        console.log('agregando tipo producto FT');
        detalle.fichaTecnica.listaTipoProducto.push(this.tipoProductoFT);
        this.tipoProductoFT = new __WEBPACK_IMPORTED_MODULE_1__model_producto_tipoProductoFT_model__["a" /* TipoProductoFT */]();
        form.resetForm();
    };
    FormPedidoComponent.prototype.addTipoCuelloFT = function (detalle, form) {
        console.log('agregando tipo cuello FT');
        detalle.fichaTecnica.listaTipoCuello.push(this.tipoCuelloFT);
        this.tipoCuelloFT = new __WEBPACK_IMPORTED_MODULE_0__model_producto_tipoCuelloFT_model__["a" /* TipoCuelloFT */]();
        form.resetForm();
    };
    FormPedidoComponent.prototype.eliminaTipoProductoFT = function (detalle, id) {
        detalle.fichaTecnica.listaTipoProducto.splice(id, 1);
        console.log('eliminando Tipo Producto Tela FT ->' + id);
    };
    FormPedidoComponent.prototype.eliminaTipoCuelloFT = function (detalle, id) {
        detalle.fichaTecnica.listaTipoCuello.splice(id, 1);
        console.log('eliminando Tipo Cuello FT ->' + id);
    };
    FormPedidoComponent.prototype.addCliente = function (cliente) {
        this.cliente = cliente;
        this.queryBuscaCliente = cliente.rutCliente + ' - ' + cliente.nombresCliente + ' ' + cliente.apellidoPaternoCliente;
    };
    FormPedidoComponent.prototype.cargarCliente = function () {
        this.pedido.cliente = this.cliente;
    };
    FormPedidoComponent.prototype.cambiarCliente = function () {
        this.pedido.cliente = null;
        this.queryBuscaCliente = '';
    };
    FormPedidoComponent.prototype.calculaTotalItem = function () {
        var contadorTotalitemsProductos = 0; //sumo todos los items que encuentre
        //Calcula % avance del pedido corte
        for (var _i = 0, _a = this.pedido.listaProductos; _i < _a.length; _i++) {
            var producto = _a[_i];
            for (var _b = 0, _c = producto.listaDetalleTallas; _b < _c.length; _b++) {
                var talla = _c[_b];
                contadorTotalitemsProductos++;
            }
        }
        this.pedido.totalItems = contadorTotalitemsProductos;
    };
    return FormPedidoComponent;
}());
FormPedidoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_11__angular_core__["Component"])({
        selector: 'app-form-pedido',
        template: __webpack_require__("../../../../../src/app/pages/pedidos/form-pedido/form-pedido.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_10__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_router__["f" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9__services_pedidos_service__["a" /* PedidosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_pedidos_service__["a" /* PedidosService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__services_clientes_service__["a" /* ClientesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_clientes_service__["a" /* ClientesService */]) === "function" && _d || Object])
], FormPedidoComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=form-pedido.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pedidos/form-pedido/form-pedido.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export pedidosRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPedidoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pedidos_component__ = __webpack_require__("../../../../../src/app/pages/pedidos/pedidos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_pedidos_service__ = __webpack_require__("../../../../../src/app/services/pedidos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_clientes_service__ = __webpack_require__("../../../../../src/app/services/clientes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__filterdata_pipe__ = __webpack_require__("../../../../../src/app/pages/pedidos/form-pedido/filterdata.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var pedidosRoutes = [
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_0__pedidos_component__["a" /* PedidosComponent */] },
];
var FormPedidoModule = (function () {
    function FormPedidoModule() {
    }
    return FormPedidoModule;
}());
FormPedidoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["g" /* RouterModule */].forChild(pedidosRoutes)
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_pedidos_service__["a" /* PedidosService */],
            __WEBPACK_IMPORTED_MODULE_7__services_clientes_service__["a" /* ClientesService */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__filterdata_pipe__["a" /* FilterDataPipe */]
        ]
    })
], FormPedidoModule);

//# sourceMappingURL=form-pedido.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pedidos/pedidos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/pedidos/pedidos.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"mensaje\" class=\"alert alert-success\" role=\"alert\">\r\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n  {{mensaje}}\r\n</div>\r\n\r\n<div class=\"row\" *ngIf='verLista'>\r\n  <div class=\"col-sm-12\">\r\n    <!-- <app-card> -->\r\n      <!-- <a class=\"btn btn-primary\" (click)=\"nuevoPedido()\" routerLinkActive=\"active\">Nuevo Pedido</a> -->\r\n      <a class=\"btn btn-primary\" [routerLink]=\"['/pedidos/formPedido', 'nuevo']\">NUEVO</a>\r\n    <!-- </app-card> -->\r\n  </div>\r\n</div>\r\n\r\n<!-- Formulario  -->\r\n<!-- <div class=\"container\">\r\n  <app-form-pedido\r\n  [verForm]=\"!verLista\"\r\n  [tipoForm]=\"tipoForm\"\r\n  [pedido]=\"pedido\"\r\n  (salir)=\"volver($event)\"></app-form-pedido>\r\n</div> -->\r\n\r\n<!-- Lista  -->\r\n<div class=\"row\" *ngIf='verLista'>\r\n  <div class=\"col-sm-12\">\r\n    <app-card>\r\n      <h4>Filtros de busqueda</h4>\r\n      <form #encabezadoPedidoForm='ngForm' class='form-inline'>\r\n        <div class='form-group form-inline'>\r\n          Cliente\r\n          <input type='text' size=\"40\" class='form-control' name='queryClientes'>\r\n          Estado\r\n          <select class='form-control' name='queryEstado'>\r\n            <option [value]=''>[Producto]</option>\r\n            <option *ngFor='let c of listaEstadosPedido' [value]='c.id'>{{c.desc}}</option>\r\n          </select>\r\n          Fecha creación\r\n          <input class='form-control' name='fechaDesde' type=\"date\" placeholder=\"Fecha desde\">\r\n          <button type=\"reset\" class=\"btn btn-primary\">Quitar Filtro</button>\r\n        </div>\r\n      </form>\r\n    </app-card>\r\n\r\n    <app-card [title]=\"'Pedidos'\" [classHeader]=\"false\" [blockClass]=\"'table-border-style'\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-hover\">\r\n          <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Nombre Cliente</th>\r\n            <th>Fecha pedido</th>\r\n            <th>Fecha Entrega</th>\r\n            <th>Monto Total</th>\r\n            <th>Estado</th>\r\n            <th>Opciones</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody *ngFor=\"let pedido of listaPedidos;let i = index\">\r\n            <tr>\r\n              <td (click)=\"editarPedido(pedido)\">{{pedido.numeroPedido}}</td>\r\n              <td (click)=\"editarPedido(pedido)\">{{pedido.cliente.nombresCliente}}</td>\r\n              <td (click)=\"editarPedido(pedido)\">{{pedido.fechaCreacion | date: 'dd/MM/yyyy'}}</td>\r\n              <td (click)=\"editarPedido(pedido)\">{{pedido.fechaEntrega | date: 'dd/MM/yyyy'}}</td>\r\n              <td (click)=\"editarPedido(pedido)\">${{pedido.total}}</td>\r\n              <td (click)=\"editarPedido(pedido)\">{{pedido.idEstado}}</td>\r\n              <td>\r\n                <button type=\"button\" class=\"btn btn-danger btn-sm\"\r\n                (click)=\"addTallas(pedido); $event.stopPropagation();\">Tallas</button>\r\n                <button type=\"button\" class=\"btn btn-danger btn-sm\"\r\n                (click)=\"addFichaTecnica(pedido); $event.stopPropagation();\">Ficha tecnica</button>\r\n<!--BORRAR PEDIDO-->\r\n                <button type=\"button\" (click)='eliminaPedido(pedido);$event.stopPropagation();'>\r\n                  <i class=\"icofont icofont-trash\"></i>\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/pedidos/pedidos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosComponent; });
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
var PedidosComponent = (function () {
    function PedidosComponent(route, router, pedidosService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.pedidosService = pedidosService;
        this.verLista = true;
        var sub = this.route.params.subscribe(function (params) {
            _this.mensaje = params['id']; // (+) converts string 'id' to a number
            //console.log('mensaje->'+ mensaje);
        });
    }
    PedidosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.verLista = true;
        //lista de pedidos
        this.pedidosService.getPedidos()
            .subscribe(function (pedidos) { return _this.listaPedidos = pedidos; }, function (err) { return console.log(err); });
        this.listaEstadosPedido = this.pedidosService.getEstadosPedido();
    };
    //Cierre con boton Volver
    PedidosComponent.prototype.volver = function () {
        //this.verForm = false;
        this.toggleLista();
    };
    PedidosComponent.prototype.toggleLista = function () {
        this.verLista = !this.verLista;
        console.log('this.verLista ->' + this.verLista);
    };
    //Ver o Editar Cliente
    PedidosComponent.prototype.editarPedido = function (pedido) {
        this.router.navigate(['/pedidos/formPedido/editar/', pedido.numeroPedido]);
    };
    PedidosComponent.prototype.eliminaPedido = function (pedido) {
        var _this = this;
        console.log('Elimina Pedido..');
        //Cambia el estado del pedido
        pedido.idEstado = 0;
        this.pedidosService.putPedido(pedido).subscribe(function (data) {
            console.log('pedido eliminado->' + JSON.stringify(data));
            _this.pedido = data;
        });
    };
    PedidosComponent.prototype.addTallas = function (pedido) {
        console.log('editando tallas...');
        this.router.navigate(['/pedidos/formPedido/tallas/', pedido.numeroPedido]);
    };
    PedidosComponent.prototype.addFichaTecnica = function (pedido) {
        console.log('editando Ficha Tecnica...');
        this.router.navigate(['/pedidos/formPedido/ft/', pedido.numeroPedido]);
    };
    return PedidosComponent;
}());
PedidosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-pedidos',
        template: __webpack_require__("../../../../../src/app/pages/pedidos/pedidos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/pedidos/pedidos.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["f" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_pedidos_service__["a" /* PedidosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_pedidos_service__["a" /* PedidosService */]) === "function" && _c || Object])
], PedidosComponent);

var _a, _b, _c;
//# sourceMappingURL=pedidos.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pedidos/pedidos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pedidosRoutes", function() { return pedidosRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosModule", function() { return PedidosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_clientes_service__ = __webpack_require__("../../../../../src/app/services/clientes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pedidos_service__ = __webpack_require__("../../../../../src/app/services/pedidos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pedidos_router__ = __webpack_require__("../../../../../src/app/pages/pedidos/pedidos.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pedidos_component__ = __webpack_require__("../../../../../src/app/pages/pedidos/pedidos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__form_pedido_form_pedido_component__ = __webpack_require__("../../../../../src/app/pages/pedidos/form-pedido/form-pedido.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__file_upload_file_upload_component__ = __webpack_require__("../../../../../src/app/file-upload/file-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__form_pedido_form_pedido_module__ = __webpack_require__("../../../../../src/app/pages/pedidos/form-pedido/form-pedido.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var pedidosRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__pedidos_component__["a" /* PedidosComponent */] },
    { path: 'formPedido/:tipoForm', component: __WEBPACK_IMPORTED_MODULE_10__form_pedido_form_pedido_component__["a" /* FormPedidoComponent */] },
    { path: 'formPedido/:tipoForm/:id', component: __WEBPACK_IMPORTED_MODULE_10__form_pedido_form_pedido_component__["a" /* FormPedidoComponent */] }
];
var PedidosModule = (function () {
    function PedidosModule() {
    }
    return PedidosModule;
}());
PedidosModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__pedidos_router__["a" /* pedidosRouter */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["g" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_12__form_pedido_form_pedido_module__["a" /* FormPedidoModule */],
            __WEBPACK_IMPORTED_MODULE_13__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["g" /* RouterModule */].forChild(pedidosRoutes),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__services_pedidos_service__["a" /* PedidosService */],
            __WEBPACK_IMPORTED_MODULE_0__services_clientes_service__["a" /* ClientesService */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_8__pedidos_component__["a" /* PedidosComponent */], __WEBPACK_IMPORTED_MODULE_10__form_pedido_form_pedido_component__["a" /* FormPedidoComponent */], __WEBPACK_IMPORTED_MODULE_11__file_upload_file_upload_component__["a" /* FileUploadComponent */]]
    })
], PedidosModule);

//# sourceMappingURL=pedidos.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pedidos/pedidos.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pedidosRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pedidos_component__ = __webpack_require__("../../../../../src/app/pages/pedidos/pedidos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");


/* import { SharedModule } from '../../shared/shared.module';
import { FormPedidoComponent } from './form-pedido/form-pedido.component';
 */
var PEDIDOS_ROUTER = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__pedidos_component__["a" /* PedidosComponent */] },
];
var pedidosRouter = __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(PEDIDOS_ROUTER);
//# sourceMappingURL=pedidos.router.js.map

/***/ })

});
//# sourceMappingURL=pedidos.module.chunk.js.map