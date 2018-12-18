import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public greeting: Object = {};

  constructor(private app: AppService, private http: HttpClient) {
    http.get('resource').subscribe(data => this.greeting = data);
  }

  ngOnInit() {
  }

  public authenticated() {
    return this.app.authenticated;
  }
}

