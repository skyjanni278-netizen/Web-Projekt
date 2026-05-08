import { ShopProduct } from './shop.models';

export interface CartStorageItem {
  productId: string;
  quantity: number;
}

export interface CartEntry {
  product: ShopProduct;
  quantity: number;
  subtotal: number;
}

export interface CartStorageParseResult {
  items: CartStorageItem[];
  error: string | null;
}

export interface CartReconcileResult {
  items: CartStorageItem[];
  removedUnknownProducts: number;
}

export interface CartSummary {
  totalItems: number;
  totalPrice: number;
}
