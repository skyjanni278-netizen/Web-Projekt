import { Injectable, signal } from '@angular/core';
import { Article, DEFAULT_ARTICLES } from '../models/article';

// Version hochzählen wenn DEFAULT_ARTICLES erweitert wird → erzwingt Neu-Laden
const STORAGE_VERSION = 2;
const STORAGE_KEY = `sv-ente-articles-v${STORAGE_VERSION}`;

// PIN für den Nachrichtenbeauftragten (kann hier geändert werden)
export const REDAKTEUR_PIN = '1234';

@Injectable({ providedIn: 'root' })
export class NewsService {
  private _articles = signal<Article[]>(this.loadFromStorage());

  readonly articles = this._articles.asReadonly();

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

  private persist(list: Article[]): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch {
      // localStorage voll oder nicht verfügbar
    }
  }

  getBySlug(slug: string): Article | undefined {
    return this._articles().find(a => a.slug === slug);
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
