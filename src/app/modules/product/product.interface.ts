/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

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
  isStockAvailable(id: string, quantity: number): Promise<boolean>;
  reduceQuantity(id: string, quantity: number): void;
}
