import { Component, OnInit } from '@angular/core';
import { IArrivals } from '@app/shared/interfaces/arrivals.interface';
import { ArrivalsService } from '@app/shared/services/arrivals.service';
import { IBestsellerItem } from '@app/shared/interfaces/bestseller-item.interface';
import { BestsellersService } from '@app/shared/services/bestsellers.service';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { trackElement } from '@app/shared/functions/track-element';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public flags = {
    isBannerVisible: true,
    isArrivalsVisible: true,
    isViewMoreVisible: true,
    isAdvertismentsVisible: true,
    isBestSalesVisible: true,
  };
  public products: Observable<IArrivals[]>;
  public bestSalesProducts: Observable<IBestsellerItem[]>;
  trackHome = trackElement;

  constructor(private readonly arrivalsService: ArrivalsService, private readonly bestsellersService: BestsellersService) {}

  public ngOnInit(): void {
    this.getProducts();
    this.getBestSales();
  }
  private getProducts(): void {
    this.products = this.arrivalsService.getArrivals().pipe(pluck('products'));
  }
  private getBestSales(): void {
    this.bestSalesProducts = this.bestsellersService.getBestsellers().pipe(pluck('products'));
  }
}
