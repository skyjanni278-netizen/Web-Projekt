import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { NewsService, REDAKTEUR_PIN } from '../../services/news.service';
import { ALL_TAGS } from '../../models/article';

@Component({
  selector: 'app-news-upload-page',
  imports: [ReactiveFormsModule, FormsModule, RouterLink, NgFor, NgIf, NgClass],
  templateUrl: './news-upload-page.html',
  styleUrl: './news-upload-page.css',
})
export class NewsUploadPage {
  private fb = inject(FormBuilder);
  private newsService = inject(NewsService);
  private router = inject(Router);

  readonly ALL_TAGS = ALL_TAGS;

  pinInput = '';
  pinEntered = signal(false);
  pinError = signal(false);
  submitted = signal(false);

  form: FormGroup = this.fb.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    date: ['', Validators.required],
    excerpt: ['', [Validators.required, Validators.maxLength(300)]],
    content: ['', Validators.required],
    image: [''],
  });

  selectedTags = signal<string[]>([]);

  checkPin(): void {
    if (this.pinInput === REDAKTEUR_PIN) {
      this.pinEntered.set(true);
      this.pinError.set(false);
    } else {
      this.pinError.set(true);
    }
  }

  toggleTag(tag: string): void {
    this.selectedTags.update(tags =>
      tags.includes(tag) ? tags.filter(t => t !== tag) : [...tags, tag]
    );
  }

  hasTag(tag: string): boolean {
    return this.selectedTags().includes(tag);
  }

  get titleInvalid(): boolean {
    const c = this.form.get('title');
    return !!(c?.invalid && c?.touched);
  }

  get authorInvalid(): boolean {
    const c = this.form.get('author');
    return !!(c?.invalid && c?.touched);
  }

  get dateInvalid(): boolean {
    const c = this.form.get('date');
    return !!(c?.invalid && c?.touched);
  }

  get excerptInvalid(): boolean {
    const c = this.form.get('excerpt');
    return !!(c?.invalid && c?.touched);
  }

  get contentInvalid(): boolean {
    const c = this.form.get('content');
    return !!(c?.invalid && c?.touched);
  }

  submit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    const val = this.form.value;
    this.newsService.addArticle({
      title: val.title.trim(),
      author: val.author.trim(),
      date: val.date,
      excerpt: val.excerpt.trim(),
      content: val.content
        .trim()
        .split('\n\n')
        .filter((p: string) => p.trim())
        .map((p: string) => `<p>${p.trim().replace(/\n/g, '<br>')}</p>`)
        .join('\n'),
      image: val.image?.trim() || '/Bilder/SvEnteHeidenheimLogo.png',
      imageAlt: val.title.trim(),
      tags: this.selectedTags(),
      slug: this.newsService.toSlug(val.title),
    });

    this.submitted.set(true);
    setTimeout(() => this.router.navigate(['/news']), 2000);
  }

}
