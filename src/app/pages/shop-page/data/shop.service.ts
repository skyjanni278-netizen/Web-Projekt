import { SHOP_PRODUCTS_RAW } from './shop.data';
import {
  InvalidShopProduct,
  PriceRange,
  PriceRangeOption,
  ProductCategory,
  ProductCategoryOption,
  ProductSize,
  ProductSizeOption,
  ShopFilterState,
  ShopProduct,
  ShopProductValidationResult
} from './shop.models';

const VALID_CATEGORIES: ProductCategory[] = ['kleidung', 'accessoires', 'sport'];
const VALID_SIZES: ProductSize[] = ['one-size', 's', 'm', 'l', 'xl'];
const VALID_BADGES = ['neu', 'sale'] as const;
type CandidateProduct = {
  id?: unknown;
  name?: unknown;
  category?: unknown;
  description?: unknown;
  price?: unknown;
  oldPrice?: unknown;
  sizes?: unknown;
  imageUrl?: unknown;
  imageAlt?: unknown;
  badge?: unknown;
};

export const CATEGORY_OPTIONS: ProductCategoryOption[] = [
  { value: 'all', label: 'Alle Kategorien' },
  { value: 'kleidung', label: 'Kleidung' },
  { value: 'accessoires', label: 'Accessoires' },
  { value: 'sport', label: 'Sport & Fitness' }
];

export const PRICE_RANGE_OPTIONS: PriceRangeOption[] = [
  { value: 'all', label: 'Alle Preise' },
  { value: '0-20', label: '0 EUR - 20 EUR' },
  { value: '20-50', label: '20 EUR - 50 EUR' },
  { value: '50-100', label: '50 EUR - 100 EUR' },
  { value: '100+', label: '100 EUR+' }
];

export const SIZE_OPTIONS: ProductSizeOption[] = [
  { value: 'all', label: 'Alle Groessen' },
  { value: 'one-size', label: 'One Size' },
  { value: 's', label: 'S' },
  { value: 'm', label: 'M' },
  { value: 'l', label: 'L' },
  { value: 'xl', label: 'XL' }
];

export const DEFAULT_SHOP_FILTERS: ShopFilterState = {
  searchTerm: '',
  category: 'all',
  priceRange: 'all',
  size: 'all'
};

export function loadValidatedProducts(): ShopProductValidationResult {
  return validateProducts(SHOP_PRODUCTS_RAW);
}

export function validateProducts(rawProducts: unknown[]): ShopProductValidationResult {
  const validProducts: ShopProduct[] = [];
  const invalidProducts: InvalidShopProduct[] = [];

  for (const rawProduct of rawProducts) {
    const parsedProduct = parseShopProduct(rawProduct);
    if (parsedProduct.ok) {
      validProducts.push(parsedProduct.product);
      continue;
    }

    invalidProducts.push({
      reason: parsedProduct.reason,
      product: rawProduct
    });
  }

  return { validProducts, invalidProducts };
}

export function applyShopFilters(products: ShopProduct[], filters: ShopFilterState): ShopProduct[] {
  const normalizedSearch = normalizeSearchTerm(filters.searchTerm);

  return products.filter((product) => {
    const matchesSearchTerm =
      normalizedSearch.length === 0 || buildSearchIndex(product).includes(normalizedSearch);

    const matchesCategory = filters.category === 'all' || product.category === filters.category;
    const matchesPriceRange = matchesPrice(product.price, filters.priceRange);
    const matchesSize = filters.size === 'all' || product.sizes.includes(filters.size);

    return matchesSearchTerm && matchesCategory && matchesPriceRange && matchesSize;
  });
}

export function hasActiveShopFilters(filters: ShopFilterState): boolean {
  return (
    normalizeSearchTerm(filters.searchTerm).length > 0 ||
    filters.category !== 'all' ||
    filters.priceRange !== 'all' ||
    filters.size !== 'all'
  );
}

export function sanitizeFilterState(input: Partial<ShopFilterState>): ShopFilterState {
  const nextSearchTerm = typeof input.searchTerm === 'string' ? input.searchTerm : '';
  const nextCategory = VALID_CATEGORIES.includes(input.category as ProductCategory)
    ? (input.category as ProductCategory)
    : 'all';
  const nextPriceRange = isPriceRange(input.priceRange) ? input.priceRange : 'all';
  const nextSize = VALID_SIZES.includes(input.size as ProductSize) ? (input.size as ProductSize) : 'all';

  return {
    searchTerm: nextSearchTerm,
    category: nextCategory,
    priceRange: nextPriceRange,
    size: nextSize
  };
}

