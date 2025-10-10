import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function SEO({
  title,
  description,
  keywords,
  image,
  url,
}: SEOProps) {
  const { language } = useLanguage();
  const baseUrl = "https://ispartamodamobilya.com";
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const imageUrl = image || `${baseUrl}/images/cover.jpg`;

  useEffect(() => {
    // 🔹 Title
    document.title = `${title} | Isparta Moda Mobilya`;

    const setMeta = (name: string, content: string, attr = "name") => {
      const tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (tag) tag.setAttribute("content", content);
      else {
        const meta = document.createElement("meta");
        meta.setAttribute(attr, name);
        meta.setAttribute("content", content);
        document.head.appendChild(meta);
      }
    };

    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);

    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", fullUrl);

    setMeta("og:type", "website", "property");
    setMeta("og:url", fullUrl, "property");
    setMeta("og:title", `${title} | Isparta Moda Mobilya`, "property");
    setMeta("og:description", description, "property");
    setMeta("og:image", imageUrl, "property");
    setMeta("og:locale", "tr_TR", "property");
    setMeta("og:site_name", "Isparta Moda Mobilya", "property");
    setMeta(
      "og:see_also",
      "https://www.instagram.com/ispartamodamobilya/",
      "property"
    );

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", `${title} | Isparta Moda Mobilya`);
    setMeta("twitter:description", description);
    setMeta("twitter:image", imageUrl);
    setMeta("twitter:site", "@ispartamodamobilya");

    const htmlLang = document.documentElement.getAttribute("lang");
    if (htmlLang !== language) {
      document.documentElement.setAttribute("lang", language);
    }
  }, [title, description, keywords, image, url, language]);

  return null;
}
