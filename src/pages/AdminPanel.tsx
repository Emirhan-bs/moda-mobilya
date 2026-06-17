import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useProducts } from '../context/ProductsContext';
import { useSales } from '../context/SalesContext';
import { Item, MultiLang } from '../types';
import { Navigate, Link } from 'react-router-dom';
import {
  Plus, Edit2, Trash2, X, Check, Sparkles, ImagePlus,
  ChevronDown, ChevronUp, AlertTriangle, Shield, TrendingUp, Package
} from 'lucide-react';

const LANGUAGES: { code: keyof MultiLang; label: string; flag: string }[] = [
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { code: 'en', label: 'İngilizce', flag: '🇬🇧' },
  { code: 'ar-sy', label: 'Arapça', flag: '🇸🇾' },
  { code: 'ru', label: 'Rusça', flag: '🇷🇺' },
  { code: 'de', label: 'Almanca', flag: '🇩🇪' },
];

const CATEGORIES = ['Mobilya', 'Beyaz Eşya', 'Elektronik', 'Ofis Mobilyası', 'Yatak Odası Mobilyası', 'Oturma Grubu', 'Diğer'];

const emptyMultiLang = (): MultiLang => ({ tr: '', en: '', 'ar-sy': '', ru: '', de: '' });

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's')
    .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const BACKEND_URL = import.meta.env.PROD ? 'https://moda-backend-cgut.onrender.com' : '';

async function autoTranslate(trText: string, field: 'title' | 'description'): Promise<MultiLang> {
  const prompt = field === 'title'
    ? `Translate this Turkish furniture/product title into English, Syrian Arabic, Russian, and German. 
       Return ONLY a JSON object with keys: en, ar-sy, ru, de. No explanation, no markdown.
       Turkish: "${trText}"`
    : `Translate this Turkish furniture/product description into English, Syrian Arabic, Russian, and German. 
       Keep it natural and professional for an e-commerce site.
       Return ONLY a JSON object with keys: en, ar-sy, ru, de. No explanation, no markdown.
       Turkish: "${trText}"`;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  const data = await response.json();
  const text = data.content?.map((c: { type: string; text?: string }) => c.text || '').join('') || '';
  const clean = text.replace(/```json|```/g, '').trim();
  const parsed = JSON.parse(clean);
  return { tr: trText, ...parsed };
}

interface ProductFormData {
  titleTr: string;
  title: MultiLang;
  descTr: string;
  description: MultiLang;
  price: string;
  category: string;
  brand: string;
  condition: string;
  imageUrl: string;
  images: string[];
  costPrice: string;
  salePrice: string;
  stock: string;
  inStock: boolean;
}

const emptyForm = (): ProductFormData => ({
  titleTr: '',
  title: emptyMultiLang(),
  descTr: '',
  description: emptyMultiLang(),
  price: '',
  category: 'Mobilya',
  brand: '',
  condition: 'Yeni',
  imageUrl: '',
  images: [],
  costPrice: '',
  salePrice: '',
  stock: '',
  inStock: true,
});

