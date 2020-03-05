import { IChoosenProductDetails } from './choosen-product-details.interface';

export interface IProductOptions {
  sizes: string[];
  amountInStock: number;
  choosenDetails: IChoosenProductDetails;
}
