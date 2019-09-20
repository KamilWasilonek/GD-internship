import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { faShare, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';

import { IArrivals } from '@app/shared/interfaces/arrivals.interface';
import { TrackElementService } from '@app/shared/services/track-element.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: IArrivals;
  @ViewChild('image', { static: false }) image: ElementRef;
  price: string;
  swatches = [];
  description: string;
  shareIcon = faShare;
  shoppingIcon = faShoppingCart;
  heartIcon = faHeart;

  constructor(private readonly trackElementService: TrackElementService) {}

  ngOnInit(): void {
    this.swatches = this.product.swatches;
    this.price = `${this.product.price} $`;
  }

  onChangeImage(item): void {
    this.image.nativeElement.src = item.imgSrc;
  }
}
