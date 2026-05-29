import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsService, REDAKTEUR_PIN } from '../../services/news.service';
import { ALL_TAGS } from '../../models/article';

@Component({
  selector: 'app-news-page',
  imports: [RouterLink, NgFor, NgIf, NgClass, FormsModule],
  templateUrl: './news-page.html',
  styleUrl: './news-page.css',
})
export class NewsPage {
  private newsService = inject(NewsService);

  readonly ALL_TAGS = ALL_TAGS;

  // Sortierung & Filter
  activeTag = signal<string | null>(null);
  sortField = signal<'date' | 'title'>('date');
  sortDir = signal<'asc' | 'desc'>('desc');

  // Redakteur-Modus (Löschen)
  redakteurModus = signal(false);
  showPinModal = signal(false);
  pinModalInput = '';
  pinModalError = signal(false);

  articles = computed(() => {
    let list = this.newsService.articles();
    const tag = this.activeTag();
    if (tag) list = list.filter(a => a.tags.includes(tag));
    const field = this.sortField();
    const dir = this.sortDir();
    return [...list].sort((a, b) => {
      const valA = field === 'date' ? a.date : a.title.toLowerCase();
      const valB = field === 'date' ? b.date : b.title.toLowerCase();
      if (valA < valB) return dir === 'asc' ? -1 : 1;
      if (valA > valB) return dir === 'asc' ? 1 : -1;
      return 0;
    });
  });

  setTag(tag: string) {
    this.activeTag.update(current => (current === tag ? null : tag));
  }

  clearTag() {
    this.activeTag.set(null);
  }

  sortBy(field: 'date' | 'title') {
    if (this.sortField() === field) {
      this.sortDir.update(d => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      this.sortField.set(field);
      this.sortDir.set(field === 'date' ? 'desc' : 'asc');
    }
  }

  sortIcon(field: 'date' | 'title'): string {
    if (this.sortField() !== field) return '';
    return this.sortDir() === 'asc' ? ' ↑' : ' ↓';
  }

  formatDate(iso: string): string {
    const [y, m, d] = iso.split('-');
    return `${d}.${m}.${y}`;
  }

  // Redakteur-Modus
  openPinModal() {
    this.pinModalInput = '';
    this.pinModalError.set(false);
    this.showPinModal.set(true);
  }

  closePinModal() {
    this.showPinModal.set(false);
    this.pinModalInput = '';
  }

  checkRedakteurPin() {
    if (this.pinModalInput === REDAKTEUR_PIN) {
      this.redakteurModus.set(true);
      this.closePinModal();
    } else {
      this.pinModalError.set(true);
    }
  }

  deactivateRedakteurModus() {
    this.redakteurModus.set(false);
  }

  deleteArticle(event: Event, id: string) {
    event.preventDefault();
    event.stopPropagation();
    const confirmed = window.confirm('Artikel wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.');
    if (!confirmed) return;

    this.newsService.deleteArticle(id);
  }
}
