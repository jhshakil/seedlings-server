import { Router } from 'express';
import { ProductRouters } from '../modules/product/product.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/product',
    route: ProductRouters,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
