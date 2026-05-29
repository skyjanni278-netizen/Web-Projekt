import { Injectable, computed, signal } from '@angular/core';
import {
  CartEntry,
  CartReconcileResult,
  CartStorageItem,
  CartStorageParseResult,
  CartSummary
} from './cart.models';
import { ShopProduct } from './shop.models';
import { loadValidatedProducts } from './shop.service';

const CART_STORAGE_KEY = 'sv-ente-warenkorb-v1';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly productMap: Map<string, ShopProduct>;
  private readonly itemsState = signal<CartStorageItem[]>([]);
  private readonly warningState = signal<string | null>(null);

  readonly entries = computed(() => buildCartEntries(this.itemsState(), this.productMap));
  readonly summary = computed(() => summarizeCart(this.entries()));
  readonly itemCount = computed(() => this.summary().totalItems);
  readonly totalPrice = computed(() => this.summary().totalPrice);
  readonly warning = computed(() => this.warningState());

  constructor() {
    const validatedProducts = loadValidatedProducts();
    this.productMap = new Map(validatedProducts.validProducts.map((product) => [product.id, product]));
    this.restoreFromStorage();
  }

  addItem(productId: string, quantity = 1): void {
    if (!this.productMap.has(productId)) {
      this.warningState.set('Ein Produkt konnte nicht zum Warenkorb hinzugefügt werden.');
      return;
    }

    if (!Number.isFinite(quantity) || quantity <= 0) {
      return;
    }

    const nextItems = mergeQuantity(this.itemsState(), productId, quantity);
    this.itemsState.set(nextItems);
    this.persist(nextItems);
  }

  increaseItem(productId: string): void {
    this.addItem(productId, 1);
  }

  decreaseItem(productId: string): void {
    const nextItems = this.itemsState()
      .map((item) => (item.productId === productId ? { ...item, quantity: item.quantity - 1 } : item))
      .filter((item) => item.quantity > 0);

    this.itemsState.set(nextItems);
    this.persist(nextItems);
  }

  removeItem(productId: string): void {
    const nextItems = this.itemsState().filter((item) => item.productId !== productId);
    this.itemsState.set(nextItems);
    this.persist(nextItems);
  }

  clearCart(): void {
    this.itemsState.set([]);
    this.persist([]);
  }

  clearWarning(): void {
    this.warningState.set(null);
  }

  private restoreFromStorage(): void {
    const rawValue = readStorage(CART_STORAGE_KEY);
    const parsed = parseStoredCart(rawValue);
    const reconciled = reconcileWithProducts(parsed.items, this.productMap);

    this.itemsState.set(reconciled.items);
    this.persist(reconciled.items);

    if (parsed.error) {
      this.warningState.set(parsed.error);
      return;
    }

    if (reconciled.removedUnknownProducts > 0) {
      this.warningState.set(
        `${reconciled.removedUnknownProducts} gespeicherte Position(en) wurden entfernt, weil Produkte nicht mehr verfügbar sind.`
      );
    }
  }

  private persist(items: CartStorageItem[]): void {
    writeStorage(CART_STORAGE_KEY, JSON.stringify(items));
  }
}

export function parseStoredCart(rawValue: string | null): CartStorageParseResult {
  if (!rawValue) {
    return { items: [], error: null };
  }

  try {
    const parsed: unknown = JSON.parse(rawValue);
    if (!Array.isArray(parsed)) {
      return { items: [], error: 'Ungültige Warenkorb-Daten wurden zurückgesetzt.' };
    }

    const validItems: CartStorageItem[] = [];
    for (const entry of parsed) {
      if (!isValidCartStorageItem(entry)) {
        return { items: [], error: 'Ungültige Warenkorb-Daten wurden zurückgesetzt.' };
      }
      validItems.push(entry);
    }

    return { items: mergeDuplicateItems(validItems), error: null };
  } catch {
    return { items: [], error: 'Warenkorb konnte nicht gelesen werden und wurde geleert.' };
  }
}

export function reconcileWithProducts(
  items: CartStorageItem[],
  products: Map<string, ShopProduct>
): CartReconcileResult {
  const filtered = items.filter((item) => products.has(item.productId));
  return {
    items: filtered,
    removedUnknownProducts: items.length - filtered.length
  };
}

export function buildCartEntries(
  items: CartStorageItem[],
  products: Map<string, ShopProduct>
): CartEntry[] {
  const entries: CartEntry[] = [];
  for (const item of items) {
    const product = products.get(item.productId);
    if (!product) {
      continue;
    }

    entries.push({
      product,
      quantity: item.quantity,
      subtotal: product.price * item.quantity
    });
  }

  return entries;
}

export function summarizeCart(entries: CartEntry[]): CartSummary {
  return entries.reduce(
    (summary, entry) => ({
      totalItems: summary.totalItems + entry.quantity,
      totalPrice: summary.totalPrice + entry.subtotal
    }),
    { totalItems: 0, totalPrice: 0 }
  );
}

function mergeQuantity(items: CartStorageItem[], productId: string, quantityDelta: number): CartStorageItem[] {
  let wasUpdated = false;
  const nextItems = items.map((item) => {
    if (item.productId !== productId) {
      return item;
    }
    wasUpdated = true;
    return { ...item, quantity: item.quantity + quantityDelta };
  });

  if (!wasUpdated) {
    nextItems.push({ productId, quantity: quantityDelta });
  }

  return nextItems;
}

function mergeDuplicateItems(items: CartStorageItem[]): CartStorageItem[] {
  const merged = new Map<string, number>();

  for (const item of items) {
    const previousQuantity = merged.get(item.productId) ?? 0;
    merged.set(item.productId, previousQuantity + item.quantity);
  }

  return Array.from(merged.entries()).map(([productId, quantity]) => ({
    productId,
    quantity
  }));
}

function isValidCartStorageItem(value: unknown): value is CartStorageItem {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const candidate = value as CartStorageItem;
  return (
    typeof candidate.productId === 'string' &&
    candidate.productId.trim().length > 0 &&
    typeof candidate.quantity === 'number' &&
    Number.isInteger(candidate.quantity) &&
    candidate.quantity > 0
  );
}

function readStorage(key: string): string | null {
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      return null;
    }
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: string): void {
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      return;
    }
    window.localStorage.setItem(key, value);
  } catch {
    // localStorage may be blocked, app should continue without crash
  }
}
