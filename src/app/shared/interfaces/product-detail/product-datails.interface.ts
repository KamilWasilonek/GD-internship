export interface IProductDetails {
  id: string;
  name: string;
  title: string;
  description: string;
  price: number;
  amountInStock: number;
  sizes: Array<string>;
  thumbnailImageSrc: string;
  realtedProducts: Array<string>;
}
