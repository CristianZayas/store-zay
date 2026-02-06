export const ROUTES = {
  HOME: "/",
  PRODUCTS: "/products",
  PRODUCT_DETAIL: (id: number) => `/products/${id}`,
  CART: "/cart",
} as const;
