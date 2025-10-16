export interface MultiLang {
  tr: string;
  en: string;
  'ar-sy': string;
  ru: string;
  de: string;
}

export type Language = 'tr' | 'en' | 'ar-sy' | 'ru' | 'de';

export interface Item {
  id: number;
  slug: string;
  title: MultiLang;
  description: MultiLang;
  price: string;
  category: string;
  brand?: string;
  condition: string;
  images: string[];
  keywords?: string[];
  metaDescription?: string;

}

export interface Translation {
  home: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
    why: {
      title: string;
      quality: { title: string; desc: string };
      affordable: { title: string; desc: string };
      trusted: { title: string; desc: string };
    };
    featured: string;
  };
  about: {
    title: string;
    mission: string;
    story: string;
    contact: string;
  };
  items: {
    title: string;
    search: string;
    category: string;
    allCategories: string;
    viewDetails: string;
    noResults: string;
  };
  itemDetail: {
    category: string;
    brand: string;
    condition: string;
    contact: string;
    relatedItems: string;
  };
  nav: {
    home: string;
    about: string;
    items: string;
  };
  footer: {
    contact: string;
    phone: string;
    address: string;
  };
}
