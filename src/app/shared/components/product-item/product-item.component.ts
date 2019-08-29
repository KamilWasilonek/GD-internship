import { Component, OnInit } from '@angular/core';
import { faShare, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  shareIcon = faShare;
  shoppingIcon = faShoppingCart;
  heartIcon = faHeart;
  hoverSide = false;

  constructor() {}
  onProductMouseOver() {
    this.hoverSide = true;
  }

  onProductMouseOut() {
    this.hoverSide = false;
  }
  ngOnInit() {}
}
