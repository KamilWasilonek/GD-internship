import { Component, OnInit } from '@angular/core';

import { BestsellersService } from '../../../shared/services/bestsellers.service';
import { IBestsellerItem } from '../../../shared/interfaces/bestseller-item.interface';
import { trackElement } from '@app/shared/functions/track-element';

@Component({
  selector: 'app-best-sales',
  templateUrl: './best-sales.component.html',
  styleUrls: ['./best-sales.component.scss'],
})
export class BestSalesComponent implements OnInit {
  products: IBestsellerItem[];
  trackBestSales = trackElement;

  constructor(private readonly bestsellersService: BestsellersService) {}

  ngOnInit(): void {
    this.bestsellersService.getBestsellers().subscribe(data => (this.products = data.products));
  }
}
