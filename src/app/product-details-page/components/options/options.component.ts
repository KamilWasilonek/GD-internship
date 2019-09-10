import { Component, OnInit, Input, EventEmitter, Output, AfterViewInit } from '@angular/core';
import { IProductOptions } from '@app/shared/interfaces/product-detail/product-options.interface';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements AfterViewInit {
  @Input() productOptions: IProductOptions;
  @Output() optionsStatus = new EventEmitter<boolean>();

  constructor() {}

  ngAfterViewInit() {
    if (this.productOptions) {
      this.optionsStatus.emit(true);
    }
  }
}
