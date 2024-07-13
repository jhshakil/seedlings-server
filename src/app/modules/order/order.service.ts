import { Product } from '../product/product.model';
import { TOrder } from './order.interface';
import { Order } from './order.modal';

const createOrderIntoDB = async (payload: TOrder) => {
  if (await Product.isStockAvailable(payload.products)) {
    const result = await Order.create(payload);
    Product.reduceQuantity(payload.products);
    return result;
  }
};

export const OrderServices = {
  createOrderIntoDB,
};
