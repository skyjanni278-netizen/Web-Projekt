import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsService } from '../../services/news.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-news-one-page',
  imports: [RouterLink, NgIf, NgFor, FormsModule],
  templateUrl: './news-one-page.html',
  styleUrl: './news-one-page.css',
})
export class NewsOnePage implements OnInit {
  private route = inject(ActivatedRoute);
  private newsService = inject(NewsService);

  article = signal<Article | null>(null);
  currentSlug = signal('');

  comments = computed(() => this.newsService.getComments(this.currentSlug()));

  commentAuthor = '';
  commentText = '';
  commentError = signal<string | null>(null);
  commentSubmitted = signal(false);

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.currentSlug.set(slug);
    if (slug) {
      this.article.set(this.newsService.getBySlug(slug) ?? null);
    }
  }

  formatDate(iso: string): string {
    const [y, m, d] = iso.split('-');
    const date = new Date(Number(y), Number(m) - 1, Number(d));
    return date.toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  submitComment(): void {
    if (!this.commentAuthor.trim() || !this.commentText.trim()) {
      this.commentError.set('Bitte Name und Kommentar ausfüllen.');
      return;
    }
    this.newsService.addComment(
      this.currentSlug(),
      this.commentAuthor.trim(),
      this.commentText.trim()
    );
    this.commentAuthor = '';
    this.commentText = '';
    this.commentError.set(null);
    this.commentSubmitted.set(true);
    setTimeout(() => this.commentSubmitted.set(false), 3000);
  }
}
