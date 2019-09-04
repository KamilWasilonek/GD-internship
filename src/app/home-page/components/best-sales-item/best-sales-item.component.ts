import { Component, OnInit, Input } from '@angular/core';
import { IBestsellerItem } from '../../../shared/interfaces/bestseller-item.interface';
import { faStar, faCartPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-best-sales-item',
  templateUrl: './best-sales-item.component.html',
  styleUrls: ['./best-sales-item.component.scss'],
})
export class BestSalesItemComponent implements OnInit {
  @Input() product: IBestsellerItem;
  starIcon = faStar;
  shoppingIcon = faCartPlus;
  constructor() {}

  ngOnInit() {}
}
