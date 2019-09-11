import { Component, Input } from '@angular/core';
import { ProductStateService } from '@app/shared/services/product-details/product-state.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  @Input() productImages: string;

  constructor(private stateService: ProductStateService) {}

  changeImageStatus() {
    this.stateService.changeGalleryState(true);
  }
}
