import { z } from 'zod';

const createProductValidation = z.object({
  body: z.object({
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
});

const updateProductValidation = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    price: z.number().optional(),
    category: z.string().optional(),
    rating: z.number().optional(),
    quantity: z.number().min(1).optional(),
    inStock: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
  }),
});

export const ProductValidations = {
  createProductValidation,
  updateProductValidation,
};
