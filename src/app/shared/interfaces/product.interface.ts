import { ISwatches } from './swatches.interface';

export interface IProduct {
  id: string;
  category?: string;
  title?: string;
  price: number;
  amountInStock?: number;
  brand?: string;
  description?: string;
  sex?: string;
  name: string;
  rating?: number;
  swatches?: Array<ISwatches>;
  availability: Array<ProductAvailabilityState>;
  thumbnailImageSrc?: string;
  sizes?: Array<ProductSize>;
  relatedProducts?: Array<IProduct>;
}

export enum ProductAvailabilityState {
  IN_STORE = 1,
  ONLINE_ONLY = 2,
}

export enum ProductSize {
  // tslint:disable: id-length
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl',
  // tslint:enable: id-length
}

export interface IFilter {
  type: string;
  name: string;
  fields?: Array<string>;
  range?: Array<PriceRange>;
}

export enum PriceRange {
  min = 0,
  max = 1,
}
export interface ICartProduct {
  id: string;
  name: string;
  quantity?: number;
  swatch?: string;
  price?: number;
  defaultPrice?: number;
  size?: ProductSize;
  amountInStock?: number;
}
