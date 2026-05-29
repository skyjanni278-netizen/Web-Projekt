import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SPORT_OFFERS } from '../../data/sports.data';
import { CartService } from '../../pages/shop-page/data/cart.service';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
})
export class SiteHeader {
  private readonly cartService = inject(CartService);

  protected readonly sports = SPORT_OFFERS;
  protected readonly cartItemCount = computed(() => this.cartService.itemCount());
}
