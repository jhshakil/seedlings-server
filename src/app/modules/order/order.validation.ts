import { z } from 'zod';

const createOrderValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    phone_number: z.string(),
    address: z.string(),
    cash_on_delivery: z.boolean(),
    products: z.array(
      z.object({
        _id: z.string(),
        title: z.string(),
        description: z.string(),
        image: z.string(),
        price: z.number(),
        category: z.string(),
        rating: z.number(),
        quantity: z.number().min(1),
        inStock: z.boolean().optional(),
        isDeleted: z.boolean().optional(),
      }),
    ),
  }),
});

export const OrderValidations = {
  createOrderValidationSchema,
};
