import { strings } from './strings.js';

// Normalize locale code (Astro currentLocale is lowercased) to the strings key.
export function norm(lang) {
  if (!lang) return 'en';
  const s = String(lang).toLowerCase();
  if (s === 'zh' || s === 'zh-cn') return 'zh-cn';
  if (s === 'zh-tw') return 'zh-tw';
  return s;
}

// t(lang, 'manifesto.lede') -> string. Falls back to EN if a key is missing.
export function t(lang, key) {
  const code = norm(lang);
  const lookup = (obj) => key.split('.').reduce((o, k) => (o == null ? o : o[k]), obj);
  const localized = lookup(strings[code]);
  if (localized != null) return localized;
  return lookup(strings.en) ?? '';
}

// Same as t() but always returns an array (for lists like factoids, theses, etc.)
export function tArr(lang, key) {
  const v = t(lang, key);
  return Array.isArray(v) ? v : [];
}
