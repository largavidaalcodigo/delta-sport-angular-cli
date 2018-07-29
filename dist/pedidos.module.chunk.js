webpackJsonp(["pedidos.module"],{

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

/***/ "../../../../../src/app/model/pedido/pedido.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pedido; });
var Pedido = (function () {
    function Pedido() {
        this.totalMediosPago = 0;
    }
    return Pedido;
}());

//# sourceMappingURL=pedido.model.js.map

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

module.exports = "<div *ngIf='verForm'>\r\n  <div class=\"container\">\r\n    <div *ngIf=\"tipoForm=='tallas'; else formPedido\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <app-card>\r\n            <h4>Detalle Tallas</h4>\r\n            nombre Clientefecha, etc. estado, tipo deporte\r\n          </app-card>\r\n          <app-card>\r\n            <div id=\"acordionProductos\">\r\n              <div class=\"card\" *ngFor='let c of pedido.listaProductos; let i=index'>\r\n                <!--header fila-->\r\n                <div id=\"header{{i}}\">\r\n                  <h3>{{c.descProducto}}<br>\r\n                    [{{c.descTipoProducto}}]\r\n                    / Tallas: [{{c.descRangoPrecio}}]</h3>\r\n                </div>\r\n                <!--detalle fila-->\r\n                <div id=\"fila{{i}}\">\r\n                  <form #detallePedidoForm='ngForm' (ngSubmit)=\"onSubmitDetalle(detallePedido);\" class='form-inline'>\r\n                    <table class=\"form-table-bordered\">\r\n                      <thead>\r\n                        <tr>\r\n                          <td>#</td>\r\n                          <td>Numero jugador</td>\r\n                          <td>Nombre pecho</td>\r\n                          <td>Nombre espalda</td>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor='let d of c.listaDetalleTallas; let ii=index'>\r\n                          <td>{{ ii+1 }}</td>\r\n        <!--NUMERO JUGADOR-->\r\n                          <td style=\"width:90px;\">\r\n                            <input type='number' class='form-control' name='numero'\r\n                             [(ngModel)]=\"d.numero\" placeholder='Numero jugador'>\r\n                          </td>\r\n        <!--NOMBRE PECHO-->\r\n                          <td style=\"width:140px;\">\r\n                            <input type='text' class='form-control' name='nombrePecho'\r\n                            [(ngModel)]=\"d.nombrePecho\" placeholder='Nombre pecho'>\r\n                          </td>\r\n        <!--NOMBRE ESPALDA-->\r\n                          <td style=\"width:140px;\">\r\n                            <input type='text' class='form-control' name='nombreEspalda'\r\n                            [(ngModel)]=\"d.nombreEspalda\" placeholder='Nombre espalda'>\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n              <!-- {{detallePedido | json}} -->\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </app-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <ng-template #formPedido>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <app-card>\r\n            <h4>Datos de pedido</h4>\r\n            <form #encabezadoPedidoForm='ngForm' class='form-inline'>\r\n              <div class='form-group'>\r\n  <!-- SELECCICONA CLIENTE-->\r\n                Cliente\r\n                <input type='text' size=\"40\" class='form-control' name='query'\r\n                [(ngModel)]='queryBuscaCliente' placeholder='Seleccione Cliente...'>\r\n                <div id=\"toggle\" onfocusout=\"\" class='list-group'\r\n                style='position:fixed; z-index:1000;' *ngIf='queryBuscaCliente'>\r\n  <!-- LISTADO CLIENTES-->\r\n                  <button type=\"button\" class=\"btn btn-primary\"\r\n                    *ngFor='let c of listaClientes | dataFilter: queryBuscaCliente : \"nombresCliente\"'\r\n                    (click)='addCliente(c)'>{{c.rutCliente}} - {{c.nombresCliente}}\r\n                  </button>\r\n                </div>\r\n  <!--FECHA ENTREGA -->\r\n                Fecha de Entrega\r\n                <input class='form-control' name='fechaEntrega'\r\n                [(ngModel)] ='pedido.fechaEntrega' type=\"date\" placeholder=\"Fecha entrega\">\r\n              </div>\r\n            </form>\r\n          </app-card>\r\n        </div>\r\n      </div>\r\n\r\n\r\n  <!--SELECCIONA PRODUCTO-->\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <app-card>\r\n            <span class=\"btn-group\">\r\n              <h4><span>Seleccione Producto</span>\r\n                <div style=\"position:absolute;top:0px;left:230px;\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-sm\"\r\n                  (click)=\"nuevoDetalle()\">Nuevo</button>\r\n                </div>\r\n              </h4>\r\n            </span>\r\n  <!-- Formulario detalle Pedido -->\r\n            <form #detallePedidoForm='ngForm' (ngSubmit)=\"onSubmitDetalle(detallePedido);\"\r\n              class='form-horizontal'>\r\n              <table class=\"form-table-bordered\">\r\n                <thead class=\"thead-light\">\r\n                  <tr>\r\n                    <td>Categoria</td>\r\n                    <td>Producto</td>\r\n                    <td>Talla</td>\r\n                    <td>Cantidad</td>\r\n                    <td>Valor</td>\r\n                    <td><b>SubTotal</b></td>\r\n                    <td></td>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n  <!--CATEGORIA-->\r\n                    <td class=\"col-xs-1\" style=\"width:140px;\">\r\n                      <select class='form-control' name='producto' [(ngModel)]='detallePedido.idProducto'\r\n                      (change)='onSelectProducto($event.target.value)'>\r\n                        <option [value]=''>[Producto]</option>\r\n                        <option *ngFor='let producto of listaProductos' [value]='producto.idProducto'>{{producto.desc}}</option>\r\n                      </select>\r\n                    </td>\r\n  <!--PRODUCTO-->\r\n                    <td style=\"width:140px;\">\r\n                      <select class='form-control' name='tipoProducto'\r\n                      [(ngModel)]='detallePedido.idTipoProducto'\r\n                      (change)='onSelectTipoProducto($event.target.value)'\r\n                      placeholder=\"[Tipo Producto]\">\r\n                        <option [value]=''>[Tipo Producto]</option>\r\n                        <option *ngFor='let tipoProducto of listaTipoProducto' [value]='tipoProducto.id'>{{tipoProducto.desc}}</option>\r\n                      </select>\r\n                    </td>\r\n  <!--RANGO PRECIO-->\r\n                    <td style=\"width:90px;\">\r\n                      <select class='form-control' name='rangoPrecio'\r\n                      [(ngModel)]='detallePedido.idRangoPrecio'\r\n                      (change)='onSelectRangoPrecio($event.target.value)'>\r\n                        <option [value]=''>[Talla]</option>\r\n                        <option *ngFor='let rangoPrecio of listaRangoPrecios' [value]='rangoPrecio.id'>{{rangoPrecio.desc}}</option>\r\n                      </select>\r\n                    </td>\r\n  <!--CANTIDAD-->\r\n                    <td style=\"width:90px;\">\r\n                      <input type='number' class='form-control' name='cantidad'\r\n                      [(ngModel)]='detallePedido.cantidad' placeholder='Cantidad' (input)='onChangeCalculaTotalDetalle()'>\r\n                    </td>\r\n  <!--VALOR-->\r\n                    <td style=\"width:100px;\">\r\n                      <input type='text' readonly class='form-control-plaintext form-control'\r\n                      name='valor' [ngModel]='detallePedido.valor'\r\n                        [ngModelOptions]='{standalone: true}'\r\n                        (change)=\"onChangeCalculaTotalDetalle()\">\r\n                    </td>\r\n  <!--SUBTOTAL-->\r\n                    <td style=\"width:100px;\">\r\n                      <input type='text' readonly class='form-control-plaintext form-control' name='subtotal'\r\n                      [ngModel]='detallePedido.subTotal' [ngModelOptions]='{standalone: true}'>\r\n                    </td>\r\n                    <td>\r\n  <!--BOTONERA ITEM PRODUCTO-->\r\n                      <div *ngIf=\"editando; else nuevoItem\">\r\n                        <button type=\"submit\" class=\"btn btn-primary\">Editar</button>\r\n                        <button type=\"button\" class=\"btn btn-primary\"\r\n                        (click)=\"nuevoDetalle()\">Cancelar</button>\r\n                      </div>\r\n                      <ng-template #nuevoItem>\r\n                        <button type=\"submit\" class=\"btn btn-primary\">Añadir</button>\r\n                        <button type=\"reset\" class=\"btn btn-primary\">Limpiar</button>\r\n                      </ng-template>\r\n                      <button type=\"button\" (click)=\"isCollapsed = !isCollapsed\"\r\n                        [attr.aria-expanded]=\"!isCollapsed\"\r\n                        class=\"btn btn-outline-primary\"\r\n                        aria-control=\"detallesAdicionales\">Extras\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                </tfoot>\r\n              </table>\r\n        <!-- {{detallePedido | json}} -->\r\n            </form>\r\n  <!--COLLAPSE DETALLES ADICIONALES-->\r\n            <div id=\"detallesAdicionales\" [ngbCollapse]=\"!isCollapsed\">\r\n              <span>\r\n                <h4><span>Detalles adicionales</span></h4>\r\n              </span>\r\n              <div class=\"container\">\r\n                <div class=\"row\">\r\n    <!--LISTADO ADICIONALES-->\r\n                  <div class=\"col-sm-9 border\">\r\n                    <label for=\"checkAdicionales{{i}}\" class=\"badge badge-pill badge-success btn-sm\"\r\n                    *ngFor=\"let c of listaDetallesAdicionales;let i = index\"\r\n                      [style.background-color] = \"c.checked ? 'blue' : 'green'\">\r\n                      {{c.desc}}\r\n                      <span>${{c.valor}}</span>\r\n                        <input type=\"checkbox\" id=\"checkAdicionales{{i}}\" [(ngModel)]=\"c.checked\" data-toggle=\"toggle\"\r\n                        (change)=\"addDetalleAdicional()\">\r\n    <!--                   <ng-template #noChecked>\r\n                          <input ng-checked=\"false\" type=\"checkbox\" id=\"checkAdicionales{{i}}\" [(ngModel)]=\"c.checked\" data-toggle=\"toggle\"\r\n                          (change)=\"addDetalleAdicional()\">\r\n                      </ng-template>\r\n    -->                </label>\r\n                  </div>\r\n    <!--TOTAL ADICIONALES-->\r\n                  <div class=\"col-sm-3 border\">\r\n                    <span>Total Adicionales:</span>\r\n                    <div class=\"input-group\">\r\n                      <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\">$</span>\r\n                      </div>\r\n                      <input type='text' readonly class='form-control-plaintext form-control' name='totalAdicionales'\r\n                      [(ngModel)]='detallePedido.totalAdicionales'>\r\n                    </div>\r\n                    <!--BOTONERA ITEM PRODUCTO-->\r\n    <!--                 <button type=\"button\" class=\"btn btn-primary\"\r\n                    (click)=\"addDetalleAdicional()\"\r\n                    >Añadir</button>\r\n                    <button type=\"button\" class=\"btn btn-primary\">Cancelar</button> -->\r\n                  </div>\r\n                </div>\r\n                <!-- {{listaDetallesAdicionales|json}} -->\r\n              </div>\r\n            </div>\r\n          </app-card>\r\n        </div>\r\n      </div>\r\n  <!--     {{ listaDetallesAdicionales | json }}\r\n  -->\r\n  <!--LISTA PRODUCTOS-->\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <app-card>\r\n            <h4 style=\"display:inline;\">Lista de productos&nbsp;\r\n                <span *ngIf=\"cantidadProductos\"\r\n                class=\"badge badge-danger\">{{cantidadProductos}}</span>\r\n            </h4>\r\n            <!-- <span style=\"display:inline;\" class=\"badge badge-success\">Eliminar todo</span> -->\r\n            <div class=\"container\">\r\n              <div class=\"row\">\r\n                <table class=\"table table-bordered\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th scope=\"col\" style=\"width:45%\">Descripción</th>\r\n                      <th scope=\"col\">Subtotal</th>\r\n                      <th scope=\"col\">Diseño</th>\r\n                      <th scope=\"col\">Total adicionales</th>\r\n                      <th scope=\"col\">Monto Total</th>\r\n                      <th>&nbsp;</th>\r\n                    </tr>\r\n                  </thead>\r\n                <tbody>\r\n                  <tr *ngFor='let c of pedido.listaProductos; let i=index'>\r\n  <!--DESCRIPCION-->\r\n                    <td class=\"fila\" style=\"padding:1px;\">\r\n                        <button type=\"button\" (click)=\"verProducto(c)\"\r\n                          class=\"btn btn-outline-success text-left\"\r\n                          aria-pressed=\"true\"\r\n                          style=\"width:100%;\">\r\n                              {{c.descProducto}}<br>\r\n                                [{{c.descTipoProducto}}]\r\n                              / Tallas: [{{c.descRangoPrecio}}]\r\n                        </button>\r\n                    </td>\r\n  <!--  GRUPO SUBTOTAL ITEM -->\r\n                    <td class=\"text-center\" style=\"padding:1px;width:15%\">\r\n                      <h1 class=\"badge badge-success\">${{c.valor}}</h1>\r\n                      x {{c.cantidad}}<br>\r\n                      <h3 >${{c.subTotal}}</h3>\r\n                    </td>\r\n                    <td class=\"text-center\" style=\"padding:1px;width:15%\">\r\n  <!--  GRUPO BOTONES DISEÑO -->\r\n                      <div class=\"btn-group btn-group-toggle\"\r\n                        ngbRadioGroup name='llevaDiseno' [(ngModel)]='c.llevaDiseno'>\r\n\r\n                        <label ngbButtonLabel class=\"btn btn-outline-primary btn-sm\">\r\n                          <input ngbButton type=\"radio\" [value]=\"0\">NO\r\n                        </label>\r\n                        <label ngbButtonLabel class=\"btn btn-outline-primary btn-sm\">\r\n                          <input ngbButton type=\"radio\" [value]=\"1\">SI\r\n                        </label>\r\n                      </div>\r\n  <!--  SELECT DISEÑO -->\r\n                      <select class='form-control' name='color' [(ngModel)]='c.idColor'\r\n                        *ngIf='c.llevaDiseno==0'>\r\n                        <option [value]=''>[Color]</option>\r\n                        <option *ngFor='let color of listaColores' [value]='color.id'>{{color.desc}}</option>\r\n                      </select>\r\n                    </td>\r\n  <!--TOTAL DETALLES ADICIONALES-->\r\n                    <td class=\"text-center\" style=\"padding:1px;width:15%\">\r\n                      <h3 >${{c.totalAdicionales}}</h3>\r\n                    </td>\r\n  <!--SUBTOTAL-->\r\n                    <td class=\"text-center\" style=\"padding:1px;width:15%\">\r\n                      <h3 >${{c.total}}</h3>\r\n                    </td>\r\n  <!--OPCION ELIMINAR-->\r\n                    <td>\r\n                        <div style=\"text-align:center\">\r\n                          <button type=\"button\" (click)='eliminaProducto(\"$index\");'>\r\n                            <i class=\"icofont icofont-trash\"></i>\r\n                          </button>\r\n                        </div>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            </div>\r\n          </app-card>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-7\">\r\n  <!--COMENTARIOS-->\r\n          <app-card>\r\n            <span class=\"btn-group\">\r\n              <h4><span>Comentarios</span>\r\n                <div style=\"position:absolute;top:0px;right:30px;\">\r\n                  <a class=\"btn btn-primary btn-sm\" href=\"#\">Añadir</a>\r\n                </div>\r\n              </h4>\r\n            </span>\r\n            <div class=\"container\" *ngFor=\"let item of pedido.listaComentarios\">\r\n              <ul>\r\n                <li class=\"list-group-item table-bordered\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-3 text-right\">\r\n                      {{item.fechaCreacion}}\r\n                    </div>\r\n                    <div class=\"col-sm-8 text-right\">\r\n                      {{item.desc}}\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </app-card>\r\n  <!--FORMAS DE PAGO-->\r\n          <app-card>\r\n            <span class=\"btn-group\">\r\n              <h4>\r\n                <span>Forma de pago</span>\r\n  <!-- BOTONERA FORMAS DE PAGO -->\r\n                <div style=\"position:absolute;top:0px;right:30px;\"\r\n                  [ngbCollapse]=\"botoneraFormaPagoisCollapsed\" >\r\n                  <button type=\"button\" class=\"btn btn-primary btn-sm\"\r\n                    (click)=\"nuevoMedioPago();botoneraFormaPagoisCollapsed=!botoneraFormaPagoisCollapsed\" [attr.aria-expanded]=\"!botoneraFormaPagoisCollapsed\">\r\n                    Añadir\r\n                  </button>\r\n                </div>\r\n                <div style=\"position:absolute;top:0px;right:50px;\"\r\n                  [ngbCollapse]=\"!botoneraFormaPagoisCollapsed\" >\r\n                  <button type=\"button\" class=\"btn btn-primary btn-sm\"\r\n                    (click)=\"addMedioPago();botoneraFormaPagoisCollapsed=!botoneraFormaPagoisCollapsed\"\r\n                    [attr.aria-expanded]=\"!botoneraFormaPagoisCollapsed\">\r\n                    Guardar\r\n                  </button>\r\n                  <button type=\"button\" class=\"btn btn-primary btn-sm\"\r\n                    (click)=\"botoneraFormaPagoisCollapsed=!botoneraFormaPagoisCollapsed\"\r\n                    [attr.aria-expanded]=\"!botoneraFormaPagoisCollapsed\">\r\n                    Cancelar\r\n                  </button>\r\n                </div>\r\n\r\n              </h4>\r\n              <div [ngbCollapse]=\"!botoneraFormaPagoisCollapsed\">\r\n                <ul>\r\n                  <li class=\"list-group-item table-bordered\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-5 text-right\">\r\n                        <h5>Ingrese monto</h5>\r\n                      </div>\r\n                      <div class=\"col-sm-6 text-right\">\r\n                        <select class='form-control' name='tipoPago' [(ngModel)]='medioPago.tipoPago'>\r\n                          <option value='efectivo'>Efectivo</option>\r\n                          <option value='transferencia'>Transferencia</option>\r\n                          <option value='cheque'>Cheque</option>\r\n                        </select>\r\n                        <input type='number' class='form-control' name='montoPago' [(ngModel)]='medioPago.montoPago' placeholder='Monto Pagado'>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"container\">\r\n  <!--TITULO-->\r\n                <table width=\"100%\" class=\"table-bordered\">\r\n                  <tr *ngIf=\"pedido.listaMediosPago.length>0\">\r\n                      <th class=\"text-center\">Fecha Pago</th>\r\n                      <th class=\"text-center\">Medio Pago</th>\r\n                      <th class=\"text-center\">Monto</th>\r\n                      <th>&nbsp;</th>\r\n                  </tr>\r\n                  <!--LISTA DE MEDIOS DE PAGO-->\r\n                  <tr *ngFor=\"let item of pedido.listaMediosPago; let i = index;\">\r\n                    <td class=\"text-center\">\r\n                        <h5>{{item.fechaPago | date: 'dd/MM/yyyy' }}</h5>\r\n                    </td>\r\n                    <td class=\"text-left\">\r\n                      <h5>{{item.tipoPago}}</h5>\r\n                    </td>\r\n                    <td class=\"text-right\">\r\n                      <h4>${{item.montoPago}}</h4>\r\n                    </td>\r\n                    <td>\r\n                      <div style=\"text-align:center\">\r\n                        <button type=\"button\" (click)='eliminaMedioPago(\"$i\");'>\r\n                          <i class=\"icofont icofont-trash\"></i>\r\n                        </button>\r\n                      </div>\r\n                    </td>\r\n\r\n                  </tr>\r\n                  <!--LISTA DE MEDIOS DE PAGO-->\r\n                  <tr>\r\n                    <td colspan=\"2\" class=\"text-right\">\r\n                      Saldo Pendiente\r\n                    </td>\r\n                    <td class=\"text-right\">\r\n                      <h4><b>${{saldoPendiente}}</b></h4>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n            </span>\r\n          </app-card>\r\n        </div>\r\n  <!--TOTALES PEDIDO-->\r\n        <div class=\"col-sm-5\">\r\n          <app-card>\r\n            <h4>Total Pedido</h4>\r\n            <div class=\"container\">\r\n              <ul class=\"list-group\">\r\n                <li class=\"list-group-item\">\r\n                  <div class=\"row\">\r\n                    <div class=\"text-right col-sm-5\">\r\n                      <h5>Subtotal</h5>\r\n                    </div>\r\n                    <div class=\"text-right col-sm-6\">\r\n                      <h4>${{pedido.subTotal}}</h4>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"list-group-item\">\r\n                  <div class=\"row\">\r\n                    <div class=\"text-right col-sm-5\">\r\n                      <h5>Descuento %</h5>\r\n                    </div>\r\n                    <div class=\"text-right col-sm-6\">\r\n                      <h4>\r\n                        <input type='number' class='form-control' name='descuento' [(ngModel)]='pedido.descuento' placeholder='Descuento' (input)='onChangeCalculaTotal()'>\r\n                      </h4>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"list-group-item\">\r\n                  <div class=\"row\">\r\n                    <div class=\"text-right col-sm-5\">\r\n                      <h5>Valor Neto</h5>\r\n                    </div>\r\n                    <div class=\"text-right col-sm-6\">\r\n                      <h4>${{pedido.subTotalNeto}}</h4>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"list-group-item\">\r\n                  <div class=\"row\">\r\n                    <div class=\"text-right col-sm-5\">\r\n                      <h5>Iva 19%</h5>\r\n                    </div>\r\n                    <div class=\"text-right col-sm-6\">\r\n                      <h4>${{pedido.iva}}</h4>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"list-group-item\">\r\n                  <div class=\"row\">\r\n                    <div class=\"text-right col-sm-5\">\r\n                      <h5><b>Monto Total</b></h5>\r\n                    </div>\r\n                    <div class=\"text-right col-sm-6\">\r\n                      <h4><b>${{pedido.total}}</b></h4>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </app-card>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n  <div class='form-group'>\r\n    <button (click)='emiteVolver()' type='reset' class='btn btn-default'>Cancelar</button>\r\n    <button (click)='guardarPedido();' class='btn btn-primary'>{{nombreBoton}}</button>\r\n  </div>\r\n<!--   {{pedido|json}} -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/pedidos/form-pedido/form-pedido.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPedidoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_producto_detalleTalla_model__ = __webpack_require__("../../../../../src/app/model/producto/detalleTalla.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_pedido_detallePedido_model__ = __webpack_require__("../../../../../src/app/model/pedido/detallePedido.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_pedido_medioPago_model__ = __webpack_require__("../../../../../src/app/model/pedido/medioPago.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_producto_rangoPrecioProducto_model__ = __webpack_require__("../../../../../src/app/model/producto/rangoPrecioProducto.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_pedido_pedido_model__ = __webpack_require__("../../../../../src/app/model/pedido/pedido.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_clientes_service__ = __webpack_require__("../../../../../src/app/services/clientes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_pedidos_service__ = __webpack_require__("../../../../../src/app/services/pedidos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function FormPedidoComponent(pedidosService, clientesService) {
        this.pedidosService = pedidosService;
        this.clientesService = clientesService;
        this.salir = new __WEBPACK_IMPORTED_MODULE_8__angular_core__["EventEmitter"]();
        this.nombreBoton = "Guardar";
        this.listaDetallesAdicionales = new Array();
        this.listaDetallesTallas = new Array();
        //Medio pago
        this.listaMediosPago = new Array();
        this.editando = false;
    }
    FormPedidoComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.tipoForm == 'editar') {
            console.log('Editando pedido');
            this.queryBuscaCliente = 'prueba';
            //this.pedido.cliente.rutCliente + ' - ' + this.pedido.cliente.nombresCliente + ' ' + this.pedido.cliente.apellidoPaternoCliente;
            this.nombreBoton = "Actualizar";
            this.onChangeCalculaTotal();
        }
        else if (this.tipoForm == 'tallas') {
            console.log('Editando tallas');
            this.nombreBoton = "Actualizar";
        }
        if (this.pedido == null) {
            console.log('nuevo pedido');
            this.pedido = new __WEBPACK_IMPORTED_MODULE_4__model_pedido_pedido_model__["a" /* Pedido */]();
            this.pedido.idEstado = 1; //0= inactivo , 1=activo
            this.pedido.fechaCreacion = new Date();
            this.pedido.subTotal = 0;
            this.pedido.descuento = 0;
            this.pedido.listaProductos = new Array();
            this.pedido.listaMediosPago = new Array();
        }
        this.listaColores = this.pedidosService.getColores();
        this.listaMediosPago = this.pedidosService.getMediosPago();
        this.listaDetallesAdicionales = this.pedidosService.getDetallesAdicionales();
        //lista de pedidos
        this.clientesService.getClientes().subscribe(function (data) {
            console.log('obteniendo lista clientes...');
            console.log(data);
            _this.listaClientes = data;
        });
        this.listaProductos = this.pedidosService.getProductos();
        this.detallePedido = new __WEBPACK_IMPORTED_MODULE_1__model_pedido_detallePedido_model__["a" /* DetallePedido */]();
        this.medioPago = new __WEBPACK_IMPORTED_MODULE_2__model_pedido_medioPago_model__["a" /* MedioPago */]();
        this.detallePedido.listaAdicionales = new Array();
        this.detallePedido.listaDetalleTallas = new Array();
        this.rangoPrecioProducto = new __WEBPACK_IMPORTED_MODULE_3__model_producto_rangoPrecioProducto_model__["a" /* RangoPrecioProducto */]();
    };
    FormPedidoComponent.prototype.addCliente = function (cliente) {
        this.pedido.cliente = cliente;
        this.queryBuscaCliente = cliente.rutCliente + ' - ' + cliente.nombresCliente + ' ' + cliente.apellidoPaternoCliente;
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
    FormPedidoComponent.prototype.onSelectSinDiseno = function (llevaDiseño) {
        console.log('llevaDiseño->' + llevaDiseño);
    };
    FormPedidoComponent.prototype.emiteVolver = function () {
        //this.pedidoForm.reset();
        this.salir.emit();
    };
    FormPedidoComponent.prototype.onSubmitDetalle = function () {
        var _this = this;
        if (this.editando) {
            this.detallePedido.listaAdicionales = this.listaDetallesAdicionales.filter(function (item) { return item.checked; });
        }
        else if (this.tipoForm == 'tallas') {
        }
        else {
            //this.pedido.rutCliente = this.pedidoForm.value.rutCliente;
            //setea Correlativo nro item
            this.detallePedido.id = this.pedido.listaProductos.length + 1;
            // SETEA NOMBRE DE CATEGORIA/PRODUCTO/RANGO PRECIO
            var producto = this.listaProductos.find(function (item) { return item.idProducto == _this.detallePedido.idProducto; });
            this.detallePedido.descProducto = producto.desc;
            this.detallePedido.descTipoProducto = this.listaTipoProducto.find(function (item) { return item.id == _this.detallePedido.idTipoProducto; }).desc;
            this.detallePedido.descRangoPrecio = this.listaRangoPrecios.find(function (item) { return item.id == _this.detallePedido.idRangoPrecio; }).desc;
            this.detallePedido.listaAdicionales = this.listaDetallesAdicionales.filter(function (item) { return item.checked; });
            //TALLAS
            this.listaDetallesTallas = new Array();
            for (var c = 0; c < this.detallePedido.cantidad; c++) {
                this.detalleTallas = new __WEBPACK_IMPORTED_MODULE_0__model_producto_detalleTalla_model__["a" /* DetalleTalla */]();
                this.detalleTallas.numero = '';
                this.detalleTallas.nombrePecho = '';
                this.detalleTallas.nombreEspalda = '';
                this.listaDetallesTallas.push(this.detalleTallas);
            }
            this.detallePedido.listaDetalleTallas = this.listaDetallesTallas;
            //this.pedido.numeroPedido = this.pedidosService.countPedidos();
            this.cantidadProductos = this.pedido.listaProductos.push(this.detallePedido);
            console.log("nuevo item->" + JSON.stringify(this.detallePedido));
            this.detallePedido = new __WEBPACK_IMPORTED_MODULE_1__model_pedido_detallePedido_model__["a" /* DetallePedido */]();
        }
        //Calcula el total
        this.onChangeCalculaTotal();
        //this.pedido.listaProductos = this.listaDetallePedido;
        this.detallePedido = new __WEBPACK_IMPORTED_MODULE_1__model_pedido_detallePedido_model__["a" /* DetallePedido */]();
        this.listaDetallesAdicionales = this.pedidosService.getDetallesAdicionales();
    };
    FormPedidoComponent.prototype.nuevoDetalle = function () {
        this.detallePedido = new __WEBPACK_IMPORTED_MODULE_1__model_pedido_detallePedido_model__["a" /* DetallePedido */]();
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
        this.pedido.listaProductos.filter(function (item) {
            totalPedido += item.total;
            console.log('total item->' + item.total + ' / total pedido->' + totalPedido);
        });
        this.pedido.subTotal = totalPedido;
        this.pedido.subTotalNeto = Math.round(this.pedido.subTotal - (this.pedido.subTotal * this.pedido.descuento) / 100);
        this.pedido.iva = Math.round(this.pedido.subTotalNeto * 0.19);
        this.pedido.total = Math.round(this.pedido.subTotalNeto + this.pedido.iva);
        this.pedido.totalMediosPago = 0;
        for (var _i = 0, _a = this.pedido.listaMediosPago; _i < _a.length; _i++) {
            var c = _a[_i];
            this.pedido.totalMediosPago += c.montoPago;
        }
        this.saldoPendiente = this.pedido.total - this.pedido.totalMediosPago;
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
    FormPedidoComponent.prototype.nuevoMedioPago = function () {
        this.medioPago = new __WEBPACK_IMPORTED_MODULE_2__model_pedido_medioPago_model__["a" /* MedioPago */]();
        this.medioPago.fechaPago = new Date();
    };
    FormPedidoComponent.prototype.addMedioPago = function () {
        console.log('agregando medio pago');
        this.pedido.listaMediosPago.push(this.medioPago);
        this.pedido.totalMediosPago = 0;
        this.onChangeCalculaTotal();
    };
    FormPedidoComponent.prototype.guardarPedido = function () {
        var _this = this;
        if (this.tipoForm == 'editar') {
            this.pedidosService.putPedido(this.pedido);
            console.log('pedido update->' + JSON.stringify(this.pedido));
        }
        else if (this.tipoForm == 'tallas') {
        }
        else {
            console.log('insertando pedido...');
            this.pedidosService.addPedido(this.pedido).subscribe(function (pedido) {
                _this.pedido = pedido;
                console.log('nuevo  insertado->' + pedido);
            });
        }
        this.emiteVolver();
        this.editando = false;
    };
    FormPedidoComponent.prototype.eliminaProducto = function (id) {
        this.pedido.listaProductos.splice(id, 1);
        this.cantidadProductos = this.pedido.listaProductos.length;
        this.onChangeCalculaTotal();
        console.log('eliminando producto->' + id);
    };
    FormPedidoComponent.prototype.eliminaMedioPago = function (id) {
        this.pedido.listaMediosPago.splice(id, 1);
        this.onChangeCalculaTotal();
        console.log('eliminando medio pago->' + id);
    };
    return FormPedidoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["ViewChild"])('encabezadoPedidoForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* NgForm */]) === "function" && _a || Object)
], FormPedidoComponent.prototype, "encabezadoPedidoForm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["ViewChild"])('detallePedidoForm'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* NgForm */]) === "function" && _b || Object)
], FormPedidoComponent.prototype, "detallePedidoForm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], FormPedidoComponent.prototype, "verForm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Input"])(),
    __metadata("design:type", String)
], FormPedidoComponent.prototype, "tipoForm", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Input"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__model_pedido_pedido_model__["a" /* Pedido */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__model_pedido_pedido_model__["a" /* Pedido */]) === "function" && _c || Object)
], FormPedidoComponent.prototype, "pedido", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FormPedidoComponent.prototype, "salir", void 0);
FormPedidoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Component"])({
        selector: 'app-form-pedido',
        template: __webpack_require__("../../../../../src/app/pages/pedidos/form-pedido/form-pedido.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_pedidos_service__["a" /* PedidosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_pedidos_service__["a" /* PedidosService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_clientes_service__["a" /* ClientesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_clientes_service__["a" /* ClientesService */]) === "function" && _e || Object])
], FormPedidoComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=form-pedido.component.js.map

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

