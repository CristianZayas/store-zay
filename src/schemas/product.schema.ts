import { z } from "zod";

export const ProductSchema = z
  .object({
    id: z.number(),
    title: z.string(),
    price: z.number(),
    description: z.string(),
    category: z.string(),
    image: z.string().url(),
    rating: z.object({
      rate: z.number(),
      count: z.number(),
    }),
  })
  .transform((product) => ({
    ...product,
    stock: Math.floor(Math.random() * 10) + 1, // fake stock
  }));


export const ProductListSchema = z.array(ProductSchema);

export type Product = z.infer<typeof ProductSchema>;
