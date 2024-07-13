/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
import { TOrderProduct } from '../order/order.interface';

export type TProduct = {
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  rating: number;
  quantity: number;
  inStock: boolean;
  isDeleted: boolean;
};

export interface ProductModel extends Model<TProduct> {
  isStockAvailable(product: TOrderProduct[]): Promise<boolean>;
  reduceQuantity(product: TOrderProduct[]): void;
  enableStock(id: string, quantity: number): void;
}
