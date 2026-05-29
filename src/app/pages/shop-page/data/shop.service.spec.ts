import { describe, expect, it } from 'vitest';
import {
  DEFAULT_SHOP_FILTERS,
  applyShopFilters,
  sanitizeFilterState,
  validateProducts
} from './shop.service';
import { ShopProduct } from './shop.models';

const TEST_PRODUCTS: ShopProduct[] = [
  {
    id: 'shirt',
    name: 'Vereinsshirt',
    category: 'kleidung',
    description: 'Atmungsaktiv und bequem',
    price: 30,
    sizes: ['m', 'l'],
    imageUrl: '/shirt.png',
    imageAlt: 'Shirt'
  },
  {
    id: 'cap',
    name: 'Fan Cap',
    category: 'accessoires',
    description: 'One Size Cap für Spieltage',
    price: 15,
    sizes: ['one-size'],
    imageUrl: '/cap.png',
    imageAlt: 'Cap'
  },
  {
    id: 'jacke',
    name: 'Trainingsjacke',
    category: 'kleidung',
    description: 'Warme Jacke für Wintertraining',
    price: 72,
    sizes: ['l', 'xl'],
    imageUrl: '/jacke.png',
    imageAlt: 'Jacke'
  }
];

describe('shop.service', () => {
  it('validiert Rohdaten und entfernt unvollständige Produkte', () => {
    const result = validateProducts([
      TEST_PRODUCTS[0],
      {
        id: 'broken',
        name: 'Defektes Produkt',
        category: 'sport',
        description: 'hat keinen gültigen Preis',
        price: '42',
        sizes: ['one-size'],
        imageUrl: '/broken.png',
        imageAlt: 'Broken'
      }
    ]);

    expect(result.validProducts).toHaveLength(1);
    expect(result.invalidProducts).toHaveLength(1);
    expect(result.invalidProducts[0]?.reason).toContain('Preis');
  });

  it('kombiniert Suche und Filter korrekt', () => {
    const result = applyShopFilters(TEST_PRODUCTS, {
      searchTerm: 'jacke',
      category: 'kleidung',
      priceRange: '50-100',
      size: 'xl'
    });

    expect(result).toHaveLength(1);
    expect(result[0]?.id).toBe('jacke');
  });

  it('liefert leere Liste, wenn kein Produkt zu den Filtern passt', () => {
    const result = applyShopFilters(TEST_PRODUCTS, {
      ...DEFAULT_SHOP_FILTERS,
      category: 'sport',
      size: 's'
    });

    expect(result).toHaveLength(0);
  });

  it('setzt ungültige Filterwerte auf sichere Defaults zurück', () => {
    const result = sanitizeFilterState({
      searchTerm: ' cap ',
      category: 'ungültig' as never,
      priceRange: 'falsch' as never,
      size: 'xxl' as never
    });

    expect(result).toEqual({
      searchTerm: ' cap ',
      category: 'all',
      priceRange: 'all',
      size: 'all'
    });
  });
});
