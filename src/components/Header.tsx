import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import LanguageSelector from "./LanguageSelector";
import LoginModal from "./LoginModal";
import { useAuth } from "../context/AuthContext";
import { useFavorites } from "../context/FavoritesContext";
import { Menu, X, LogIn, LogOut, Heart, Shield } from "lucide-react";
import logo from "../assets/logo-two.png";

export default function Header() {
  const { language } = useLanguage();
  const t = translations[language];
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { user, isAdmin, logout } = useAuth();
  const { favorites } = useFavorites();

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            <div className="flex items-center gap-8">
              <NavLink to="/" className="flex items-center gap-2 text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
                <img src={logo} alt="Isparta Moda Mobilya Logo" className="h-16 w-auto" loading="lazy" />
              </NavLink>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `relative font-medium transition-colors duration-300
                   ${isActive ? "text-blue-600" : "text-gray-700 hover:text-gray-900"}
                   after:content-[''] after:absolute after:left-0 after:-bottom-1
                   after:h-[2px] after:bg-blue-600
                   after:transition-all after:duration-300
                   ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`
                }
              >
                {t.nav.about}
              </NavLink>
              <NavLink
                to="/items"
                className={({ isActive }) =>
                  `relative font-medium transition-colors duration-300
                   ${isActive ? "text-blue-600" : "text-gray-700 hover:text-gray-900"}
                   after:content-[''] after:absolute after:left-0 after:-bottom-1
                   after:h-[2px] after:bg-blue-600
                   after:transition-all after:duration-300
                   ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`
                }
              >
                {t.nav.items}
              </NavLink>
              {isAdmin && (
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    `relative font-medium transition-colors duration-300 flex items-center gap-1
                     ${isActive ? "text-purple-600" : "text-purple-500 hover:text-purple-700"}
                     after:content-[''] after:absolute after:left-0 after:-bottom-1
                     after:h-[2px] after:bg-purple-600
                     after:transition-all after:duration-300
                     ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`
                  }
                >
                  <Shield className="w-4 h-4" />
                  Admin
                </NavLink>
              )}
            </nav>

            <div className="flex items-center gap-2">
              <LanguageSelector />

              {user && (
                <NavLink
                  to="/favorites"
                  className="relative p-2 text-gray-500 hover:text-red-500 transition-colors rounded-lg hover:bg-gray-50"
                  title="Favorilerim"
                >
                  <Heart className="w-5 h-5" />
                  {favorites.length > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                      {favorites.length > 9 ? '9+' : favorites.length}
                    </span>
                  )}
                </NavLink>
              )}

              {user ? (
                <div className="hidden md:flex items-center gap-2">
                  <span className="text-xs text-gray-400 hidden lg:block max-w-[100px] truncate">{user.email}</span>
                  <button
                    onClick={logout}
                    title="Çıkış Yap"
                    className="p-2 text-gray-500 hover:text-red-500 transition-colors rounded-lg hover:bg-gray-50"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowLogin(true)}
                  className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-700 text-white rounded-xl text-sm font-medium transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  Giriş Yap
                </button>
              )}

              <button
                className="md:hidden text-gray-700 hover:text-gray-900"
                onClick={() => setMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>

        {menuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setMenuOpen(false)}
            />
            <div className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 bg-white shadow-xl z-50 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-semibold text-gray-800">Menü</h2>
                <button className="text-gray-700 hover:text-gray-900" onClick={() => setMenuOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col p-4 space-y-4">
                <NavLink
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => `text-lg font-medium transition-colors ${isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}
                >
                  {t.nav.about}
                </NavLink>
                <NavLink
                  to="/items"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => `text-lg font-medium transition-colors ${isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}
                >
                  {t.nav.items}
                </NavLink>
                {user && (
                  <NavLink
                    to="/favorites"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-red-500 transition-colors"
                  >
                    <Heart className="w-5 h-5" />
                    Favorilerim
                    {favorites.length > 0 && (
                      <span className="bg-red-100 text-red-600 text-sm px-2 rounded-full">{favorites.length}</span>
                    )}
                  </NavLink>
                )}
                {isAdmin && (
                  <NavLink
                    to="/admin"
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) => `flex items-center gap-2 text-lg font-medium transition-colors ${isActive ? "text-purple-600" : "text-purple-500 hover:text-purple-700"}`}
                  >
                    <Shield className="w-5 h-5" />
                    Admin Paneli
                  </NavLink>
                )}
                <div className="pt-4 border-t border-gray-100">
                  {user ? (
                    <div className="space-y-3">
                      <p className="text-sm text-gray-500 truncate">{user.email}</p>
                      <button
                        onClick={() => { logout(); setMenuOpen(false); }}
                        className="flex items-center gap-2 text-red-500 font-medium"
                      >
                        <LogOut className="w-5 h-5" />
                        Çıkış Yap
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => { setMenuOpen(false); setShowLogin(true); }}
                      className="flex items-center gap-2 text-gray-900 font-semibold"
                    >
                      <LogIn className="w-5 h-5" />
                      Giriş Yap
                    </button>
                  )}
                </div>
              </nav>
            </div>
          </>
        )}
      </header>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
}