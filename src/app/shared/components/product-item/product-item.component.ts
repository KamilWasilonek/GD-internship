import { Component, OnInit, Input } from '@angular/core';
import { faShare, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { IArrivals } from '@app/shared/interfaces/arrivals.interface';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: IArrivals;
  description: string;
  shareIcon = faShare;
  shoppingIcon = faShoppingCart;
  heartIcon = faHeart;

  constructor() {}
  ngOnInit() {}
}
