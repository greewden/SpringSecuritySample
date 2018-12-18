import { BrowserModule } from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AppService} from './app.service';
import {Observable} from 'rxjs';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent}
];

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppService, {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
