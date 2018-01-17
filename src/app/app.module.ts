import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FromNowPipe } from './pipes-and-validators/from-now.pipe';
import {Ng2DeviceDetectorModule} from 'ng2-device-detector';
import {DeviceService} from './core/device.service';
import { LandingComponent } from './pages/landing/landing.component';
import { UserMenuComponent } from './components/header/user-menu/user-menu.component';
import {AngularMaterialModule} from './components/angular-material/angular-material.module';
import {routing} from './app-routing.module';
import {AuthService} from './core/auth/auth.service';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpRequest, HttpResponse} from '@angular/common/http';
import {UserService} from './core/auth/user.service';
import {TokenInterceptor} from './core/auth/auth.interceptor';
import {GlobalErrorHandler} from "./core/global/error-handler.global";
import {UrlInterceptor} from "./core/global/url.interceptor";
import {LoadingBarHttpClientModule} from "@ngx-loading-bar/http-client";
import {LoadingBarRouterModule} from "@ngx-loading-bar/router";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FromNowPipe,
    LandingComponent,
    UserMenuComponent
  ],
  imports: [
    // Angular Modules
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    Ng2DeviceDetectorModule.forRoot(),
    HttpClientModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    routing
  ],
  providers: [
    DeviceService,
    AuthService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
