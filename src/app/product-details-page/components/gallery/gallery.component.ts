import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from '../../../product-list-page/store/';
import * as fromProductDetails from '../../../product-list-page/store/product-details';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  @Input() productImage: string;
  smallImagesArr: number[] = [0, 1, 2];
  curPrimaryImageTitle = 'product image nr 1';

  constructor(private readonly store: Store<fromStore.ProductsState>) {}

  changeImageStatus(): void {
    this.store.dispatch(new fromProductDetails.SendLoadingStatusAction('gallery'));
  }
  onSmallImageClick(imageNumber: string): void {
    this.curPrimaryImageTitle = `product image nr ${imageNumber}`;
  }
}
