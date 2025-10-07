import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";
import LanguageSelector from "./LanguageSelector";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo-two.png";

export default function Header() {
  const { language } = useLanguage();
  const t = translations[language];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <NavLink
              to="/"
              className="flex items-center gap-2 text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
            >
              <img
                src={logo}
                alt="Cadde Spot Logo"
                className="h-14 w-auto"
                loading="lazy"
              />
            </NavLink>
          </div>

          {/* Masaüstü Menü */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative font-medium transition-colors duration-300 
                 ${
                   isActive
                     ? "text-blue-600"
                     : "text-gray-700 hover:text-gray-900"
                 }
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
                 ${
                   isActive
                     ? "text-blue-600"
                     : "text-gray-700 hover:text-gray-900"
                 }
                 after:content-[''] after:absolute after:left-0 after:-bottom-1 
                 after:h-[2px] after:bg-blue-600 
                 after:transition-all after:duration-300
                 ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`
              }
            >
              {t.nav.items}
            </NavLink>
          </nav>

          {/* Sağ taraf (Dil seçici + Hamburger) */}
          <div className="flex items-center gap-3">
            <LanguageSelector />
            <button
              className="md:hidden text-gray-700 hover:text-gray-900"
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* 🟦 Mobil & Tablet Menü (sağdan kayan) */}
      {menuOpen && (
        <>
          {/* Arka plan (yarı saydam karartma) */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Menü paneli */}
          <div
            className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Kapatma butonu */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold text-gray-800">Menü</h2>
              <button
                className="text-gray-700 hover:text-gray-900"
                onClick={() => setMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menü linkleri */}
            <nav className="flex flex-col p-4 space-y-4">
              <NavLink
                to="/about"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                {t.nav.about}
              </NavLink>

              <NavLink
                to="/items"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                {t.nav.items}
              </NavLink>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
