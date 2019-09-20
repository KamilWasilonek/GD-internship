import { Component, OnInit } from '@angular/core';
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

  private onDetectEnvironment(): void {
    console.log(this.environmentName);
  }
  
  ngOnInit(): void {
    this.onDetectEnvironment();
  }
}