function parseShopProduct(raw: unknown): { ok: true; product: ShopProduct } | { ok: false; reason: string } {
  if (!isRecord(raw)) {
    return { ok: false, reason: 'Produkt ist kein gueltiges Objekt.' };
  }

  const candidate = raw as CandidateProduct;

  if (!isNonEmptyString(candidate.id)) {
    return { ok: false, reason: 'Produkt-ID fehlt oder ist ungueltig.' };
  }

  if (!isNonEmptyString(candidate.name)) {
    return { ok: false, reason: `Produkt "${candidate.id}": Name fehlt oder ist ungueltig.` };
  }

  if (!isProductCategory(candidate.category)) {
    return { ok: false, reason: `Produkt "${candidate.name}": Kategorie ist ungueltig.` };
  }

  if (!isNonEmptyString(candidate.description)) {
    return { ok: false, reason: `Produkt "${candidate.name}": Beschreibung fehlt oder ist ungueltig.` };
  }

  if (!isPositiveNumber(candidate.price)) {
    return { ok: false, reason: `Produkt "${candidate.name}": Preis ist ungueltig.` };
  }

  if (candidate.oldPrice !== undefined && !isPositiveNumber(candidate.oldPrice)) {
    return { ok: false, reason: `Produkt "${candidate.name}": alter Preis ist ungueltig.` };
  }

  if (!isNonEmptyString(candidate.imageUrl) || !isNonEmptyString(candidate.imageAlt)) {
    return { ok: false, reason: `Produkt "${candidate.name}": Bilddaten sind ungueltig.` };
  }

  if (!isSizeArray(candidate.sizes)) {
    return { ok: false, reason: `Produkt "${candidate.name}": Groessen sind ungueltig.` };
  }

  if (
    candidate.badge !== undefined &&
    !VALID_BADGES.includes(candidate.badge as (typeof VALID_BADGES)[number])
  ) {
    return { ok: false, reason: `Produkt "${candidate.name}": Badge ist ungueltig.` };
  }

  const id = candidate.id as string;
  const name = candidate.name as string;
  const category = candidate.category as ProductCategory;
  const description = candidate.description as string;
  const price = candidate.price as number;
  const oldPrice = candidate.oldPrice as number | undefined;
  const sizes = candidate.sizes as ProductSize[];
  const imageUrl = candidate.imageUrl as string;
  const imageAlt = candidate.imageAlt as string;
  const badge = candidate.badge as ShopProduct['badge'];

  return {
    ok: true,
    product: {
      id,
      name,
      category,
      description,
      price,
      oldPrice,
      sizes,
      imageUrl,
      imageAlt,
      badge
    }
  };
}

function matchesPrice(price: number, range: PriceRange): boolean {
  switch (range) {
    case 'all':
      return true;
    case '0-20':
      return price >= 0 && price <= 20;
    case '20-50':
      return price > 20 && price <= 50;
    case '50-100':
      return price > 50 && price <= 100;
    case '100+':
      return price >= 100;
    default:
      return true;
  }
}

function buildSearchIndex(product: ShopProduct): string {
  return `${product.name} ${product.description} ${categoryToLabel(product.category)}`.toLowerCase();
}

function categoryToLabel(category: ProductCategory): string {
  const categoryOption = CATEGORY_OPTIONS.find((option) => option.value === category);
  return categoryOption?.label ?? category;
}

function normalizeSearchTerm(value: string): string {
  return value.trim().toLowerCase();
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function isPositiveNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value) && value > 0;
}

function isProductCategory(value: unknown): value is ProductCategory {
  return VALID_CATEGORIES.includes(value as ProductCategory);
}

function isSizeArray(value: unknown): value is ProductSize[] {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    value.every((size) => VALID_SIZES.includes(size as ProductSize))
  );
}

function isPriceRange(value: unknown): value is PriceRange {
  return value === 'all' || value === '0-20' || value === '20-50' || value === '50-100' || value === '100+';
}
