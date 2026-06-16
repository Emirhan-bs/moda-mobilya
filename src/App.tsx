import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { ProductsProvider } from './context/ProductsContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Items from './pages/Items';
import ItemDetail from './pages/ItemDetail';
import Favorites from './pages/Favorites';
import AdminPanel from './pages/AdminPanel';
import PageLoader from './components/PageLoader';
import StockReport from './pages/StockReport';
import { SalesProvider } from './context/SalesContext';



function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <ProductsProvider>
          <SalesProvider>
            <FavoritesProvider>
              <Router>
                <div className="min-h-screen bg-white flex flex-col">
                  <PageLoader />
                  <Header />
                  <main className="flex-1">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/items" element={<Items />} />
                      <Route path="/items/:slug" element={<ItemDetail />} />
                      <Route path="/favorites" element={<Favorites />} />
                      <Route path="/admin" element={<AdminPanel />} />
                      <Route path="/stock-report" element={<StockReport />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
              </Router>
            </FavoritesProvider>
          </SalesProvider>
        </ProductsProvider>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;