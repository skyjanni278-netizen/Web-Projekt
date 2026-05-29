import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ViewEncapsulation,
  computed,
  inject,
  signal
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopFilterPanel } from './components/shop-filter-panel/shop-filter-panel';
import { ShopProductGrid } from './components/shop-product-grid/shop-product-grid';
import {
  CATEGORY_OPTIONS,
  DEFAULT_SHOP_FILTERS,
  PRICE_RANGE_OPTIONS,
  SIZE_OPTIONS,
  applyShopFilters,
  hasActiveShopFilters,
  loadValidatedProducts,
  sanitizeFilterState
} from './data/shop.service';
import { PriceRange, ProductCategory, ProductSize, ShopFilterState, ShopProduct } from './data/shop.models';
import { CartService } from './data/cart.service';

@Component({
  selector: 'app-shop-page',
  imports: [ShopFilterPanel, ShopProductGrid],
  templateUrl: './shop-page.html',
  styleUrl: './shop-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ShopPage {
  protected readonly categoryOptions = CATEGORY_OPTIONS;
  protected readonly priceRangeOptions = PRICE_RANGE_OPTIONS;
  protected readonly sizeOptions = SIZE_OPTIONS;
  protected readonly filters = signal<ShopFilterState>(DEFAULT_SHOP_FILTERS);
  protected readonly filteredProducts = computed(() => applyShopFilters(this.allProducts(), this.filters()));
  protected readonly hasActiveFilters = computed(() => hasActiveShopFilters(this.filters()));
  protected readonly isLoading = signal(true);
  protected readonly loadWarning = signal<string | null>(null);

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly cartService = inject(CartService);
  private readonly allProducts = signal<ShopProduct[]>([]);

  constructor() {
    queueMicrotask(() => {
      const validationResult = loadValidatedProducts();
      this.allProducts.set(validationResult.validProducts);
      this.loadWarning.set(
        validationResult.invalidProducts.length > 0
          ? 'Einige Produktdaten waren ungültig und wurden ausgeblendet.'
          : null
      );
      this.isLoading.set(false);
    });

    this.route.queryParamMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      const queryFilters = sanitizeFilterState({
        searchTerm: params.get('q') ?? '',
        category: (params.get('category') ?? undefined) as ProductCategory | 'all' | undefined,
        priceRange: (params.get('price') ?? undefined) as PriceRange | undefined,
        size: (params.get('size') ?? undefined) as ProductSize | 'all' | undefined
      });

      this.filters.set(queryFilters);
    });
  }

  protected onSearchTermChanged(searchTerm: string): void {
    this.updateFilters({ searchTerm });
  }

  protected onCategoryChanged(category: ProductCategory | 'all'): void {
    this.updateFilters({ category });
  }

  protected onPriceRangeChanged(priceRange: PriceRange): void {
    this.updateFilters({ priceRange });
  }

  protected onSizeChanged(size: ProductSize | 'all'): void {
    this.updateFilters({ size });
  }

  protected onResetFilters(): void {
    this.updateFilters(DEFAULT_SHOP_FILTERS);
  }

  protected onAddToCart(productId: string): void {
    this.cartService.addItem(productId, 1);
  }

  private updateFilters(partialFilters: Partial<ShopFilterState>): void {
    const nextFilters = sanitizeFilterState({
      ...this.filters(),
      ...partialFilters
    });

    this.filters.set(nextFilters);
    this.syncFiltersToUrl(nextFilters);
  }

  private syncFiltersToUrl(filters: ShopFilterState): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        q: filters.searchTerm.trim() || null,
        category: filters.category === 'all' ? null : filters.category,
        price: filters.priceRange === 'all' ? null : filters.priceRange,
        size: filters.size === 'all' ? null : filters.size
      },
      replaceUrl: true
    });
  }
}
