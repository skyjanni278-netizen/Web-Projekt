import { describe, expect, it } from 'vitest';
import { ShopProduct } from './shop.models';
import {
  buildCartEntries,
  parseStoredCart,
  reconcileWithProducts,
  summarizeCart
} from './cart.service';
import { CartStorageItem } from './cart.models';

const CATALOG: ShopProduct[] = [
  {
    id: 'shirt',
    name: 'Shirt',
    category: 'kleidung',
    description: 'Produkt A',
    price: 30,
    sizes: ['m'],
    imageUrl: '/shirt.png',
    imageAlt: 'Shirt'
  },
  {
    id: 'cap',
    name: 'Cap',
    category: 'accessoires',
    description: 'Produkt B',
    price: 15,
    sizes: ['one-size'],
    imageUrl: '/cap.png',
    imageAlt: 'Cap'
  }
];

const CATALOG_MAP = new Map(CATALOG.map((product) => [product.id, product]));

describe('cart.service helpers', () => {
  it('validiert und merged gespeicherte Warenkorb-Daten', () => {
    const raw = JSON.stringify([
      { productId: 'shirt', quantity: 2 },
      { productId: 'shirt', quantity: 1 },
      { productId: 'cap', quantity: 3 }
    ]);

    const result = parseStoredCart(raw);

    expect(result.error).toBeNull();
    expect(result.items).toEqual([
      { productId: 'shirt', quantity: 3 },
      { productId: 'cap', quantity: 3 }
    ]);
  });

  it('setzt ungültige JSON-Daten sicher zurück', () => {
    const result = parseStoredCart('{oops');

    expect(result.items).toEqual([]);
    expect(result.error).toContain('geleert');
  });

  it('entfernt Produkte, die nicht mehr im Katalog vorhanden sind', () => {
    const items: CartStorageItem[] = [
      { productId: 'shirt', quantity: 2 },
      { productId: 'unknown', quantity: 1 }
    ];

    const result = reconcileWithProducts(items, CATALOG_MAP);

    expect(result.items).toEqual([{ productId: 'shirt', quantity: 2 }]);
    expect(result.removedUnknownProducts).toBe(1);
  });

  it('berechnet Zwischensummen und Gesamtsumme korrekt', () => {
    const items: CartStorageItem[] = [
      { productId: 'shirt', quantity: 2 },
      { productId: 'cap', quantity: 3 }
    ];
    const entries = buildCartEntries(items, CATALOG_MAP);
    const summary = summarizeCart(entries);

    expect(entries[0]?.subtotal).toBe(60);
    expect(entries[1]?.subtotal).toBe(45);
    expect(summary.totalItems).toBe(5);
    expect(summary.totalPrice).toBe(105);
  });
});
