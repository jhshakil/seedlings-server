import { Product } from '../product/product.model';

const getALlCategory = async () => {
  const result = await Product.find({
    isDeleted: { $ne: true },
  }).distinct('category');
  return result;
};

export const CategoryServices = {
  getALlCategory,
};
