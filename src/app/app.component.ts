import { Component, OnInit, HostListener } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'GD-internship-angularProject';
  environmentName = '';

  constructor() {
    this.environmentName = environment.environmentName;
  }

  private onDetectEnvironment() {
    console.log(this.environmentName);
  }
  ngOnInit() {
    this.onDetectEnvironment();
  }
}
