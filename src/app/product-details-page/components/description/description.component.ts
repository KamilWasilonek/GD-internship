import { Component, OnInit, Input, EventEmitter, Output, AfterViewInit } from '@angular/core';
import { IProductDescription } from '@app/shared/interfaces/product-detail/product-description.interface';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements AfterViewInit {
  @Input() productDescription: IProductDescription;
  @Output() descriptionStatus = new EventEmitter<boolean>();

  constructor() {}

  ngAfterViewInit() {
    if (this.productDescription) {
      this.descriptionStatus.emit(true);
    }
  }
}
