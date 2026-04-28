import { create } from 'zustand';
import { ItemCarrito } from '../types';

interface CartStore {
  items: ItemCarrito[];
  total: number;
  addItem: (item: ItemCarrito) => void;
  removeItem: (idCarrito: string) => void;
  clearCart: () => void;
}

export const useCart = create<CartStore>((set) => ({
  items: [],
  total: 0,
  addItem: (newItem) => set((state) => {
    const newItems = [...state.items, newItem];
    return { 
      items: newItems, 
      total: newItems.reduce((acc, item) => acc + item.totalPlato, 0) 
    };
  }),
  removeItem: (idCarrito) => set((state) => {
    const newItems = state.items.filter(i => i.idCarrito !== idCarrito);
    return { 
      items: newItems, 
      total: newItems.reduce((acc, item) => acc + item.totalPlato, 0) 
    };
  }),
  clearCart: () => set({ items: [], total: 0 }),
}));