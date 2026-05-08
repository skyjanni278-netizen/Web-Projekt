import { ChangeDetectionStrategy, Component, ViewEncapsulation, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../shop-page/data/cart.service';

@Component({
  selector: 'app-cart-page',
  imports: [RouterLink],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class CartPage {
  protected readonly cartService = inject(CartService);
  protected readonly entries = computed(() => this.cartService.entries());
  protected readonly itemCount = computed(() => this.cartService.itemCount());
  protected readonly totalPrice = computed(() => this.cartService.totalPrice());
  protected readonly warning = computed(() => this.cartService.warning());

  protected increase(productId: string): void {
    this.cartService.increaseItem(productId);
  }

  protected decrease(productId: string): void {
    this.cartService.decreaseItem(productId);
  }

  protected remove(productId: string): void {
    this.cartService.removeItem(productId);
  }

  protected clear(): void {
    this.cartService.clearCart();
  }

  protected clearWarning(): void {
    this.cartService.clearWarning();
  }

  protected formatPrice(price: number): string {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  }
}
