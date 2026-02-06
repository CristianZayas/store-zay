import { ProductCatalog } from "@/components/features/product-catalog";
import { productService } from "@/services/product.service";

export default async function Page() {
  let initialProducts;
  let initialCategories;

  try {
    [initialProducts, initialCategories] = await Promise.all([
      productService.getAll({ next: { revalidate: 60 } }),
      productService.getCategories({ next: { revalidate: 3600 } }),
    ]);
  } catch {
    initialProducts = undefined;
    initialCategories = undefined;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <ProductCatalog
        initialProducts={initialProducts}
        initialCategories={initialCategories}
      />
    </div>
  );
}
