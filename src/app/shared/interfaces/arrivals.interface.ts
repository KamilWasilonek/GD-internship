import { ISwatches } from './swatches.interface';

export interface IArrivals {
  id: string;
  name: string;
  price: number;
  sizes: string[];
  thumbnailImageSrc: string;
  swatches: ISwatches[];
  addedToWishList?: boolean;
}
