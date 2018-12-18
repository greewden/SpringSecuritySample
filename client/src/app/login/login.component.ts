import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public credentials = {username: '', password: ''};

  constructor(private app: AppService, private http: HttpClient, private router: Router) { }

  ngOnInit() {}

  public login(): boolean {
    this.app.authenticate(this.credentials, () => {
      this.router.navigateByUrl('/');
    });
    return false;
  }
}
