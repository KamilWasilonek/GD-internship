import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  constructor() {}

  navList: string[] = ['Home', 'Products', 'Hot Deals', 'About', 'Contact'];
  ngOnInit() {}
}
