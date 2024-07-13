import { TOrderProduct } from '../order/order.interface';
import { ProductModel, TProduct } from './product.interface';
import { model, Schema } from 'mongoose';

const productSchema = new Schema<TProduct>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  rating: { type: Number, required: true },
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, default: true },
  isDeleted: { type: Boolean, default: false },
});

productSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
productSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });

  next();
});

productSchema.statics.isStockAvailable = async function (
  products: TOrderProduct[],
) {
  for (const x of products) {
    const availableStock = await Product.findOne({ _id: x._id });
    if (
      availableStock &&
      !availableStock.inStock &&
      availableStock.quantity <= x.quantity
    ) {
      return false;
    }
  }

  return true;
};

productSchema.statics.reduceQuantity = async function (
  products: TOrderProduct[],
) {
  for (const x of products) {
    const findProduct = await Product.findOne({ _id: x._id });
    if (findProduct && x.quantity <= findProduct.quantity) {
      await Product.updateOne(
        { _id: x._id },
        {
          $set: {
            quantity: findProduct.quantity - x.quantity,
            inStock: findProduct.quantity - x.quantity === 0 ? false : true,
          },
        },
      );
    }
  }
};
// productSchema.statics.isStockAvailable = async function (
//   id: string,
//   quantity: number,
// ) {
//   const availableStock = await Product.findOne({ _id: id });
//   if (
//     availableStock &&
//     availableStock.inStock &&
//     availableStock.quantity >= quantity
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// };

// productSchema.statics.reduceQuantity = async function (
//   id: string,
//   quantity: number,
// ) {
//   const findProduct = await Product.findOne({ _id: id });
//   if (findProduct && quantity <= findProduct.quantity) {
//     await Product.updateOne(
//       { _id: id },
//       {
//         $set: {
//           quantity: findProduct.quantity - quantity,
//           inStock: findProduct.quantity - quantity === 0 ? false : true,
//         },
//       },
//     );
//   }
// };

export const Product = model<TProduct, ProductModel>('Product', productSchema);
