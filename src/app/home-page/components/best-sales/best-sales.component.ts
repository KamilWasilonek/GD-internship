import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../shared/services/products.service';
import { IBestsellerItem } from '../../../shared/interfaces/bestseller-item.interface';

@Component({
  selector: 'app-best-sales',
  templateUrl: './best-sales.component.html',
  styleUrls: ['./best-sales.component.scss'],
})
export class BestSalesComponent implements OnInit {
  products: IBestsellerItem[];
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe(data => (this.products = data.slice(0, 3)));
  }
}
