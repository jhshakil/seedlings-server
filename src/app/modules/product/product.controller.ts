import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProductServices } from './product.service';

const createProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.createProductIntoDB(req.body);

  sendResponse(res, {
    message: 'Product Create Successfully',
    data: result,
  });
});

const getAllProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllProductFromDB();

  sendResponse(res, {
    message: 'Products retrieved Successfully',
    data: result,
  });
});

const getSingleProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.getSingleProductFromDB(req.params.id);

  sendResponse(res, {
    message: 'Product retrieved Successfully',
    data: result,
  });
});

const updateProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.updateProductIntoDB(
    req.params.id,
    req.body,
  );

  sendResponse(res, {
    message: 'Product update Successfully',
    data: result,
  });
});

const deleteProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.deleteProductFromDB(req.params.id);

  sendResponse(res, {
    message: 'Product delete Successfully',
    data: result,
  });
});

export const ProductControllers = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
