import { z } from "zod";
import type { Product } from "./product.schema";

export const CartItemSchema = z.object({
  productId: z.number(),
  quantity: z.number().min(1),
});

export type CartItem = z.infer<typeof CartItemSchema> & {
  product?: Product;
};
