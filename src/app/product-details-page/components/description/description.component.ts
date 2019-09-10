import { Component, OnInit, Input } from '@angular/core';
import { IProductDescription } from '@app/shared/interfaces/product-detail/product-description.interface';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {
  @Input() productDescription: IProductDescription;

  constructor() {}

  ngOnInit() {}
}
