import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { faShare, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { IArrivals } from '@app/shared/interfaces/arrivals.interface';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: IArrivals;
  @ViewChild('image', { static: false }) image: ElementRef;
  swatches = [];
  description: string;
  shareIcon = faShare;
  shoppingIcon = faShoppingCart;
  heartIcon = faHeart;

  constructor() {}

  ngOnInit() {
    this.swatches = this.product.swatches;
    console.log(this.swatches);
  }

  onChangeImage(item) {
    this.image.nativeElement.src = item.imgSrc;
  }
}
