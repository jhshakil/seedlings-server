import { Router } from 'express';
import { ProductControllers } from './product.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ProductValidations } from './product.validation';

const router = Router();

router.post(
  '/',
  validateRequest(ProductValidations.createProductValidation),
  ProductControllers.createProduct,
);
router.get('/', ProductControllers.getAllProduct);
router.get('/:id', ProductControllers.getSingleProduct);
router.patch(
  '/:id',
  validateRequest(ProductValidations.updateProductValidation),
  ProductControllers.updateProduct,
);
router.delete('/:id', ProductControllers.deleteProduct);

export const ProductRouters = router;