module.exports = "<div class=\"row\" *ngIf='verLista'>\r\n  <div class=\"col-sm-12\">\r\n    <app-card>\r\n      <a class=\"btn btn-primary\" (click)=\"nuevoPedido()\" routerLinkActive=\"active\">Nuevo Pedido</a>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n\r\n<!-- Formulario  -->\r\n<div class=\"container\">\r\n  <app-form-pedido\r\n  [verForm]=\"!verLista\"\r\n  [tipoForm]=\"tipoForm\"\r\n  [pedido]=\"pedido\"\r\n  (salir)=\"volver($event)\"></app-form-pedido>\r\n</div>\r\n\r\n<!-- Lista  -->\r\n<div class=\"row\" *ngIf='verLista'>\r\n  <div class=\"col-sm-12\">\r\n    <app-card>\r\n      <h4>Filtros de busqueda</h4>\r\n      <form #encabezadoPedidoForm='ngForm' class='form-inline'>\r\n        <div class='form-group form-inline'>\r\n          Cliente\r\n          <input type='text' size=\"40\" class='form-control' name='queryClientes'>\r\n          Estado\r\n          <select class='form-control' name='queryEstado'>\r\n            <option [value]=''>[Producto]</option>\r\n            <option *ngFor='let c of listaEstadosPedido' [value]='c.id'>{{c.desc}}</option>\r\n          </select>\r\n          Fecha creación\r\n          <input class='form-control' name='fechaDesde' type=\"date\" placeholder=\"Fecha desde\">\r\n          <button type=\"reset\" class=\"btn btn-primary\">Quitar Filtro</button>\r\n        </div>\r\n      </form>\r\n    </app-card>\r\n\r\n    <app-card [title]=\"'Pedidos'\" [classHeader]=\"false\" [blockClass]=\"'table-border-style'\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-hover\">\r\n          <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Nombre Cliente</th>\r\n            <th>Fecha pedido</th>\r\n            <th>Fecha Entrega</th>\r\n            <th>Monto Total</th>\r\n            <th>Estado</th>\r\n            <th>Opciones</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody *ngFor=\"let pedido of listaPedidos;let i = index\">\r\n            <tr>\r\n              <td (click)=\"editarPedido(pedido)\">{{i+1}}</td>\r\n              <td (click)=\"editarPedido(pedido)\">{{pedido.cliente.nombresCliente}}</td>\r\n              <td (click)=\"editarPedido(pedido)\">{{pedido.fechaCreacion | date: 'dd/MM/yyyy'}}</td>\r\n              <td (click)=\"editarPedido(pedido)\">{{pedido.fechaEntrega | date: 'dd/MM/yyyy'}}</td>\r\n              <td (click)=\"editarPedido(pedido)\">${{pedido.total}}</td>\r\n              <td (click)=\"editarPedido(pedido)\">{{pedido.idEstado}}</td>\r\n              <td>\r\n                <button type=\"button\" class=\"btn btn-danger btn-sm\"\r\n                (click)=\"addTallas(pedido); $event.stopPropagation();\">Tallas</button>\r\n<!--BORRAR PEDIDO-->\r\n                <button type=\"button\" (click)='eliminaPedido(pedido);$event.stopPropagation();'>\r\n                  <i class=\"icofont icofont-trash\"></i>\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/pedidos/pedidos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_pedidos_service__ = __webpack_require__("../../../../../src/app/services/pedidos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function PedidosComponent(pedidosService) {
        this.pedidosService = pedidosService;
        this.verLista = true;
    }
    PedidosComponent.prototype.ngOnInit = function () {
        var _this = this;
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
    //Nuevo Pedido
    PedidosComponent.prototype.nuevoPedido = function () {
        this.toggleLista();
        //this.tipoForm = "Nuevo";
    };
    //Ver o Editar Cliente
    PedidosComponent.prototype.editarPedido = function (pedido) {
        this.pedido = pedido;
        this.tipoForm = "editar";
        this.toggleLista();
    };
    PedidosComponent.prototype.eliminaPedido = function (pedido) {
        console.log('editando tallas...');
        this.pedidosService.deletePedido(pedido);
    };
    PedidosComponent.prototype.addTallas = function (pedido) {
        console.log('editando tallas...');
        this.tipoForm = "tallas";
        this.pedido = pedido;
        this.toggleLista();
    };
    return PedidosComponent;
}());
PedidosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-pedidos',
        template: __webpack_require__("../../../../../src/app/pages/pedidos/pedidos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/pedidos/pedidos.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_pedidos_service__["a" /* PedidosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_pedidos_service__["a" /* PedidosService */]) === "function" && _a || Object])
], PedidosComponent);

