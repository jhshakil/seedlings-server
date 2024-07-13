import { Router } from 'express';
import { ProductRouters } from '../modules/product/product.route';
import { CategoryRoutes } from '../modules/category/category.route';
import { OrderRoutes } from '../modules/order/order.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/product',
    route: ProductRouters,
  },
  {
    path: '/category',
    route: CategoryRoutes,
  },
  {
    path: '/order',
    route: OrderRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
