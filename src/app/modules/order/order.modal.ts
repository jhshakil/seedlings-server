import { model, Schema } from 'mongoose';
import { TOrder } from './order.interface';

const orderSchema = new Schema<TOrder>({
  name: { type: String, required: true },
  phone_number: { type: String, required: true },
  address: { type: String, required: true },
  cash_on_delivery: { type: Boolean, required: true },
  products: [
    {
      _id: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
      image: { type: String, required: true },
      price: { type: Number, required: true },
      category: { type: String, required: true },
      rating: { type: Number, required: true },
      quantity: { type: Number, required: true },
      inStock: { type: Boolean, default: true },
      isDeleted: { type: Boolean, default: false },
    },
  ],
});

export const Order = model<TOrder>('Order', orderSchema);
