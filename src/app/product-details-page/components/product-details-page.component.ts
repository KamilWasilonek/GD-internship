import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss'],
})
export class ProductDetailsPageComponent implements OnInit {
  id: string;
  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.id = params.id;
    });
  }

  ngOnInit() {}
}
