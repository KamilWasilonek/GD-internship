import { Component, OnInit, Input } from '@angular/core';
import { IProductOptions } from '@app/shared/interfaces/product-detail/product-options.interface';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {
  @Input() productOptions: IProductOptions;

  constructor() {}

  ngOnInit() {}
}