var _a;
//# sourceMappingURL=pedidos.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pedidos/pedidos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pedidosRoutes", function() { return pedidosRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidosModule", function() { return PedidosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pedidos_component__ = __webpack_require__("../../../../../src/app/pages/pedidos/pedidos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__form_pedido_form_pedido_component__ = __webpack_require__("../../../../../src/app/pages/pedidos/form-pedido/form-pedido.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_pedidos_service__ = __webpack_require__("../../../../../src/app/services/pedidos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_clientes_service__ = __webpack_require__("../../../../../src/app/services/clientes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__form_pedido_filterdata_pipe__ = __webpack_require__("../../../../../src/app/pages/pedidos/form-pedido/filterdata.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var pedidosRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__pedidos_component__["a" /* PedidosComponent */],
        children: [
            {
                path: '/nuevo',
                component: __WEBPACK_IMPORTED_MODULE_6__form_pedido_form_pedido_component__["a" /* FormPedidoComponent */]
            }
        ]
    }
];
var PedidosModule = (function () {
    function PedidosModule() {
    }
    return PedidosModule;
}());
PedidosModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["g" /* RouterModule */].forChild(pedidosRoutes),
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__services_pedidos_service__["a" /* PedidosService */],
            __WEBPACK_IMPORTED_MODULE_9__services_clientes_service__["a" /* ClientesService */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__pedidos_component__["a" /* PedidosComponent */],
            __WEBPACK_IMPORTED_MODULE_6__form_pedido_form_pedido_component__["a" /* FormPedidoComponent */],
            __WEBPACK_IMPORTED_MODULE_10__form_pedido_filterdata_pipe__["a" /* FilterDataPipe */]
        ]
    })
], PedidosModule);

