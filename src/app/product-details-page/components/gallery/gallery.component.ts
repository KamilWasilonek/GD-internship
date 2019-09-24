import { Component, Input } from '@angular/core';

import { ProductStateService } from '@app/shared/services/product-details/product-state.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  @Input() productImage: string;
  smallImagesArr: number[] = [0, 1, 2];
  curPrimaryImageTitle = 'product image nr 1';

  constructor(private readonly stateService: ProductStateService) {}

  changeImageStatus(): void {
    this.stateService.changeGalleryState(true);
  }
  onSmallImageClick(imageNumber: string): void {
    this.curPrimaryImageTitle = `product image nr ${imageNumber}`;
  }
}
