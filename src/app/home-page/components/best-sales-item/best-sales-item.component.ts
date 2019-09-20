import { Component, Input } from '@angular/core';

import { IBestsellerItem } from '../../../shared/interfaces/bestseller-item.interface';
import { faStar, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { TrackElementService } from '@app/shared/services/track-element.service';

@Component({
  selector: 'app-best-sales-item',
  templateUrl: './best-sales-item.component.html',
  styleUrls: ['./best-sales-item.component.scss'],
})
export class BestSalesItemComponent {
  @Input() product: IBestsellerItem;
  starIcon = faStar;
  shoppingIcon = faCartPlus;
  ratingStarsArr: number[] = [1, 2, 3, 4, 5];

  constructor(private readonly trackElementService: TrackElementService) {}
}
