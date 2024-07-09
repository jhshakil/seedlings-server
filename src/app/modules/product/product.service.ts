import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findOne({ _id: id });
  return result;
};

const updateProductIntoDB = async (id: string, product: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(
    { _id: id },
    { $set: product },
    { new: true },
  );
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndUpdate(
    { _id: id },
    { isDeleted: true },
    { new: true },
  );

  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
