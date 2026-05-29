import { Routes } from '@angular/router';
import { CartPage } from './pages/cart-page/cart-page';
import { HomePage } from './pages/home-page/home-page';
import { KontaktPage } from './pages/kontakt-page/kontakt-page';
import { MitgliedschaftPage } from './pages/mitgliedschaft-page/mitgliedschaft-page';
import { NewsOnePage } from './pages/news-one-page/news-one-page';
import { NewsPage } from './pages/news-page/news-page';
import { NewsUploadPage } from './pages/news-upload-page/news-upload-page';
import { NotFoundPage } from './pages/not-found-page/not-found-page';
import { ShopPage } from './pages/shop-page/shop-page';
import { SportDetailPage } from './pages/sport-detail-page/sport-detail-page';
import { SportangebotePage } from './pages/sportangebote-page/sportangebote-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'news', component: NewsPage },
  { path: 'news/neu', component: NewsUploadPage },   // vor :slug registrieren!
  { path: 'news/:slug', component: NewsOnePage },
  { path: 'shop', component: ShopPage },
  { path: 'warenkorb', component: CartPage },
  { path: 'cart', redirectTo: 'warenkorb' },
  { path: 'sportangebote', component: SportangebotePage },
  { path: 'sportangebote/:sportId', component: SportDetailPage },
  { path: 'mitgliedschaft', component: MitgliedschaftPage },
  { path: 'kontakt', component: KontaktPage },
  { path: '**', component: NotFoundPage },
];
