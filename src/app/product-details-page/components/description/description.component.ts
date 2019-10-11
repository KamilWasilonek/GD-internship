import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { IProductDescription } from '@app/shared/interfaces/product-detail/product-description.interface';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {
  @Input() productDescription: IProductDescription;
  @Output() readonly loadingStatus = new EventEmitter<string>();

  ngOnInit(): void {
    if (!this.productDescription) {
      return;
    }
    this.loadingStatus.emit('description');
  }
}
