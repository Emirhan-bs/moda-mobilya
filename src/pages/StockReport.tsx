import { useProducts } from '../context/ProductsContext';
import { useAuth } from '../context/AuthContext';
import { useSales } from '../context/SalesContext';
import { Navigate, Link } from 'react-router-dom';
import { Shield, TrendingUp, TrendingDown, Package, DollarSign, ArrowLeft, Trash2 } from 'lucide-react';

export default function StockReport() {
  const { isAdmin } = useAuth();
  const { products } = useProducts();
  const { sales, deleteSale, stockRecords, deleteStockRecord } = useSales();

  if (!isAdmin) return <Navigate to="/" replace />;

  const productsWithData = products.filter(p => p.costPrice || p.salePrice || p.stock);

  const totalCost = productsWithData.reduce((sum, p) => sum + (p.costPrice || 0) * (p.stock || 0), 0);
  const totalSaleValue = productsWithData.reduce((sum, p) => sum + (p.salePrice || 0) * (p.stock || 0), 0);
  const totalItems = productsWithData.reduce((sum, p) => sum + (p.stock || 0), 0);

  const totalSalesRevenue = sales.reduce((sum, s) => sum + s.totalRevenue, 0);
  const totalSalesProfit = sales.reduce((sum, s) => sum + s.totalProfit, 0);
  const totalSalesQty = sales.reduce((sum, s) => sum + s.quantity, 0);

  const totalStockInQty = stockRecords.reduce((sum, r) => sum + r.quantity, 0);
  const totalStockInCost = stockRecords.reduce((sum, r) => sum + r.totalCost, 0);

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="bg-gray-900 text-white px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link to="/admin" className="p-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <Shield className="w-6 h-6 text-purple-400" />
          <div>
            <h1 className="text-xl font-bold">Stok & Kâr Raporu</h1>
            <p className="text-gray-400 text-sm">Isparta Moda Mobilya</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">

        {/* Stok Özet Kartlar */}
        <div>
          <h2 className="font-bold text-gray-900 mb-4">📦 Mevcut Stok Durumu</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <Package className="w-4 h-4 text-gray-500" />
                <span className="text-xs text-gray-500">Toplam Stok</span>
              </div>
              <p className="text-2xl font-bold text-gray-900">{totalItems} adet</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-red-500" />
                <span className="text-xs text-gray-500">Stok Maliyeti</span>
              </div>
              <p className="text-2xl font-bold text-red-600">₺{totalCost.toLocaleString('tr-TR')}</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-blue-500" />
                <span className="text-xs text-gray-500">Stok Satış Değeri</span>
              </div>
              <p className="text-2xl font-bold text-blue-600">₺{totalSaleValue.toLocaleString('tr-TR')}</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-xs text-gray-500">Potansiyel Kâr</span>
              </div>
              <p className="text-2xl font-bold text-green-600">₺{(totalSaleValue - totalCost).toLocaleString('tr-TR')}</p>
            </div>
          </div>
        </div>

        {/* Satış Özet Kartlar */}
        <div>
          <h2 className="font-bold text-gray-900 mb-4">💰 Gerçekleşen Satışlar</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-green-50 rounded-2xl p-4 shadow-sm border border-green-100">
              <div className="flex items-center gap-2 mb-2">
                <Package className="w-4 h-4 text-green-600" />
                <span className="text-xs text-gray-500">Toplam Satılan</span>
              </div>
              <p className="text-2xl font-bold text-green-700">{totalSalesQty} adet</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-4 shadow-sm border border-green-100">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-green-600" />
                <span className="text-xs text-gray-500">Toplam Ciro</span>
              </div>
              <p className="text-2xl font-bold text-green-700">₺{totalSalesRevenue.toLocaleString('tr-TR')}</p>
            </div>
            <div className={`rounded-2xl p-4 shadow-sm border ${totalSalesProfit >= 0 ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
              <div className="flex items-center gap-2 mb-2">
                {totalSalesProfit >= 0 ? <TrendingUp className="w-4 h-4 text-green-600" /> : <TrendingDown className="w-4 h-4 text-red-600" />}
                <span className="text-xs text-gray-500">Toplam Kazanç</span>
              </div>
              <p className={`text-2xl font-bold ${totalSalesProfit >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                ₺{totalSalesProfit.toLocaleString('tr-TR')}
              </p>
            </div>
          </div>
        </div>

        {/* Ürün Stok Tablosu */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="font-bold text-gray-900">Ürün Stok Detayları</h2>
          </div>
          {productsWithData.length === 0 ? (
            <div className="px-6 py-12 text-center text-gray-400">
              <Package className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>Henüz fiyat veya stok bilgisi girilmiş ürün yok.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Ürün</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Stok</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Maliyet</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Satış</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Birim Kâr</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Toplam Maliyet</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Toplam Kâr</th>
                    <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Durum</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {productsWithData.map(product => {
                    const cost = product.costPrice || 0;
                    const sale = product.salePrice || 0;
                    const stock = product.stock || 0;
                    const unitProfit = sale - cost;
                    const totalProductCost = cost * stock;
                    const totalProductProfit = unitProfit * stock;
                    const profitRate = cost > 0 ? ((unitProfit / cost) * 100).toFixed(1) : '—';
                    const soldQty = sales.filter(s => s.productId === product.id).reduce((sum, s) => sum + s.quantity, 0);

                    return (
                      <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <img src={product.images[0]} alt={product.title.tr} className="w-10 h-10 object-cover rounded-lg bg-gray-100 flex-shrink-0"
                              onError={(e) => { (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"%3E%3Crect fill="%23e5e7eb" width="40" height="40" rx="6"/%3E%3C/svg%3E'; }} />
                            <div>
                              <p className="font-medium text-gray-900 text-sm">{product.title.tr}</p>
                              <p className="text-xs text-gray-400">{product.category} {soldQty > 0 && <span className="text-green-600 font-medium">· {soldQty} satıldı</span>}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-right">
                          <span className={`text-sm font-semibold ${stock === 0 ? 'text-red-500' : 'text-gray-900'}`}>{stock} adet</span>
                        </td>
                        <td className="px-4 py-4 text-right text-sm text-gray-600">{cost > 0 ? `₺${cost.toLocaleString('tr-TR')}` : '—'}</td>
                        <td className="px-4 py-4 text-right text-sm text-gray-600">{sale > 0 ? `₺${sale.toLocaleString('tr-TR')}` : '—'}</td>
                        <td className="px-4 py-4 text-right">
                          {cost > 0 && sale > 0 ? (
                            <div>
                              <p className={`text-sm font-semibold ${unitProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>₺{unitProfit.toLocaleString('tr-TR')}</p>
                              <p className={`text-xs ${unitProfit >= 0 ? 'text-green-500' : 'text-red-500'}`}>%{profitRate}</p>
                            </div>
                          ) : '—'}
                        </td>
                        <td className="px-4 py-4 text-right text-sm text-red-600 font-medium">{totalProductCost > 0 ? `₺${totalProductCost.toLocaleString('tr-TR')}` : '—'}</td>
                        <td className="px-4 py-4 text-right">
                          {cost > 0 && sale > 0 && stock > 0 ? (
                            <span className={`text-sm font-bold ${totalProductProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>₺{totalProductProfit.toLocaleString('tr-TR')}</span>
                          ) : '—'}
                        </td>
                        <td className="px-4 py-4 text-center">
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${product.inStock === false || stock === 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                            {product.inStock === false || stock === 0 ? 'Stok Yok' : 'Stokta'}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot className="bg-gray-900 text-white">
                  <tr>
                    <td className="px-6 py-4 font-bold">TOPLAM</td>
                    <td className="px-4 py-4 text-right font-bold">{totalItems} adet</td>
                    <td className="px-4 py-4"></td>
                    <td className="px-4 py-4"></td>
                    <td className="px-4 py-4"></td>
                    <td className="px-4 py-4 text-right font-bold text-red-300">₺{totalCost.toLocaleString('tr-TR')}</td>
                    <td className="px-4 py-4 text-right font-bold text-green-300">₺{(totalSaleValue - totalCost).toLocaleString('tr-TR')}</td>
                    <td className="px-4 py-4"></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          )}
        </div>

        {/* Satış Geçmişi */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="font-bold text-gray-900">Satış Geçmişi</h2>
            <p className="text-sm text-gray-500">{sales.length} satış kaydı</p>
          </div>
          {sales.length === 0 ? (
            <div className="px-6 py-12 text-center text-gray-400">
              <TrendingUp className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>Henüz satış kaydı yok.</p>
              <p className="text-sm mt-1">Admin panelinden ürün kartındaki yeşil butona tıklayarak satış ekleyin.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Ürün</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Adet</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Satış Fiyatı</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Maliyet</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Toplam Ciro</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Kazanç</th>
                    <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Tarih</th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {sales.map(sale => (
                    <tr key={sale.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900 text-sm">{sale.productTitle}</td>
                      <td className="px-4 py-4 text-right text-sm font-semibold text-gray-700">{sale.quantity} adet</td>
                      <td className="px-4 py-4 text-right text-sm text-gray-600">₺{sale.salePrice.toLocaleString('tr-TR')}</td>
                      <td className="px-4 py-4 text-right text-sm text-gray-600">₺{sale.costPrice.toLocaleString('tr-TR')}</td>
                      <td className="px-4 py-4 text-right text-sm font-semibold text-blue-600">₺{sale.totalRevenue.toLocaleString('tr-TR')}</td>
                      <td className="px-4 py-4 text-right">
                        <span className={`text-sm font-bold ${sale.totalProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          ₺{sale.totalProfit.toLocaleString('tr-TR')}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center text-xs text-gray-400">{sale.date}</td>
                      <td className="px-4 py-4 text-center">
                        <button onClick={() => deleteSale(sale.id)} className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-gray-900 text-white">
                  <tr>
                    <td className="px-6 py-4 font-bold">TOPLAM</td>
                    <td className="px-4 py-4 text-right font-bold">{totalSalesQty} adet</td>
                    <td className="px-4 py-4"></td>
                    <td className="px-4 py-4"></td>
                    <td className="px-4 py-4 text-right font-bold text-blue-300">₺{totalSalesRevenue.toLocaleString('tr-TR')}</td>
                    <td className="px-4 py-4 text-right font-bold text-green-300">₺{totalSalesProfit.toLocaleString('tr-TR')}</td>
                    <td className="px-4 py-4"></td>
                    <td className="px-4 py-4"></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          )}
        </div>

        {/* Stok Giriş Geçmişi */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="font-bold text-gray-900">📥 Stok Giriş Geçmişi</h2>
            <p className="text-sm text-gray-500">{stockRecords.length} kayıt</p>
          </div>
          {stockRecords.length === 0 ? (
            <div className="px-6 py-12 text-center text-gray-400">
              <Package className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>Henüz stok girişi yok.</p>
              <p className="text-sm mt-1">Admin panelinden ürün kartındaki mavi 📦 butona tıklayarak stok girişi ekleyin.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Ürün</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Gelen Adet</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Birim Maliyet</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Toplam Maliyet</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Not</th>
                    <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Tarih</th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {stockRecords.map(record => (
                    <tr key={record.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900 text-sm">{record.productTitle}</td>
                      <td className="px-4 py-4 text-right text-sm font-semibold text-blue-600">{record.quantity} adet</td>
                      <td className="px-4 py-4 text-right text-sm text-gray-600">₺{record.costPrice.toLocaleString('tr-TR')}</td>
                      <td className="px-4 py-4 text-right text-sm font-semibold text-red-600">₺{record.totalCost.toLocaleString('tr-TR')}</td>
                      <td className="px-4 py-4 text-sm text-gray-400">{record.note || '—'}</td>
                      <td className="px-4 py-4 text-center text-xs text-gray-400">{record.date}</td>
                      <td className="px-4 py-4 text-center">
                        <button onClick={() => deleteStockRecord(record.id)} className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-gray-900 text-white">
                  <tr>
                    <td className="px-6 py-4 font-bold">TOPLAM</td>
                    <td className="px-4 py-4 text-right font-bold text-blue-300">{totalStockInQty} adet</td>
                    <td className="px-4 py-4"></td>
                    <td className="px-4 py-4 text-right font-bold text-red-300">₺{totalStockInCost.toLocaleString('tr-TR')}</td>
                    <td className="px-4 py-4"></td>
                    <td className="px-4 py-4"></td>
                    <td className="px-4 py-4"></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}