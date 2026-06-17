import { createContext, useContext, useState, ReactNode } from 'react';
import { SaleRecord, StockRecord } from '../types';

interface SalesContextType {
  sales: SaleRecord[];
  stockRecords: StockRecord[];
  addSale: (sale: Omit<SaleRecord, 'id' | 'date'>) => void;
  deleteSale: (id: number) => void;
  addStockRecord: (record: Omit<StockRecord, 'id' | 'date'>) => void;
  deleteStockRecord: (id: number) => void;
}

const SalesContext = createContext<SalesContextType | undefined>(undefined);

export function SalesProvider({ children }: { children: ReactNode }) {
  const [sales, setSales] = useState<SaleRecord[]>(() => {
    const saved = localStorage.getItem('moda_sales');
    return saved ? JSON.parse(saved) : [];
  });

  const [stockRecords, setStockRecords] = useState<StockRecord[]>(() => {
    const saved = localStorage.getItem('moda_stock_records');
    return saved ? JSON.parse(saved) : [];
  });

  const addSale = (sale: Omit<SaleRecord, 'id' | 'date'>) => {
    const newSale: SaleRecord = {
      ...sale,
      id: Date.now(),
      date: new Date().toLocaleDateString('tr-TR'),
    };
    const updated = [newSale, ...sales];
    setSales(updated);
    localStorage.setItem('moda_sales', JSON.stringify(updated));
  };

  const deleteSale = (id: number) => {
    const updated = sales.filter(s => s.id !== id);
    setSales(updated);
    localStorage.setItem('moda_sales', JSON.stringify(updated));
  };

  const addStockRecord = (record: Omit<StockRecord, 'id' | 'date'>) => {
    const newRecord: StockRecord = {
      ...record,
      id: Date.now(),
      date: new Date().toLocaleDateString('tr-TR'),
    };
    const updated = [newRecord, ...stockRecords];
    setStockRecords(updated);
    localStorage.setItem('moda_stock_records', JSON.stringify(updated));
  };

  const deleteStockRecord = (id: number) => {
    const updated = stockRecords.filter(r => r.id !== id);
    setStockRecords(updated);
    localStorage.setItem('moda_stock_records', JSON.stringify(updated));
  };

  return (
    <SalesContext.Provider value={{ sales, stockRecords, addSale, deleteSale, addStockRecord, deleteStockRecord }}>
      {children}
    </SalesContext.Provider>
  );
}

export function useSales() {
  const ctx = useContext(SalesContext);
  if (!ctx) throw new Error('useSales must be used within SalesProvider');
  return ctx;
}