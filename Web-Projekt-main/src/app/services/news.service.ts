import { Injectable, signal } from '@angular/core';
import { Article, Comment, DEFAULT_ARTICLES } from '../models/article';

// Version hochzählen wenn DEFAULT_ARTICLES erweitert wird → erzwingt Neu-Laden
const STORAGE_VERSION = 2;
const STORAGE_KEY = `sv-ente-articles-v${STORAGE_VERSION}`;
const COMMENTS_KEY = 'sv-ente-comments-v1';

// PIN für den Nachrichtenbeauftragten (kann hier geändert werden)
export const REDAKTEUR_PIN = '1234';

@Injectable({ providedIn: 'root' })
export class NewsService {
  private _articles = signal<Article[]>(this.loadFromStorage());
  private _comments = signal<Comment[]>(this.loadComments());

  readonly articles = this._articles.asReadonly();
  readonly comments = this._comments.asReadonly();

  private loadFromStorage(): Article[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: Article[] = JSON.parse(stored);
        if (parsed.length > 0) return parsed;
      }
    } catch {
      // localStorage nicht verfügbar oder ungültige Daten
    }
    return [...DEFAULT_ARTICLES];
  }

  private loadComments(): Comment[] {
    try {
      const stored = localStorage.getItem(COMMENTS_KEY);
      if (stored) return JSON.parse(stored) as Comment[];
    } catch {
      // localStorage nicht verfügbar oder ungültige Daten
    }
    return [];
  }

  private persist(list: Article[]): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch {
      // localStorage voll oder nicht verfügbar
    }
  }

  private persistComments(list: Comment[]): void {
    try {
      localStorage.setItem(COMMENTS_KEY, JSON.stringify(list));
    } catch {
      // localStorage voll oder nicht verfügbar
    }
  }

  getBySlug(slug: string): Article | undefined {
    return this._articles().find(a => a.slug === slug);
  }

  getComments(slug: string): Comment[] {
    return this._comments().filter(c => c.articleSlug === slug);
  }

  addComment(slug: string, author: string, text: string): void {
    const newComment: Comment = {
      id: crypto.randomUUID(),
      articleSlug: slug,
      author,
      text,
      date: new Date().toISOString().split('T')[0],
    };
    const updated = [...this._comments(), newComment];
    this._comments.set(updated);
    this.persistComments(updated);
  }

  deleteArticle(id: string): void {
    const updated = this._articles().filter(a => a.id !== id);
    this._articles.set(updated);
    this.persist(updated);
  }

  addArticle(article: Omit<Article, 'id'>): void {
    const slug = this.ensureUniqueSlug(article.slug);
    const newArticle: Article = {
      ...article,
      slug,
      id: crypto.randomUUID(),
    };
    const updated = [newArticle, ...this._articles()];
    this._articles.set(updated);
    this.persist(updated);
  }

  private ensureUniqueSlug(slug: string): string {
    const existing = this._articles().map(a => a.slug);
    if (!existing.includes(slug)) return slug;
    let counter = 2;
    while (existing.includes(`${slug}-${counter}`)) counter++;
    return `${slug}-${counter}`;
  }
}
