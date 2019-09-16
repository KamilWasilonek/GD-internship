import { Component, OnInit, Input, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { faShare, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';

import { IArrivals } from '@app/shared/interfaces/arrivals.interface';
import { trackElement } from '@app/shared/functions/track-element';
import { ISwatches } from '@app/shared/interfaces/swatches.interface';
import { ICardItem } from '@app/shared/interfaces/card-item.interface';
import { CardStatusService } from '@app/shared/services/card-list/card-status.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit, OnDestroy {
  @Input() product: IArrivals;
  @ViewChild('image', { static: false }) image: ElementRef;
  price: string;
  swatches: ISwatches[];
  description: string;
  shareIcon = faShare;
  shoppingIcon = faShoppingCart;
  heartIcon = faHeart;
  cardItem: ICardItem;
  statusSubscriber: Subscription;
  cardListStatus: boolean;

  trackItem = trackElement;

  constructor(private readonly cardStatusService: CardStatusService) {}

  ngOnInit(): void {
    this.swatches = this.product.swatches;
    this.price = `${this.product.price} $`;

    this.cardItem = {
      id: this.product.id,
      size: this.product.sizes[0],
      color: this.swatches.length ? this.swatches[0].color : 'default',
    };

    this.cardStatusService.getCard().subscribe(() => {
      this.resetCard();
    });
  }

  ngOnDestroy():void {
    if (this.statusSubscriber) {
      this.statusSubscriber.unsubscribe();
    }
  }

  onChangeImage(item: ISwatches): void {
    this.image.nativeElement.src = item.imgSrc;
    this.cardItem.color = item.color;
  }

  changeSize(size: string): void {
    this.cardItem.size = size;
  }

  resetCard(): void {
    this.cardItem.size = undefined;
    this.cardItem.color = undefined;
  }
}
