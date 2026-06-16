import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Item } from '../types';
import { items as staticItems } from '../data/itemsData';

interface ProductsContextType {
  products: Item[];
  addProduct: (product: Item) => void;
  updateProduct: (product: Item) => void;
  deleteProduct: (id: number) => void;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

const STORAGE_KEY = 'moda_dynamic_products';
const DELETED_KEY = 'moda_deleted_products';

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [dynamicProducts, setDynamicProducts] = useState<Item[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [deletedIds, setDeletedIds] = useState<number[]>(() => {
    const saved = localStorage.getItem(DELETED_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dynamicProducts));
  }, [dynamicProducts]);

  useEffect(() => {
    localStorage.setItem(DELETED_KEY, JSON.stringify(deletedIds));
  }, [deletedIds]);

  const dynamicIds = new Set(dynamicProducts.map(p => p.id));
  const products = [
    ...dynamicProducts,
    ...staticItems.filter(p => !dynamicIds.has(p.id) && !deletedIds.includes(p.id)),
  ];

  const addProduct = (product: Item) => {
    setDynamicProducts(prev => [product, ...prev]);
  };

  const updateProduct = (product: Item) => {
    setDynamicProducts(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.map(p => (p.id === product.id ? product : p));
      }
      return [product, ...prev];
    });
  };

  const deleteProduct = (id: number) => {
    setDynamicProducts(prev => prev.filter(p => p.id !== id));
    const isStatic = staticItems.some(p => p.id === id);
    if (isStatic) {
      setDeletedIds(prev => [...prev, id]);
    }
  };

  return (
    <ProductsContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const ctx = useContext(ProductsContext);
  if (!ctx) throw new Error('useProducts must be used within ProductsProvider');
  return ctx;
}