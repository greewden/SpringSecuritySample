import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient, private app: AppService, private router: Router) {
    this.app.authenticate(undefined, undefined);
  }

  public logout(): void {
    // Mark session as unauthenticated and navigate to login page.
    this.http.post('logout', {}).subscribe(
      x => console.log('Observer got a next value: ' + JSON.stringify(x)),
      err => console.error('Observer got an error: ' + err),
      () => {
        this.app.authenticated = false;
        this.router.navigateByUrl('/login');
      }
      );
  }
}
