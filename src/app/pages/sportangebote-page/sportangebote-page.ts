import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SPORT_OFFERS } from '../../data/sports.data';

@Component({
  selector: 'app-sportangebote-page',
  imports: [RouterLink],
  templateUrl: './sportangebote-page.html',
  styleUrl: './sportangebote-page.css',
})
export class SportangebotePage {
  readonly sports = SPORT_OFFERS;
  readonly isLoading = signal(true);

  constructor() {
    queueMicrotask(() => this.isLoading.set(false));
  }
}
