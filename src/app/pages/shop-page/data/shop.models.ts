export type ProductCategory = 'kleidung' | 'accessoires' | 'sport';

export type ProductSize = 'one-size' | 's' | 'm' | 'l' | 'xl';

export type ProductBadge = 'neu' | 'sale';

export type PriceRange = 'all' | '0-20' | '20-50' | '50-100' | '100+';

export interface ShopProduct {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  price: number;
  oldPrice?: number;
  sizes: ProductSize[];
  imageUrl: string;
  imageAlt: string;
  badge?: ProductBadge;
}

export interface ShopFilterState {
  searchTerm: string;
  category: ProductCategory | 'all';
  priceRange: PriceRange;
  size: ProductSize | 'all';
}

export interface ProductCategoryOption {
  value: ProductCategory | 'all';
  label: string;
}

export interface ProductSizeOption {
  value: ProductSize | 'all';
  label: string;
}

export interface PriceRangeOption {
  value: PriceRange;
  label: string;
}

export interface InvalidShopProduct {
  reason: string;
  product: unknown;
}

export interface ShopProductValidationResult {
  validProducts: ShopProduct[];
  invalidProducts: InvalidShopProduct[];
}
