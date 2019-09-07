import { Component, OnInit } from '@angular/core';
import { IArrivals } from '@app/shared/interfaces/arrivals.interface';
import { ArrivalsService } from '@app/shared/services/arrivals.service';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-arrivals',
  templateUrl: './arrivals.component.html',
  styleUrls: ['./arrivals.component.scss'],
})
export class ArrivalsComponent implements OnInit {
  products: IArrivals[];
  constructor(private arrivals: ArrivalsService) {}

  ngOnInit() {
    this.arrivals
      .getArrivals()
      .pipe(map(data => data.products))
      .subscribe(newArrivals => {
        return (this.products = newArrivals);
      });
  }
}
