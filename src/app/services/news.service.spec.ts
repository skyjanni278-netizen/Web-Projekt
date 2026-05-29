import { describe, expect, it } from 'vitest';
import { Article, Comment, DEFAULT_ARTICLES } from '../models/article';
import { isArticle, isComment, parseStoredArticles, parseStoredComments } from './news.service';

const VALID_ARTICLE: Article = {
  id: 'article-1',
  slug: 'test-artikel',
  title: 'Test Artikel',
  author: 'Redaktion',
  date: '2025-11-05',
  excerpt: 'Kurzbeschreibung fuer die News-Uebersicht.',
  content: '<p>Bestehender HTML-Inhalt bleibt erlaubt.</p>',
  image: '/Bilder/test.png',
  imageAlt: 'Testbild',
  tags: ['Allgemein']
};

const VALID_COMMENT: Comment = {
  id: 'comment-1',
  articleSlug: 'test-artikel',
  author: 'Max',
  text: 'Guter Beitrag',
  date: '2025-11-06'
};

describe('news.service validation helpers', () => {
  it('nutzt Default-Artikel, wenn kein gespeicherter Wert vorhanden ist', () => {
    expect(parseStoredArticles(null)).toEqual(DEFAULT_ARTICLES);
  });

  it('setzt ungueltige Artikel-JSON-Daten sicher auf Default-Artikel zurueck', () => {
    expect(parseStoredArticles('{kaputt')).toEqual(DEFAULT_ARTICLES);
  });

  it('filtert unvollstaendige Artikel, ohne gueltigen HTML-Inhalt zu veraendern', () => {
    const result = parseStoredArticles(JSON.stringify([
      VALID_ARTICLE,
      {
        id: 'broken',
        slug: 'broken-news',
        title: 'Unvollstaendig'
      }
    ]));

    expect(result).toEqual([VALID_ARTICLE]);
    expect(isArticle(result[0])).toBe(true);
    expect(result[0]?.content).toBe('<p>Bestehender HTML-Inhalt bleibt erlaubt.</p>');
  });

  it('liefert eine leere Kommentar-Liste fuer ungueltige JSON-Daten', () => {
    expect(parseStoredComments('{kaputt')).toEqual([]);
  });

  it('filtert unvollstaendige Kommentare aus gespeicherten Daten', () => {
    const result = parseStoredComments(JSON.stringify([
      VALID_COMMENT,
      {
        id: 'broken',
        articleSlug: 'test-artikel',
        text: 'Autor fehlt'
      }
    ]));

    expect(result).toEqual([VALID_COMMENT]);
    expect(isComment(result[0])).toBe(true);
  });
});
