"use client";

import { useCartStore } from "@/hooks/use-cart";
import type { StoreProduct } from "@/lib/store-data";

export function AddToCartButton({
  product,
  variant = "default",
}: {
  product: StoreProduct;
  variant?: "default" | "compact";
}) {
  const addItem = useCartStore((state) => state.addItem);

  const cartProduct = {
    id: product.id,
    name: product.name,
    slug: product.slug,
    sku: product.sku,
    priceInKobo: product.priceInKobo,
    comparePriceInKobo: product.comparePriceInKobo ?? null,
    stock: product.stock,
    image: product.image,
    brand: product.brand,
    category: product.category,
  };

  return (
    <button
      type="button"
      onClick={() => addItem(cartProduct, 1)}
      className={
        variant === "compact"
          ? "inline-flex w-full items-center justify-center rounded-xl bg-[#071a2e] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#12345c]"
          : "inline-flex items-center justify-center rounded-xl bg-[#071a2e] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#12345c]"
      }
    >
      Add to cart
    </button>
  );
}
