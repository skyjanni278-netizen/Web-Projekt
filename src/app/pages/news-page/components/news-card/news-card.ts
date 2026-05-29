import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { Article } from '../../../../models/article';

@Component({
  selector: 'app-news-card',
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './news-card.html',
  styleUrl: './news-card.css'
})
export class NewsCard {
  @Input({ required: true }) article!: Article;
  @Input() showDeleteButton = false;
  @Output() deleteClicked = new EventEmitter<string>();

  protected formatDate(iso: string): string {
    const [y, m, d] = iso.split('-');
    return `${d}.${m}.${y}`;
  }

  protected onDelete(): void {
    this.deleteClicked.emit(this.article.id);
  }
}
