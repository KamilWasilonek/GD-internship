import { Component, OnInit } from '@angular/core';
import data from '../../../../../assets/config/social-links.json';

@Component({
  selector: 'app-header-icons',
  templateUrl: './header-icons.component.html',
  styleUrls: ['./header-icons.component.scss']
})
export class HeaderIconsComponent implements OnInit {
  links: any = data;
  constructor() {}

  ngOnInit() {}
}
