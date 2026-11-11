"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { CartState, CartProduct, CartVariant, CartItemData } from "@/types";

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isLoading: false,
      sessionId: null,

      addItem: (product: CartProduct, quantity: number, variant?: CartVariant | null) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) =>
              item.product.id === product.id &&
              (variant ? item.variant?.id === variant.id : !item.variant)
          );

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === existingItem.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }

          const newItem: CartItemData = {
            id: `${product.id}-${variant?.id || "default"}-${Date.now()}`,
            product,
            variant: variant || null,
            quantity,
          };

          return { items: [...state.items, newItem] };
        });
      },

      removeItem: (itemId: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        }));
      },

      updateQuantity: (itemId: string, quantity: number) => {
        if (quantity < 1) return;
        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      getSubtotal: () => {
        const { items } = get();
        return items.reduce((total, item) => {
          const price = item.variant?.priceInKobo || item.product.priceInKobo;
          return total + price * item.quantity;
        }, 0);
      },

      getItemCount: () => {
        const { items } = get();
        return items.reduce((count, item) => count + item.quantity, 0);
      },

      setSessionId: (id: string) => {
        set({ sessionId: id });
      },
    }),
    {
      name: "plumbmart-cart",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        items: state.items,
        sessionId: state.sessionId,
      }),
    }
  )
);
