import { Component, Input, OnChanges } from '@angular/core';
import { IProductDescription } from '@app/shared/interfaces/product-detail/product-description.interface';
import { ProductStateService } from '@app/shared/services/product-details/product-state.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnChanges {
  @Input() productDescription: IProductDescription;

  constructor(private stateService: ProductStateService) {}

  ngOnChanges() {
    if (this.stateService) {
      this.stateService.changeDescriptionState(true);
    }
  }
}
