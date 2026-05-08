import { Routes } from '@angular/router';
import { BasketballPage } from './pages/basketball-page/basketball-page';
import { FussballPage } from './pages/fussball-page/fussball-page';
import { HandballPage } from './pages/handball-page/handball-page';
import { HomePage } from './pages/home-page/home-page';
import { KontaktPage } from './pages/kontakt-page/kontakt-page';
import { LeerPage } from './pages/leer-page/leer-page';
import { MitgliedschaftPage } from './pages/mitgliedschaft-page/mitgliedschaft-page';
import { NewsOnePage } from './pages/news-one-page/news-one-page';
import { NewsPage } from './pages/news-page/news-page';
import { NewsUploadPage } from './pages/news-upload-page/news-upload-page';
import { ShopPage } from './pages/shop-page/shop-page';
import { SportangebotePage } from './pages/sportangebote-page/sportangebote-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'news', component: NewsPage },
  { path: 'news/neu', component: NewsUploadPage },   // vor :slug registrieren!
  { path: 'news/:slug', component: NewsOnePage },
  { path: 'shop', component: ShopPage },
  { path: 'sportangebote', component: SportangebotePage },
  { path: 'sportangebote/fussball', component: FussballPage },
  { path: 'sportangebote/handball', component: HandballPage },
  { path: 'sportangebote/basketball', component: BasketballPage },
  { path: 'mitgliedschaft', component: MitgliedschaftPage },
  { path: 'kontakt', component: KontaktPage },
  { path: 'leer', component: LeerPage },
  { path: '**', redirectTo: '' },
];
