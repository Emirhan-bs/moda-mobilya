import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
}

export default function SEO({ title, description, keywords, image }: SEOProps) {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = `${title} | Cadde Spot`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = keywords;
        document.head.appendChild(meta);
      }
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = title;
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = description;
      document.head.appendChild(meta);
    }

    if (image) {
      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) {
        ogImage.setAttribute('content', image);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:image');
        meta.content = image;
        document.head.appendChild(meta);
      }
    }

    const htmlLang = document.documentElement.getAttribute('lang');
    if (htmlLang !== language) {
      document.documentElement.setAttribute('lang', language);
    }
  }, [title, description, keywords, image, language]);

  return null;
}
