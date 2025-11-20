"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

type CartItem = {
  id?: string;
  name: string;
  price: string;
  quantity: number;
  img?: string;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (name: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

function parsePrice(price: string) {
  const digits = price.replace(/[^0-9]/g, "");
  if (!digits) return 0;
  return parseInt(digits, 10);
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.name === item.name);
      if (existing) {
        return prev.map((p) => (p.name === item.name ? { ...p, quantity: p.quantity + item.quantity } : p));
      }
      return [...prev, item];
    });
  };

  const removeItem = (name: string) => {
    setItems((prev) => prev.filter((p) => p.name !== name));
  };

  const clearCart = () => setItems([]);

  const totalItems = useMemo(() => items.reduce((s, it) => s + it.quantity, 0), [items]);

  const totalPrice = useMemo(() => items.reduce((s, it) => s + parsePrice(it.price) * it.quantity, 0), [items]);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export default CartContext;
