import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { NewsService } from '../../services/news.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-news-one-page',
  imports: [RouterLink, NgIf, NgFor],
  templateUrl: './news-one-page.html',
  styleUrl: './news-one-page.css',
})
export class NewsOnePage implements OnInit {
  private route = inject(ActivatedRoute);
  private newsService = inject(NewsService);

  article = signal<Article | null>(null);

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.article.set(this.newsService.getBySlug(slug) ?? null);
    }
  }

  formatDate(iso: string): string {
    const [y, m, d] = iso.split('-');
    const date = new Date(Number(y), Number(m) - 1, Number(d));
    return date.toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' });
  }
}
