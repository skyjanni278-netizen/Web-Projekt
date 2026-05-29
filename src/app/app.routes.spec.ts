import { describe, expect, it } from 'vitest';
import { CartPage } from './pages/cart-page/cart-page';
import { HomePage } from './pages/home-page/home-page';
import { NewsOnePage } from './pages/news-one-page/news-one-page';
import { NewsPage } from './pages/news-page/news-page';
import { NewsUploadPage } from './pages/news-upload-page/news-upload-page';
import { NotFoundPage } from './pages/not-found-page/not-found-page';
import { SportDetailPage } from './pages/sport-detail-page/sport-detail-page';
import { SportangebotePage } from './pages/sportangebote-page/sportangebote-page';
import { routes } from './app.routes';

describe('app.routes', () => {
  it('registriert die wichtigsten Seiten mit stabilen Pfaden', () => {
    expect(routes).toEqual(expect.arrayContaining([
      expect.objectContaining({ path: '', component: HomePage }),
      expect.objectContaining({ path: 'news', component: NewsPage }),
      expect.objectContaining({ path: 'shop' }),
      expect.objectContaining({ path: 'warenkorb', component: CartPage }),
      expect.objectContaining({ path: 'sportangebote', component: SportangebotePage }),
      expect.objectContaining({ path: 'sportangebote/:sportId', component: SportDetailPage })
    ]));
  });

  it('registriert news/neu vor der dynamischen News-Detailroute', () => {
    const uploadIndex = routes.findIndex(route => route.path === 'news/neu');
    const detailIndex = routes.findIndex(route => route.path === 'news/:slug');

    expect(uploadIndex).toBeGreaterThanOrEqual(0);
    expect(detailIndex).toBeGreaterThan(uploadIndex);
    expect(routes[uploadIndex]?.component).toBe(NewsUploadPage);
    expect(routes[detailIndex]?.component).toBe(NewsOnePage);
  });

  it('enthaelt die geforderten mindestens vier echten Seitenrouten plus Fallback', () => {
    const pageRoutes = routes.filter(route => route.path && !route.redirectTo && route.path !== '**');
    const fallbackRoute = routes.at(-1);

    expect(pageRoutes.length).toBeGreaterThanOrEqual(4);
    expect(fallbackRoute).toEqual(expect.objectContaining({ path: '**', component: NotFoundPage }));
  });

  it('leitet den alten cart-Pfad sauber auf den deutschen Warenkorb-Pfad um', () => {
    expect(routes).toContainEqual(expect.objectContaining({ path: 'cart', redirectTo: 'warenkorb' }));
  });
});
