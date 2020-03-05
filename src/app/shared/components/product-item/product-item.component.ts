import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { CardStatusService } from '@app/shared/services/card-list/card-status.service';
import { IArrivals } from '@app/shared/interfaces/arrivals.interface';
import { ICardItem } from '@app/shared/interfaces/card-item.interface';
import { ISwatches } from '@app/shared/interfaces/swatches.interface';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() product: IArrivals;
  unsubscribe$: Subject<void> = new Subject();
  cardItem: ICardItem;
  currentImageSrc: string;

  constructor(private readonly cardStatusService: CardStatusService) {}

  ngOnInit(): void {
    this.cardStatusService
      .getCard()
      .pipe(
        filter(id => id === this.cardItem.id),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(() => {
        this.resetCard();
      });
  }

  ngOnChanges(): void {
    this.currentImageSrc = this.product.thumbnailImageSrc;
    this.cardItem = {
      id: this.product.id,
      size: this.product.sizes[0],
      color: this.product.swatches.length ? this.product.swatches[0].color : 'default',
    };
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onChangeImage(item: ISwatches): void {
    this.currentImageSrc = item.imgSrc;
    this.cardItem = { ...this.cardItem, color: item.color };
  }

  changeSize(size: string): void {
    this.cardItem = { ...this.cardItem, size };
  }

  resetCard(): void {
    this.cardItem.size = undefined;
    if (this.cardItem.color !== 'default') {
      this.cardItem.color = undefined;
    }
  }
}
