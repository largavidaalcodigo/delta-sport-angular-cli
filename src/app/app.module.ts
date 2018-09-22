import { WebsocketService } from './services/websocket.service';
import { ChatService } from './services/chat.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutes} from './app.routing';
import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import {ClickOutsideModule} from 'ng-click-outside';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BreadcrumbsComponent} from './layout/admin/breadcrumbs/breadcrumbs.component';
import {TitleComponent} from './layout/admin/title/title.component';
import {AuthComponent} from './layout/auth/auth.component';
import { LayoutModulosDirective } from './layout-modulos.directive';
import { SubirArchivosComponent } from './pages/commons/subir-archivos/subir-archivos.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
// import { ProductosComponent } from './pages/productos/productos.component';
/* import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
 */
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BreadcrumbsComponent,
    TitleComponent,
    AuthComponent,
    LayoutModulosDirective,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    ClickOutsideModule,
    SharedModule
  ],
  providers: [
    ChatService,
    WebsocketService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
