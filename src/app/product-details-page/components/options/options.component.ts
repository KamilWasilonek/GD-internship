import { Component, Input, OnChanges } from '@angular/core';
import { IProductOptions } from '@app/shared/interfaces/product-detail/product-options.interface';
import { ProductStateService } from '@app/shared/services/product-details/product-state.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnChanges {
  @Input() productOptions: IProductOptions;

  constructor(private stateService: ProductStateService) {}

  ngOnChanges() {
    if (this.productOptions) {
      this.stateService.changeOptionsState(true);
    }
  }
}
