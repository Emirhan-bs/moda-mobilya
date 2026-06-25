import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Item, MultiLang } from '../types';
import { supabase } from '../lib/supabase';

interface ProductsContextType {
  products: Item[];
  loading: boolean;
  addProduct: (product: Item) => Promise<void>;
  updateProduct: (product: Item) => Promise<void>;
  deleteProduct: (id: number) => Promise<void>;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

function mapRow(row: Record<string, unknown>): Item {
  return {
    id: row.id as number,
    slug: row.slug as string,
    title: row.title as MultiLang,
    description: row.description as MultiLang,
    price: row.price as string,
    category: row.category as string,
    brand: (row.brand as string) || '',
    condition: row.condition as string,
    images: row.images as string[],
    costPrice: row.cost_price as number | undefined,
    salePrice: row.sale_price as number | undefined,
    stock: row.stock as number | undefined,
    inStock: row.in_stock as boolean,
  };
}

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('id', { ascending: true });
    if (!error && data) {
      setProducts(data.map(mapRow));
    }
    setLoading(false);
  };

  const addProduct = async (product: Item) => {
    const { data, error } = await supabase.from('products').insert({
      slug: product.slug,
      title: product.title,
      description: product.description,
      price: product.price,
      category: product.category,
      brand: product.brand,
      condition: product.condition,
      images: product.images,
      cost_price: product.costPrice ?? null,
      sale_price: product.salePrice ?? null,
      stock: product.stock ?? null,
      in_stock: product.inStock ?? true,
    }).select().single();
    if (!error && data) {
      setProducts(prev => [...prev, mapRow(data)]);
    }
  };

  const updateProduct = async (product: Item) => {
    const { error } = await supabase.from('products').update({
      slug: product.slug,
      title: product.title,
      description: product.description,
      price: product.price,
      category: product.category,
      brand: product.brand,
      condition: product.condition,
      images: product.images,
      cost_price: product.costPrice ?? null,
      sale_price: product.salePrice ?? null,
      stock: product.stock ?? null,
      in_stock: product.inStock ?? true,
    }).eq('id', product.id);
    if (!error) {
      setProducts(prev => prev.map(p => p.id === product.id ? product : p));
    }
  };

  const deleteProduct = async (id: number) => {
    const { error } = await supabase.from('products').delete().eq('id', id);
    if (!error) {
      setProducts(prev => prev.filter(p => p.id !== id));
    }
  };

  return (
    <ProductsContext.Provider value={{ products, loading, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const ctx = useContext(ProductsContext);
  if (!ctx) throw new Error('useProducts must be used within ProductsProvider');
  return ctx;
}