import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  @Input() productImage: string;
  @Output() readonly loadingStatus = new EventEmitter<string>();

  smallImagesArr: number[] = [0, 1, 2];
  curPrimaryImageTitle = 'product image nr 1';

  changeImageStatus(): void {
    this.loadingStatus.emit('gallery');
  }
  onSmallImageClick(imageNumber: string): void {
    this.curPrimaryImageTitle = `product image nr ${imageNumber}`;
  }
}