//# sourceMappingURL=pedidos.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/pedidos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PedidosService = (function () {
    //baseUrl: string = "http://localhost:8081";
    function PedidosService(http) {
        this.http = http;
    }
    PedidosService.prototype.getPedidos = function () {
        return this.http.get('/api/getPedidos')
            .map(function (response) { return response; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw('Server error'); });
    };
    PedidosService.prototype.countPedidos = function () {
        return this.http.get('/api/countPedidos');
    };
    PedidosService.prototype.addPedido = function (pedido) {
        return this.http.post('/api/addPedido', pedido);
    };
    PedidosService.prototype.putPedido = function (pedido) {
        return this.http.put('/api/putPedido/', pedido);
    };
    PedidosService.prototype.deletePedido = function (pedido) {
        return this.http.delete('/api/deletePedido/' + pedido);
    };
    PedidosService.prototype.getEstadosPedido = function () {
        return [
            { id: 1, desc: "Creado" },
            { id: 2, desc: "En proceso" },
            { id: 3, desc: "Terminado" },
            { id: 4, desc: "Cancelado" },
        ];
    };
    PedidosService.prototype.getDetallesAdicionales = function () {
        return [
            { id: 1, desc: "Logos insignias sublimados", valor: 550 },
            { id: 2, desc: "Número sublimado", valor: 650 },
            { id: 3, desc: "Logos vinilos", valor: 550 },
            { id: 4, desc: "Números vinilos", valor: 750 },
            { id: 5, desc: "Subliflok insignia", valor: 750 },
            { id: 6, desc: "Cuello camisero tela", valor: 350 },
            { id: 7, desc: "Cuello camisero tejido", valor: 800 },
            { id: 8, desc: "Cierre polera", valor: 450 },
            { id: 9, desc: "Broches (3)", valor: 450 },
            { id: 10, desc: "Triángulo", valor: 550 },
            { id: 11, desc: "Costados", valor: 500 },
            { id: 12, desc: "Vivos", valor: 350 },
            { id: 13, desc: "Cuellos sublimados", valor: 150 },
            { id: 14, desc: "Cuello mao", valor: 350 },
        ];
    };
    PedidosService.prototype.getColores = function () {
        return [
            { id: 1, desc: "Azul", codigoHex: "#0000FF" },
            { id: 2, desc: "Verde", codigoHex: "#008000" },
            { id: 3, desc: "Amarillo", codigoHex: "#FFFF00" }
        ];
    };
    PedidosService.prototype.getMediosPago = function () {
        return [
            { id: 1, desc: "Efectivo" },
            { id: 2, desc: "Transferencia" },
            { id: 3, desc: "Cheque" }
        ];
    };
    //   public getProductos():Observable<Producto[]> {
    PedidosService.prototype.getProductos = function () {
        //return this.http.get('./assets/data/productos/productos.json');
        return [
            { idProducto: 1, desc: "Polera Tela color cire" },
            { idProducto: 2, desc: "Polera sublimacion 100% cire" },
            { idProducto: 3, desc: "Polera sublimacion 100% rugby" },
            { idProducto: 4, desc: "Polera sublimacion 100% elasticada" },
            { idProducto: 5, desc: "Calzas" },
            { idProducto: 6, desc: "Pantalon buzo" },
            { idProducto: 7, desc: "Polerón con cierre" }
        ];
    };
    PedidosService.prototype.getTipoProductos = function () {
        //return this.http.get('./assets/data/productos/tipos-productos.json');
        return [
            { id: 1, idProducto: 1, desc: "Molde recto" },
            { id: 2, idProducto: 1, desc: "raglan tela color" },
            { id: 3, idProducto: 1, desc: "manga larga recta" },
            { id: 4, idProducto: 1, desc: "manga larga raglan" },
            { id: 5, idProducto: 1, desc: "sin manga" },
            { id: 6, idProducto: 2, desc: "molde rect o m/c" },
            { id: 7, idProducto: 2, desc: "molde raglan m/c" },
            { id: 8, idProducto: 2, desc: "molde recto m/L" },
            { id: 9, idProducto: 2, desc: "molde raglan m/L" },
            { id: 10, idProducto: 2, desc: "pecho/espalda recta" },
            { id: 11, idProducto: 2, desc: "pecho/espalda raglan" },
            { id: 12, idProducto: 2, desc: "sin manga" },
            { id: 13, idProducto: 3, desc: "molde recto m/c" },
            { id: 14, idProducto: 3, desc: "molde raglan m/c" },
            { id: 15, idProducto: 3, desc: "molde recto m/L" },
            { id: 16, idProducto: 3, desc: "molde raglan m/L" },
            { id: 17, idProducto: 3, desc: "pecho/espalda recta" },
            { id: 18, idProducto: 3, desc: "pecho/espalda raglan" },
            { id: 19, idProducto: 3, desc: "sin manga" }
        ];
    };
    PedidosService.prototype.getRangoPrecios = function () {
        return [
            { id: 1, idTipoProducto: 1, desc: "4 a 14", valor: 3500 },
            { id: 10, idTipoProducto: 1, desc: "XL - xxl", valor: 4500 },
            { id: 5, idTipoProducto: 1, desc: " 16 a L", valor: 4000 },
            { id: 2, idTipoProducto: 2, desc: "4 a 14", valor: 3700 },
            { id: 6, idTipoProducto: 2, desc: " 16 a L", valor: 4200 },
            { id: 11, idTipoProducto: 2, desc: "XL - xxl", valor: 4700 },
            { id: 3, idTipoProducto: 3, desc: "4 a 14", valor: 4500 },
            { id: 7, idTipoProducto: 3, desc: " 16 a L", valor: 5500 },
            { id: 12, idTipoProducto: 3, desc: "XL - xxl", valor: 6000 },
            { id: 4, idTipoProducto: 4, desc: "4 a 14", valor: 4700 },
            { id: 8, idTipoProducto: 4, desc: " 16 a L", valor: 5700 },
            { id: 13, idTipoProducto: 4, desc: "XL - xxl", valor: 6700 },
            { id: 9, idTipoProducto: 5, desc: " 16 a L", valor: 3800 },
            { id: 14, idTipoProducto: 5, desc: "XL - xxl", valor: 4200 }
        ];
    };
    return PedidosService;
}());
PedidosService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], PedidosService);

var _a;
//# sourceMappingURL=pedidos.service.js.map

/***/ })

});
//# sourceMappingURL=pedidos.module.chunk.js.map