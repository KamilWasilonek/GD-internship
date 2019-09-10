import { Component, Input, AfterViewInit, AfterViewChecked, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  @Input() productImages: string;
  @Output() imagesStatus = new EventEmitter<boolean>();

  constructor() {}

  changeImageStatus() {
    this.imagesStatus.emit(true);
  }
}
