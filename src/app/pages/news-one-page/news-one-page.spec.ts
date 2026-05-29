import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Article, Comment } from '../../models/article';
import { NewsService } from '../../services/news.service';
import { NewsOnePage } from './news-one-page';

const ARTICLE: Article = {
  id: 'article-1',
  slug: 'test-artikel',
  title: 'Test Artikel',
  author: 'Redaktion',
  date: '2025-11-05',
  excerpt: 'Kurzbeschreibung',
  content: '<p>Artikelinhalt</p>',
  image: '/Bilder/test.png',
  imageAlt: 'Testbild',
  tags: ['Allgemein']
};

const COMMENT: Comment = {
  id: 'comment-1',
  articleSlug: 'test-artikel',
  author: 'Lisa',
  text: 'Sehr hilfreich',
  date: '2025-11-06'
};

function activatedRouteWithSlug(slug: string) {
  return {
    snapshot: {
      paramMap: convertToParamMap({ slug })
    }
  };
}

describe('NewsOnePage', () => {
  afterEach(() => {
    TestBed.resetTestingModule();
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  async function createComponent() {
    const newsService = {
      getBySlug: vi.fn(() => ARTICLE),
      getComments: vi.fn(() => [COMMENT]),
      addComment: vi.fn()
    };

    await TestBed.configureTestingModule({
      imports: [NewsOnePage],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteWithSlug('test-artikel') },
        { provide: NewsService, useValue: newsService }
      ]
    }).compileComponents();

    return {
      fixture: TestBed.createComponent(NewsOnePage),
      newsService
    };
  }

  it('lädt den Artikel und die Kommentare anhand des Slugs', async () => {
    const { fixture, newsService } = await createComponent();
    const component = fixture.componentInstance;

    component.ngOnInit();

    expect(newsService.getBySlug).toHaveBeenCalledWith('test-artikel');
    expect(component.article()).toEqual(ARTICLE);
    expect(component.comments()).toEqual([COMMENT]);
    expect(newsService.getComments).toHaveBeenCalledWith('test-artikel');
  });

  it('zeigt einen Fehler, wenn Name oder Kommentar fehlen', async () => {
    const { fixture, newsService } = await createComponent();
    const component = fixture.componentInstance;

    component.ngOnInit();
    component.commentAuthor = '   ';
    component.commentText = 'Kommentar ohne Name';
    component.submitComment();

    expect(newsService.addComment).not.toHaveBeenCalled();
    expect(component.commentError()).toContain('Name');
  });

  it('speichert Kommentare getrimmt und setzt das Formular zurück', async () => {
    vi.useFakeTimers();
    const { fixture, newsService } = await createComponent();
    const component = fixture.componentInstance;

    component.ngOnInit();
    component.commentAuthor = '  Peter  ';
    component.commentText = '  Starkes Update!  ';
    component.submitComment();

    expect(newsService.addComment).toHaveBeenCalledWith('test-artikel', 'Peter', 'Starkes Update!');
    expect(component.commentAuthor).toBe('');
    expect(component.commentText).toBe('');
    expect(component.commentError()).toBeNull();
    expect(component.commentSubmitted()).toBe(true);

    vi.advanceTimersByTime(3000);

    expect(component.commentSubmitted()).toBe(false);
  });
});
