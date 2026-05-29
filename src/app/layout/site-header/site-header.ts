import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../pages/shop-page/data/cart.service';
import { SportsService } from '../../services/sports.service';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
})
export class SiteHeader {
  private readonly cartService = inject(CartService);
  private readonly sportsService = inject(SportsService);

  protected readonly sports = this.sportsService.getAll();
  protected readonly cartItemCount = computed(() => this.cartService.itemCount());
}
