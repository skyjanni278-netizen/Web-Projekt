import { Component, Input } from '@angular/core';
import { ShopProduct } from '../../data/shop.models';

@Component({
  selector: 'app-shop-product-grid',
  templateUrl: './shop-product-grid.html',
  styleUrl: './shop-product-grid.css'
})
export class ShopProductGrid {
  @Input({ required: true }) products: ShopProduct[] = [];
  @Input() showEmptyState = false;

  protected formatPrice(price: number): string {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  }

  protected badgeLabel(badge: ShopProduct['badge']): string {
    if (badge === 'neu') {
      return 'Neu';
    }

    if (badge === 'sale') {
      return 'Sale';
    }

    return '';
  }

  protected categoryLabel(category: ShopProduct['category']): string {
    if (category === 'kleidung') {
      return 'Kleidung';
    }

    if (category === 'accessoires') {
      return 'Accessoires';
    }

    return 'Sport & Fitness';
  }
}