export default function AdminPanel() {
  const { isAdmin } = useAuth();
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const { addSale, addStockRecord } = useSales();

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<ProductFormData>(emptyForm());
  const [translating, setTranslating] = useState<'title' | 'description' | null>(null);
  const [translationError, setTranslationError] = useState('');
  const [saving, setSaving] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [uploadError, setUploadError] = useState('');

  // Satış modal
  const [saleModal, setSaleModal] = useState<{ productId: number; title: string; salePrice: number; costPrice: number } | null>(null);
  const [saleQty, setSaleQty] = useState('1');
  const [salePriceOverride, setSalePriceOverride] = useState('');

  // Stok girişi modal
  const [stockModal, setStockModal] = useState<{ productId: number; title: string; costPrice: number } | null>(null);
  const [stockQty, setStockQty] = useState('1');
  const [stockNote, setStockNote] = useState('');

  if (!isAdmin) return <Navigate to="/" replace />;

  const openAdd = () => {
    setEditingId(null);
    setForm(emptyForm());
    setTranslationError('');
    setShowForm(true);
  };

  const openEdit = (product: Item) => {
    setEditingId(product.id);
    setForm({
      titleTr: product.title.tr,
      title: { ...product.title },
      descTr: product.description.tr,
      description: { ...product.description },
      price: product.price,
      category: product.category,
      brand: product.brand || '',
      condition: product.condition,
      imageUrl: '',
      images: [...product.images],
      costPrice: product.costPrice != null ? String(product.costPrice) : '',
      salePrice: product.salePrice != null ? String(product.salePrice) : '',
      stock: product.stock?.toString() || '',
      inStock: product.inStock ?? true,
    });
    setTranslationError('');
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingId(null);
    setForm(emptyForm());
    setTranslationError('');
  };

  const handleTranslate = async (field: 'title' | 'description') => {
    const text = field === 'title' ? form.titleTr : form.descTr;
    if (!text.trim()) return;
    setTranslating(field);
    setTranslationError('');
    try {
      const translated = await autoTranslate(text, field);
      if (field === 'title') {
        setForm(f => ({ ...f, title: translated }));
      } else {
        setForm(f => ({ ...f, description: translated }));
      }
    } catch {
      setTranslationError('Çeviri sırasında hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setTranslating(null);
    }
  };

  const addImageUrl = () => {
    if (!form.imageUrl.trim()) return;
    setForm(f => ({ ...f, images: [...f.images, f.imageUrl.trim()], imageUrl: '' }));
  };

  const uploadImage = async (file: File) => {
    setUploadLoading(true);
    setUploadError('');
    const formData = new FormData();
    formData.append('image', file);
    try {
      const res = await fetch(`${BACKEND_URL}/api/upload`, { method: 'POST', body: formData });
      const data = await res.json();
      if (data.url) {
        setForm(f => ({ ...f, images: [...f.images, data.url] }));
      } else {
        setUploadError('Resim yüklenemedi, tekrar deneyin.');
      }
    } catch {
      setUploadError('Sunucuya bağlanılamadı. 30 saniye bekleyip tekrar deneyin.');
    } finally {
      setUploadLoading(false);
    }
  };

  const removeImage = (index: number) => {
    setForm(f => ({ ...f, images: f.images.filter((_, i) => i !== index) }));
  };

  const handleSaleSubmit = () => {
    if (!saleModal || !saleQty || Number(saleQty) <= 0) return;
    const qty = Number(saleQty);
    const actualSalePrice = Number(salePriceOverride || saleModal.salePrice);

    addSale({
      productId: saleModal.productId,
      productTitle: saleModal.title,
      quantity: qty,
      salePrice: actualSalePrice,
      costPrice: saleModal.costPrice,
      totalRevenue: actualSalePrice * qty,
      totalCost: saleModal.costPrice * qty,
      totalProfit: (actualSalePrice - saleModal.costPrice) * qty,
    });

    const product = products.find(p => p.id === saleModal.productId);
    if (product && product.stock !== undefined) {
      const newStock = Math.max(0, product.stock - qty);
      updateProduct({ ...product, stock: newStock, inStock: newStock > 0 });
    }

    setSaleModal(null);
    setSaleQty('1');
    setSalePriceOverride('');
  };

  const handleStockSubmit = () => {
    if (!stockModal || !stockQty || Number(stockQty) <= 0) return;
    const qty = Number(stockQty);

    addStockRecord({
      productId: stockModal.productId,
      productTitle: stockModal.title,
      quantity: qty,
      costPrice: stockModal.costPrice,
      totalCost: stockModal.costPrice * qty,
      note: stockNote || undefined,
    });

    const product = products.find(p => p.id === stockModal.productId);
    if (product) {
      const newStock = (product.stock || 0) + qty;
      updateProduct({ ...product, stock: newStock, inStock: newStock > 0 });
    }

    setStockModal(null);
    setStockQty('1');
    setStockNote('');
  };

  const handleSave = async () => {
    if (!form.titleTr.trim() || !form.descTr.trim()) return;
    setSaving(true);

    let title = form.title;
    let description = form.description;

    if (!title.en) {
      try { title = await autoTranslate(form.titleTr, 'title'); } catch { title = { ...emptyMultiLang(), tr: form.titleTr }; }
    }
    if (!description.en) {
      try { description = await autoTranslate(form.descTr, 'description'); } catch { description = { ...emptyMultiLang(), tr: form.descTr }; }
    }

    const product: Item = {
      id: editingId ?? Date.now(),
      slug: slugify(form.titleTr) + '-' + (editingId ?? Date.now()),
      title,
      description,
      price: form.salePrice
        ? '₺' + Number(form.salePrice).toLocaleString('tr-TR')
        : form.costPrice
          ? '₺' + Number(form.costPrice).toLocaleString('tr-TR')
          : '₺0',
      category: form.category,
      brand: form.brand,
      condition: form.condition,
      images: form.images.length > 0 ? form.images : ['/assets/placeholder.jpg'],
      costPrice: form.costPrice ? Number(form.costPrice) : undefined,
      salePrice: form.salePrice ? Number(form.salePrice) : undefined,
      stock: form.stock ? Number(form.stock) : undefined,
      inStock: form.stock ? Number(form.stock) > 0 : form.inStock,
    };

    if (editingId !== null) {
      updateProduct(product);
    } else {
      addProduct(product);
    }

    setSaving(false);
    closeForm();
  };

  const actualSalePrice = Number(salePriceOverride || saleModal?.salePrice || 0);
  const unitProfit = saleModal ? actualSalePrice - saleModal.costPrice : 0;
  const totalProfit = unitProfit * Number(saleQty || 0);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-gray-900 text-white px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-purple-400" />
            <div>
              <h1 className="text-xl font-bold">Admin Paneli</h1>
              <p className="text-gray-400 text-sm">Isparta Moda Mobilya</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/stock-report" className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-xl font-semibold transition-colors">
              <TrendingUp className="w-4 h-4" />
              Stok Raporu
            </Link>
            <button onClick={openAdd} className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-xl font-semibold transition-colors">
              <Plus className="w-4 h-4" />
              Yeni Ürün Ekle
            </button>
          </div>
        </div>
      </div>

      {/* Ürün Listesi */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <p className="text-gray-500 text-sm mb-4">{products.length} ürün</p>
        <div className="space-y-3">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex items-center gap-4 p-4">
                <img
                  src={product.images[0]}
                  alt={product.title.tr}
                  className="w-16 h-16 object-cover rounded-xl bg-gray-100 flex-shrink-0"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"%3E%3Crect fill="%23e5e7eb" width="64" height="64" rx="8"/%3E%3Ctext x="32" y="36" text-anchor="middle" font-size="20" fill="%239ca3af"%3E🛋️%3C/text%3E%3C/svg%3E'; }}
                />
                <div className="flex-1 min-w-0">
                  <Link to={`/items/${product.slug}`} className="font-semibold text-gray-900 truncate hover:text-purple-600 transition-colors block">
                    {product.title.tr}
                  </Link>
                  <div className="flex items-center gap-3 mt-1 flex-wrap">
                    <span className="text-purple-700 font-bold text-sm">{product.price}</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">{product.category}</span>
                    <span className="bg-green-50 text-green-700 text-xs px-2 py-0.5 rounded-full">{product.condition}</span>
                    <span className="text-gray-400 text-xs">{product.images.length} fotoğraf</span>
                    {product.stock !== undefined && (
                      <span className="bg-blue-50 text-blue-600 text-xs px-2 py-0.5 rounded-full">{product.stock} stok</span>
                    )}
                    {product.inStock === false && (
                      <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full">Stok Yok</span>
                    )}
                    {product.costPrice && product.salePrice && (
                      <span className="bg-amber-50 text-amber-700 text-xs px-2 py-0.5 rounded-full">
                        Kâr: ₺{(product.salePrice - product.costPrice).toLocaleString('tr-TR')}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setExpandedProduct(expandedProduct === product.id ? null : product.id)} className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                    {expandedProduct === product.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {/* Stok Girişi */}
                  <button
                    onClick={() => {
                      if (product.costPrice) {
                        setStockModal({ productId: product.id, title: product.title.tr, costPrice: product.costPrice });
                        setStockQty('1');
                        setStockNote('');
                      } else {
                        alert('Önce maliyet fiyatı girin.');
                      }
                    }}
                    className="p-2 text-blue-400 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                    title="Stok Girişi"
                  >
                    <Package className="w-4 h-4" />
                  </button>
                  {/* Satış Ekle */}
                  <button
                    onClick={() => {
                      if (product.salePrice && product.costPrice) {
                        setSaleModal({ productId: product.id, title: product.title.tr, salePrice: product.salePrice, costPrice: product.costPrice });
                        setSalePriceOverride(String(product.salePrice));
                        setSaleQty('1');
                      } else {
                        alert('Bu ürüne önce maliyet ve satış fiyatı girin.');
                      }
                    }}
                    className="p-2 text-green-400 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors"
                    title="Satış Ekle"
                  >
                    <TrendingUp className="w-4 h-4" />
                  </button>
                  <button onClick={() => openEdit(product)} className="p-2 text-blue-400 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button onClick={() => setDeleteConfirm(product.id)} className="p-2 text-red-400 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              {expandedProduct === product.id && (
                <div className="px-4 pb-4 border-t border-gray-50 pt-3">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Çeviriler</p>
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                    {LANGUAGES.map(lang => (
                      <div key={lang.code} className="bg-gray-50 rounded-lg p-2">
                        <div className="text-xs font-medium text-gray-500 mb-1">{lang.flag} {lang.label}</div>
                        <div className="text-xs text-gray-700">{product.title[lang.code]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Stok Girişi Modal */}
      {stockModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6">
            <h3 className="font-bold text-gray-900 mb-1">Stok Girişi</h3>
            <p className="text-sm text-gray-500 mb-4">{stockModal.title}</p>
            <div className="bg-blue-50 rounded-xl p-3 mb-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Birim Maliyet:</span>
                <span className="font-semibold">₺{stockModal.costPrice.toLocaleString('tr-TR')}</span>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Gelen Adet</label>
              <input type="number" min="1" value={stockQty} onChange={e => setStockQty(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none text-lg font-bold text-center" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Not (isteğe bağlı)</label>
              <input type="text" value={stockNote} onChange={e => setStockNote(e.target.value)}
                placeholder="örn. Tedarikçiden geldi"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none" />
            </div>
            {Number(stockQty) > 0 && (
              <div className="bg-blue-50 rounded-xl p-3 mb-4 text-center">
                <p className="text-xs text-gray-500 mb-1">Toplam Maliyet</p>
                <p className="text-2xl font-bold text-blue-600">
                  ₺{(stockModal.costPrice * Number(stockQty)).toLocaleString('tr-TR')}
                </p>
                <p className="text-xs text-gray-400 mt-1">{Number(stockQty)} adet × ₺{stockModal.costPrice.toLocaleString('tr-TR')}</p>
              </div>
            )}
            <div className="flex gap-3">
              <button onClick={() => { setStockModal(null); setStockQty('1'); setStockNote(''); }}
                className="flex-1 py-2.5 border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                İptal
              </button>
              <button onClick={handleStockSubmit} disabled={!stockQty || Number(stockQty) <= 0}
                className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-200 disabled:text-gray-400 text-white rounded-xl font-medium transition-colors">
                Kaydet
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Satış Modal */}
      {saleModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6">
            <h3 className="font-bold text-gray-900 mb-1">Satış Ekle</h3>
            <p className="text-sm text-gray-500 mb-4">{saleModal.title}</p>
            <div className="bg-amber-50 rounded-xl p-3 mb-4 text-sm space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Satış Fiyatı (₺):</span>
                <input type="number" value={salePriceOverride} onChange={e => setSalePriceOverride(e.target.value)}
                  className="w-32 px-3 py-1.5 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-400 outline-none text-right font-semibold text-sm" />
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Maliyet:</span>
                <span className="font-semibold">₺{saleModal.costPrice.toLocaleString('tr-TR')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Birim Kâr:</span>
                <span className={`font-bold ${unitProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  ₺{unitProfit.toLocaleString('tr-TR')}
                </span>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Satılan Adet</label>
              <input type="number" min="1" value={saleQty} onChange={e => setSaleQty(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-400 outline-none text-lg font-bold text-center" />
            </div>
            {Number(saleQty) > 0 && (
              <div className="bg-green-50 rounded-xl p-3 mb-4 text-center">
                <p className="text-xs text-gray-500 mb-1">Toplam Kâr</p>
                <p className={`text-2xl font-bold ${totalProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  ₺{totalProfit.toLocaleString('tr-TR')}
                </p>
                <p className="text-xs text-gray-400 mt-1">{Number(saleQty)} adet × ₺{unitProfit.toLocaleString('tr-TR')}</p>
              </div>
            )}
            <div className="flex gap-3">
              <button onClick={() => { setSaleModal(null); setSaleQty('1'); setSalePriceOverride(''); }}
                className="flex-1 py-2.5 border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                İptal
              </button>
              <button onClick={handleSaleSubmit} disabled={!saleQty || Number(saleQty) <= 0}
                className="flex-1 py-2.5 bg-green-600 hover:bg-green-700 disabled:bg-gray-200 disabled:text-gray-400 text-white rounded-xl font-medium transition-colors">
                Satışı Kaydet
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Silme Onayı */}
      {deleteConfirm !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Ürünü Sil</h3>
                <p className="text-gray-500 text-sm">Bu işlem geri alınamaz.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setDeleteConfirm(null)} className="flex-1 py-2.5 border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors">İptal</button>
              <button onClick={() => { deleteProduct(deleteConfirm); setDeleteConfirm(null); }} className="flex-1 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium transition-colors">Sil</button>
            </div>
          </div>
        </div>
      )}

      {/* Ürün Ekleme/Düzenleme Formu */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 z-[200] flex items-start justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl my-8 mx-auto">
            <div className="bg-gray-900 text-white px-6 py-4 rounded-t-2xl flex justify-between items-center">
              <h2 className="font-bold text-lg">{editingId ? 'Ürünü Düzenle' : 'Yeni Ürün Ekle'}</h2>
              <button onClick={closeForm} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Ürün Başlığı (Türkçe) *</label>
                <div className="flex gap-2">
                  <input type="text" value={form.titleTr}
                    onChange={e => setForm(f => ({ ...f, titleTr: e.target.value, title: { ...f.title, tr: e.target.value } }))}
                    placeholder="örn. Çek Yat Koltuk"
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 outline-none" />
                  <button onClick={() => handleTranslate('title')} disabled={!form.titleTr.trim() || translating === 'title'}
                    className="flex items-center gap-2 px-4 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-200 disabled:text-gray-400 text-white rounded-xl font-medium transition-colors whitespace-nowrap">
                    {translating === 'title' ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <Sparkles className="w-4 h-4" />}
                    Çevir
                  </button>
                </div>
                {form.title.en && (
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {LANGUAGES.filter(l => l.code !== 'tr').map(lang => (
                      <div key={lang.code} className="bg-purple-50 rounded-lg p-2">
                        <div className="text-xs text-purple-500 font-medium mb-1">{lang.flag} {lang.label}</div>
                        <input type="text" value={form.title[lang.code]}
                          onChange={e => setForm(f => ({ ...f, title: { ...f.title, [lang.code]: e.target.value } }))}
                          className="w-full text-sm bg-transparent outline-none text-gray-700" />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Ürün Açıklaması (Türkçe) *</label>
                <div className="flex gap-2 items-start">
                  <textarea value={form.descTr}
                    onChange={e => setForm(f => ({ ...f, descTr: e.target.value, description: { ...f.description, tr: e.target.value } }))}
                    rows={3} placeholder="Ürün hakkında detaylı açıklama yazın..."
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 outline-none resize-none" />
                  <button onClick={() => handleTranslate('description')} disabled={!form.descTr.trim() || translating === 'description'}
                    className="flex items-center gap-2 px-4 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-200 disabled:text-gray-400 text-white rounded-xl font-medium transition-colors whitespace-nowrap">
                    {translating === 'description' ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <Sparkles className="w-4 h-4" />}
                    Çevir
                  </button>
                </div>
                {form.description.en && (
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {LANGUAGES.filter(l => l.code !== 'tr').map(lang => (
                      <div key={lang.code} className="bg-purple-50 rounded-lg p-2">
                        <div className="text-xs text-purple-500 font-medium mb-1">{lang.flag} {lang.label}</div>
                        <textarea value={form.description[lang.code]}
                          onChange={e => setForm(f => ({ ...f, description: { ...f.description, [lang.code]: e.target.value } }))}
                          rows={2} className="w-full text-sm bg-transparent outline-none text-gray-700 resize-none" />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {translationError && (
                <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                  {translationError}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Kategori</label>
                  <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 outline-none bg-white">
                    {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Durum</label>
                  <select value={form.condition} onChange={e => setForm(f => ({ ...f, condition: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 outline-none bg-white">
                    {['Yeni', 'Sıfır', 'Çok İyi', 'İyi', '2. El'].map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Marka (isteğe bağlı)</label>
                <input type="text" value={form.brand} onChange={e => setForm(f => ({ ...f, brand: e.target.value }))}
                  placeholder="örn. Özel Üretim"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 outline-none" />
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-4">
                <h3 className="font-semibold text-amber-800">🔒 Admin Bilgileri (Müşteriler göremez)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Maliyet Fiyatı (₺)</label>
                    <input type="number" value={form.costPrice} onChange={e => setForm(f => ({ ...f, costPrice: e.target.value }))}
                      placeholder="0" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-400 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Satış Fiyatı (₺)</label>
                    <input type="number" value={form.salePrice} onChange={e => setForm(f => ({ ...f, salePrice: e.target.value }))}
                      placeholder="0" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-400 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Stok Adedi</label>
                    <input type="number" value={form.stock} onChange={e => setForm(f => ({ ...f, stock: e.target.value }))}
                      placeholder="0" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-400 outline-none" />
                  </div>
                </div>

                {form.costPrice && form.salePrice && (
                  <div className="bg-white rounded-xl p-4 border border-amber-200">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Maliyet</p>
                        <p className="font-bold text-gray-900">₺{Number(form.costPrice).toLocaleString('tr-TR')}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Satış</p>
                        <p className="font-bold text-gray-900">₺{Number(form.salePrice).toLocaleString('tr-TR')}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Kâr</p>
                        <p className={`font-bold text-lg ${Number(form.salePrice) - Number(form.costPrice) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          ₺{(Number(form.salePrice) - Number(form.costPrice)).toLocaleString('tr-TR')}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 text-center">
                      <span className="text-xs text-gray-500">Kâr Oranı: </span>
                      <span className={`text-xs font-bold ${Number(form.salePrice) - Number(form.costPrice) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        %{Number(form.costPrice) > 0 ? (((Number(form.salePrice) - Number(form.costPrice)) / Number(form.costPrice)) * 100).toFixed(1) : '0'}
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-gray-700">Stok Durumu:</span>
                  <button onClick={() => setForm(f => ({ ...f, inStock: !f.inStock }))}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-colors ${form.inStock ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-red-100 text-red-700 hover:bg-red-200'}`}>
                    {form.inStock ? '🟢 Stokta Var' : '🔴 Stokta Yok'}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Ürün Görselleri</label>
                <div className="flex gap-2">
                  <input type="text" value={form.imageUrl} onChange={e => setForm(f => ({ ...f, imageUrl: e.target.value }))}
                    placeholder="Link üzerinde yükleme"
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gray-900 outline-none text-sm" />
                  <button onClick={addImageUrl} disabled={!form.imageUrl.trim()}
                    className="flex items-center gap-2 px-4 py-3 bg-gray-900 hover:bg-gray-700 disabled:bg-gray-200 disabled:text-gray-400 text-white rounded-xl transition-colors">
                    <ImagePlus className="w-4 h-4" />
                  </button>
                </div>
                <div className="mt-2 flex items-center gap-3 flex-wrap">
                  <label className={`flex items-center gap-2 px-4 py-3 rounded-xl cursor-pointer transition-colors w-fit text-white ${uploadLoading ? 'bg-purple-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'}`}>
                    {uploadLoading ? (
                      <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /><span className="text-sm font-medium">Yükleniyor...</span></>
                    ) : (
                      <><ImagePlus className="w-4 h-4" /><span className="text-sm font-medium">Bilgisayardan Yükle</span></>
                    )}
                    <input type="file" accept="image/*" className="hidden" disabled={uploadLoading}
                      onChange={e => { const file = e.target.files?.[0]; if (file) uploadImage(file); }} />
                  </label>
                  {uploadLoading && <span className="text-sm text-gray-500 animate-pulse">Cloudinary'ye yükleniyor...</span>}
                </div>
                {uploadError && (
                  <div className="mt-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 flex-shrink-0" />{uploadError}</div>
                    <button onClick={() => setUploadError('')} className="text-red-400 hover:text-red-600"><X className="w-4 h-4" /></button>
                  </div>
                )}
                {form.images.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {form.images.map((img, i) => (
                      <div key={i} className="relative group">
                        <img src={img} alt="" className="w-16 h-16 object-cover rounded-lg bg-gray-100"
                          onError={(e) => { (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"%3E%3Crect fill="%23e5e7eb" width="64" height="64" rx="8"/%3E%3Ctext x="32" y="36" text-anchor="middle" font-size="20" fill="%239ca3af"%3E🖼️%3C/text%3E%3C/svg%3E'; }} />
                        <button onClick={() => removeImage(i)} className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">×</button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="px-6 pb-6 flex gap-3">
              <button onClick={closeForm} className="flex-1 py-3 border border-gray-200 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 transition-colors">İptal</button>
              <button onClick={handleSave} disabled={!form.titleTr.trim() || !form.descTr.trim() || saving}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-900 hover:bg-gray-700 disabled:bg-gray-200 disabled:text-gray-400 text-white rounded-xl font-semibold transition-colors">
                {saving ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <><Check className="w-4 h-4" />{editingId ? 'Güncelle' : 'Kaydet'}</>}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}