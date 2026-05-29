import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SportsService } from '../../services/sports.service';

@Component({
  selector: 'app-sportangebote-page',
  imports: [RouterLink],
  templateUrl: './sportangebote-page.html',
  styleUrl: './sportangebote-page.css',
})
export class SportangebotePage {
  private readonly sportsService = inject(SportsService);

  readonly sports = this.sportsService.getAll();
  readonly isLoading = signal(true);

  constructor() {
    queueMicrotask(() => this.isLoading.set(false));
  }
}
