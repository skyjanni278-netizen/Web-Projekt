import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  PriceRange,
  PriceRangeOption,
  ProductCategory,
  ProductCategoryOption,
  ProductSize,
  ProductSizeOption,
  ShopFilterState
} from '../../data/shop.models';

@Component({
  selector: 'app-shop-filter-panel',
  imports: [FormsModule],
  templateUrl: './shop-filter-panel.html',
  styleUrl: './shop-filter-panel.css'
})
export class ShopFilterPanel {
  @Input({ required: true }) filters!: ShopFilterState;
  @Input({ required: true }) categoryOptions: ProductCategoryOption[] = [];
  @Input({ required: true }) priceRangeOptions: PriceRangeOption[] = [];
  @Input({ required: true }) sizeOptions: ProductSizeOption[] = [];

  @Output() searchTermChanged = new EventEmitter<string>();
  @Output() categoryChanged = new EventEmitter<ProductCategory | 'all'>();
  @Output() priceRangeChanged = new EventEmitter<PriceRange>();
  @Output() sizeChanged = new EventEmitter<ProductSize | 'all'>();
  @Output() resetClicked = new EventEmitter<void>();

  protected onSearchTermChange(searchTerm: string): void {
    this.searchTermChanged.emit(searchTerm);
  }

  protected onCategoryChange(category: ProductCategory | 'all'): void {
    this.categoryChanged.emit(category);
  }

  protected onPriceRangeChange(priceRange: PriceRange): void {
    this.priceRangeChanged.emit(priceRange);
  }

  protected onSizeChange(size: ProductSize | 'all'): void {
    this.sizeChanged.emit(size);
  }

  protected onReset(): void {
    this.resetClicked.emit();
  }
}
