import { ISlide } from './banner.interface';
import { IProduct } from './product.interface';

export interface IHomepage {
  slideshow: ISlide[];
  arrivals: IProduct[];
  bestSales: IProduct[];
}
