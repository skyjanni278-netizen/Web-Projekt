import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { NewsService, REDAKTEUR_PIN } from '../../services/news.service';
import { NewsUploadPage } from './news-upload-page';

describe('NewsUploadPage', () => {
  afterEach(() => {
    TestBed.resetTestingModule();
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  async function createComponent() {
    const newsService = { addArticle: vi.fn() };
    const router = { navigate: vi.fn() };

    await TestBed.configureTestingModule({
      imports: [NewsUploadPage],
      providers: [
        { provide: NewsService, useValue: newsService },
        { provide: Router, useValue: router }
      ]
    }).compileComponents();

    return {
      fixture: TestBed.createComponent(NewsUploadPage),
      newsService,
      router
    };
  }

  it('blockiert das Formular bei falschem Redakteur-PIN', async () => {
    const { fixture } = await createComponent();
    const component = fixture.componentInstance;

    component.pinInput = '0000';
    component.checkPin();

    expect(component.pinEntered()).toBe(false);
    expect(component.pinError()).toBe(true);
  });

  it('erstellt einen Artikel mit formatiertem Inhalt und navigiert danach zur Newsseite', async () => {
    vi.useFakeTimers();
    const { fixture, newsService, router } = await createComponent();
    const component = fixture.componentInstance;

    component.pinInput = REDAKTEUR_PIN;
    component.checkPin();
    component.toggleTag('Allgemein');
    component.form.setValue({
      title: 'Neuer Test Artikel',
      author: 'Redaktion',
      date: '2025-11-05',
      excerpt: 'Kurzer Beschreibungstext für den neuen Artikel.',
      content: 'Absatz eins\n\nAbsatz zwei\nmit Zeile zwei',
      image: ''
    });

    component.submit();

    expect(newsService.addArticle).toHaveBeenCalledWith({
      title: 'Neuer Test Artikel',
      author: 'Redaktion',
      date: '2025-11-05',
      excerpt: 'Kurzer Beschreibungstext für den neuen Artikel.',
      content: '<p>Absatz eins</p>\n<p>Absatz zwei<br>mit Zeile zwei</p>',
      image: '/Bilder/SvEnteHeidenheimLogo.png',
      imageAlt: 'Neuer Test Artikel',
      tags: ['Allgemein'],
      slug: 'neuer-test-artikel'
    });
    expect(component.submitted()).toBe(true);

    vi.advanceTimersByTime(2000);

    expect(router.navigate).toHaveBeenCalledWith(['/news']);
  });
});
