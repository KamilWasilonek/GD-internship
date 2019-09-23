import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  flags = {
    isBannerVisible: true,
    isArrivalsVisible: true,
    isViewMoreVisible: true,
    isAdvertismentsVisible: true,
    isBestSalesVisible: true,
  };
}
